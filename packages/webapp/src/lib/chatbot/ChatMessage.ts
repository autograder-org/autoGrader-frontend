export type ChatMessage = {
  role: 'system' | 'user' | 'assistant' | 'function';
  content: string;
  name?: string; // Only for function messages
};
