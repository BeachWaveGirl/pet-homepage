
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const PetPoems = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [generatedPoem, setGeneratedPoem] = useState("");
  
  const handleGeneratePoem = () => {
    // In a real implementation, this would call an AI service
    const samplePoems = [
      `In loving memory of ${petName || "your beloved pet"},\nA ${petType || "companion"} so true and so dear.\nForever in hearts, never forgotten,\nYour paw prints remain ever near.`,
      `Rainbow's edge now holds ${petName || "your sweet companion"},\nNo longer in pain, just peaceful and free.\nRemember the joy, the love, and the laughter,\nUntil once again together you'll be.`,
      `Whispers of ${petName || "your pet"} in gentle breezes,\nMemories treasured in each passing day.\nA ${petType || "friend"} so special can never be replaced,\nBut in your heart, forever they'll stay.`
    ];
    
    setGeneratedPoem(samplePoems[Math.floor(Math.random() * samplePoems.length)]);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Rainbow Bridge Poem Print
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create a beautiful, personalized poem to honor and remember your beloved pet companion
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Your Pet Poem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet's Name</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Type of Pet</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      placeholder="Dog, cat, rabbit, etc."
                    />
                  </div>
                </div>
                
                <div className="pt-3">
                  <Button
                    onClick={handleGeneratePoem}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                  >
                    Generate Poem
                  </Button>
                </div>
                
                {generatedPoem && (
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg border">
                    <h3 className="font-medium mb-2 text-lg">Your Memorial Poem</h3>
                    <div className="font-playfair italic text-gray-800 whitespace-pre-line">
                      {generatedPoem}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline">
                        Download Poem
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-2">
              Our AI generates unique poems inspired by your beloved pet
            </p>
            <p className="text-sm text-gray-500">
              Download and print your poem to keep or share with loved ones
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetPoems;
