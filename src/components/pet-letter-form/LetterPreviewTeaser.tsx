
import { Button } from "@/components/ui/button";

interface LetterPreviewTeaserProps {
  formData: {
    photoUrl: string;
    petName: string;
    ownerName: string;
    sharedMemories: string;
  };
  onPreviewConfirm: () => void;
}

const LetterPreviewTeaser = ({ formData, onPreviewConfirm }: LetterPreviewTeaserProps) => {
  return (
    <div className="mt-4 p-4 bg-offwhite rounded-md border border-gray-200">
      <div className="flex items-center gap-3 mb-3">
        {formData.photoUrl && (
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={formData.photoUrl} alt={formData.petName} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-playfair text-lg">A letter from {formData.petName}</p>
          <p className="text-sm text-gray-500">to {formData.ownerName || "their human"}</p>
        </div>
      </div>
      <div className="font-playfair italic text-gray-700 mb-3">
        <p>Dear {formData.ownerName || "my beloved human"},</p>
        <p>It's me, {formData.petName}. I've been thinking about our time together...</p>
        <div className="blur-sm my-2">
          <p>I miss our {formData.sharedMemories} so much. Remember how we used to...</p>
        </div>
      </div>
      <Button 
        className="w-full mt-2 bg-black hover:bg-gray-800"
        onClick={onPreviewConfirm}
      >
        Unlock Full Letter
      </Button>
    </div>
  );
};

export default LetterPreviewTeaser;
