
export interface FormData {
  petName: string;
  species: string;
  ownerName: string;
  petPersonality: string;
  sharedMemories: string;
  passingDate: Date | undefined;
  tone: string;
  photoUrl: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface LetterGeneratorResult {
  isSubmitting: boolean;
  showPreview: boolean;
  generatedLetter: string;
  showFullLetter: boolean;
  showStarCertificate: boolean;
  starChartUrl: string;
  setShowPreview: (show: boolean) => void;
  setShowFullLetter: (show: boolean) => void;
  setShowStarCertificate: (show: boolean) => void;
  handleLetterGeneration: (formData: FormData) => Promise<void>;
  handleDownloadLetter: () => void;
  handleDownloadCertificate: () => void;
}
