
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface StarMapPosterProps {
  date: string;
  location: string;
  title?: string;
  coordinates?: string;
  starMapUrl: string;
}

const StarMapPoster = ({
  date,
  location,
  title = "THE NIGHT WE MET",
  coordinates = "39° 95' 42'' N | 75° 15' 03'' W",
  starMapUrl,
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

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-8 font-playfair">
      {/* Star Map Circle */}
      <div className="w-[90%] mx-auto mb-6">
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
                <p className="text-white text-lg">Loading star map...</p>
              </div>
            )}
          </div>
        </AspectRatio>
      </div>
      
      {/* Title */}
      <div className="text-center space-y-4">
        <h3 className="uppercase tracking-widest text-xl md:text-2xl font-bold">
          {title}
        </h3>
        
        {/* Date and Location */}
        <p className="text-sm font-medium">
          {formattedDate} {location && `• ${location}`}
        </p>
        
        {/* Coordinates */}
        <p className="text-xs text-gray-500">
          {coordinates}
        </p>
      </div>
    </div>
  );
};

export default StarMapPoster;
