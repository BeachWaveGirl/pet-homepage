
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
  
  // For the example, we'll use the date and location from the user's request
  const date = "2015-11-08";
  const location = "Charlotte, North Carolina";
  const title = "THE NIGHT WE MET";
  
  useEffect(() => {
    const loadStarMap = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    
    loadStarMap();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-8">
              {isLoading ? (
                <div className="h-96 flex items-center justify-center">
                  <p className="text-lg">Generating your star map...</p>
                </div>
              ) : (
                <StarMapPoster 
                  date={date}
                  location={location}
                  title={title}
                  coordinates={coordinates}
                  starMapUrl={starMapUrl}
                />
              )}
              
              <div className="mt-8 flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
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
