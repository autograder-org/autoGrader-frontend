import { ChatMessage } from './ChatMessage';
import {useEffect, useState} from "react";
import OpenAI from "openai";

export default function useChat(prompt: string, assistant_greeting: string) {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // To show loading indicator

  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'system', content: prompt },
    { role: 'function', content: assistant_greeting, name: "greeting"},
  ]);


  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch('/api/openai');
        if (response.ok) {
          const data = await response.json();
          console.error("api key: " + data.apiKey)
          setApiKey(data.apiKey);
        } else {
          console.error('Failed to fetch API key');
        }
      } catch (error) {
        console.error('An error occurred while fetching the API key');
      }
    };

    fetchApiKey();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input || !input.trim()) {
      console.error("Input value before trim:", input);
      console.error("Input value after trim:", input.trim());
      return;
    } // Don't send empty messages

    const openai = apiKey ?  new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true
    }): null;

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
      setInput('');
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
  return { input, loading, messages, handleSubmit, setInput };
}