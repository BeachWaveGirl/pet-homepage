
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import { Download } from "lucide-react";

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
      className={`overflow-hidden transition-all ${isHovered ? 'shadow-lg transform scale-[1.02]' : 'shadow'} duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderRadius: '12px', 
        borderWidth: '2px', 
        borderStyle: 'solid',
        borderColor: isHovered ? '#8B5CF6' : 'transparent'
      }}
    >
      <Link to={link} className="block h-full">
        <div className="relative">
          <AspectRatio ratio={16/9} className="bg-gray-100">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transition-all duration-500"
              style={{
                filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
              }}
            />
          </AspectRatio>
          
          {/* Overlay with subtle gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 transition-opacity"
            style={{ opacity: isHovered ? 0.8 : 0.5 }}
          ></div>
          
          {/* Title positioned at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 
              className="text-xl font-medium font-playfair drop-shadow-md"
              style={{ 
                transform: isHovered ? 'translateY(-4px)' : 'none',
                transition: 'transform 0.3s ease-in-out' 
              }}
            >
              {title}
            </h3>
          </div>
        </div>
        
        <CardContent className="p-4">
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          
          <div className={`flex items-center text-sm text-indigo-600 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
            <Download className="h-4 w-4 mr-1" />
            <span>Download digital file</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CategoryCard;
