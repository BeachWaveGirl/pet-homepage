
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Star, Clock, MessageCircle } from "lucide-react";
import TarotCard from "@/components/pet-tarot/TarotCard";
import TarotReading from "@/components/pet-tarot/TarotReading";
import TarotInfoSection from "@/components/pet-tarot/TarotInfoSection";
import TarotHero from "@/components/pet-tarot/TarotHero";
import { Card } from "@/types/tarot";

// Tarot card data
const tarotCards: Card[] = [
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
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
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
      const card = tarotCards.find(card => card.id === id) || null;
      setSelectedCard(card);
      setCardSelected(true);
      toast({
        title: "Card Selected",
        description: `You've selected ${card?.name}`,
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
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <TarotHero />

        {/* Tarot Card Selection Section */}
        <section className="py-12 px-4 bg-black">
          <div className="container mx-auto max-w-4xl">
            {!selectedCard ? (
              <>
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-bold mb-6 text-white">✨ SELECT A CARD FOR YOUR PET'S READING</h2>
                  <div className="max-w-md mx-auto mb-8">
                    <input
                      type="text"
                      placeholder="Enter your pet's name (optional)"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full px-4 py-2 rounded bg-[#111111] border border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <p className="text-gray-300 mb-8">
                    Focus on your pet while selecting a card. The energy will guide you to the right message.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {tarotCards.map((card) => (
                    <TarotCard
                      key={card.id}
                      card={card}
                      isFlipped={flippedCards.includes(card.id)}
                      onClick={handleCardClick}
                      cardSelected={cardSelected}
                    />
                  ))}
                </div>
              </>
            ) : (
              <TarotReading
                selectedCard={selectedCard}
                petName={petName}
                handleReset={handleReset}
              />
            )}

            <TarotInfoSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PetTarotReading;
