
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
        <CardContent className="p-4">
          <h3 className="text-xl font-medium mb-2 font-playfair" style={{ 
            transform: isHovered ? 'translateY(-2px)' : 'none',
            transition: 'transform 0.3s ease-in-out' 
          }}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          
          <div 
            className={`flex items-center text-sm font-medium text-indigo-600 mt-2 py-2 px-3 rounded-md transition-all ${isHovered ? 'bg-indigo-50' : ''}`}
            style={{
              opacity: isHovered ? 1 : 0.75,
            }}
          >
            <Download className="h-4 w-4 mr-2" />
            <span>Download Digital File</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CategoryCard;
