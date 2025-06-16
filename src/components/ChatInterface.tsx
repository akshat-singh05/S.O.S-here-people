
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserInfo, Message } from '@/types/therapy';
import MessageBubble from '@/components/MessageBubble';
import { generateTherapistResponse } from '@/utils/therapistResponses';

interface ChatInterfaceProps {
  userInfo: UserInfo;
  onReset: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ userInfo, onReset }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Send initial therapist greeting
    const initialMessage = generateTherapistResponse('', userInfo, []);
    setMessages([initialMessage]);
  }, [userInfo]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const therapistResponse = generateTherapistResponse(currentMessage, userInfo, messages);
      setMessages(prev => [...prev, therapistResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Card className="flex-1 m-4 flex flex-col max-h-[calc(100vh-2rem)]">
        <CardHeader className="flex-shrink-0 bg-blue-600 text-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Therapy Session with Dr. AI</CardTitle>
              <p className="text-blue-100">Hello {userInfo.name}, I'm here to listen and support you</p>
            </div>
            <Button 
              variant="outline" 
              onClick={onReset}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              New Session
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            
            {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="bg-gray-200 rounded-full p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
                <span className="text-sm">Dr. AI is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex-shrink-0 p-4 border-t bg-white">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Share your thoughts..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                disabled={isTyping || !currentMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Send
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;
