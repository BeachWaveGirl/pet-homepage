
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GriefJournal = () => {
  const [activeTab, setActiveTab] = useState("affirmations");
  const [petName, setPetName] = useState("");
  
  const affirmations = [
    "Your love for {pet} lives on in your heart forever.",
    "It's okay to grieve. Your feelings are valid and important.",
    "Healing isn't linear. Some days will be easier than others.",
    "The bond you shared with {pet} was unique and irreplaceable.",
    "Your memories are a gift that can never be taken away.",
    "Self-care is essential during grief. Be gentle with yourself today.",
    "{pet}'s life, however long or short, was made beautiful by your love.",
    "Your grief reflects the depth of your love."
  ];
  
  const journalPrompts = [
    "What is your favorite memory with {pet}?",
    "Describe {pet}'s personality in three words and explain why you chose them.",
    "What did {pet} teach you about life or yourself?",
    "Write a letter to {pet} expressing what they meant to you.",
    "What small moments with {pet} do you miss the most?",
    "How has {pet} changed your life for the better?",
    "What brings you comfort when you're missing {pet}?",
    "What would you want others to know about your bond with {pet}?"
  ];
  
  const replacePetName = (text: string) => {
    return text.replace(/\{pet\}/g, petName || "your pet");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Loss Support
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Daily affirmations and journal prompts to help navigate the journey of pet loss
          </p>
          
          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">Your Pet's Name (optional)</label>
            <input 
              type="text"
              className="w-full p-2 border rounded-md max-w-md"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Enter your pet's name"
            />
            <p className="text-sm text-gray-500 mt-1">
              We'll personalize affirmations and prompts with your pet's name
            </p>
          </div>
          
          <Tabs defaultValue="affirmations" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="affirmations">Daily Affirmations</TabsTrigger>
              <TabsTrigger value="journal">Journal Prompts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="affirmations" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {affirmations.map((affirmation, index) => (
                <Card key={index} className="bg-white border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <p className="font-playfair text-lg italic">{replacePetName(affirmation)}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="journal" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {journalPrompts.map((prompt, index) => (
                <Card key={index} className="bg-white border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <p className="font-medium mb-2">Prompt {index + 1}</p>
                    <p className="font-playfair text-base">{replacePetName(prompt)}</p>
                    <Button variant="link" className="mt-2 p-0 h-auto text-sm" onClick={() => alert("Feature coming soon!")}>
                      Write a response
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need more support with your grief journey?
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Download Pet Loss Guide
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GriefJournal;
