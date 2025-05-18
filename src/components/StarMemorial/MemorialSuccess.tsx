
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";

interface MemorialSuccessProps {
  petName: string;
  petPhoto: string | null;
  petPassingDate: string;
  onCreateAnother: () => void;
}

const MemorialSuccess = ({ petName, petPhoto, petPassingDate, onCreateAnother }: MemorialSuccessProps) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/90 backdrop-blur-sm p-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-center"
      >
        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border border-gray-700 shadow-xl">
          {petPhoto && <img src={petPhoto} alt={petName} className="w-full h-full object-cover" />}
        </div>
        
        <h2 className="text-3xl font-playfair font-bold mb-2">{petName}</h2>
        <p className="text-gray-400 mb-6">
          {petPassingDate ? new Date(petPassingDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) : ""}
        </p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <Button className="bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white">
            <Star className="mr-2 h-4 w-4" />
            View Memorial
          </Button>
          <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-900">
            <Heart className="mr-2 h-4 w-4" />
            Send Light
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          {petName}'s star will shine brightly in our celestial memorial sky forever.
          Visit anytime to send light and remember your beloved companion.
        </p>
        
        <Button 
          onClick={onCreateAnother} 
          variant="outline" 
          className="mt-6 border-gray-800 text-white hover:bg-gray-900"
        >
          Create Another Memorial
        </Button>
      </motion.div>
    </div>
  );
};

export default MemorialSuccess;
