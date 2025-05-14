
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { calculateTimeSincePassing } from "@/components/pet-letter-form/dateUtils";

interface LetterDisplayProps {
  letter: string;
  petName: string;
  ownerName: string;
  photoUrl?: string;
  passingDate?: Date;
  starChartUrl?: string;
  onClose: () => void;
  onDownload: () => void;
  showStarButton?: boolean;
  onStarClick?: () => void;
}

const LetterDisplay = ({
  letter,
  petName,
  ownerName,
  photoUrl,
  passingDate,
  starChartUrl,
  onClose,
  onDownload,
  showStarButton,
  onStarClick,
}: LetterDisplayProps) => {
  // Split the letter into paragraphs
  const paragraphs = letter.split("\n").filter((para) => para.trim() !== "");
  
  // Calculate time since passing if available
  const timeSincePassing = passingDate ? calculateTimeSincePassing(passingDate) : "";
  
  // Generate poetic star titles
  const starTitles = [
    `Now ${petName} Twinkles Just for You`,
    `Still With You, Just a Little Higher`,
    `${petName} Found a New Home in the Stars`,
    `Every Night, ${petName} Shines Where You Can See`,
    `Turn Your Gaze Up—That's Where ${petName} Is`,
    `A Constellation of Love from ${petName}`,
  ];
  
  // Select a title based on pet name's length to ensure consistency
  const titleIndex = petName.length % starTitles.length;
  const starTitle = starTitles[titleIndex];
  
  // Format date if available
  const formattedDate = passingDate 
    ? passingDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : "";
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardContent className="p-6 md:p-8">
          {/* Star Chart Section */}
          <div className="mb-10 text-center">
            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-800">
              {starChartUrl ? (
                <img 
                  src={starChartUrl} 
                  alt="Night Sky Star Chart"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <p className="text-white">Looking at the stars...</p>
                </div>
              )}
            </div>
            
            <h3 className="uppercase tracking-widest text-xl md:text-2xl font-bold mb-3">
              {starTitle}
            </h3>
            
            {formattedDate && (
              <>
                <p className="text-sm mb-1">{formattedDate}</p>
                {timeSincePassing && (
                  <p className="text-sm text-indigo-600 font-medium mb-3">
                    It's been {timeSincePassing} since {petName} became a star
                  </p>
                )}
              </>
            )}
          </div>

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
            {showStarButton && onStarClick && (
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={onStarClick}>
                View Star Certificate
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LetterDisplay;
