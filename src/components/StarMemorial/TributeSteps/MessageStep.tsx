
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TributeMessageStepProps } from "../TributeTypes";

const MessageStep = ({
  tributeType,
  tributeName,
  duration,
  petName,
  price,
  message,
  setMessage,
  onContinue
}: TributeMessageStepProps) => {
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
        <Button onClick={onContinue}>
          {message ? "Place with Message" : "Place without Message"}
        </Button>
      </div>
    </>
  );
};

export default MessageStep;
