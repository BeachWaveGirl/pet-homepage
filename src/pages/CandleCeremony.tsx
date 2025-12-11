import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Sample candles data
const initialCandles = [
  { id: 1, petName: "Luna", message: "Forever in our hearts 🌙", isLit: true },
  { id: 2, petName: "Max", message: "Best boy, always loved", isLit: true },
  { id: 3, petName: "Bella", message: "You brought us so much joy", isLit: true },
  { id: 4, petName: "Charlie", message: "Running free at the Rainbow Bridge", isLit: true },
  { id: 5, petName: "Buddy", message: "Always in my heart", isLit: true },
  { id: 6, petName: "Daisy", message: "Sweet angel, forever missed", isLit: true },
  { id: 7, petName: "Rocky", message: "Brave and strong until the end", isLit: true },
  { id: 8, petName: "Molly", message: "Thank you for the memories", isLit: true },
  { id: 9, petName: "Cooper", message: "My loyal companion", isLit: true },
  { id: 10, petName: "Sophie", message: "Gone but never forgotten", isLit: true },
  { id: 11, petName: "Tucker", message: "You made every day brighter", isLit: true },
  { id: 12, petName: "Sadie", message: "Until we meet again", isLit: true },
  { id: 13, petName: "Bear", message: "Big heart, gentle soul", isLit: true },
  { id: 14, petName: "Chloe", message: "Sweet memories forever", isLit: true },
  { id: 15, petName: "Duke", message: "Faithful friend always", isLit: true },
  { id: 16, petName: "Lily", message: "Beautiful inside and out", isLit: true },
  { id: 17, petName: "Oliver", message: "Purring in peace now", isLit: true },
  { id: 18, petName: "Rosie", message: "Loved beyond words", isLit: true },
  { id: 19, petName: "Zeus", message: "Mighty protector, gentle giant", isLit: true },
  { id: 20, petName: "Penny", message: "Little treasure, big love", isLit: true },
];

const CandleCeremony = () => {
  const [candles, setCandles] = useState(initialCandles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPetName, setNewPetName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  
  const handleLightCandle = () => {
    if (!newPetName.trim()) {
      toast({
        title: "Please enter a pet name",
        variant: "destructive",
      });
      return;
    }
    
    const newCandle = {
      id: Date.now(),
      petName: newPetName,
      message: newMessage || "Forever loved",
      isLit: true,
    };
    
    setCandles([newCandle, ...candles]);
    setNewPetName("");
    setNewMessage("");
    setIsModalOpen(false);
    
    toast({
      title: "Candle lit",
      description: `A candle has been lit in memory of ${newPetName}`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Light a Virtual Candle for Your Beloved Pet
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Honor your pet's memory with a virtual candle that burns for 24 hours.
            </p>
            <p className="text-gray-500 max-w-3xl mx-auto mb-8">
              Losing a pet is one of life's most painful experiences. Whether you're grieving a loyal dog, a loving cat, or any cherished companion, lighting a candle is a beautiful way to honor their memory and find comfort in a community of pet lovers who understand your loss.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              Each candle burns for 24 hours in this peaceful virtual memorial space. Share your pet's name and a special message to create a lasting tribute that others can see and support.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg"
              >
                🕯️ Light a Candle
              </Button>
              <Link to="/memorial-card">
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-800 px-8 py-6 text-lg"
                >
                  Create Memorial Card →
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Candles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* First card - Click to light */}
            <Card 
              className="cursor-pointer transition-all hover:shadow-lg overflow-hidden bg-gray-900 border-gray-800"
              onClick={() => setIsModalOpen(true)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  {/* Orange/sunset gradient background */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 30%, #0f3460 50%, #e94560 100%)'
                    }}
                  />
                  
                  {/* Unlit candle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-20 h-24">
                      {/* Candle body - blue ceramic */}
                      <div 
                        className="absolute bottom-0 w-20 h-20 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #4a6fa5 0%, #2d4a7c 50%, #1a3a5c 100%)',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}
                      />
                      {/* Candle top opening */}
                      <div 
                        className="absolute bottom-14 left-1/2 -translate-x-1/2 w-14 h-8 rounded-full"
                        style={{
                          background: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)',
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Overlay text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xs text-center px-2 opacity-70">
                      Click to light a candle in memory of your pet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Lit candles */}
            {candles.map((candle) => (
              <Card 
                key={candle.id}
                className="overflow-hidden border-0"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    {/* Blue/Orange gradient background matching the candle image */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, #0066cc 0%, #0066cc 50%, #ff4500 50%, #ff4500 100%)'
                      }}
                    />
                    
                    {/* Candle image with glow animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative candle-glow">
                        <img 
                          src="/assets/candle.png" 
                          alt="Memorial candle"
                          className="w-full h-full object-contain scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Pet name and message */}
                  <div className="p-3 bg-white text-center">
                    <h3 className="font-semibold text-gray-900 text-sm">{candle.petName}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{candle.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      {/* Light a Candle Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-playfair text-2xl">
              Light a Candle
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="petName">Pet's Name</Label>
              <Input 
                id="petName"
                value={newPetName}
                onChange={(e) => setNewPetName(e.target.value)}
                placeholder="Enter your pet's name"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Memorial Message (optional)</Label>
              <Textarea 
                id="message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Share a loving message..."
                className="mt-1"
              />
            </div>
            
            <Button 
              onClick={handleLightCandle}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white"
            >
              🕯️ Light Candle
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
      
      {/* Flame animation styles */}
      <style>{`
        @keyframes flicker {
          0% { transform: translateX(-50%) scale(1) rotate(-2deg); }
          100% { transform: translateX(-50%) scale(1.1) rotate(2deg); }
        }
        
        @keyframes candleGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 8px rgba(255, 200, 100, 0.6)) drop-shadow(0 0 15px rgba(255, 150, 50, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 12px rgba(255, 200, 100, 0.8)) drop-shadow(0 0 25px rgba(255, 150, 50, 0.6));
          }
        }
        
        .candle-glow {
          animation: candleGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CandleCeremony;
