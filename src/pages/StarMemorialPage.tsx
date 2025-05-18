
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/StarMemorial/PageTitle";
import MemorialForm from "@/components/StarMemorial/MemorialForm";
import StarDisplay from "@/components/StarMemorial/StarDisplay";
import MemorialSuccess from "@/components/StarMemorial/MemorialSuccess";
import MemorialsList from "@/components/StarMemorial/MemorialsList";
import type { MemorialData } from "@/components/StarMemorial/MemorialForm";

const StarMemorialPage = () => {
  // State for memorial creation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memorialCreated, setMemorialCreated] = useState(false);
  const [currentMemorial, setCurrentMemorial] = useState<(MemorialData & { id: string, createdAt: string }) | null>(null);
  const [allMemorials, setAllMemorials] = useState<Array<MemorialData & { id: string, createdAt: string }>>([]);
  
  // Handle form submission
  const handleSubmit = (memorialData: MemorialData) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setMemorialCreated(true);
      
      // Create new memorial object with ID and timestamp
      const newMemorial = {
        ...memorialData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
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
    // For now, we'll display a simpler version
    console.log("Pet transformed into star animation would play here");
  };

  // Reset form fields after successful submission
  const handleCreateAnother = () => {
    setMemorialCreated(false);
    setCurrentMemorial(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-16 px-4 mt-4">
        <div className="container mx-auto max-w-4xl">
          <PageTitle 
            title="Celestial Memorial" 
            description="Transform your beloved pet into an eternal star in our interactive night sky"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Memorial Creation Form */}
            {!memorialCreated && (
              <MemorialForm 
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
            
            {/* Star Canvas Display */}
            <StarDisplay className={memorialCreated ? "col-span-2" : ""}>
              {memorialCreated && currentMemorial && (
                <MemorialSuccess
                  petName={currentMemorial.petName}
                  petPhoto={currentMemorial.petPhoto}
                  petPassingDate={currentMemorial.petPassingDate}
                  onCreateAnother={handleCreateAnother}
                />
              )}
            </StarDisplay>
          </div>
          
          {/* All Memorials Section */}
          <MemorialsList memorials={allMemorials} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StarMemorialPage;
