
import { useState } from "react";
import { toast } from "sonner";
import TributeModal from "./TributeModal";
import CandleTributeCard from "./TributeCards/CandleTributeCard";
import FlowerTributeCard from "./TributeCards/FlowerTributeCard";
import ToyTributeCard from "./TributeCards/ToyTributeCard";
import PromotionBanner from "./TributeCards/PromotionBanner";
import tributeOptions from "./TributeCards/TributeOptions";

// Define the tribute item types
type TributeItemType = "candle" | "flower" | "toy";

interface MemorialTributesProps {
  petName?: string;
  petPhoto?: string | null;
}

const MemorialTributes = ({ petName = "your pet", petPhoto = null }: MemorialTributesProps) => {
  const [selectedType, setSelectedType] = useState<TributeItemType>("candle");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTribute, setSelectedTribute] = useState<{
    id: string;
    name: string;
    duration?: string;
    type?: string;
    description?: string;
    price: number;
    tributeType: TributeItemType;
  } | null>(null);
  
  const handlePurchase = (tributeType: TributeItemType, itemId: string, itemName: string) => {
    const tribute = tributeOptions[tributeType].find(item => item.id === itemId);
    if (!tribute) return;
    
    setSelectedTribute({
      id: tribute.id,
      name: tribute.name,
      duration: 'duration' in tribute ? tribute.duration : undefined,
      type: 'type' in tribute ? tribute.type : undefined,
      description: 'description' in tribute ? tribute.description : undefined,
      price: tribute.price,
      tributeType: tributeType
    });
    
    setModalOpen(true);
  };

  return (
    <section className="w-full py-16 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl font-bold mb-4 text-white">Add a Loving Tribute</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Honor {petName} with a special gesture. Each tribute will shine brightly on their star and bring comfort to your heart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CandleTributeCard 
            candleOptions={tributeOptions.candle}
            onPurchase={handlePurchase}
          />
          
          <FlowerTributeCard 
            flowerOptions={tributeOptions.flower}
            onPurchase={handlePurchase}
          />
          
          <ToyTributeCard 
            toyOptions={tributeOptions.toy}
            onPurchase={handlePurchase}
          />
        </div>

        <PromotionBanner />

        {/* Tribute Modal */}
        {selectedTribute && (
          <TributeModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            tributeType={selectedTribute.tributeType}
            tributeName={selectedTribute.name}
            duration={selectedTribute.duration}
            petName={petName}
            petPhoto={petPhoto}
            price={selectedTribute.price}
          />
        )}
      </div>
    </section>
  );
};

export default MemorialTributes;
