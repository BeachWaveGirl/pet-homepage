
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/LottieAnimation";
import { TributeStepProps } from "../TributeTypes";
import starAnimation from "@/animations/star-animation.json";
import candleAnimation from "@/animations/candle-animation.json";

const AnimationStep = ({
  tributeType,
  petName,
  price,
  onContinue
}: TributeStepProps) => {
  // Get the appropriate animation based on tribute type
  const getAnimationData = () => {
    switch (tributeType) {
      case "candle":
        return candleAnimation;
      default:
        return starAnimation;
    }
  };

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
          animationData={getAnimationData()}
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
        <Button onClick={onContinue}>
          Continue
        </Button>
      </div>
    </>
  );
};

export default AnimationStep;
