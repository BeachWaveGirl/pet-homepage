
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const MemoryStories = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [memories, setMemories] = useState("");
  const [generatedStory, setGeneratedStory] = useState("");
  
  const handleGenerateStory = () => {
    // In a real implementation, this would call an AI service
    const sampleStory = `
My name is ${petName || "your pet"}, and I was the luckiest ${petType || "pet"} in the world to have you as my human.

Remember those sunny afternoons we spent in the backyard? I would chase butterflies while you watched and laughed. Those were some of my favorite moments. The way you always knew exactly where to scratch behind my ears made me feel so loved and understood.

Every time I greeted you at the door, my whole body would wiggle with happiness because you were my entire world. The treats you gave me were delicious, but the love you showed me was even better.

I want you to know that even though I'm not physically by your side anymore, my spirit is always with you. When you feel a gentle breeze or see a butterfly land nearby, that's just me, stopping by to say hello.

Thank you for giving me the best life a ${petType || "pet"} could ever have. Your love made my life complete.

With eternal gratitude and love,
${petName || "Your faithful friend"}
    `;
    
    setGeneratedStory(sampleStory);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Memory Stories
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create a heartwarming story from your pet's perspective, capturing their love and the special bond you shared
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Your Pet's Story</CardTitle>
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
                
                <div>
                  <label className="block text-sm font-medium mb-1">Share Some Memories</label>
                  <Textarea
                    placeholder="What were your pet's favorite activities? Any special moments you shared?"
                    className="min-h-[100px]"
                    value={memories}
                    onChange={(e) => setMemories(e.target.value)}
                  />
                </div>
                
                <div className="pt-3">
                  <Button
                    onClick={handleGenerateStory}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                  >
                    Generate Story
                  </Button>
                </div>
                
                {generatedStory && (
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg border">
                    <h3 className="font-medium mb-2 text-lg">Your Pet's Story</h3>
                    <div className="font-playfair text-gray-800 whitespace-pre-line">
                      {generatedStory}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline">
                        Download Story
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MemoryStories;
