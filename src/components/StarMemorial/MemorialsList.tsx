
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
import { MemorialData } from "./MemorialForm";

interface MemorialsListProps {
  memorials: (MemorialData & { id: string, createdAt: string })[];
}

const MemorialsList = ({ memorials }: MemorialsListProps) => {
  if (memorials.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-16"
    >
      <h2 className="text-2xl font-playfair font-bold mb-6 flex items-center">
        <Star className="mr-2 h-5 w-5 text-gray-300" />
        Your Pet Memorials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memorials.map((memorial) => (
          <Card key={memorial.id} className="bg-black border border-gray-800 text-white shadow-xl overflow-hidden">
            <div className="h-40 bg-gray-900 relative">
              {memorial.petPhoto && (
                <img 
                  src={memorial.petPhoto} 
                  alt={memorial.petName} 
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-playfair font-bold">{memorial.petName}</h3>
              <p className="text-sm text-gray-400">{memorial.petType}</p>
              {memorial.petPassingDate && (
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(memorial.petPassingDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              )}
              {memorial.petMessage && (
                <p className="mt-3 text-sm line-clamp-2">{memorial.petMessage}</p>
              )}
              <div className="flex justify-between mt-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white hover:bg-gray-900"
                >
                  <Star className="mr-1 h-4 w-4" />
                  View
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white hover:bg-gray-900"
                >
                  <Heart className="mr-1 h-4 w-4" />
                  Send Light
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default MemorialsList;
