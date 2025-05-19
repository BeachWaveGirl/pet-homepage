
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/StarMemorial/PageTitle";
import MemorialForm from "@/components/StarMemorial/MemorialForm";
import MemorialSuccess from "@/components/StarMemorial/MemorialSuccess";
import MemorialsList from "@/components/StarMemorial/MemorialsList";
import FullScreenStarBg from "@/components/StarMemorial/FullScreenStarBg";
import PricingTierSelect from "@/components/StarMemorial/PricingTierSelect";
import type { MemorialData } from "@/components/StarMemorial/MemorialForm";
import { Card } from "@/components/ui/card";

// Define pricing tiers
const pricingTiers = [
  {
    id: "one-month",
    name: "1 Month",
    duration: "30 days",
    price: 4.99,
    description: "Perfect for a short-term memorial during the initial grieving period."
  },
  {
    id: "six-months",
    name: "6 Months",
    duration: "180 days",
    price: 19.99,
    description: "Extended memorial to celebrate special occasions and memories.",
    isPopular: true
  },
  {
    id: "forever",
    name: "Forever",
    duration: "Permanent",
    price: 49.99,
    description: "A lasting tribute that never expires. Honor them eternally."
  }
];

const StarMemorialPage = () => {
  // State for memorial creation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memorialCreated, setMemorialCreated] = useState(false);
  const [currentMemorial, setCurrentMemorial] = useState<(MemorialData & { id: string, createdAt: string }) | null>(null);
  const [allMemorials, setAllMemorials] = useState<Array<MemorialData & { id: string, createdAt: string }>>([]);
  const [selectedTierId, setSelectedTierId] = useState("six-months");
  
  // Handle form submission
  const handleSubmit = (memorialData: MemorialData) => {
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
  
  // Function to animate pet transformation into a star
  const animateStarTransformation = () => {
    // This would be implemented with more complex canvas or WebGL animations
    console.log("Pet transformed into star animation would play here");
  };

  // Reset form fields after successful submission
  const handleCreateAnother = () => {
    setMemorialCreated(false);
    setCurrentMemorial(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col text-white relative">
      <Header />
      <FullScreenStarBg />
      
      <main className="flex-grow pt-24 px-4 pb-12 mt-4 flex items-center justify-center relative z-10">
        <div className="container mx-auto max-w-4xl">
          <PageTitle 
            title="Create a Memorial" 
            description="Transform your beloved pet into an eternal star in our interactive night sky"
          />
          
          {!memorialCreated ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="bg-black border-gray-800 text-white shadow-xl p-6">
                <MemorialForm 
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              </Card>
              
              <Card className="bg-black border-gray-800 text-white shadow-xl p-6">
                <PricingTierSelect 
                  tiers={pricingTiers}
                  selectedTierId={selectedTierId}
                  onSelect={setSelectedTierId}
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
              </Card>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              {currentMemorial && (
                <MemorialSuccess
                  petName={currentMemorial.petName}
                  petPhoto={currentMemorial.petPhoto}
                  petPassingDate={currentMemorial.petPassingDate}
                  onCreateAnother={handleCreateAnother}
                />
              )}
            </div>
          )}
          
          {/* All Memorials Section */}
          <MemorialsList memorials={allMemorials} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StarMemorialPage;
