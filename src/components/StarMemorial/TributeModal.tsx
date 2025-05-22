
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { toast } from "sonner";
import { TributeModalProps } from "./TributeTypes";
import AnimationStep from "./TributeSteps/AnimationStep";
import MessageStep from "./TributeSteps/MessageStep";
import ResultStep from "./TributeSteps/ResultStep";

const TributeModal = ({
  isOpen,
  onClose,
  tributeType,
  tributeName,
  duration = "24 hours",
  petName = "your pet",
  petPhoto = null,
  price
}: TributeModalProps) => {
  const [step, setStep] = useState<"animation" | "message" | "result">("animation");
  const [message, setMessage] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(`${duration} left`);
  
  // Auto-advance from animation step after 2 seconds
  const handleContinue = () => {
    if (step === "animation") {
      setStep("message");
    } else if (step === "message") {
      const flowerEmoji = tributeType === "flower" ? getTributeEmoji(tributeName) : "🕯️";
      toast.success(`Your ${tributeName} was placed for ${petName}. ${flowerEmoji}`, {
        description: "Your tribute will appear for others to see."
      });
      setStep("result");
    }
  };

  const getTributeEmoji = (tributeName: string) => {
    if (tributeName.includes("Daisy")) return "🌼";
    if (tributeName.includes("Forget-Me-Not")) return "🔵";
    if (tributeName.includes("Lilies")) return "🤍";
    if (tributeName.includes("Roses")) return "🌹";
    if (tributeName.includes("Orchid")) return "💜";
    return "💐";
  };

  const handleShare = () => {
    setIsSharing(true);
    setTimeout(() => {
      toast.success("Memorial card saved to your device", {
        description: "You can now share this with friends and family"
      });
      setIsSharing(false);
    }, 1500);
  };

  const handleVisitStar = () => {
    onClose();
    // Would normally navigate to star view
    toast("Navigating to star view");
  };

  const resetAndClose = () => {
    setStep("animation");
    setMessage("");
    onClose();
  };

  const getStepContent = () => {
    const stepProps = {
      tributeType,
      tributeName,
      duration,
      petName,
      petPhoto,
      price,
      onContinue: handleContinue
    };

    switch (step) {
      case "animation":
        return <AnimationStep {...stepProps} />;
      case "message":
        return (
          <MessageStep 
            {...stepProps} 
            message={message} 
            setMessage={setMessage} 
          />
        );
      case "result":
        return (
          <ResultStep 
            {...stepProps}
            message={message}
            timeRemaining={timeRemaining}
            onShare={handleShare}
            onVisitStar={handleVisitStar}
            onClose={resetAndClose}
            isSharing={isSharing}
          />
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="bg-black border border-gray-800 text-white max-w-md">
        <button
          onClick={resetAndClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {getStepContent()}
      </DialogContent>
    </Dialog>
  );
};

export default TributeModal;
