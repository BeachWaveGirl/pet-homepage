
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flower } from "lucide-react";
import { useState } from "react";

interface FlowerOption {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
}

interface FlowerTributeCardProps {
  flowerOptions: FlowerOption[];
  onPurchase: (
    tributeType: "flower",
    itemId: string,
    itemName: string
  ) => void;
}

const FlowerTributeCard = ({ flowerOptions, onPurchase }: FlowerTributeCardProps) => {
  const [selectedFlowerId, setSelectedFlowerId] = useState<string | null>(null);
  
  const handleFlowerSelect = (flowerId: string) => {
    setSelectedFlowerId(flowerId);
  };
  
  const handleSendFlower = () => {
    if (!selectedFlowerId) return;
    const selectedFlower = flowerOptions.find(flower => flower.id === selectedFlowerId);
    if (selectedFlower) {
      onPurchase("flower", selectedFlower.id, selectedFlower.name);
    }
  };
  
  return (
    <Card className="bg-black border border-gray-800 text-white hover:border-gray-700 transition-colors overflow-hidden">
      <div className="border-b border-gray-800 p-6 flex flex-col items-center">
        <Flower className="w-10 h-10 mb-4 text-pink-400" />
        <h3 className="text-xl font-medium text-white">Send Flowers</h3>
        <p className="text-gray-400 text-center text-sm mt-2">
          Place a flower beneath their star to honor their spirit.
        </p>
      </div>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {flowerOptions.map((option) => (
            <div 
              key={option.id} 
              onClick={() => handleFlowerSelect(option.id)}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                selectedFlowerId === option.id 
                ? "border-2 border-pink-400 bg-gray-900" 
                : "border border-gray-800 hover:border-gray-700 hover:bg-gray-900"
              }`}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full mr-2">
                  {option.type === "Daisy" && "🌼"}
                  {option.type === "Forget-Me-Not" && "🔵"}
                  {option.type === "Lilies" && "🤍"}
                  {option.type === "Roses" && "🌹"}
                  {option.type === "Orchids" && "💜"}
                </div>
                <div>
                  <p className="text-white text-sm">{option.name}</p>
                  <p className="text-xs text-gray-400">{option.type}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2">{option.description}</p>
              <p className="text-sm font-medium">
                {option.price === 0 ? "Free" : `$${option.price.toFixed(2)}`}
              </p>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={handleSendFlower}
          disabled={!selectedFlowerId}
          className="w-full bg-pink-700 hover:bg-pink-800 disabled:bg-gray-700 disabled:text-gray-500"
        >
          {selectedFlowerId ? (
            flowerOptions.find(f => f.id === selectedFlowerId)?.price === 0 
              ? "Send Flowers →" 
              : "Send & Pay →"
          ) : "Select a Flower"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FlowerTributeCard;
