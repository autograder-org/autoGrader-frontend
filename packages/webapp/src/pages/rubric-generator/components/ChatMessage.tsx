import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';
import { ChatMessage } from '../types/ChatMessage';

interface ChatMessageProps {
  message: ChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const icon = message.role === 'user' ? faUser : faRobot;
  return (
      <div className={message.role}>
        <div><FontAwesomeIcon icon={icon} className="message-icon" /></div>
        <span className="message-content">{message.content}</span>
      </div>
  );
};

export default ChatMessage;
