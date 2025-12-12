
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
    <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      {/* Hero Section - Full width with image */}
      <section className="w-full pt-16 relative">
        <div className="w-full relative">
          <img 
            src="/assets/banners/Poem_LP2.png" 
            alt="Rainbow Bridge - Ornate rococo frame with beloved cat" 
            className="w-full h-auto object-contain"
          />
          
          {/* Text overlay centered within the image scene */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl" style={{ marginTop: '25%' }}>
              <h1 
                style={{
                  textShadow: '0 0 30px rgba(245, 241, 232, 0.9), 0 0 60px rgba(245, 241, 232, 0.7), 0 2px 4px rgba(0,0,0,0.1)'
                }} 
                className="font-playfair text-3xl md:text-4xl xl:text-6xl font-bold mb-4 text-foreground lg:text-3xl"
              >
                Rainbow Bridge
              </h1>
              <p 
                style={{
                  textShadow: '0 0 20px rgba(245, 241, 232, 0.95), 0 0 40px rgba(245, 241, 232, 0.8)'
                }} 
                className="text-base md:text-lg text-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed lg:text-lg"
              >
                Honor your beloved pet with a beautiful Rainbow Bridge poem,<br />celebrating their journey across the bridge where they wait until you meet again.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  className="px-8 py-5 text-base backdrop-blur-sm" 
                  style={{
                    boxShadow: '0 0 20px rgba(245, 241, 232, 0.6), 0 4px 15px rgba(0,0,0,0.1)'
                  }} 
                  onClick={() => document.getElementById('poem-creator')?.scrollIntoView({
                    behavior: 'smooth'
                  })}
                >
                  Create Your Poem
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Poem Creator Section */}
      <section id="poem-creator" className="w-full py-16 px-4 bg-aged-paper paper-texture paper-vignette relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Decorative header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mb-2"></div>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Create Your Pet Poem
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI generates unique poems inspired by your beloved pet
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-pastel-gold/50 to-transparent mx-auto mt-6"></div>
          </div>
          
          <Card className="bg-cream-light/80 border-pastel-gold/30 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-foreground">Personalize Your Poem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Pet's Name</label>
                    <input 
                      type="text"
                      className="w-full p-2 border border-pastel-gold/30 rounded-md bg-cream-light text-foreground"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Type of Pet</label>
                    <input 
                      type="text"
                      className="w-full p-2 border border-pastel-gold/30 rounded-md bg-cream-light text-foreground"
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      placeholder="Dog, cat, rabbit, etc."
                    />
                  </div>
                </div>
                
                <div className="pt-3">
                  <Button
                    onClick={handleGeneratePoem}
                    className="w-full py-5"
                  >
                    Generate Poem
                  </Button>
                </div>
                
                {generatedPoem && (
                  <div className="mt-6 p-5 bg-cream-light rounded-lg border border-pastel-gold/30">
                    <h3 className="font-medium mb-2 text-lg text-foreground">Your Memorial Poem</h3>
                    <div className="font-playfair italic text-foreground/90 whitespace-pre-line">
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
            <p className="text-muted-foreground mb-2">
              Download and print your poem to keep or share with loved ones
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PetPoems;
