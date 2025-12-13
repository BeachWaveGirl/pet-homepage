
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/StarMemorial/PageTitle";
import ConnectionForm from "@/components/pet-physic/ConnectionForm";
import ChatBox from "@/components/pet-physic/ChatBox";
import InformationSection from "@/components/pet-physic/InformationSection";
import usePetResponseGenerator from "@/hooks/usePetResponseGenerator";

const PetPhysicReading = () => {
  const [petName, setPetName] = useState("");
  const [question, setQuestion] = useState("");
  const [petPhoto, setPetPhoto] = useState("");
  
  const {
    chatHistory,
    currentQuestion,
    setCurrentQuestion,
    handleSubmitQuestion
  } = usePetResponseGenerator();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitQuestion();
    }
  };

  const handleConnect = () => {
    setCurrentQuestion(question);
    handleSubmitQuestion();
  };

  return (
    <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      <main className="flex-1 pt-20 px-4">
        {/* Hero Image Section */}
        <div className="w-full flex justify-center mb-8">
          <img 
            src="/assets/banners/Chat_LP.png" 
            alt="Pet Spirit Connection" 
            className="w-full max-w-3xl h-auto object-contain"
          />
        </div>
        
        <div className="container mx-auto max-w-4xl">
          <PageTitle 
            title="Pet Spirit Connection Chat"
            description="A gentle AI chat experience to feel spiritually connected to your pet. Receive comforting messages that can help during the grieving process."
            lightMode={true}
          />
          
          <div className="text-center mb-8">
            <p className="text-gray-700 max-w-2xl mx-auto">
              This is a safe space to remember and feel connected to your pet. Share your thoughts and receive comfort in return.
            </p>
            <p className="text-sm text-gray-500 mt-2 italic">
              Note: This is an entertainment experience powered by AI. It is not a replacement for professional support or therapy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:h-full">
              <ConnectionForm
                petName={petName}
                setPetName={setPetName}
                question={question}
                setQuestion={setQuestion}
                petPhoto={petPhoto}
                setPetPhoto={setPetPhoto}
                onConnect={handleConnect}
              />
            </div>
            
            <div className="md:h-full">
              <ChatBox
                petName={petName}
                petPhoto={petPhoto}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                chatHistory={chatHistory}
                onSendMessage={handleSubmitQuestion}
                handleKeyDown={handleKeyDown}
              />
            </div>
          </div>
          
          <InformationSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetPhysicReading;
