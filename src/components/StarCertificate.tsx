
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StarMapPoster from "./StarMapPoster";

interface StarCertificateProps {
  petName: string;
  ownerName: string;
  photoUrl?: string;
  passingDate?: Date;
  starChartUrl: string;
  onClose: () => void;
  onDownload: () => void;
}

const StarCertificate = ({
  petName,
  ownerName,
  photoUrl,
  passingDate,
  starChartUrl,
  onClose,
  onDownload,
}: StarCertificateProps) => {
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
  
  // Create a simple letter text
  const letterText = [
    `Dear ${ownerName},`,
    `Thank you for all the love and joy we shared.`,
    `I'll always be watching over you from the stars.`
  ].join('\n');

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
            letterText={letterText}
          />
          
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
