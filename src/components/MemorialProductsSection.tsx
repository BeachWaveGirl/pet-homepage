
import { useState } from "react";
import ProductCard from "./ProductCard";
import { toast } from "sonner";

interface MemorialProductsSectionProps {
  petName: string;
  petPhoto?: string;
  starChartUrl: string;
  letterText?: string;
}

const MemorialProductsSection = ({
  petName,
  petPhoto,
  starChartUrl,
  letterText
}: MemorialProductsSectionProps) => {
  const [expandedSection, setExpandedSection] = useState(true);
  
  const handlePreview = (productName: string) => {
    toast.info(`Previewing ${productName}`, {
      description: "This would open a preview of your personalized item"
    });
  };
  
  const handleOrder = (productName: string) => {
    toast.success(`Added to cart: ${productName}`, {
      description: "Your personalized memorial item is ready for download"
    });
  };

  return (
    <div className="py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold mb-3">Keep {petName}'s Memory Close to Your Heart</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Turn your beautiful memorial into a lasting keepsake with these personalized options
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard 
          title={`${petName}'s Star Certificate`}
          subtitle="Digital Download"
          description="High-resolution printable star certificate with exact coordinates of your pet's star"
          imageUrl={starChartUrl || "https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844227_1280.jpg"}
          price="$19.99"
          onPreview={() => handlePreview("Star Certificate")}
          onOrder={() => handleOrder("Star Certificate")}
        />
        
        <ProductCard 
          title="Memorial Poster"
          subtitle="Customized Artwork"
          description={`Beautiful memorial poster featuring ${petName} with a custom quote and constellation design`}
          imageUrl={petPhoto || "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg"}
          price="$29.99"
          onPreview={() => handlePreview("Memorial Poster")}
          onOrder={() => handleOrder("Memorial Poster")}
        />
        
        <ProductCard 
          title="Whisper Letter Print"
          subtitle="Framed + Signed"
          description="Your personalized letter from your pet, beautifully formatted and ready to print"
          imageUrl="https://cdn.pixabay.com/photo/2016/03/26/22/22/happy-1281590_1280.jpg"
          price="$15.99"
          onPreview={() => handlePreview("Whisper Letter Print")}
          onOrder={() => handleOrder("Whisper Letter Print")}
        />
        
        <ProductCard 
          title="Digital Constellation Art"
          subtitle="AI-Generated Artwork"
          description={`Stunning digital art featuring ${petName} transformed into a constellation`}
          imageUrl="https://cdn.pixabay.com/photo/2017/02/16/19/47/bokeh-2072271_1280.jpg"
          price="$24.99"
          onPreview={() => handlePreview("Digital Constellation Art")}
          onOrder={() => handleOrder("Digital Constellation Art")}
        />
        
        <ProductCard 
          title="3D Star Charm Design"
          subtitle="Digital 3D Model"
          description="3D-printable model of your pet's star constellation as a beautiful charm"
          imageUrl="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
          price="$34.99"
          onPreview={() => handlePreview("3D Star Charm")}
          onOrder={() => handleOrder("3D Star Charm")}
          digitalDownload={true}
        />
        
        <ProductCard 
          title="Pet Memory Video"
          subtitle="With Voiceover"
          description={`Animated video memorial with a voice message from ${petName} as a star watching over you`}
          imageUrl="https://cdn.pixabay.com/photo/2017/02/15/11/51/forest-2068378_1280.jpg"
          price="$39.99"
          onPreview={() => handlePreview("Pet Memory Video")}
          onOrder={() => handleOrder("Pet Memory Video")}
        />
      </div>
    </div>
  );
};

export default MemorialProductsSection;
