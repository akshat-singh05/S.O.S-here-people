
import React from 'react';
import { Message } from '@/types/therapy';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-lg p-3 ${
        isUser 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        {!isUser && (
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-blue-600">Dr. AI</span>
          </div>
        )}
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        <div className={`text-xs mt-1 ${
          isUser ? 'text-blue-100' : 'text-gray-500'
        }`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
