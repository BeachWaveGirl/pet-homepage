
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Upload } from "lucide-react";

interface MemorialFormProps {
  onSubmit: (memorialData: MemorialData) => void;
  isSubmitting: boolean;
}

export interface MemorialData {
  petName: string;
  petType: string;
  petBirthDate: string;
  petPassingDate: string;
  petMessage: string;
  petPhoto: string | null;
}

const MemorialForm = ({ onSubmit, isSubmitting }: MemorialFormProps) => {
  // State for memorial creation form
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");
  const [petPassingDate, setPetPassingDate] = useState("");
  const [petMessage, setPetMessage] = useState("");
  const [petPhoto, setPetPhoto] = useState<string | null>(null);
  
  // Handle file upload for pet photo
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setPetPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new memorial object
    const memorialData: MemorialData = {
      petName,
      petType,
      petBirthDate,
      petPassingDate,
      petMessage,
      petPhoto
    };
    
    // Submit the form data
    onSubmit(memorialData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-black border border-gray-800 text-white shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-playfair mb-6 flex items-center">
            <Star className="mr-2 h-5 w-5 text-gray-300" />
            Create Their Star
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6" id="letter-form">
            {/* Pet Photo Upload */}
            <div className="flex flex-col items-center">
              <div className="mb-4 w-32 h-32 rounded-full bg-black flex items-center justify-center overflow-hidden border border-gray-800 relative">
                {petPhoto ? (
                  <img 
                    src={petPhoto} 
                    alt="Pet preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Upload className="h-8 w-8 text-gray-500" />
                )}
              </div>
              <Label 
                htmlFor="pet-photo" 
                className="cursor-pointer py-2 px-4 bg-gray-900 hover:bg-gray-800 rounded-full text-sm flex items-center justify-center transition-colors border border-gray-800"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Pet Photo
              </Label>
              <Input 
                id="pet-photo" 
                type="file" 
                accept="image/*" 
                onChange={handlePhotoUpload}
                className="hidden" 
              />
            </div>
            
            {/* Pet Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="pet-name">Pet's Name</Label>
                <Input
                  id="pet-name"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="e.g., Luna"
                  required
                  className="bg-black border-gray-800 text-white placeholder:text-gray-600"
                />
              </div>
              
              <div>
                <Label htmlFor="pet-type">Type of Pet</Label>
                <Input
                  id="pet-type"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  placeholder="e.g., Dog, Cat, Bird"
                  className="bg-black border-gray-800 text-white placeholder:text-gray-600"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birth-date">Birth Date (optional)</Label>
                  <Input
                    id="birth-date"
                    type="date"
                    value={petBirthDate}
                    onChange={(e) => setPetBirthDate(e.target.value)}
                    className="bg-black border-gray-800 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="passing-date">Passing Date</Label>
                  <Input
                    id="passing-date"
                    type="date"
                    value={petPassingDate}
                    onChange={(e) => setPetPassingDate(e.target.value)}
                    required
                    className="bg-black border-gray-800 text-white"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="pet-message">Memorial Message</Label>
                <Textarea
                  id="pet-message"
                  value={petMessage}
                  onChange={(e) => setPetMessage(e.target.value)}
                  placeholder="Share your favorite memories or a special message..."
                  rows={4}
                  className="bg-black border-gray-800 text-white placeholder:text-gray-600"
                />
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-gray-300 text-black border border-gray-800"
            >
              {isSubmitting ? "Creating Star Memorial..." : "Transform to Star"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MemorialForm;
