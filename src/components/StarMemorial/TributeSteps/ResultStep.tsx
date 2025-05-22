
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share, Star } from "lucide-react";
import { TributeResultStepProps } from "../TributeTypes";

const ResultStep = ({
  tributeType,
  tributeName,
  petName,
  petPhoto,
  message,
  timeRemaining,
  onShare,
  onVisitStar,
  onClose,
  isSharing
}: TributeResultStepProps) => {
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
            onClick={onShare}
            disabled={isSharing}
          >
            <Share className="mr-2 h-4 w-4" />
            {isSharing ? "Saving..." : "Save & Share"}
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-gray-700 text-white hover:bg-gray-800"
            onClick={onVisitStar}
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
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default ResultStep;
