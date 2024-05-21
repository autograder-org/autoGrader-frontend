// src/handlers/messageHandler.ts

import { ChatMessage } from '../types/ChatMessage';


export const handleSubmit = async (input: string, messages: ChatMessage[], setLoading: (loading: boolean) => void, setMessages: (messages: ChatMessage[] | ((prevMessages: ChatMessage[]) => ChatMessage[])) => void, openai: any) => {
  if (!input || !input.trim()) return; // Don't send empty messages

  setLoading(true);

  const userMessage: ChatMessage = { role: 'user', content: input };
  const newMessages = [...messages, userMessage];
  setMessages(newMessages);

  try {
    const assistantMessage = await sendMessage(newMessages, openai);
    setMessages((prevMessages: ChatMessage[]) => [...prevMessages, assistantMessage]);
  } catch (error) {
    console.error('OpenAI API Error:', error);
    // Handle error appropriately
  } finally {
    setLoading(false);
  }
};

const sendMessage = async (messages: ChatMessage[], openai: any): Promise<ChatMessage> => {
  if (!openai) {
    throw new Error("OpenAI has not been initialized with an API key.");
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: messages,
  });

  return {
    role: 'assistant',
    content: response.choices[0].message?.content || '',
  };
};
