
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  price: string;
  digitalDownload?: boolean;
  onPreview?: () => void;
  onOrder?: () => void;
}

const ProductCard = ({
  title,
  subtitle,
  description,
  imageUrl,
  price,
  digitalDownload = true,
  onPreview,
  onOrder
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`overflow-hidden transition-all ${isHovered ? 'shadow-md' : 'shadow-sm'} duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderRadius: '8px', 
        borderWidth: '1px', 
        borderStyle: 'solid',
        borderColor: isHovered ? '#cccccc' : '#e5e5e5'
      }}
    >
      <AspectRatio ratio={4/3} className="bg-gray-50">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-all duration-500"
          style={{
            filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
          }}
        />
      </AspectRatio>
      
      <CardContent className="p-5">
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1 font-playfair text-gray-900" style={{ 
            transform: isHovered ? 'translateY(-2px)' : 'none',
            transition: 'transform 0.3s ease-in-out' 
          }}>
            {title}
          </h3>
          <p className="text-sm font-medium text-gray-700 mb-2">{subtitle}</p>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg text-gray-900">{price}</span>
            
            <div className="flex gap-2">
              {onPreview && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={onPreview}
                  className="text-sm border-gray-300 text-gray-700"
                >
                  Preview
                </Button>
              )}
              
              <Button 
                onClick={onOrder}
                className="text-sm bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-1"
              >
                {digitalDownload ? (
                  <>
                    <ArrowRight className="h-4 w-4" />
                    <span>Start now</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    <span>Order</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
