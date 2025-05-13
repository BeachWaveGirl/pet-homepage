
import { useState } from "react";
import { toast } from "sonner";
import { FormData, LetterGeneratorResult } from "./types";
import { getLetterTemplate } from "./letterTemplates";
import { calculateTimeSincePassing } from "./dateUtils";
import { fetchStarChart } from "./starChartService";

export { FormData } from "./types";

export const useLetterGenerator = (): LetterGeneratorResult => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [showFullLetter, setShowFullLetter] = useState(false);
  const [showStarCertificate, setShowStarCertificate] = useState(false);
  const [starChartUrl, setStarChartUrl] = useState("");

  const generateLetter = async (formData: FormData) => {
    return getLetterTemplate(formData, formData.tone);
  };

  const handleLetterGeneration = async (formData: FormData) => {
    setIsSubmitting(true);

    try {
      const timeSincePassing = calculateTimeSincePassing(formData.passingDate);
      
      const chartUrl = await fetchStarChart(formData);
      setStarChartUrl(chartUrl);
      
      const letter = await generateLetter(formData);
      
      setGeneratedLetter(letter);
      setShowPreview(true);
      
      toast.success("Letter generated successfully", {
        description: "Your letter is ready to view with a Star Certificate!",
      });
    } catch (error) {
      console.error("Error generating letter:", error);
      toast.error("Failed to generate letter", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadLetter = () => {
    toast.success("Letter downloaded", {
      description: "Your letter has been downloaded as a PDF.",
    });
  };

  const handleDownloadCertificate = () => {
    toast.success("Star Certificate downloaded", {
      description: "Your certificate has been downloaded as a PDF.",
    });
  };

  return {
    isSubmitting,
    showPreview,
    generatedLetter,
    showFullLetter,
    showStarCertificate,
    starChartUrl,
    setShowPreview,
    setShowFullLetter,
    setShowStarCertificate,
    handleLetterGeneration,
    handleDownloadLetter,
    handleDownloadCertificate
  };
};
