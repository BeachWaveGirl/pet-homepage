
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
  // Generate location information
  const formattedDate = passingDate 
    ? passingDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  // Generate a city and state for display purposes
  const cities = ["San Francisco", "New York", "Chicago", "Los Angeles", "Seattle"];
  const states = ["California", "New York", "Illinois", "California", "Washington"];
  const randomIndex = Math.floor(Math.random() * cities.length);
  const city = cities[randomIndex];
  const state = states[randomIndex];
  
  // Generate random coordinates for display purposes
  const latitude = `${Math.floor(Math.random() * 90)}°${Math.floor(Math.random() * 60)}'${Math.floor(Math.random() * 60)}"N`;
  const longitude = `${Math.floor(Math.random() * 180)}°${Math.floor(Math.random() * 60)}'${Math.floor(Math.random() * 60)}"W`;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardContent className="p-6 md:p-8">
          <div className="text-center">
            {/* Star Chart Section */}
            <div className="mb-8">
              <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-800">
                {starChartUrl ? (
                  <img 
                    src={starChartUrl} 
                    alt="Night Sky Star Chart"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <p className="text-white">Loading star chart...</p>
                  </div>
                )}
              </div>
              
              <h3 className="uppercase tracking-widest text-xl md:text-2xl font-bold mb-3">
                THE NIGHT {petName} BECAME A STAR
              </h3>
              
              <p className="text-sm mb-1">{formattedDate}</p>
              <p className="text-sm mb-3">{city}, {state}</p>
              
              <p className="text-xs text-gray-500 mb-8">{latitude} | {longitude}</p>
            </div>
            
            {/* Certificate Content */}
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <h3 className="text-xl font-bold mb-2">This certifies that</h3>
              <p className="text-2xl font-playfair mb-4">{petName}</p>
              
              {photoUrl && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 mx-auto mb-4">
                  <img
                    src={photoUrl}
                    alt={petName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {!photoUrl && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center bg-gray-100 mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Pet silhouette" 
                    className="w-16 h-16 opacity-50"
                  />
                </div>
              )}
              
              <p className="mb-4">will forever shine bright in the night sky</p>
              <p className="text-sm text-gray-500">Registered to: {ownerName || "Loving Owner"}</p>
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
