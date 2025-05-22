
import { useState } from "react";
import { toast } from "sonner";
import type { MemorialData } from "@/components/StarMemorial/MemorialForm/types";
import { animateStarTransformation } from "../StarAnimation";

interface UseMemorialCreationProps {
  pricingTiers: Array<{
    id: string;
    name: string;
    duration: string;
    price: number;
    description: string;
    isPopular?: boolean;
  }>;
}

export const useMemorialCreation = ({ pricingTiers }: UseMemorialCreationProps) => {
  // State for memorial creation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memorialCreated, setMemorialCreated] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [currentMemorial, setCurrentMemorial] = useState<(MemorialData & { id: string, createdAt: string }) | null>(null);
  const [allMemorials, setAllMemorials] = useState<Array<MemorialData & { id: string, createdAt: string }>>([]);
  const [selectedTierId, setSelectedTierId] = useState("six-months");
  const [memorialData, setMemorialData] = useState<MemorialData | null>(null);
  
  // Handle form submission
  const handleSubmit = (data: MemorialData) => {
    // Store the memorial data and show pricing options
    setMemorialData(data);
    setShowPricing(true);
  };

  // Handle complete submission with pricing
  const handleCompleteSubmission = () => {
    if (!memorialData) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setMemorialCreated(true);
      
      // Get the selected tier
      const selectedTier = pricingTiers.find(tier => tier.id === selectedTierId);
      
      // Create new memorial object with ID, timestamp and tier info
      const newMemorial = {
        ...memorialData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        tier: selectedTierId,
        price: selectedTier?.price || 0
      };
      
      // Set as current memorial and add to memorials list
      setCurrentMemorial(newMemorial);
      setAllMemorials(prev => [newMemorial, ...prev]);
      
      toast.success("Memorial Created", {
        description: `${memorialData.petName} has been transformed into a beautiful star in our celestial map.`
      });
      
      // Animate the canvas to show the pet becoming a star
      animateStarTransformation();
    }, 1500);
  };

  // Reset form fields after successful submission
  const handleCreateAnother = () => {
    setMemorialCreated(false);
    setCurrentMemorial(null);
    setShowPricing(false);
    setMemorialData(null);
  };

  // Go back to form from pricing step
  const handleBackToForm = () => {
    setShowPricing(false);
  };

  return {
    isSubmitting,
    memorialCreated,
    showPricing,
    currentMemorial,
    allMemorials,
    selectedTierId,
    memorialData,
    handleSubmit,
    handleCompleteSubmission,
    handleCreateAnother,
    handleBackToForm,
    setSelectedTierId
  };
};
