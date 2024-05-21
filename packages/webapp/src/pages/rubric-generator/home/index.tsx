"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/globals.css';
import '../../../styles/home.css';
import '../components/ChatMessage';
import '../components/ChatInput';
import '../types/ChatMessage';
import '../services/openaiService'
import { ChatMessage } from "../types/ChatMessage";
import { handleSubmit } from "../components/MessageHandler";

export const runtime = 'experimental-edge';

const flipped_interaction_prompt = "You are an expert in rubric generation for any given type of assignment. Once a user " +
    "submits an assignment, use the flipped interaction pattern to ask the user questions " +
    "about their grading preferences, which areas of the assignment that they want greater " +
    "emphasis on. The conversation should be engaging to the user. The questions can be " +
    "regarding: Their style of grading , how strict do they want to be and other questions " +
    "to arrive at a well defined and clear grading schema without any ambiguity. Further ask " +
    "questions regarding the user to understand more about their personal as well. Finally " +
    "based on the gathered preferences, use the persona pattern to take the persona of the " +
    "user and generate a rubric that matches their style. Start by greeting the user and ask " +
    "one question at a time. Ask the first question about what is the type of assignment " +
    "they want help with.";

const assistant_greeting = "Hello! I'm here to help you create a customized rubric for your assignment. " +
    "To start off, could you please tell me what type of assignment you need the rubric for? " +
    "For example, is it an essay, a presentation, a project, or something else?"

export default function Home() {

  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiKey = async () => {
      const response = await fetch('/api/openai');
      const data = await response.json();
      setApiKey(data.apiKey);
    };

    fetchApiKey();
  }, []);

  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'system', content: flipped_interaction_prompt },
    { role: 'function', content: assistant_greeting, name: "greeting"},
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // To show loading indicator

  const openai = apiKey ? new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  }) : null;

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(input, messages, setLoading, setMessages, openai);
    setInput('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <div className="header"><h2 className="mb-3 text-2xl font-semibold">Rubric Generator Chatbot! </h2></div>
        <div>
          {messages.map((msg, index) => {
            if (msg.role === 'function') {
              const functionMessage = msg as ChatMessage; // Type assertion for function messages
              return (
                  <div key={index} className={msg.role}>
                    <div><FontAwesomeIcon icon={faRobot} className="message-icon" /></div>
                    <span className="message-content">{functionMessage.content}</span>
                  </div>
              );
            } else if (msg.role === 'user') {
              return (
                  <div key={index} className={msg.role}>
                    <div> <FontAwesomeIcon icon={faUser} className="message-icon" /> </div>
                    <span className="message-content">{msg.content}</span>
                  </div>
              );
            } else if (msg.role === 'assistant') {
              return (
                  <div key={index} className={msg.role}>
                    <div> <FontAwesomeIcon icon={faRobot} className="message-icon" /> </div>
                      <span className="message-content">{msg.content}</span>
                    <div>  </div>
                  </div>
              );
            }
          })}
          {loading && <div>Loading...</div>}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
         <textarea
             value={input}
             onChange={(e) => setInput(e.target.value)}
             disabled={loading}
             placeholder="Type your message..."
             style={{ width: '80%', minHeight: '40px', resize: 'vertical' }} // Style adjustments
         />
          <button type="submit" disabled={loading} style={{ whiteSpace: 'nowrap' }}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </main>
  );
}