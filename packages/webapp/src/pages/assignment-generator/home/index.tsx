"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/globals.css';
import '../../../styles/home.css';
import '@/components/chatbot/ChatMessage';
import '@/components/chatbot/ChatInput';
import useChat from "../../../lib/chatbot/MessageHandler";

export const runtime = 'experimental-edge';

const prompt = "You are an expert in assignment generation for any given course topic. Once a user " +
    "submits a course topic, use the flipped interaction pattern to ask the user questions " +
    "about their assignment preferences, which sub-topic of the given topic that they want greater " +
    "emphasis on. The conversation should be engaging to the user. The questions can be " +
    "regarding: How many questions they want to include in the assignment , what type of questions the user " +
    "want to include in the assignment (MCQs, brief, essay writing etc.), what is the difficulty of the assignment that they are looking for " +
    "to arrive at a well defined assignment. Further ask " +
    "questions regarding the user to understand more about their personal as well. Finally " +
    "based on the gathered preferences, use the persona pattern to take the persona of the " +
    "user and generate a assignment that matches their style. Start by greeting the user and ask " +
    "one question at a time. Ask the first question about what is the topic for assignment generation that " +
    "they want help with.";

const assistant_greeting = "Hello! I'm your assignment expert, ready to help you create the perfect challenge " +
    "for your students. To start, what course topic would you like to focus on for this assignment?"


export default function Home() {
  const { input, loading, messages, handleSubmit, setInput } = useChat(prompt, assistant_greeting);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
  };

  return (
      <main className="flex min-h-screen">
        <div className="sidebar">
          <button className="new-chat-button">+ New Chat</button>
          <div className="search-bar">
            <input type="text" placeholder="Search assignment..." />
          </div>
          <div className="chat-list">
            <p>No saved assignments.</p>
          </div>
        </div>
        <div className="chat-window">
          <div className="chat-header">
            <h2 className="text-2xl font-semibold">Assignment Generator Chatbot</h2>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => {
              if (msg.role === 'function' || msg.role === 'assistant') {
                return (
                    <div key={index} className={`message ${msg.role}`}>
                      <FontAwesomeIcon icon={faRobot}  className="message-icon"/>
                      <span className="message-content">{msg.content}</span>
                    </div>
                )
              } else if (msg.role === 'user') {
                return (
                    <div key={index} className={`message ${msg.role}`}>
                      <FontAwesomeIcon icon={faUser}  className="message-icon"/>
                      <span className="message-content">{msg.content}</span>
                    </div>
                )
              }
            })}
            {loading && <div className="message loading">Loading...</div>}
          </div>
          <form onSubmit={handleFormSubmit} className="chat-input">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                placeholder="Type your message..."
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </main>
  );
}
