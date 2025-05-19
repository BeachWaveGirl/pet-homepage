
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export interface PricingTier {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  isPopular?: boolean;
}

interface PricingTierSelectProps {
  tiers: PricingTier[];
  selectedTierId: string;
  onSelect: (tierId: string) => void;
}

const PricingTierSelect = ({ tiers, selectedTierId, onSelect }: PricingTierSelectProps) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-playfair mb-6 flex items-center">
        How long would you like to keep your pet's star shining?
      </h2>
      
      <RadioGroup 
        value={selectedTierId} 
        onValueChange={onSelect}
        className="grid grid-cols-1 gap-3"
      >
        {tiers.map((tier) => (
          <Label
            key={tier.id}
            htmlFor={tier.id}
            className={`relative flex flex-col p-4 cursor-pointer rounded-lg border border-gray-800 
              ${selectedTierId === tier.id ? 'bg-gray-900 border-gray-600' : 'bg-black'} 
              hover:bg-gray-900 transition-all duration-200`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <RadioGroupItem id={tier.id} value={tier.id} className="mr-3" />
                <div>
                  <span className="font-medium text-white">{tier.name}</span>
                  <span className="text-sm text-gray-400 ml-2">{tier.duration}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-white">${tier.price}</span>
              </div>
            </div>
            
            <p className="mt-2 text-sm text-gray-400 pl-7">{tier.description}</p>
            
            {tier.isPopular && (
              <div className="absolute -top-2 -right-2">
                <span className="bg-white text-black text-xs font-medium py-1 px-2 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PricingTierSelect;
