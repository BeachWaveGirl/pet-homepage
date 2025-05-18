
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type TarotCard = {
  id: number;
  name: string;
  image: string;
  meaning: string;
  reversed: boolean;
};

const tarotCards: TarotCard[] = [
  { id: 1, name: "The Fool", image: "/lovable-uploads/f33432eb-d4f4-459a-9cba-6fdfdbacd6a0.png", meaning: "Your pet is adventurous and enjoys new experiences. They live in the moment and find joy in simple pleasures.", reversed: false },
  { id: 2, name: "The Magician", image: "/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png", meaning: "Your pet is intelligent and resourceful. They have a special ability to communicate their needs to you.", reversed: false },
  { id: 3, name: "The High Priestess", image: "/lovable-uploads/c767ea95-f4d6-4875-aa3d-c9f854be9e40.png", meaning: "Your pet has deep intuition and understanding. They sense your emotions and energy.", reversed: false },
  { id: 4, name: "The Empress", image: "/lovable-uploads/bbeee178-1311-4366-8650-1648c40df369.png", meaning: "Your pet is nurturing and loving. They bring abundance and joy to your home environment.", reversed: false },
  { id: 5, name: "The Emperor", image: "/lovable-uploads/6f146f9a-c7c2-4e3e-8b41-df577ef5aa27.png", meaning: "Your pet has a strong, protective nature. They see themselves as a guardian of their territory.", reversed: false },
  { id: 6, name: "The Hierophant", image: "/lovable-uploads/efa73ad4-f753-493c-933e-d1ec4998656f.png", meaning: "Your pet values routine and tradition. They find comfort in established patterns and rituals.", reversed: false },
];

const PetTarotReading = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [question, setQuestion] = useState("");
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [isSelectionPhase, setIsSelectionPhase] = useState(false);
  const { toast } = useToast();

  // Shuffle the cards and prepare them with random orientations
  const shuffleCards = () => {
    if (!petName || !petType || !question) {
      toast({
        title: "Missing information",
        description: "Please provide your pet's name, type, and your question.",
        variant: "destructive"
      });
      return;
    }

    setIsShuffling(true);
    
    // Create a new array with randomly reversed cards
    const newCards = [...tarotCards].map(card => ({
      ...card,
      reversed: Math.random() > 0.5
    }));
    
    // Shuffle the array
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    
    setShuffledCards(newCards);
    
    // Simulate shuffling animation
    setTimeout(() => {
      setIsShuffling(false);
      setIsSelectionPhase(true);
      toast({
        title: "Cards shuffled",
        description: "Please select three cards for your reading."
      });
    }, 2000);
  };

  const handleCardSelection = (card: TarotCard) => {
    if (selectedCards.length >= 3 || selectedCards.some(c => c.id === card.id)) return;
    
    setSelectedCards(prev => [...prev, card]);
    
    if (selectedCards.length === 2) {
      // Third card selected, proceed to reading after a brief delay
      setTimeout(() => {
        setIsSelectionPhase(false);
        setIsReading(true);
        toast({
          title: "Reading complete",
          description: "Your pet's tarot reading is ready."
        });
      }, 1000);
    }
  };

  const resetReading = () => {
    setSelectedCards([]);
    setIsReading(false);
    setIsSelectionPhase(false);
    setShuffledCards([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#191C27] text-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center text-white">
            Pet Tarot Reading
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 text-center max-w-2xl mx-auto">
            Discover insights into your pet's personality, emotions, and spiritual energy through the mystical art of Tarot
          </p>
          
          {!isSelectionPhase && !isReading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-[#242938] border-purple-600/20 shadow-xl shadow-purple-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-white">Begin Your Pet's Reading</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="petName" className="text-gray-300">Pet's Name</Label>
                      <Input
                        id="petName"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="Enter your pet's name"
                        className="bg-[#1E212E] border-gray-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petType" className="text-gray-300">Type of Pet</Label>
                      <Input
                        id="petType"
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        placeholder="Dog, cat, rabbit, etc."
                        className="bg-[#1E212E] border-gray-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="question" className="text-gray-300">Your Question About Your Pet</Label>
                    <Input
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="What would you like to know about your pet?"
                      className="bg-[#1E212E] border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      onClick={shuffleCards}
                      disabled={isShuffling}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2"
                    >
                      {isShuffling ? "Shuffling Cards..." : "Shuffle Cards"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f33432eb-d4f4-459a-9cba-6fdfdbacd6a0.png" 
                  alt="Pet Tarot Reading" 
                  className="max-w-full max-h-80 rounded-lg shadow-lg"
                />
              </div>
            </div>
          ) : isSelectionPhase ? (
            <div className="space-y-8">
              <div className="bg-[#242938] p-4 rounded-lg text-center">
                <p className="text-xl font-medium mb-2">Select Three Cards</p>
                <p className="text-gray-300">
                  Trust your intuition as you choose cards for {petName}'s reading. 
                  Selected: {selectedCards.length}/3
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {shuffledCards.map((card) => (
                  <div 
                    key={card.id} 
                    className={`cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
                      selectedCards.some(c => c.id === card.id) ? 'ring-4 ring-pink-500' : ''
                    }`}
                    onClick={() => handleCardSelection(card)}
                  >
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#2A2F45]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/f33432eb-d4f4-459a-9cba-6fdfdbacd6a0.png" 
                          alt="Tarot Card Back" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-[#242938] p-4 rounded-lg text-center">
                <h2 className="text-2xl font-playfair mb-2">{petName}'s Tarot Reading</h2>
                <p className="text-gray-300">
                  Your Question: {question}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedCards.map((card, index) => (
                  <Card 
                    key={card.id} 
                    className="bg-[#242938] border-purple-600/20 overflow-hidden"
                  >
                    <div className={`relative aspect-[2/3] ${card.reversed ? 'rotate-180' : ''}`}>
                      <img 
                        src={card.image}
                        alt={card.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardFooter className="flex flex-col items-start p-4 space-y-2">
                      <div className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-white">{card.name}</h3>
                        {card.reversed && (
                          <span className="text-xs px-2 py-1 rounded bg-pink-900/30 text-pink-300">Reversed</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-300">
                        {card.meaning}
                      </p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  onClick={resetReading}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                >
                  Start New Reading
                </Button>
              </div>
            </div>
          )}
          
          <div className="mt-16 bg-[#242938] p-6 rounded-lg border border-purple-600/20 shadow-lg">
            <h2 className="text-2xl font-playfair font-bold mb-6 text-center text-white">About Pet Tarot Readings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1E212E] p-5 rounded-lg">
                <h3 className="text-lg font-medium mb-3 text-white">Past Influences</h3>
                <p className="text-sm text-gray-300">
                  The first card represents past experiences that have shaped your pet's personality and current behavior patterns.
                </p>
              </div>
              <div className="bg-[#1E212E] p-5 rounded-lg">
                <h3 className="text-lg font-medium mb-3 text-white">Present Energy</h3>
                <p className="text-sm text-gray-300">
                  The second card reveals your pet's current emotional state, needs, and feelings toward you and their environment.
                </p>
              </div>
              <div className="bg-[#1E212E] p-5 rounded-lg">
                <h3 className="text-lg font-medium mb-3 text-white">Future Guidance</h3>
                <p className="text-sm text-gray-300">
                  The third card offers insight into how to best support your pet's wellbeing and strengthen your bond going forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetTarotReading;
