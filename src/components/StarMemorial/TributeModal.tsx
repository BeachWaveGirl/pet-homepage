
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share, Star, X } from "lucide-react";
import LottieAnimation from "@/components/LottieAnimation";
import { toast } from "sonner";
import candleAnimation from "@/animations/star-animation.json"; // Using star animation for now

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
  
  const handleContinue = () => {
    if (step === "animation") {
      setStep("message");
    } else if (step === "message") {
      toast.success("Your tribute has been placed!");
      setStep("result");
    }
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

  const getTributeIcon = () => {
    switch (tributeType) {
      case "candle":
        return "🕯️";
      case "flower":
        return "💐";
      case "toy":
        return "🧸";
      default:
        return "🌟";
    }
  };

  const getStepContent = () => {
    switch (step) {
      case "animation":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-xl">
                {price === 0 ? 
                  `Placing a ${tributeType} for ${petName}` : 
                  `Purchasing a ${tributeType} for ${petName}`}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center py-8">
              <LottieAnimation
                animationData={candleAnimation}
                className="w-40 h-40"
                loop={true}
              />
              <p className="text-gray-300 mt-4 text-center">
                {tributeType === "candle" 
                  ? "Your candle is being lit and placed beneath the star..." 
                  : tributeType === "flower"
                    ? "Your flowers are being arranged beneath the star..."
                    : "Your toy is being placed beneath the star..."}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <Button onClick={handleContinue}>
                Continue
              </Button>
            </div>
          </>
        );

      case "message":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-xl">
                {`You ${tributeType === "candle" ? "lit" : tributeType === "flower" ? "placed" : "left"} a ${tributeType} for ${petName}`}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center py-6">
              <p className="text-center text-gray-300 mb-6">
                {tributeType === "candle" 
                  ? `It will glow gently for ${duration} under their star ${getTributeIcon()} ✨` 
                  : tributeType === "flower"
                    ? `It will stay beautiful for ${duration} under their star ${getTributeIcon()} ✨`
                    : `It will remain there for ${duration} under their star ${getTributeIcon()} ✨`}
              </p>
              
              <div className="w-full max-w-md space-y-4 mb-6">
                <label className="text-sm text-gray-400">
                  Would you like to say something with this {tributeType}?
                </label>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`E.g. "Miss you every day, sweet ${petName}."`}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              
              {price > 0 && (
                <p className="text-sm text-gray-400 italic mb-4">
                  {tributeType === "candle" 
                    ? "Longer candles keep your pet's memory shining bright across the nights."
                    : tributeType === "flower"
                      ? "Premium flowers are a beautiful way to honor your pet's memory."
                      : "Special toys show your continuing love for your pet's playful spirit."}
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <Button onClick={handleContinue}>
                {message ? "Place with Message" : "Place without Message"}
              </Button>
            </div>
          </>
        );

      case "result":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-xl">
                {`Your tribute has been placed`}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center py-6">
              {/* Memorial Card Preview */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 w-full max-w-sm mx-auto mb-6">
                <div className="flex items-center mb-4">
                  {petPhoto ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img src={petPhoto} alt={petName} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                      <Star className="h-8 w-8 text-yellow-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-white">{petName}</h3>
                    <p className="text-gray-400 text-sm">
                      {tributeName} {getTributeIcon()}
                    </p>
                  </div>
                </div>
                
                {message && (
                  <div className="bg-gray-800 p-3 rounded-md mb-4">
                    <p className="text-gray-300 italic">"{message}"</p>
                  </div>
                )}
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    {timeRemaining}
                  </span>
                  <span className="text-amber-400">
                    ✨ Shining bright
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 text-white hover:bg-gray-800"
                  onClick={handleShare}
                  disabled={isSharing}
                >
                  <Share className="mr-2 h-4 w-4" />
                  {isSharing ? "Saving..." : "Save & Share"}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 text-white hover:bg-gray-800"
                  onClick={handleVisitStar}
                >
                  <Star className="mr-2 h-4 w-4" />
                  Visit Star
                </Button>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
                onClick={resetAndClose}
              >
                Close
              </Button>
            </div>
          </>
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
