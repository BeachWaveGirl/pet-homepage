
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PetInformationFieldsProps {
  formData: {
    petName: string;
    species: string;
    ownerName: string;
    petPersonality: string;
    sharedMemories: string;
    timeSincePassing: string;
    tone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const PetInformationFields = ({ 
  formData, 
  handleChange, 
  handleSelectChange 
}: PetInformationFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="petName">Pet's Name</Label>
          <Input
            id="petName"
            name="petName"
            placeholder="e.g., Fluffy"
            value={formData.petName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="species">Species/Breed</Label>
          <Input
            id="species"
            name="species"
            placeholder="e.g., Golden Retriever"
            value={formData.species}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="ownerName">Your Name</Label>
        <Input
          id="ownerName"
          name="ownerName"
          placeholder="e.g., Emma (or leave blank for 'my human')"
          value={formData.ownerName}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="petPersonality">Pet's Personality</Label>
        <Textarea
          id="petPersonality"
          name="petPersonality"
          placeholder="e.g., Loyal, silly, always wanted belly rubs"
          value={formData.petPersonality}
          onChange={handleChange}
          required
          className="min-h-[80px]"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="sharedMemories">Shared Memories</Label>
        <Textarea
          id="sharedMemories"
          name="sharedMemories"
          placeholder="e.g., Long walks in the park, cuddling on couch, chasing birds"
          value={formData.sharedMemories}
          onChange={handleChange}
          required
          className="min-h-[100px]"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="timeSincePassing">Time Since Passing</Label>
          <Input
            id="timeSincePassing"
            name="timeSincePassing"
            placeholder="e.g., 3 months"
            value={formData.timeSincePassing}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tone">Letter Tone</Label>
          <Select
            value={formData.tone}
            onValueChange={(value) => handleSelectChange("tone", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="classic">🕊️ Classic / Comforting</SelectItem>
              <SelectItem value="funny">🐾 Funny / Silly</SelectItem>
              <SelectItem value="gratitude">💌 Thank You / Gratitude</SelectItem>
              <SelectItem value="spiritual">🌈 Spiritual / Rainbow Bridge</SelectItem>
              <SelectItem value="poetic">✨ Poetic / Flowery</SelectItem>
              <SelectItem value="storybook">📜 Storybook / Formal</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default PetInformationFields;
