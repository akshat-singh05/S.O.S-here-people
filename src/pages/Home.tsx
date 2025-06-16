
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Bot, Shield, Users, Zap } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-400">SOS AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your intelligent AI assistant, available 24/7 to help you with any challenge. 
            Get instant support, guidance, and solutions whenever you need them most.
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
          <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <CardTitle className="text-white">Secure & Private</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your conversations are encrypted and private. We prioritize your security above all else.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <Bot className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <CardTitle className="text-white">Always Available</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get AI assistance 24/7. No waiting, no appointments - just instant help when you need it.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white">Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get instant responses and solutions. Our AI processes your requests in seconds.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Ask Your Question</h3>
              <p className="text-gray-300">
                Type your question or describe the problem you're facing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Get AI Response</h3>
              <p className="text-gray-300">
                Receive intelligent, helpful responses tailored to your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Solve Problems</h3>
              <p className="text-gray-300">
                Apply the solutions and continue the conversation as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
