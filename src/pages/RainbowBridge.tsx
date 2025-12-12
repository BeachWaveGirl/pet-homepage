
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageTitle from "@/components/StarMemorial/PageTitle";

const RainbowBridge = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [generatedPoem, setGeneratedPoem] = useState("");
  const { toast } = useToast();
  
  const handleGeneratePoem = () => {
    // In a real implementation, this would call an AI service
    const samplePoems = [
      `In loving memory of ${petName || "your beloved pet"},\nA ${petType || "companion"} so true and so dear.\nNow crossing the Rainbow Bridge to paradise,\nWhere pain and suffering disappear.`,
      
      `The Rainbow Bridge awaits ${petName || "your sweet companion"},\nWhere meadows are green and skies always blue.\nRunning free without pain, just joy and laughter,\nPatiently waiting to reunite with you.`,
      
      `Whiskers, paws, and a heart of gold,\n${petName || "Your pet"} is now free among the stars.\nThe Rainbow Bridge has welcomed them home,\nWhere their spirit forever shines from afar.`,
      
      `Across the Rainbow Bridge they trot,\n${petName || "Your beloved pet"}, now free from all pain.\nPlaying in meadows of endless treats,\nUntil the day you meet again.`
    ];
    
    setGeneratedPoem(samplePoems[Math.floor(Math.random() * samplePoems.length)]);
    
    toast({
      title: "Rainbow Bridge Poem Generated",
      description: `A special poem has been created for ${petName || "your pet"}.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <PageTitle
            title="Rainbow Bridge Poem Print"
            description="Create a beautiful, personalized Rainbow Bridge poem that honors your pet's memory with comforting words and gentle imagery."
            lightMode={true}
          />
          
          <div className="relative w-full mb-10 rounded-xl overflow-hidden">
            <img 
              src="/assets/banners/Poem_LP2-2.png"
              alt="Rainbow Bridge" 
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-800 text-lg md:text-xl text-center max-w-2xl px-6 py-4 bg-white/80 backdrop-blur-sm rounded-lg font-playfair">
                Honor your beloved pet with a beautiful Rainbow Bridge poem, celebrating their journey across the bridge where they wait until you meet again.
              </p>
            </div>
          </div>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Your Rainbow Bridge Poem</CardTitle>
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
                    Generate Rainbow Bridge Poem
                  </Button>
                </div>
                
                {generatedPoem && (
                  <div className="mt-6 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <h3 className="font-medium mb-2 text-lg">Your Rainbow Bridge Poem</h3>
                    <div className="font-playfair italic text-gray-800 whitespace-pre-line">
                      {generatedPoem}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white">
                        Download Poem
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair mb-3">About The Rainbow Bridge</h3>
            <p className="text-gray-600 mb-4">
              The Rainbow Bridge is a beautiful metaphor for the place where our beloved pets go when they pass away. It's a meadow filled with sunshine, where they can run and play with other animals in comfort and happiness until the day we join them.
            </p>
            <p className="text-sm text-gray-500">
              These poems are created to provide comfort and honor the special bond between you and your pet, celebrating the love that continues even after they've crossed the Rainbow Bridge.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RainbowBridge;
