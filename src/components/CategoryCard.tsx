
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CategoryCard = ({ id, title, description, imageUrl, link }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`overflow-hidden transition-all ${isHovered ? 'shadow-lg shadow-green-400/30 transform scale-[1.03]' : 'shadow'} duration-300 ease-in-out bg-zinc-900`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderRadius: '12px', 
        borderWidth: '2px', 
        borderStyle: 'solid',
        borderColor: isHovered ? '#f05cff' : '#10b981'
      }}
    >
      <Link to={link} className="block h-full">
        <div className="relative">
          <AspectRatio ratio={16/9} className="bg-black">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transition-all duration-500"
              style={{
                filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1)'
              }}
            />
          </AspectRatio>
          
          {/* Overlay with neon glow effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity"
            style={{ opacity: isHovered ? 0.9 : 0.7 }}
          ></div>
          
          {/* Title positioned at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 
              className={`text-xl font-bold drop-shadow-md ${isHovered ? 'text-pink-400' : 'text-green-400'}`}
              style={{ 
                transform: isHovered ? 'translateY(-4px)' : 'none',
                transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out' 
              }}
            >
              {title}
            </h3>
          </div>
        </div>
        
        <CardContent className="p-4">
          <p className="text-sm text-gray-400 mb-3">{description}</p>
          
          <div className={`flex items-center text-sm transition-opacity ${isHovered ? 'text-pink-400 opacity-100' : 'text-green-400 opacity-70'}`}>
            <ArrowRight className="h-4 w-4 mr-1" />
            <span>Start now</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CategoryCard;
