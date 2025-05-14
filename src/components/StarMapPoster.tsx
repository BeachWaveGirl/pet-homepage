
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface StarMapPosterProps {
  date: string;
  location: string;
  petName?: string;
  title?: string;
  coordinates?: string;
  starMapUrl: string;
  letterText?: string;
  photoUrl?: string;
  isLoading?: boolean;
}

const StarMapPoster = ({
  date,
  location,
  petName,
  title,
  coordinates = "39° 95' 42'' N | 75° 15' 03'' W",
  starMapUrl,
  letterText,
  photoUrl,
  isLoading = false,
}: StarMapPosterProps) => {
  // Format the date if it's a valid date string
  let formattedDate = date;
  try {
    if (date) {
      const dateObj = new Date(date);
      formattedDate = dateObj.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  } catch (e) {
    console.error("Invalid date format:", e);
  }

  // Generate default title if not provided
  const displayTitle = title || (petName ? `THE NIGHT ${petName.toUpperCase()} BECAME A STAR` : "THE NIGHT WE MET");

  // Split letter text into lines (max 3)
  const letterLines = letterText 
    ? letterText.split('\n').slice(0, 3) 
    : ["Thank you for every moment we shared.",
       "I still feel your love beneath the stars.",
       "I'll always be near you, just a little higher."];

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-8 font-playfair">
      {isLoading ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-600">
          <div className="animate-pulse w-64 h-64 rounded-full bg-gray-200 mb-4"></div>
          <p className="text-lg mb-2">Looking at the stars...</p>
          <p className="text-sm">Generating your message...</p>
        </div>
      ) : (
        <>
          {/* Star Map Circle */}
          <div className="w-[90%] mx-auto mb-8">
            <AspectRatio ratio={1}>
              <div className="rounded-full overflow-hidden border border-gray-200 w-full h-full">
                {starMapUrl ? (
                  <img 
                    src={starMapUrl} 
                    alt="Star Map" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <p className="text-white text-lg">Looking at the stars...</p>
                  </div>
                )}
              </div>
            </AspectRatio>
          </div>
          
          {/* Optional Pet Photo */}
          {photoUrl && (
            <div className="w-24 h-24 mx-auto -mt-4 mb-6 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img 
                src={photoUrl}
                alt="Pet"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Title */}
          <div className="text-center space-y-4 mb-6">
            <h3 className="uppercase tracking-widest text-xl md:text-2xl font-bold">
              {displayTitle}
            </h3>
            
            {/* Date and Location */}
            <p className="text-sm font-medium text-gray-700">
              {formattedDate} {location && `• ${location}`}
            </p>
            
            {/* Coordinates */}
            <p className="text-xs text-gray-500">
              {coordinates}
            </p>
          </div>
          
          {/* Letter Text */}
          {letterLines && (
            <div className="max-w-md mx-auto text-center mt-8 mb-4">
              <div className="italic text-sm text-gray-600 leading-relaxed">
                {letterLines.map((line, index) => (
                  <p key={index} className="mb-1">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StarMapPoster;
