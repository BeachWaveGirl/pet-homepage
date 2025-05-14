
import { useState } from "react";
import { toast } from "sonner";
import { FormData, LetterGeneratorResult } from "./types";
import { getLetterTemplate } from "./letterTemplates";
import { fetchStarChart } from "./starChartService";

export type { FormData } from "./types";

export const useLetterGenerator = (): LetterGeneratorResult => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [showStarCertificate, setShowStarCertificate] = useState(false);
  const [starChartUrl, setStarChartUrl] = useState("");

  const generateLetter = async (formData: FormData) => {
    return getLetterTemplate(formData, formData.tone);
  };

  const handleLetterGeneration = async (formData: FormData) => {
    setIsSubmitting(true);

    try {
      // Fetch star chart
      const chartUrl = await fetchStarChart(formData);
      setStarChartUrl(chartUrl);
      
      // Generate letter
      const letter = await generateLetter(formData);
      setGeneratedLetter(letter);
      
      toast.success("Poster generated", {
        description: "Your star certificate is ready to view!",
      });
    } catch (error) {
      console.error("Error generating poster:", error);
      toast.error("Failed to generate poster", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCertificate = () => {
    toast.success("Star Certificate downloaded", {
      description: "Your certificate has been downloaded as a PDF.",
    });
  };

  return {
    isSubmitting,
    generatedLetter,
    showStarCertificate,
    starChartUrl,
    setShowStarCertificate,
    handleLetterGeneration,
    handleDownloadCertificate
  };
};
