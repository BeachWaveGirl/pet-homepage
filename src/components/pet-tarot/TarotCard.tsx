
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/types/tarot";

interface TarotCardProps {
  card: Card;
  isFlipped: boolean;
  onClick: (id: number) => void;
  cardSelected: boolean;
}

const TarotCard = ({ card, isFlipped, onClick, cardSelected }: TarotCardProps) => {
  return (
    <motion.div
      key={card.id}
      className={`cursor-pointer perspective-1000 ${isFlipped ? 'pointer-events-none' : ''}`}
      onClick={() => !cardSelected && onClick(card.id)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative w-full h-64 md:h-80 preserve-3d rounded-lg shadow-xl"
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{ duration: 0.8 }}
      >
        {/* Card Back */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-lg border-2 border-gray-500"
          style={{
            background: "linear-gradient(45deg, #000000, #222222)",
            backgroundSize: "cover",
            display: isFlipped ? "none" : "flex"
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-white text-6xl">✨</div>
          </div>
        </div>

        {/* Card Front */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden rotate-y-180"
          style={{
            display: isFlipped ? "flex" : "none"
          }}
        >
          <img 
            src={card.image} 
            alt={card.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
