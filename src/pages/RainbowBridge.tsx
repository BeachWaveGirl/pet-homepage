
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageTitle from "@/components/StarMemorial/PageTitle";
import html2canvas from "html2canvas";

const RainbowBridge = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [generatedPoem, setGeneratedPoem] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);

  // Preview state - updated in real time
  const [previewData, setPreviewData] = useState({
    petName: "",
    petType: "",
    poem: ""
  });

  // Update preview in real-time
  useEffect(() => {
    setPreviewData({
      petName,
      petType,
      poem: generatedPoem
    });
  }, [petName, petType, generatedPoem]);
  
  const handleGeneratePoem = () => {
    setLoading(true);
    
    // In a real implementation, this would call an AI service
    const samplePoems = [
      `In loving memory of ${petName || "your beloved pet"},\nA ${petType || "companion"} so true and so dear.\nNow crossing the Rainbow Bridge to paradise,\nWhere pain and suffering disappear.`,
      
      `The Rainbow Bridge awaits ${petName || "your sweet companion"},\nWhere meadows are green and skies always blue.\nRunning free without pain, just joy and laughter,\nPatiently waiting to reunite with you.`,
      
      `Whiskers, paws, and a heart of gold,\n${petName || "Your pet"} is now free among the stars.\nThe Rainbow Bridge has welcomed them home,\nWhere their spirit forever shines from afar.`,
      
      `Across the Rainbow Bridge they trot,\n${petName || "Your beloved pet"}, now free from all pain.\nPlaying in meadows of endless treats,\nUntil the day you meet again.`
    ];
    
    setTimeout(() => {
      const poem = samplePoems[Math.floor(Math.random() * samplePoems.length)];
      setGeneratedPoem(poem);
      setLoading(false);
      
      toast({
        title: "Rainbow Bridge Poem Generated",
        description: `A special poem has been created for ${petName || "your pet"}.`,
      });
    }, 1000);
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
        allowTaint: true,
        scale: 2,
      });
      
      const link = document.createElement("a");
      link.download = `${previewData.petName || "pet"}-rainbow-bridge-poem.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error downloading:", error);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      <main className="flex-1 py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <PageTitle
            title="Rainbow Bridge Poem Print"
            description="Create a beautiful, personalized Rainbow Bridge poem that honors your pet's memory with comforting words and gentle imagery."
            lightMode={true}
          />
          
          {/* Hero image without text overlay */}
          <div className="w-full mb-10 rounded-xl overflow-hidden">
            <img 
              src="/assets/banners/Poem_LP2-2.png"
              alt="Rainbow Bridge" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left side - Editor */}
            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-5 text-gray-800">Create Your Rainbow Bridge Poem</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Pet's Name</label>
                    <Input
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Type of Pet</label>
                    <Input
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      placeholder="Dog, cat, rabbit, etc."
                    />
                  </div>
                  
                  <Button 
                    onClick={handleGeneratePoem}
                    disabled={loading}
                    className="w-full mt-2"
                  >
                    {loading ? "Generating..." : "Generate Rainbow Bridge Poem"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Right side - Live preview with frame */}
            <div>
              <div ref={previewRef} className="relative w-full max-w-[500px] mx-auto">
                {/* Frame image */}
                <img 
                  src="/assets/Frame.png" 
                  alt="Ornate rococo frame" 
                  className="w-full block"
                />
                
                {/* Content overlay - positioned inside the frame */}
                <div 
                  className="absolute text-center"
                  style={{
                    top: '15%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '65%',
                  }}
                >
                  <h3 
                    className="text-base md:text-lg mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: '#3e2f2f' }}
                  >
                    Rainbow Bridge
                  </h3>
                  
                  <p 
                    className="text-xs md:text-sm mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b5b5b' }}
                  >
                    In loving memory of
                  </p>
                  
                  <h2 
                    className="text-xl md:text-2xl mb-3 font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: '#2a1f1f' }}
                  >
                    {previewData.petName || "Your Pet"}
                  </h2>
                  
                  {previewData.petType && (
                    <p 
                      className="text-xs md:text-sm mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: '#5c4a4a' }}
                    >
                      Our beloved {previewData.petType}
                    </p>
                  )}
                  
                  <div 
                    className="border-t border-b py-3 my-2"
                    style={{ borderColor: 'rgba(62, 47, 47, 0.25)' }}
                  >
                    {previewData.poem ? (
                      <p 
                        className="text-xs md:text-sm italic whitespace-pre-line leading-relaxed"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: '#4a3d3d' }}
                      >
                        {previewData.poem}
                      </p>
                    ) : (
                      <p 
                        className="text-xs md:text-sm italic"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: '#8a7a7a' }}
                      >
                        Your personalized poem will appear here...
                      </p>
                    )}
                  </div>
                  
                  <p 
                    className="text-xs mt-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#5c4a4a' }}
                  >
                    Forever in our hearts
                  </p>
                </div>
              </div>
              
              <div className="mt-4 max-w-[500px] mx-auto">
                <Button onClick={handleDownload} className="w-full" disabled={!generatedPoem}>
                  <Download className="mr-2" size={16} />
                  Download Poem
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 max-w-2xl mx-auto">
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
