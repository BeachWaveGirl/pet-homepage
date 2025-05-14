
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
  generatedLetter: string;
  showStarCertificate: boolean;
  starChartUrl: string;
  setShowStarCertificate: (show: boolean) => void;
  handleLetterGeneration: (formData: FormData) => Promise<void>;
  handleDownloadCertificate: () => void;
}
