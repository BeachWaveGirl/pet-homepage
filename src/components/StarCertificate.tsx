import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StarMapPoster from "./StarMapPoster";
import MemorialProductsSection from "./MemorialProductsSection";
import { ChevronDown, ChevronUp } from "lucide-react";

interface StarCertificateProps {
  petName: string;
  ownerName: string;
  photoUrl?: string;
  passingDate?: Date;
  starChartUrl: string;
  letterText?: string;
  onClose: () => void;
  onDownload: () => void;
}

const StarCertificate = ({
  petName,
  ownerName,
  photoUrl,
  passingDate,
  starChartUrl,
  letterText,
  onClose,
  onDownload,
}: StarCertificateProps) => {
  const [showProducts, setShowProducts] = useState(false);
  
  // Format date
  let formattedDate = '';
  let location = 'Your Location';
  
  if (passingDate) {
    formattedDate = passingDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // Create a simple letter text from the generated letter
  const processedLetterText = letterText || [
    `Dear ${ownerName},`,
    `Thank you for all the love and joy we shared.`,
    `I'll always be watching over you from the stars.`
  ].join('\n');

  // Extract 3 lines for the poster
  const letterLines = processedLetterText
    .split('\n')
    .filter(line => line.trim() !== '')
    .slice(0, 3)
    .join('\n');

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
        <CardContent className="p-6">
          <StarMapPoster
            date={formattedDate}
            location={location}
            petName={petName}
            title={`THE NIGHT ${petName.toUpperCase()} BECAME A STAR`}
            starMapUrl={starChartUrl}
            photoUrl={photoUrl}
            letterText={letterLines}
          />
          
          {/* Keep Memory Alive Button */}
          <div className="mt-8 mb-4 text-center">
            <Button
              onClick={() => setShowProducts(!showProducts)}
              variant="outline"
              className="flex items-center gap-2 mx-auto border-indigo-400 text-indigo-700 hover:bg-indigo-50"
            >
              <span>Would you like to keep this star close to your heart?</span>
              {showProducts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
          </div>
          
          {/* Memorial Products Section */}
          {showProducts && (
            <MemorialProductsSection
              petName={petName}
              petPhoto={photoUrl}
              starChartUrl={starChartUrl}
              letterText={letterText}
            />
          )}
          
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button 
              className="bg-black text-white hover:bg-gray-800"
              onClick={onDownload}
            >
              Download Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StarCertificate;
