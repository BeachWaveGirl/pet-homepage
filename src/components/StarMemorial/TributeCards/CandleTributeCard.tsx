
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

interface CandleTributeCardProps {
  candleOptions: {
    id: string;
    name: string;
    duration: string;
    price: number;
  }[];
  onPurchase: (
    tributeType: "candle",
    itemId: string,
    itemName: string
  ) => void;
}

const CandleTributeCard = ({ candleOptions, onPurchase }: CandleTributeCardProps) => {
  return (
    <Card className="bg-black border border-gray-800 text-white hover:border-gray-700 transition-colors overflow-hidden">
      <div className="border-b border-gray-800 p-6 flex flex-col items-center">
        <Flame className="w-10 h-10 mb-4 text-amber-400" />
        <h3 className="text-xl font-medium text-white">Light a Candle</h3>
        <p className="text-gray-400 text-center text-sm mt-2">
          Shine a light for your pet's memory.
        </p>
      </div>
      
      <CardContent className="p-6">
        <ul className="space-y-4 mb-6">
          {candleOptions.map((option) => (
            <li key={option.id} className="flex justify-between items-center">
              <div>
                <p className="text-white">{option.name}</p>
                {option.id === "candle-free" ? (
                  <p className="text-xs text-gray-400">to begin your memorial</p>
                ) : option.id === "candle-3" ? (
                  <p className="text-xs text-gray-400">A gentle glow that lasts through the weekend</p>
                ) : option.id === "candle-30" ? (
                  <p className="text-xs text-gray-400">A soft light to guide them for a month</p>
                ) : option.id === "candle-180" ? (
                  <p className="text-xs text-gray-400">Keep their star shining through the seasons</p>
                ) : (
                  <p className="text-xs text-gray-400">A lasting tribute for a lifetime of memories</p>
                )}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-700 hover:bg-gray-800 text-white"
                onClick={() => onPurchase("candle", option.id, option.name)}
              >
                {option.price === 0 ? "Free" : `$${option.price.toFixed(2)}`}
              </Button>
            </li>
          ))}
        </ul>
        
        <Link to="/candle-tribute">
          <Button className="w-full bg-amber-700 hover:bg-amber-800">
            Light a Candle →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CandleTributeCard;
