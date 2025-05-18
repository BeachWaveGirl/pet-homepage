
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PawPrint, Clock, FileText, Star } from "lucide-react";
import { motion } from "framer-motion";

// Define tarot cards for the reading
const tarotCards = [
  { id: 1, name: "The Fool", meaning: "New beginnings, spontaneity, faith", image: "https://www.trustedtarot.com/img/cards/the-fool.png" },
  { id: 2, name: "The Magician", meaning: "Manifestation, resourcefulness, power", image: "https://www.trustedtarot.com/img/cards/the-magician.png" },
  { id: 3, name: "The High Priestess", meaning: "Intuition, unconscious, divine feminine", image: "https://www.trustedtarot.com/img/cards/the-high-priestess.png" },
  { id: 4, name: "The Empress", meaning: "Femininity, beauty, nature", image: "https://www.trustedtarot.com/img/cards/the-empress.png" },
  { id: 5, name: "The Emperor", meaning: "Authority, structure, control", image: "https://www.trustedtarot.com/img/cards/the-emperor.png" },
  { id: 6, name: "The Hierophant", meaning: "Tradition, conformity, morality", image: "https://www.trustedtarot.com/img/cards/the-hierophant.png" },
  { id: 7, name: "The Lovers", meaning: "Love, harmony, relationships", image: "https://www.trustedtarot.com/img/cards/the-lovers.png" },
  { id: 8, name: "The Chariot", meaning: "Direction, control, willpower", image: "https://www.trustedtarot.com/img/cards/the-chariot.png" },
  { id: 9, name: "Strength", meaning: "Courage, patience, control", image: "https://www.trustedtarot.com/img/cards/strength.png" }
];

const PetTarotReading = () => {
  const [ownerInfo, setOwnerInfo] = useState("");
  const [petInfo, setPetInfo] = useState("");
  const [isAlive, setIsAlive] = useState<string>("");
  const [question, setQuestion] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [showCardSelection, setShowCardSelection] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const { toast } = useToast();

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show the card selection interface
    setTimeout(() => {
      setIsSubmitting(false);
      setShowCardSelection(true);
      toast({
        title: "Ready for your reading",
        description: "Please select three cards for your pet's tarot reading.",
      });
    }, 1500);
  };

  const handleCardClick = (cardId: number) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter(id => id !== cardId));
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, cardId]);
    } else {
      toast({
        title: "Maximum cards selected",
        description: "You can only select three cards for your reading.",
      });
    }
  };

  const startReading = () => {
    if (selectedCards.length < 3) {
      toast({
        title: "Select more cards",
        description: `Please select 3 cards. You've selected ${selectedCards.length} so far.`,
      });
      return;
    }
    
    setShowCardSelection(false);
    setShowReading(true);
  };

  const flipCard = (cardId: number) => {
    if (!flippedCards.includes(cardId)) {
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  const getReadingForCard = (position: number) => {
    const meanings = [
      "Your pet's past experiences that still affect them today. This card reveals emotions or experiences that have shaped their personality.",
      "Your pet's present state of mind and emotional needs. This shows what they're currently experiencing or feeling.",
      "Your pet's future path or what they're moving towards. This provides insight into what may happen or what your pet desires."
    ];
    return meanings[position];
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C] text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-[#1A1F2C] to-[#262938]">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4">
              <span className="text-[#8B5CF6] font-bold mr-1">BESTSELLER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#8B5CF6] leading-tight">
              PET <span className="block text-[#D946EF]">TAROT</span> <span className="block text-white">READING</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Let the cards reveal your pet's energy and emotions — discover what they're trying to tell you through mystical tarot 🔮
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">SAME HOUR</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">DETAILED</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-[#F97316]" />
                <span className="text-[#F97316]">5-STARS</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-4 bg-[#1A1F2C]">
          <div className="container mx-auto max-w-4xl">
            {!showCardSelection && !showReading && (
              <>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 text-[#D946EF]">✨ WHAT YOUR PET'S TAROT CARDS MAY REVEAL:</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>🔮 Hidden emotions and feelings</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>🌟 Past experiences that affect them</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>✨ Future path and destiny</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>💫 Spiritual messages they want to share</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg col-span-1 md:col-span-2">
                      <p>🧿 Their true personality and soul purpose</p>
                    </div>
                  </div>
                </div>

                <Card className="border-2 border-[#8B5CF6] bg-black/30 shadow-lg shadow-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <PawPrint className="inline-block h-12 w-12 text-[#D946EF] mb-3" />
                      <h3 className="text-2xl font-bold mb-2">Request Your Pet's Tarot Reading</h3>
                      <p className="text-gray-300">Fill out this form to unlock the mystical messages of the cards</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="ownerInfo" className="text-white">✨ Your name and birthday:</Label>
                        <Input 
                          id="ownerInfo"
                          value={ownerInfo}
                          onChange={(e) => setOwnerInfo(e.target.value)}
                          placeholder="John Doe, January 1, 1990"
                          required
                          className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="petInfo" className="text-white">✨ Your pet name and birthday:</Label>
                        <Input 
                          id="petInfo"
                          value={petInfo}
                          onChange={(e) => setPetInfo(e.target.value)}
                          placeholder="Fluffy, March 15, 2018"
                          required
                          className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="isAlive" className="text-white">✨ Is he/she still with us?</Label>
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="isAlive" 
                              value="yes" 
                              checked={isAlive === "yes"}
                              onChange={() => setIsAlive("yes")}
                              className="w-4 h-4 accent-[#D946EF]"
                              required
                            />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="isAlive" 
                              value="no" 
                              checked={isAlive === "no"}
                              onChange={() => setIsAlive("no")}
                              className="w-4 h-4 accent-[#D946EF]"
                            />
                            <span>No</span>
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="photo" className="text-white">✨ Upload a photo of your pet (optional):</Label>
                        <Input 
                          id="photo"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="bg-black/30 border-[#8B5CF6]/50 text-white"
                        />
                        {photo && (
                          <p className="text-sm text-[#8B5CF6]">Photo uploaded: {photo.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="question" className="text-white">✨ What specific questions do you have for the cards?</Label>
                        <Textarea 
                          id="question"
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          placeholder="What do the cards reveal about my pet's personality? What energy surrounds them?"
                          rows={4}
                          required
                          className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                        />
                      </div>

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#9B87F5] hover:to-[#E158F7] text-white font-bold py-3 text-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Request Tarot Reading"}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </>
            )}
            
            {/* Card Selection Interface */}
            {showCardSelection && (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#D946EF] mb-6">Select Three Cards for Your Pet's Reading</h2>
                <p className="text-gray-300 mb-8">
                  Focus on your pet while you make your selection. The cards you choose will reveal insights about your pet's past, present, and future.
                </p>
                
                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                  {tarotCards.map((card) => (
                    <div key={card.id} className="flex flex-col items-center">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleCardClick(card.id)}
                        className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                          selectedCards.includes(card.id) ? 'ring-4 ring-[#D946EF]' : ''
                        }`}
                      >
                        <div className="bg-[#090C14] rounded-lg p-1">
                          <div className="w-full aspect-[2/3] bg-gradient-to-b from-[#3F3376] to-[#201A45] rounded-lg flex items-center justify-center">
                            <span className="text-3xl">🔮</span>
                          </div>
                        </div>
                        {selectedCards.includes(card.id) && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#D946EF] flex items-center justify-center">
                            <span className="text-xs font-bold">{selectedCards.indexOf(card.id) + 1}</span>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={startReading} 
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#9B87F5] hover:to-[#E158F7] text-white px-8 py-3 text-lg font-bold rounded-lg"
                  disabled={selectedCards.length !== 3}
                >
                  Reveal Your Pet's Reading
                </Button>
              </div>
            )}
            
            {/* Reading Results */}
            {showReading && (
              <div>
                <h2 className="text-3xl font-bold text-[#D946EF] mb-6 text-center">Your Pet's Tarot Reading</h2>
                
                <div className="mb-8 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg">
                  <p className="italic text-gray-300">
                    "Thank you for trusting the cards to connect with {petInfo.split(',')[0] || 'your pet'}. As you reveal each card, 
                    remember that these messages are channeled through the universal energy that connects all beings."
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  {[0, 1, 2].map((position) => {
                    const cardId = selectedCards[position];
                    const card = tarotCards.find(c => c.id === cardId);
                    const isFlipped = flippedCards.includes(cardId);
                    
                    return (
                      <div key={position} className="flex flex-col items-center">
                        <h3 className="font-medium text-[#8B5CF6] mb-2">
                          {position === 0 ? "Past" : position === 1 ? "Present" : "Future"}
                        </h3>
                        
                        <motion.div
                          className="relative w-full aspect-[2/3] perspective-1000 cursor-pointer"
                          onClick={() => flipCard(cardId)}
                        >
                          <motion.div
                            className="w-full h-full relative transition-all duration-700"
                            style={{
                              transformStyle: "preserve-3d",
                              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                            }}
                          >
                            {/* Card Back */}
                            <div 
                              className="absolute w-full h-full backface-hidden bg-gradient-to-b from-[#3F3376] to-[#201A45] rounded-xl flex items-center justify-center shadow-lg border border-purple-500/30"
                            >
                              <span className="text-4xl">🔮</span>
                              <div className="absolute bottom-4 text-center w-full">
                                <p className="text-xs text-purple-300">Click to reveal</p>
                              </div>
                            </div>
                            
                            {/* Card Front */}
                            <div 
                              className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border-2 border-purple-400"
                              style={{ transform: "rotateY(180deg)" }}
                            >
                              {card && (
                                <div className="flex flex-col h-full">
                                  <div className="relative flex-grow">
                                    <img 
                                      src={card.image} 
                                      alt={card.name} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="bg-black p-2 text-center">
                                    <h4 className="font-bold text-[#D946EF]">{card.name}</h4>
                                    <p className="text-xs text-gray-300">{card.meaning}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        </motion.div>
                        
                        {isFlipped && (
                          <div className="mt-4 p-3 bg-black/30 rounded-lg text-sm">
                            <p>{getReadingForCard(position)}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {flippedCards.length === 3 && (
                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-bold text-[#D946EF] mb-3">Complete Reading</h3>
                    <p className="mb-4">
                      The cards have revealed that {petInfo.split(',')[0] || 'your pet'} has a deeply sensitive and intuitive nature. 
                      They're picking up on energies around them and responding to the emotional currents in your home.
                    </p>
                    <p className="mb-4">
                      There's a strong indication that they're working through some past experiences that have shaped their behavior. 
                      The present card shows they're seeking more stability and reassurance right now.
                    </p>
                    <p>
                      Moving forward, the future card suggests a positive transformation is coming. 
                      Your pet is ready to release old patterns and embrace a more confident energy.
                    </p>
                  </div>
                )}
                
                <div className="text-center mt-10">
                  <Button 
                    onClick={() => {
                      setShowReading(false);
                      setShowCardSelection(false);
                      setSelectedCards([]);
                      setFlippedCards([]);
                    }}
                    className="bg-[#8B5CF6] hover:bg-[#7B4CF5] text-white px-6 py-2"
                  >
                    Start a New Reading
                  </Button>
                </div>
              </div>
            )}
            
            <div className="mt-10 p-6 bg-black/20 rounded-lg border border-[#8B5CF6]/30">
              <h2 className="text-xl font-bold mb-4 text-[#F97316]">🔮 THE MYSTICAL CONNECTION</h2>
              <p className="text-gray-300 mb-4">
                The tarot provides a magical doorway into your pet's inner world. Each card pulled creates a bridge between your consciousness and your pet's energy, revealing insights that might otherwise remain hidden.
              </p>
              <p className="text-gray-300">
                Whether seeking to understand behavioral changes, emotional needs, or spiritual connections, these tarot cards act as a translator for the silent language your pet speaks. The reading creates a sacred space where your pet's true essence can be expressed and understood.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PetTarotReading;
