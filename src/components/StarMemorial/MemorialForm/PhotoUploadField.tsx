
import { useState } from "react";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PhotoUploadFieldProps {
  petPhoto: string | null;
  onChange: (photo: string | null) => void;
}

const PhotoUploadField = ({ petPhoto, onChange }: PhotoUploadFieldProps) => {
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
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
  );
};

export default PhotoUploadField;
