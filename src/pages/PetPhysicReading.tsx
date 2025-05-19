
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageTitle from "@/components/StarMemorial/PageTitle";

const PetPhysicReading = () => {
  const [petName, setPetName] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmitQuestion = () => {
    // This would connect to an AI service in a real implementation
    const responses = [
      `${petName} wants you to know they're always by your side, even when you can't see them. They feel your love every day.`,
      `${petName} is at peace now and wants you to know that they're running free without any pain. They miss you but are happy.`,
      `${petName} says thank you for all the love and care you provided. They're watching over you from across the rainbow bridge.`,
      `${petName} wants you to know that they understand your grief, but they're in a beautiful place now and will wait for you.`
    ];
    
    setResponse(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4 pt-24 mt-8">
        <div className="container mx-auto max-w-4xl">
          <PageTitle 
            title="Pet Spirit Connection Chat"
            description="Receive comforting messages and insights from your pet on the other side"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Connect With Your Pet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
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
                    onClick={handleSubmitQuestion} 
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
                  <CardTitle className="font-playfair text-2xl">Message from the Other Side</CardTitle>
                </CardHeader>
                <CardContent>
                  {response ? (
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="font-playfair italic text-gray-800">{response}</p>
                    </div>
                  ) : (
                    <div className="h-40 flex items-center justify-center text-center">
                      <p className="text-gray-500">Ask a question to receive a message from your pet</p>
                    </div>
                  )}
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
