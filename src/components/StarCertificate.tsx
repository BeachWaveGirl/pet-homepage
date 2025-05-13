
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StarCertificateProps {
  petName: string;
  ownerName: string;
  photoUrl?: string;
  passingDate?: Date;
  starChartUrl?: string;
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
  // Generate a random star "designation"
  const constellation = ["Canis Major", "Canis Minor", "Leo", "Orion", "Ursa Major", "Pegasus", "Lyra", "Hercules"][Math.floor(Math.random() * 8)];
  const starDesignation = `PSR-${Math.floor(Math.random() * 999)}-${Math.floor(Math.random() * 99)}`;
  const coordinates = `RA: ${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m, Dec: ${Math.floor(Math.random() * 90)}° ${Math.floor(Math.random() * 60)}'`;

  const formattedDate = passingDate 
    ? passingDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardContent className="p-6 md:p-8">
          <div className="text-center">
            <h2 className="font-playfair text-2xl md:text-3xl mb-2">A Star For {petName}</h2>
            <p className="text-gray-600 mb-6">The night they became part of the sky</p>
            
            <div className="flex justify-center mb-6">
              {photoUrl && (
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={photoUrl}
                    alt={petName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {!photoUrl && (
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center bg-gray-100">
                  <img 
                    src="/placeholder.svg" 
                    alt="Pet silhouette" 
                    className="w-24 h-24 opacity-50"
                  />
                </div>
              )}
            </div>
            
            {starChartUrl && (
              <div className="mb-6 bg-black rounded-lg overflow-hidden">
                <img 
                  src={starChartUrl} 
                  alt="Star Chart" 
                  className="w-full h-auto max-h-[300px] object-contain opacity-90"
                />
                <p className="text-xs text-white py-2">The night sky on {formattedDate}</p>
              </div>
            )}
            
            {!starChartUrl && (
              <div className="mb-6 bg-black rounded-lg overflow-hidden h-[200px] flex items-center justify-center">
                <p className="text-white">Star chart loading...</p>
              </div>
            )}
            
            <div className="border-t border-b border-gray-200 py-6 my-6">
              <h3 className="text-xl font-bold mb-2">This certifies that</h3>
              <p className="text-2xl font-playfair mb-4">{petName}</p>
              <p className="mb-4">has been honored with a star in the</p>
              <p className="text-xl font-playfair mb-4">{constellation} Constellation</p>
              <p className="text-sm text-gray-500">{starDesignation}</p>
              <p className="text-sm text-gray-500 mb-4">{coordinates}</p>
              <p className="italic">Forever shining bright in the night sky</p>
            </div>
            
            <div className="text-sm text-gray-600 mb-8">
              <p>Registered to: {ownerName || "Loving Owner"}</p>
              <p>Date: {formattedDate}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800" onClick={onDownload}>
                Download Certificate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StarCertificate;
