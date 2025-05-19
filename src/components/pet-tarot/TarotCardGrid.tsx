
import { Card } from "@/types/tarot";

interface TarotCardGridProps {
  tarotCards: Card[];
  flippedCards: number[];
  handleCardClick: (id: number) => void;
  cardSelected: boolean;
  petName: string;
  setPetName: (name: string) => void;
}

const TarotCardGrid = ({ 
  tarotCards, 
  flippedCards, 
  handleCardClick, 
  cardSelected,
  petName,
  setPetName
}: TarotCardGridProps) => {
  return (
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
  );
};

export default TarotCardGrid;
