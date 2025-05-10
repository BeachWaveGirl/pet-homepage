
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LetterDisplayProps {
  letter: string;
  petName: string;
  ownerName: string;
  photoUrl?: string;
  onClose: () => void;
  onDownload: () => void;
}

const LetterDisplay = ({
  letter,
  petName,
  ownerName,
  photoUrl,
  onClose,
  onDownload,
}: LetterDisplayProps) => {
  // Split the letter into paragraphs
  const paragraphs = letter.split("\n").filter((para) => para.trim() !== "");

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardContent className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              {photoUrl && (
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={photoUrl}
                    alt={petName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="font-playfair text-2xl">A letter from {petName}</h3>
                <p className="text-sm text-gray-600">to {ownerName || "their human"}</p>
              </div>
            </div>
          </div>

          <div className="font-playfair italic text-base md:text-lg text-gray-700 leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800" onClick={onDownload}>
              Download Letter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LetterDisplay;
