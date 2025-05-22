
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemorialForm } from "./hooks/useMemorialForm";
import PhotoUploadField from "./MemorialForm/PhotoUploadField";
import PetInfoFields from "./MemorialForm/PetInfoFields";
import type { MemorialData } from "./MemorialForm/types";

interface MemorialFormProps {
  onSubmit: (memorialData: MemorialData) => void;
  isSubmitting: boolean;
}

const MemorialForm = (props: MemorialFormProps) => {
  const {
    petName,
    petType,
    petBirthDate,
    petPassingDate,
    petMessage,
    petPhoto,
    setPetName,
    setPetType,
    setPetBirthDate,
    setPetPassingDate,
    setPetMessage,
    setPetPhoto,
    handleSubmit,
    isSubmitting
  } = useMemorialForm(props);

  return (
    <div>
      <h2 className="text-xl font-playfair mb-6 flex items-center">
        <Star className="mr-2 h-5 w-5 text-gray-300" />
        Pet Information
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6" id="letter-form">
        {/* Pet Photo Upload */}
        <PhotoUploadField
          petPhoto={petPhoto}
          onChange={setPetPhoto}
        />
        
        {/* Pet Information */}
        <PetInfoFields
          petName={petName}
          petType={petType}
          petBirthDate={petBirthDate}
          petPassingDate={petPassingDate}
          petMessage={petMessage}
          onPetNameChange={setPetName}
          onPetTypeChange={setPetType}
          onPetBirthDateChange={setPetBirthDate}
          onPetPassingDateChange={setPetPassingDate}
          onPetMessageChange={setPetMessage}
        />
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white hover:bg-gray-300 text-black border border-gray-800"
        >
          {isSubmitting ? "Creating Star Memorial..." : "Transform to Star"}
        </Button>
      </form>
    </div>
  );
};

export default MemorialForm;
