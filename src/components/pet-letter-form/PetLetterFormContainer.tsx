
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import PetPhotoUpload from "./PetPhotoUpload";
import PetInformationFields from "./PetInformationFields";
import StarCertificateOption from "./StarCertificateOption";
import LetterPreviewTeaser from "./LetterPreviewTeaser";
import FormFooter from "./FormFooter";
import LetterDisplay from "../LetterDisplay";
import StarCertificate from "../StarCertificate";
import { useLetterGenerator, FormData } from "./useLetterGenerator";
import { toast } from "sonner";

const PetLetterFormContainer = () => {
  const [formData, setFormData] = useState<FormData>({
    petName: "",
    species: "",
    ownerName: "",
    petPersonality: "",
    sharedMemories: "",
    timeSincePassing: "",
    tone: "classic",
    photoUrl: "",
    includeStar: false
  });

  const {
    isSubmitting,
    showPreview,
    generatedLetter,
    showFullLetter,
    showStarCertificate,
    setShowPreview,
    setShowFullLetter,
    setShowStarCertificate,
    handleLetterGeneration,
    handleDownloadLetter,
    handleDownloadCertificate
  } = useLetterGenerator();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, includeStar: checked }));
    if (checked) {
      toast.success("Star Certificate added!", {
        description: "A beautiful certificate will be created with your letter."
      });
    }
  };

  const handlePhotoChange = (url: string) => {
    setFormData(prev => ({ ...prev, photoUrl: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLetterGeneration(formData);
  };

  const handlePreviewConfirm = () => {
    setShowPreview(false);
    setShowFullLetter(true);
  };

  const handleViewStarCertificate = () => {
    setShowStarCertificate(true);
  };

  return (
    <section className="w-full py-16 px-4 md:py-20" id="letter-form">
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

              <StarCertificateOption
                petName={formData.petName}
                isChecked={formData.includeStar}
                onCheckChange={handleCheckboxChange}
              />
              
              {showPreview && (
                <LetterPreviewTeaser 
                  formData={formData}
                  onPreviewConfirm={handlePreviewConfirm} 
                />
              )}
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Generating Your Letter..." : showPreview ? "Regenerate Letter" : "Generate Letter"}
                </Button>
              </div>
            </form>
          </CardContent>
          
          <FormFooter />
        </Card>
      </div>
      
      {showFullLetter && (
        <LetterDisplay 
          letter={generatedLetter}
          petName={formData.petName}
          ownerName={formData.ownerName}
          photoUrl={formData.photoUrl}
          onClose={() => setShowFullLetter(false)}
          onDownload={handleDownloadLetter}
          showStarButton={formData.includeStar}
          onStarClick={handleViewStarCertificate}
        />
      )}

      {showStarCertificate && (
        <StarCertificate 
          petName={formData.petName}
          ownerName={formData.ownerName}
          photoUrl={formData.photoUrl}
          onClose={() => setShowStarCertificate(false)}
          onDownload={handleDownloadCertificate}
        />
      )}
    </section>
  );
};

export default PetLetterFormContainer;
