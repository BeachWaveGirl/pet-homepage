
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PetInfoFieldsProps {
  petName: string;
  petType: string;
  petBirthDate: string;
  petPassingDate: string;
  petMessage: string;
  onPetNameChange: (value: string) => void;
  onPetTypeChange: (value: string) => void;
  onPetBirthDateChange: (value: string) => void;
  onPetPassingDateChange: (value: string) => void;
  onPetMessageChange: (value: string) => void;
}

const PetInfoFields = ({
  petName,
  petType,
  petBirthDate,
  petPassingDate,
  petMessage,
  onPetNameChange,
  onPetTypeChange,
  onPetBirthDateChange,
  onPetPassingDateChange,
  onPetMessageChange
}: PetInfoFieldsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="pet-name">Pet's Name</Label>
        <Input
          id="pet-name"
          value={petName}
          onChange={(e) => onPetNameChange(e.target.value)}
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
          onChange={(e) => onPetTypeChange(e.target.value)}
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
            onChange={(e) => onPetBirthDateChange(e.target.value)}
            className="bg-black border-gray-800 text-white"
          />
        </div>
        <div>
          <Label htmlFor="passing-date">Passing Date</Label>
          <Input
            id="passing-date"
            type="date"
            value={petPassingDate}
            onChange={(e) => onPetPassingDateChange(e.target.value)}
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
          onChange={(e) => onPetMessageChange(e.target.value)}
          placeholder="Share your favorite memories or a special message..."
          rows={4}
          className="bg-black border-gray-800 text-white placeholder:text-gray-600"
        />
      </div>
    </div>
  );
};

export default PetInfoFields;
