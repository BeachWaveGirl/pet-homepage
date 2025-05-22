
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";

interface ToyTributeCardProps {
  toyOptions: {
    id: string;
    name: string;
    description: string;
    price: number;
  }[];
  onPurchase: (
    tributeType: "toy",
    itemId: string,
    itemName: string
  ) => void;
}

const ToyTributeCard = ({ toyOptions, onPurchase }: ToyTributeCardProps) => {
  return (
    <Card className="bg-black border border-gray-800 text-white hover:border-gray-700 transition-colors overflow-hidden">
      <div className="border-b border-gray-800 p-6 flex flex-col items-center">
        <Package className="w-10 h-10 mb-4 text-yellow-400" />
        <h3 className="text-xl font-medium text-white">Leave a Toy</h3>
        <p className="text-gray-400 text-center text-sm mt-2">
          Share a toy your pet would love.
        </p>
      </div>
      
      <CardContent className="p-6">
        <ul className="space-y-4 mb-6">
          {toyOptions.map((option) => (
            <li key={option.id} className="flex justify-between items-center">
              <div>
                <p className="text-white">{option.name}</p>
                <p className="text-xs text-gray-400">{option.description}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-700 hover:bg-gray-800 text-white"
                onClick={() => onPurchase("toy", option.id, option.name)}
              >
                {option.price === 0 ? "Free" : `$${option.price.toFixed(2)}`}
              </Button>
            </li>
          ))}
        </ul>
        
        <Link to="/toy-tribute">
          <Button className="w-full bg-yellow-700 hover:bg-yellow-800">
            Leave a Toy →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToyTributeCard;
