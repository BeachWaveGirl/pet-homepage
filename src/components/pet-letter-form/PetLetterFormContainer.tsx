
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import PetPhotoUpload from "./PetPhotoUpload";
import PetInformationFields from "./PetInformationFields";
import PassingDatePicker from "./PassingDatePicker";
import FormFooter from "./FormFooter";
import StarCertificate from "../StarCertificate";
import { useLetterGenerator } from "./useLetterGenerator";
import { FormData } from "./types";
import { toast } from "sonner";

const PetLetterFormContainer = () => {
  const [formData, setFormData] = useState<FormData>({
    petName: "",
    species: "",
    ownerName: "",
    petPersonality: "",
    sharedMemories: "",
    passingDate: undefined,
    tone: "classic",
    photoUrl: "",
    location: {
      latitude: 37.7749,
      longitude: -122.4194
    }
  });

  const {
    isSubmitting,
    starChartUrl,
    generatedLetter,
    showStarCertificate,
    setShowStarCertificate,
    handleLetterGeneration,
    handleDownloadCertificate
  } = useLetterGenerator();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, passingDate: date }));
    if (date) {
      toast.success("Date selected", {
        description: "We'll create a beautiful star chart for this date."
      });
    }
  };

  const handlePhotoChange = (url: string) => {
    setFormData(prev => ({ ...prev, photoUrl: url }));
  };

  // Get user location for star chart
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData(prev => ({
          ...prev,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        }));
        
        toast.success("Location detected", {
          description: "Your local sky coordinates will be used for the star chart."
        });
      }, () => {
        console.log("Unable to get location, using default");
      });
    }
  };

  // Try to get user location when component mounts
  useEffect(() => {
    getUserLocation();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate the letter and show star certificate directly
    await handleLetterGeneration(formData);
    setShowStarCertificate(true);
  };

  return (
    <section className="w-full py-8 px-4" id="letter-form">
      <div className="container max-w-2xl mx-auto">
        <Card className="bg-white border border-gray-200 shadow-md">
          <FormHeader />
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <PetPhotoUpload 
                photoUrl={formData.photoUrl} 
                onPhotoChange={handlePhotoChange}
              />
              
              <PetInformationFields
                formData={formData}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
              />

              <PassingDatePicker
                petName={formData.petName}
                date={formData.passingDate}
                onDateChange={handleDateChange}
              />
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Generating Your Poster..." : "Generate Poster"}
                </Button>
              </div>
            </form>
          </CardContent>
          
          <FormFooter />
        </Card>
      </div>
      
      {showStarCertificate && (
        <StarCertificate 
          petName={formData.petName}
          ownerName={formData.ownerName}
          photoUrl={formData.photoUrl}
          passingDate={formData.passingDate}
          starChartUrl={starChartUrl}
          letterText={generatedLetter}
          onClose={() => setShowStarCertificate(false)}
          onDownload={handleDownloadCertificate}
        />
      )}
    </section>
  );
};

export default PetLetterFormContainer;
