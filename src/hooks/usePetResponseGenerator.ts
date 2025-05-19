
import { useState } from "react";

interface Message {
  type: 'user' | 'pet';
  content: string;
}

const usePetResponseGenerator = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const addUserMessage = (content: string) => {
    if (!content.trim()) return;
    setChatHistory(prev => [...prev, {type: 'user', content}]);
  };

  const generatePetResponse = () => {
    // This would connect to an AI service in a real implementation
    const responses = [
      `I miss you so much too! I'm always by your side, even when you can't see me. I feel your love every day.`,
      `I'm at peace now and don't have any pain anymore. I miss you but I'm happy where I am. Your love still reaches me.`,
      `Thank you for all the love and care you gave me. I'm watching over you from across the rainbow bridge. I love you!`,
      `I understand how sad you are, but please know I'm in a beautiful place now. I'll wait for you here.`
    ];
    
    const petResponse = responses[Math.floor(Math.random() * responses.length)];
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, {type: 'pet', content: petResponse}]);
    }, 1000);
  };

  const handleSubmitQuestion = () => {
    if (!currentQuestion.trim()) return;
    
    // Add user's question to chat history
    addUserMessage(currentQuestion);
    
    // Generate response from pet
    generatePetResponse();
    
    setCurrentQuestion("");
  };

  return {
    chatHistory,
    currentQuestion,
    setCurrentQuestion,
    handleSubmitQuestion
  };
};

export default usePetResponseGenerator;
