
import { UserInfo, Message } from '@/types/therapy';

const supportivePhrases = [
  "I hear you, and what you're feeling is completely valid.",
  "Thank you for sharing that with me. It takes courage to open up.",
  "I can sense the weight of what you're carrying.",
  "Your feelings matter, and I'm here to listen without judgment.",
  "That sounds really challenging. How are you coping with all of this?",
];

const copingStrategies = [
  "When you're feeling overwhelmed, try the 5-4-3-2-1 grounding technique: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
  "Deep breathing can be really helpful. Try breathing in for 4 counts, holding for 4, and exhaling for 6.",
  "Consider keeping a journal to track your thoughts and feelings. Sometimes writing things down can help us process them better.",
  "Remember that it's okay to take things one day at a time, or even one moment at a time.",
  "Self-care isn't selfish. Make sure you're taking care of your basic needs - sleep, nutrition, and gentle movement.",
];

const empathicResponses = [
  "It sounds like you've been carrying a lot. How long have you been feeling this way?",
  "I can imagine how difficult this must be for you. What has been the hardest part?",
  "Thank you for trusting me with this. What would feel most helpful right now?",
  "That must feel really isolating. Have you been able to talk to anyone else about this?",
  "It's understandable that you'd feel that way given what you've been through.",
];

export const generateTherapistResponse = (
  userMessage: string, 
  userInfo: UserInfo, 
  messageHistory: Message[]
): Message => {
  let response = '';

  // Initial greeting
  if (messageHistory.length === 0) {
    response = `Hello ${userInfo.name}, I'm Dr. AI. Thank you for taking this important step in reaching out. 

I've read what you shared about feeling ${userInfo.feelings.toLowerCase()} and your concerns about ${userInfo.concerns.toLowerCase()}. 

This is a safe space where you can express yourself freely. I'm here to listen, understand, and support you through whatever you're experiencing.

How are you feeling right now in this moment?`;
  } else {
    // Generate contextual response based on user input and history
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for emotional keywords and respond appropriately
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('worried')) {
      const phrase = supportivePhrases[Math.floor(Math.random() * supportivePhrases.length)];
      const strategy = copingStrategies[0]; // Grounding technique for anxiety
      response = `${phrase}\n\nAnxiety can feel overwhelming, but there are ways to manage it. ${strategy}\n\nWhat triggers your anxiety the most?`;
    } else if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      const phrase = empathicResponses[Math.floor(Math.random() * empathicResponses.length)];
      response = `${phrase}\n\nSadness is a natural human emotion, and it's important to acknowledge it rather than push it away. Sometimes sadness is our mind's way of processing difficult experiences.\n\nCan you tell me more about what's been contributing to these feelings?`;
    } else if (lowerMessage.includes('angry') || lowerMessage.includes('frustrated') || lowerMessage.includes('mad')) {
      response = `I can hear the frustration in your words, and that's completely understandable. Anger often masks other emotions like hurt, disappointment, or feeling unheard.\n\n${copingStrategies[1]}\n\nWhat do you think might be underneath the anger?`;
    } else if (lowerMessage.includes('lonely') || lowerMessage.includes('isolated') || lowerMessage.includes('alone')) {
      response = `Loneliness can be one of the most painful experiences. Even when we're surrounded by people, we can still feel deeply alone if we don't feel truly seen or understood.\n\nYou're not alone in this conversation with me. What does connection mean to you?`;
    } else if (lowerMessage.includes('help') || lowerMessage.includes('advice') || lowerMessage.includes('what should i do')) {
      response = `I appreciate you asking for guidance. Rather than telling you what to do, I'd like to help you discover what feels right for you.\n\nWhat options have you considered? Sometimes talking through the possibilities can help clarify our own wisdom.`;
    } else if (lowerMessage.includes('better') || lowerMessage.includes('good') || lowerMessage.includes('improving')) {
      response = `I'm so glad to hear you're experiencing some positive moments. That takes strength, especially when you've been struggling.\n\nWhat's been helping you feel better? It's important to recognize and nurture the things that support your wellbeing.`;
    } else {
      // General supportive response
      const phrase = supportivePhrases[Math.floor(Math.random() * supportivePhrases.length)];
      const empathic = empathicResponses[Math.floor(Math.random() * empathicResponses.length)];
      response = `${phrase}\n\n${empathic}`;
    }
  }

  return {
    id: Date.now().toString(),
    text: response,
    sender: 'therapist',
    timestamp: new Date(),
  };
};
