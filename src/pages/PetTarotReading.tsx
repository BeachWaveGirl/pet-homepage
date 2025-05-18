
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Star, Clock, MessageCircle } from "lucide-react";

// Tarot card data
const tarotCards = [
  {
    id: 1,
    name: "The Sun",
    image: "/lovable-uploads/c767ea95-f4d6-4875-aa3d-c9f854be9e40.png",
    description: "Represents joy, happiness, and positive energy. Your pet embodies these qualities and brings light to your life."
  },
  {
    id: 2,
    name: "The Moon",
    image: "/lovable-uploads/d2df99a1-71d4-4d47-999f-5159bfdf52be.png",
    description: "Symbolizes intuition and the unknown. Your pet has a deep intuitive connection with you and senses things beyond our understanding."
  },
  {
    id: 3,
    name: "The Star",
    image: "/lovable-uploads/efa73ad4-f753-493c-933e-d1ec4998656f.png",
    description: "Represents hope, inspiration, and guidance. Your pet serves as a guiding light in your life, offering comfort and direction."
  },
  {
    id: 4,
    name: "The Lovers",
    image: "/lovable-uploads/be74091f-4ccb-434e-88ac-0667651f253a.png",
    description: "Symbolizes deep connection and harmony. The bond between you and your pet is one of unconditional love and perfect understanding."
  },
  {
    id: 5,
    name: "The Magician",
    image: "/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png",
    description: "Represents manifestation and resourcefulness. Your pet has an incredible ability to transform situations and bring magic to your everyday life."
  },
  {
    id: 6,
    name: "The Empress",
    image: "/lovable-uploads/6f146f9a-c7c2-4e3e-8b41-df577ef5aa27.png",
    description: "Symbolizes nurturing and abundance. Your pet embodies the spirit of care and brings richness to your emotional life."
  }
];

const PetTarotReading = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [petName, setPetName] = useState("");
  const [cardSelected, setCardSelected] = useState(false);
  const { toast } = useToast();

  const handleCardClick = (id: number) => {
    // If a card is already selected, do nothing
    if (cardSelected) return;
    
    // Mark this card as flipped for animation
    setFlippedCards([...flippedCards, id]);
    
    // Simulate a "thinking" period before revealing the card meaning
    setTimeout(() => {
      setSelectedCard(id);
      setCardSelected(true);
      toast({
        title: "Card Selected",
        description: `You've selected ${tarotCards.find(card => card.id === id)?.name}`,
      });
    }, 1000);
  };

  const handleReset = () => {
    setSelectedCard(null);
    setFlippedCards([]);
    setCardSelected(false);
    setPetName("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C] text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="py-12 px-4 bg-[#1A1F2C] relative overflow-hidden"
          style={{
            backgroundImage: "url('/lovable-uploads/f33432eb-d4f4-459a-9cba-6fdfdbacd6a0.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/70 to-[#1A1F2C] pointer-events-none"></div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4">
              <span className="text-[#8B5CF6] font-bold mr-1">FAST DELIVERY</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              PET <span className="block text-[#D946EF]">TAROT</span> <span className="block text-[#8B5CF6]">READING</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Discover what the cards reveal about your pet's energy, personality, and the spiritual messages they may have for you 🔮
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">SAME HOUR</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">INTERACTIVE</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-[#F97316]" />
                <span className="text-[#F97316]">5-STARS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tarot Card Selection Section */}
        <section className="py-12 px-4 bg-[#1A1F2C]">
          <div className="container mx-auto max-w-4xl">
            {!selectedCard ? (
              <>
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-bold mb-6 text-[#D946EF]">✨ SELECT A CARD FOR YOUR PET'S READING</h2>
                  <div className="max-w-md mx-auto mb-8">
                    <input
                      type="text"
                      placeholder="Enter your pet's name (optional)"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full px-4 py-2 rounded bg-[#2D2A49] border border-[#8B5CF6]/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <p className="text-gray-300 mb-8">
                    Focus on your pet while selecting a card. The energy will guide you to the right message.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {tarotCards.map((card) => (
                    <motion.div
                      key={card.id}
                      className={`cursor-pointer perspective-1000 ${flippedCards.includes(card.id) ? 'pointer-events-none' : ''}`}
                      onClick={() => handleCardClick(card.id)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="relative w-full h-64 md:h-80 preserve-3d rounded-lg shadow-xl"
                        animate={{
                          rotateY: flippedCards.includes(card.id) ? 180 : 0
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        {/* Card Back */}
                        <div className="absolute w-full h-full backface-hidden rounded-lg border-2 border-purple-500"
                          style={{
                            background: "linear-gradient(45deg, #2D2A49, #362C5A)",
                            backgroundSize: "cover",
                            display: flippedCards.includes(card.id) ? "none" : "flex"
                          }}>
                          <div className="flex items-center justify-center w-full h-full">
                            <div className="text-[#D946EF] text-6xl">✨</div>
                          </div>
                        </div>

                        {/* Card Front */}
                        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden rotate-y-180"
                          style={{
                            display: flippedCards.includes(card.id) ? "flex" : "none"
                          }}>
                          <img 
                            src={card.image} 
                            alt={card.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-bold mb-2 text-center text-[#D946EF]">Your Pet's Tarot Reading</h2>
                  <p className="text-gray-300 text-center">
                    {petName ? `${petName}'s energy has revealed:` : "Your pet's energy has revealed:"}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl">
                  {/* Selected Card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full max-w-xs mx-auto"
                  >
                    <div className="relative w-full rounded-lg overflow-hidden shadow-2xl shadow-purple-500/30 aspect-[3/4]">
                      <img
                        src={tarotCards.find(card => card.id === selectedCard)?.image}
                        alt={tarotCards.find(card => card.id === selectedCard)?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Card Meaning */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Card className="bg-black/30 border-[#8B5CF6]/30">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-[#D946EF]">
                          {tarotCards.find(card => card.id === selectedCard)?.name}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {tarotCards.find(card => card.id === selectedCard)?.description}
                        </p>

                        {petName && (
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {petName} embodies the energy of {tarotCards.find(card => card.id === selectedCard)?.name}. 
                            This reveals their true nature and the gifts they bring to your life.
                          </p>
                        )}

                        <div className="pt-4 border-t border-gray-700">
                          <p className="text-[#F97316] font-medium">What This Means For You:</p>
                          <p className="text-gray-300 mt-2">
                            Your bond with your pet is aligned with the energy of this card. 
                            Pay attention to how these qualities manifest in your everyday interactions.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-6 text-center">
                      <Button 
                        onClick={handleReset}
                        className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#9B87F5] hover:to-[#E158F7]"
                      >
                        ✨ Draw Another Card
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* About Tarot Reading Section */}
            <div className="mt-16 p-6 bg-[#0F0D1A] rounded-lg border border-[#8B5CF6]/30">
              <h2 className="text-xl font-bold mb-4 text-[#F97316]">🌟 ABOUT PET TAROT READINGS</h2>
              <p className="text-gray-300 mb-4">
                Pet tarot readings work by tapping into the energy and spiritual connection between you and your pet.
                When you focus on your pet while selecting a card, your intuition guides you to choose the card
                that best reflects their energy or message for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">See your pet's true spiritual nature</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Understand their unique energy</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Receive guidance about your connection</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Get insights into behavior patterns</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PetTarotReading;
