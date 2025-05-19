
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card as TarotCard } from "@/types/tarot";

interface TarotReadingProps {
  selectedCard: TarotCard | null;
  petName: string;
  handleReset: () => void;
}

const TarotReading = ({ selectedCard, petName, handleReset }: TarotReadingProps) => {
  if (!selectedCard) return null;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-white">Your Pet's Tarot Reading</h2>
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
          <div className="relative w-full rounded-lg overflow-hidden shadow-2xl shadow-white/10 aspect-[3/4]">
            <img
              src={selectedCard.image}
              alt={selectedCard.name}
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
          <Card className="bg-black/30 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {selectedCard.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedCard.description}
              </p>

              {petName && (
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {petName} embodies the energy of {selectedCard.name}. 
                  This reveals their true nature and the gifts they bring to your life.
                </p>
              )}

              <div className="pt-4 border-t border-gray-700">
                <p className="text-white font-medium">What This Means For You:</p>
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
              className="bg-white hover:bg-gray-200 text-black"
            >
              ✨ Draw Another Card
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TarotReading;
