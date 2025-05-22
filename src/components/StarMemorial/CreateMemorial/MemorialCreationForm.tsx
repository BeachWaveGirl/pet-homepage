
import { useState } from "react";
import { Card } from "@/components/ui/card";
import MemorialForm from "@/components/StarMemorial/MemorialForm";
import PricingTierSelect from "@/components/StarMemorial/PricingTierSelect";
import type { MemorialData } from "@/components/StarMemorial/MemorialForm";

interface MemorialCreationFormProps {
  isSubmitting: boolean;
  showPricing: boolean;
  selectedTierId: string;
  memorialData: MemorialData | null;
  pricingTiers: Array<{
    id: string;
    name: string;
    duration: string;
    price: number;
    description: string;
    isPopular?: boolean;
  }>;
  onFormSubmit: (data: MemorialData) => void;
  onTierSelect: (id: string) => void;
  onCompleteSubmission: () => void;
  onBackToForm: () => void;
}

const MemorialCreationForm = ({
  isSubmitting,
  showPricing,
  selectedTierId,
  memorialData,
  pricingTiers,
  onFormSubmit,
  onTierSelect,
  onCompleteSubmission,
  onBackToForm
}: MemorialCreationFormProps) => {
  return (
    <>
      {!showPricing ? (
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          <Card className="bg-black border-gray-800 text-white shadow-xl p-6">
            <MemorialForm 
              onSubmit={onFormSubmit}
              isSubmitting={isSubmitting}
            />
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="bg-black border-gray-800 text-white shadow-xl p-6">
            <h2 className="text-xl font-playfair mb-6 flex items-center">
              How long would you like to keep your pet's star shining?
            </h2>
            
            <PricingTierSelect 
              tiers={pricingTiers}
              selectedTierId={selectedTierId}
              onSelect={onTierSelect}
            />
            
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-2">Your memorial includes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Interactive star display with your pet's name</li>
                <li>Personalized memorial message</li>
                <li>Shareable memorial link</li>
                <li>Digital certificate</li>
              </ul>
            </div>
            
            <p className="mt-4 text-sm text-gray-400 italic">
              You can always upgrade later to keep your star shining longer.
            </p>
            
            <div className="mt-6 flex gap-3">
              <button 
                onClick={onBackToForm}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
              >
                Back
              </button>
              <button 
                onClick={onCompleteSubmission}
                className="flex-1 px-4 py-2 bg-white hover:bg-gray-200 text-black rounded-md transition-colors"
              >
                Create Memorial
              </button>
            </div>
          </Card>
          
          <Card className="bg-black border-gray-800 text-white shadow-xl p-6">
            {memorialData && (
              <div>
                <h3 className="text-lg font-medium mb-4">Memorial Preview</h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="font-medium text-white mb-2">{memorialData.petName}</p>
                  {memorialData.petPhoto && (
                    <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-4">
                      <img 
                        src={memorialData.petPhoto} 
                        alt={memorialData.petName} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-gray-400 text-sm">
                    {memorialData.petType && `${memorialData.petType} • `}
                    {memorialData.petBirthDate && new Date(memorialData.petBirthDate).toLocaleDateString()} 
                    {memorialData.petBirthDate && memorialData.petPassingDate && " - "}
                    {memorialData.petPassingDate && new Date(memorialData.petPassingDate).toLocaleDateString()}
                  </p>
                  {memorialData.petMessage && (
                    <p className="mt-4 text-gray-300 italic">"{memorialData.petMessage}"</p>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default MemorialCreationForm;
