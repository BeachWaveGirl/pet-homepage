
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageTitle from "@/components/StarMemorial/PageTitle";
import PetPhotoUpload from "@/components/pet-letter-form/PetPhotoUpload";
import { SendHorizontal } from "lucide-react";

const PetPhysicReading = () => {
  const [petName, setPetName] = useState("");
  const [question, setQuestion] = useState("");
  const [petPhoto, setPetPhoto] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'pet', content: string}>>([]);

  const handleSubmitQuestion = () => {
    if (!currentQuestion.trim()) return;
    
    // Add user's question to chat history
    setChatHistory(prev => [...prev, {type: 'user', content: currentQuestion}]);
    
    // Generate response from pet
    setTimeout(() => {
      // This would connect to an AI service in a real implementation
      const responses = [
        `${petName} wants you to know they're always by your side, even when you can't see them. They feel your love every day.`,
        `${petName} is at peace now and wants you to know that they're running free without any pain. They miss you but are happy.`,
        `${petName} says thank you for all the love and care you provided. They're watching over you from across the rainbow bridge.`,
        `${petName} wants you to know that they understand your grief, but they're in a beautiful place now and will wait for you.`
      ];
      
      const petResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatHistory(prev => [...prev, {type: 'pet', content: petResponse}]);
    }, 1000);
    
    setCurrentQuestion("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitQuestion();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
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
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Connect With Your Pet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <PetPhotoUpload
                      photoUrl={petPhoto}
                      onPhotoChange={(url) => setPetPhoto(url)}
                    />
                  </div>
                
                  <div>
                    <Label htmlFor="petName">Your Pet's Name</Label>
                    <Input
                      id="petName"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="question">Ask Your Question</Label>
                    <Textarea
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="What would you like to ask or know from your pet?"
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    onClick={() => {
                      setCurrentQuestion(question);
                      handleSubmitQuestion();
                    }} 
                    className="w-full bg-black text-white hover:bg-gray-800"
                    disabled={!petName.trim() || !question.trim()}
                  >
                    Connect with {petName || "your pet"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col">
              <Card className="bg-white border-gray-200 shadow-md flex-grow">
                <CardHeader>
                  <div className="flex items-center">
                    {petPhoto && (
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                        <img
                          src={petPhoto}
                          alt={petName || "Your pet"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardTitle className="font-playfair text-2xl">
                      {petName ? `Chat with ${petName}` : "Chat with Your Pet"}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col h-[300px]">
                    <div className="flex-grow overflow-y-auto mb-4 p-2">
                      {chatHistory.length > 0 ? (
                        <div className="space-y-4">
                          {chatHistory.map((message, index) => (
                            <div 
                              key={index} 
                              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`max-w-[80%] p-3 rounded-lg ${
                                  message.type === 'user' 
                                    ? 'bg-gray-100 text-gray-800' 
                                    : 'bg-gray-800 text-white'
                                }`}
                              >
                                {message.type === 'pet' && petPhoto && (
                                  <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                                      <img 
                                        src={petPhoto} 
                                        alt={petName} 
                                        className="w-full h-full object-cover" 
                                      />
                                    </div>
                                    <span className="font-medium">{petName}</span>
                                  </div>
                                )}
                                <p>{message.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-center">
                          <p className="text-gray-500">Ask a question to start chatting with your pet</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center">
                        <Input
                          value={currentQuestion}
                          onChange={(e) => setCurrentQuestion(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Type your message..."
                          className="flex-grow mr-2"
                          disabled={!petName.trim()}
                        />
                        <Button 
                          onClick={handleSubmitQuestion}
                          disabled={!currentQuestion.trim() || !petName.trim()}
                          className="bg-gray-800"
                        >
                          <SendHorizontal className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Our connection service offers comfort by helping you feel closer to your pet who has crossed over, providing peace and closure during your grieving process.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="font-playfair text-2xl mb-4">How Spirit Connection Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-4">
                <h4 className="font-medium mb-2">Ask Your Question</h4>
                <p className="text-sm text-gray-600">Share your thoughts and what you'd like to know from your beloved pet.</p>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-2">We Create the Connection</h4>
                <p className="text-sm text-gray-600">Our system establishes a spiritual connection with your pet across the rainbow bridge.</p>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-2">Receive Their Message</h4>
                <p className="text-sm text-gray-600">Get a comforting message from your pet to help with healing and closure.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetPhysicReading;
