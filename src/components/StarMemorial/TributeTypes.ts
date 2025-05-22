
export interface TributeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tributeType: "candle" | "flower" | "toy";
  tributeName: string;
  duration?: string;
  petName?: string;
  petPhoto?: string | null;
  price: number;
}

export interface TributeStepProps {
  tributeType: "candle" | "flower" | "toy";
  tributeName: string;
  duration?: string;
  petName?: string;
  petPhoto?: string | null;
  price: number;
  onContinue: () => void;
}

export interface TributeMessageStepProps extends TributeStepProps {
  message: string;
  setMessage: (message: string) => void;
}

export interface TributeResultStepProps extends TributeStepProps {
  message: string;
  timeRemaining: string;
  onShare: () => void;
  onVisitStar: () => void;
  onClose: () => void;
  isSharing: boolean;
}
