
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import ChatInterface from '@/components/ChatInterface';
import { UserInfo } from '@/types/therapy';

const Index = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showChat, setShowChat] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const info: UserInfo = {
      name: formData.get('name') as string,
      feelings: formData.get('feelings') as string,
      concerns: formData.get('concerns') as string,
      supportType: formData.get('supportType') as string,
    };
    
    setUserInfo(info);
    setShowChat(true);
  };

  const resetSession = () => {
    setUserInfo(null);
    setShowChat(false);
  };

  if (showChat && userInfo) {
    return <ChatInterface userInfo={userInfo} onReset={resetSession} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-gray-800">
            🌸 Therapy Chat Assistant
          </CardTitle>
          <p className="text-gray-600">
            A safe space to share your thoughts and receive supportive guidance
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">What should I call you?</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your preferred name..."
                required
                className="transition-all focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="feelings">How have you been feeling lately?</Label>
              <Textarea
                id="feelings"
                name="feelings"
                placeholder="Share your current emotional state, any stress, anxiety, sadness, or other feelings you've been experiencing..."
                className="min-h-[100px] transition-all focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="concerns">What are your main concerns or challenges?</Label>
              <Textarea
                id="concerns"
                name="concerns"
                placeholder="Tell me about what's been weighing on your mind - work stress, relationships, personal struggles, or anything else you'd like to discuss..."
                className="min-h-[100px] transition-all focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supportType">What kind of support are you looking for?</Label>
              <Textarea
                id="supportType"
                name="supportType"
                placeholder="Do you need someone to listen, advice on coping strategies, help processing emotions, or something else?"
                className="min-h-[80px] transition-all focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Please note:</strong> This is an AI assistant designed to provide supportive conversation and general guidance. 
                For serious mental health concerns, please consult with a licensed mental health professional.
              </p>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
              Start Therapy Session
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
