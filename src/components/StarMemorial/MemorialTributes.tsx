
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Flower, Package } from "lucide-react";
import { toast } from "sonner";

// Define the tribute item types
type TributeItemType = "candle" | "flower" | "toy";

// Define the tribute options with their durations/types and prices
const tributeOptions = {
  candle: [
    { id: "candle-free", name: "Remembrance Candle", duration: "24 hours", price: 0 },
    { id: "candle-1", name: "One Day Candle", duration: "1 day", price: 0.99 },
    { id: "candle-3", name: "Three Day Candle", duration: "3 days", price: 1.99 },
    { id: "candle-30", name: "Thirty Day Candle", duration: "30 days", price: 4.99 },
    { id: "candle-100", name: "One Hundred Day Candle", duration: "100 days", price: 9.99 }
  ],
  flower: [
    { id: "flower-free", name: "Memorial Daisy", type: "Daisy", price: 0 },
    { id: "flower-forget", name: "Forget-Me-Not Posy", type: "Forget-Me-Not", price: 0.99 },
    { id: "flower-lily", name: "Pure Lilies Bouquet", type: "Lilies", price: 1.99 },
    { id: "flower-rose", name: "Eternal Roses", type: "Roses", price: 1.99 },
    { id: "flower-orchid", name: "Orchid Elegance", type: "Orchids", price: 2.99 }
  ],
  toy: [
    { id: "toy-free", name: "Simple Ball", description: "A basic pet ball", price: 0 },
    { id: "toy-ball", name: "Playful Ball", description: "A colorful ball", price: 1.99 },
    { id: "toy-plush", name: "Soft Plushie", description: "A cuddly plush toy", price: 3.99 },
    { id: "toy-rope", name: "Tug Rope", description: "A durable rope toy", price: 2.49 },
    { id: "toy-mouse", name: "Catnip Mouse", description: "A mouse toy with catnip", price: 2.99 }
  ]
};

interface MemorialTributesProps {
  petName?: string;
}

const MemorialTributes = ({ petName = "your pet" }: MemorialTributesProps) => {
  const [selectedType, setSelectedType] = useState<TributeItemType>("candle");
  
  const handlePurchase = (itemId: string, itemName: string) => {
    toast.success(`Added to memorial: ${itemName}`, {
      description: "Your tribute will appear on your pet's memorial soon"
    });
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
          {/* Candle Tribute Card */}
          <Card className="bg-black border border-gray-800 text-white hover:border-gray-700 transition-colors overflow-hidden">
            <div className="border-b border-gray-800 p-6 flex flex-col items-center">
              <Flame className="w-10 h-10 mb-4 text-amber-400" />
              <h3 className="text-xl font-medium text-white">Light a Candle</h3>
              <p className="text-gray-400 text-center text-sm mt-2">
                Let a gentle flame shine in memory of your beloved pet.
              </p>
            </div>
            
            <CardContent className="p-6">
              <ul className="space-y-4 mb-6">
                {tributeOptions.candle.map((option) => (
                  <li key={option.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-white">{option.name}</p>
                      <p className="text-xs text-gray-400">Glows for {option.duration}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-700 hover:bg-gray-800 text-white"
                      onClick={() => handlePurchase(option.id, option.name)}
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
          
          {/* Flower Tribute Card */}
          <Card className="bg-black border border-gray-800 text-white hover:border-gray-700 transition-colors overflow-hidden">
            <div className="border-b border-gray-800 p-6 flex flex-col items-center">
              <Flower className="w-10 h-10 mb-4 text-pink-400" />
              <h3 className="text-xl font-medium text-white">Offer Flowers</h3>
              <p className="text-gray-400 text-center text-sm mt-2">
                Place a beautiful bouquet by your pet's star.
              </p>
            </div>
            
            <CardContent className="p-6">
              <ul className="space-y-4 mb-6">
                {tributeOptions.flower.map((option) => (
                  <li key={option.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-white">{option.name}</p>
                      <p className="text-xs text-gray-400">{option.type}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-700 hover:bg-gray-800 text-white"
                      onClick={() => handlePurchase(option.id, option.name)}
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
          
          {/* Toys Tribute Card */}
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
                {tributeOptions.toy.map((option) => (
                  <li key={option.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-white">{option.name}</p>
                      <p className="text-xs text-gray-400">{option.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-700 hover:bg-gray-800 text-white"
                      onClick={() => handlePurchase(option.id, option.name)}
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
        </div>

        {/* Banner for Special Promotion */}
        <div className="mt-12">
          <Link to="/special-tribute-collection">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition-all">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">Special Memorial Collection</h3>
                <p className="text-gray-300">Create a complete tribute with our curated memorial package at a special price</p>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200">
                Explore Collection → 
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MemorialTributes;
