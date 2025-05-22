
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/StarMemorial/PageTitle";
import MemorialSuccess from "@/components/StarMemorial/MemorialSuccess";
import MemorialsList from "@/components/StarMemorial/MemorialsList";
import FullScreenStarBg from "@/components/StarMemorial/FullScreenStarBg";
import MemorialTributes from "@/components/StarMemorial/MemorialTributes";
import MemorialCreationForm from "@/components/StarMemorial/CreateMemorial/MemorialCreationForm";
import { useMemorialCreation } from "@/components/StarMemorial/hooks/useMemorialCreation";

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
  // Use the custom hook to manage memorial creation state and functions
  const {
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
  } = useMemorialCreation({ pricingTiers });
  
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
            <MemorialCreationForm 
              isSubmitting={isSubmitting}
              showPricing={showPricing}
              selectedTierId={selectedTierId}
              memorialData={memorialData}
              pricingTiers={pricingTiers}
              onFormSubmit={handleSubmit}
              onTierSelect={setSelectedTierId}
              onCompleteSubmission={handleCompleteSubmission}
              onBackToForm={handleBackToForm}
            />
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
      
      {/* Add Memorial Tributes Section */}
      <MemorialTributes 
        petName={currentMemorial?.petName} 
        petPhoto={currentMemorial?.petPhoto}
      />
      
      <Footer />
    </div>
  );
};

export default StarMemorialPage;
