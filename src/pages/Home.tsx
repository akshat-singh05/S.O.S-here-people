
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Shield, Users, Heart } from 'lucide-react';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate('/chat');
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">MindfulChat</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A safe, confidential space where you can share your thoughts and receive supportive guidance 
            from our AI therapy assistant. Available 24/7 whenever you need someone to listen.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            {user ? 'Continue Chatting' : 'Get Started'}
          </Button>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Completely Private</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your conversations are secure and confidential. We prioritize your privacy above all else.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Always Available</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get support whenever you need it, 24/7. No appointments necessary - just start chatting.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Compassionate Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Receive empathetic, non-judgmental support tailored to your unique situation and needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Thoughts</h3>
              <p className="text-gray-600">
                Start by telling us how you're feeling and what's on your mind.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Support</h3>
              <p className="text-gray-600">
                Receive thoughtful responses and coping strategies from our AI assistant.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feel Better</h3>
              <p className="text-gray-600">
                Work through your emotions with ongoing support and guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 text-sm">
            <strong>Important:</strong> This AI assistant provides supportive conversation and general guidance. 
            For serious mental health concerns or crisis situations, please consult with a licensed mental health professional 
            or contact emergency services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
