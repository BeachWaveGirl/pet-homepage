
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
    if (tributeType === "flower") {
      if (tributeName.includes("Daisy")) return "🌼";
      if (tributeName.includes("Forget-Me-Not")) return "🔵";
      if (tributeName.includes("Lilies")) return "🤍";
      if (tributeName.includes("Roses")) return "🌹";
      if (tributeName.includes("Orchid")) return "💜";
      return "💐";
    } else if (tributeType === "candle") {
      return "🕯️";
    } else {
      return "🧸";
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-xl">
          {`You ${tributeType === "flower" ? "selected" : tributeType === "candle" ? "lit" : "left"} a ${tributeType} for ${petName}`}
        </DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center py-6">
        <p className="text-center text-gray-300 mb-6 flex items-center gap-2">
          <span className="text-2xl">{getTributeIcon()}</span>
          <span>
            {tributeType === "flower" 
              ? `Your ${tributeName} will bloom beautifully beneath ${petName}'s star` 
              : tributeType === "candle"
                ? `It will glow gently for ${duration} under their star` 
                : `It will remain there for ${duration} under their star`}
          </span>
          <span className="text-xl">✨</span>
        </p>
        
        <div className="w-full max-w-md space-y-4 mb-6">
          <label className="text-sm text-gray-400">
            Would you like to add a message with this {tributeType}?
          </label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`E.g. "Forever in my heart, sweet ${petName}."`}
            className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
            maxLength={150}
          />
          {message && (
            <p className="text-xs text-gray-400 text-right">
              {message.length}/150 characters
            </p>
          )}
        </div>
        
        {price > 0 && (
          <p className="text-sm text-gray-400 italic mb-4">
            {tributeType === "flower" 
              ? "Premium flowers are a beautiful way to honor your pet's memory."
              : tributeType === "candle"
                ? "Longer candles keep your pet's memory shining bright across the nights."
                : "Special toys show your continuing love for your pet's playful spirit."}
          </p>
        )}
      </div>
      <div className="flex justify-center">
        <Button onClick={onContinue}>
          {price > 0 
            ? message 
              ? "Send & Pay with Message" 
              : "Send & Pay"
            : message
              ? "Place with Message" 
              : "Place without Message"}
        </Button>
      </div>
    </>
  );
};

export default MessageStep;
