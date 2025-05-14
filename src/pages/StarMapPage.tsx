
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StarMapPoster from "@/components/StarMapPoster";
import { generateStarMap } from "@/utils/starMapGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StarMapPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [starMapUrl, setStarMapUrl] = useState("");
  const [coordinates, setCoordinates] = useState("");
  
  // Sample data - in a real app these would come from user input or URL params
  const date = "2015-11-08";
  const location = "Charlotte, North Carolina";
  const petName = "Luna";
  const photoUrl = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200";
  const letterText = "I'll always be your guiding star.\nLook up when you miss me.\nI'm watching over you with love.";
  
  useEffect(() => {
    const loadStarMap = async () => {
      setIsLoading(true);
      try {
        const { starMapUrl, formattedCoordinates } = await generateStarMap({
          date,
          location,
          coordinates: {
            latitude: 35.2271,
            longitude: -80.8431
          }
        });
        
        setStarMapUrl(starMapUrl);
        setCoordinates(formattedCoordinates);
      } catch (error) {
        console.error("Error loading star map:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadStarMap();
  }, []);
  
  const handleDownload = () => {
    // In a real implementation, this would generate a PDF or image download
    alert("Downloading poster...");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <StarMapPoster 
                date={date}
                location={location}
                petName={petName}
                coordinates={coordinates}
                starMapUrl={starMapUrl}
                letterText={letterText}
                photoUrl={photoUrl}
                isLoading={isLoading}
              />
              
              <div className="mt-8 flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
                <Button 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={handleDownload}
                >
                  Download Poster
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StarMapPage;
