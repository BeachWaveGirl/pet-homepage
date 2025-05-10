
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PetPhotoUploadProps {
  photoUrl: string;
  onPhotoChange: (url: string) => void;
}

const PetPhotoUpload = ({ photoUrl, onPhotoChange }: PetPhotoUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      onPhotoChange(url);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="photo">Pet's Photo (Optional)</Label>
      <Input
        id="photo"
        name="photo"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="cursor-pointer"
      />
      {photoUrl && (
        <div className="mt-2 flex justify-center">
          <div className="w-32 h-32 rounded-lg overflow-hidden">
            <img 
              src={photoUrl} 
              alt="Pet preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PetPhotoUpload;
