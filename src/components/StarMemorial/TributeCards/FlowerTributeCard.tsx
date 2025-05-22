
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flower } from "lucide-react";

interface FlowerTributeCardProps {
  flowerOptions: {
    id: string;
    name: string;
    type: string;
    price: number;
  }[];
  onPurchase: (
    tributeType: "flower",
    itemId: string,
    itemName: string
  ) => void;
}

const FlowerTributeCard = ({ flowerOptions, onPurchase }: FlowerTributeCardProps) => {
  return (
    <Card className="bg-black border border-gray-800 text-white hover:border-gray-700 transition-colors overflow-hidden">
      <div className="border-b border-gray-800 p-6 flex flex-col items-center">
        <Flower className="w-10 h-10 mb-4 text-pink-400" />
        <h3 className="text-xl font-medium text-white">Offer Flowers</h3>
        <p className="text-gray-400 text-center text-sm mt-2">
          A floral tribute beneath their star.
        </p>
      </div>
      
      <CardContent className="p-6">
        <ul className="space-y-4 mb-6">
          {flowerOptions.map((option) => (
            <li key={option.id} className="flex justify-between items-center">
              <div>
                <p className="text-white">{option.name}</p>
                <p className="text-xs text-gray-400">{option.type}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-700 hover:bg-gray-800 text-white"
                onClick={() => onPurchase("flower", option.id, option.name)}
              >
                {option.price === 0 ? "Free" : `$${option.price.toFixed(2)}`}
              </Button>
            </li>
          ))}
        </ul>
        
        <Link to="/flower-tribute">
          <Button className="w-full bg-pink-700 hover:bg-pink-800">
            Send Flowers →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default FlowerTributeCard;
