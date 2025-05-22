
import { useState } from "react";
import type { MemorialData } from "@/components/StarMemorial/MemorialForm/types";

interface UseMemorialFormProps {
  onSubmit: (memorialData: MemorialData) => void;
  isSubmitting: boolean;
}

export const useMemorialForm = ({ onSubmit, isSubmitting }: UseMemorialFormProps) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");
  const [petPassingDate, setPetPassingDate] = useState("");
  const [petMessage, setPetMessage] = useState("");
  const [petPhoto, setPetPhoto] = useState<string | null>(null);
  
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

  return {
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
  };
};
