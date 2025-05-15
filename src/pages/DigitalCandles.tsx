
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Candle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DigitalCandles = () => {
  const [petName, setPetName] = useState("");
  const [isLit, setIsLit] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleLightCandle = () => {
    setIsLit(true);
    toast({
      title: "Candle lit",
      description: `Your digital memorial for ${petName || "your pet"} has been created.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-8 px-4 md:py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-2">
            <Candle className="h-6 w-6 mr-2 text-amber-500" />
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-center">
              Pet Remembrance Light
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Create a digital memorial light to honor and celebrate your pet's memory
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-playfair flex items-center">
                  <span>Light a Remembrance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet's Name</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Share a Memory or Message</label>
                    <textarea
                      className="w-full p-2 border rounded-md min-h-[100px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a favorite memory or heartfelt message..."
                    />
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      onClick={handleLightCandle}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                    >
                      Light the Memorial
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${isLit ? 'bg-gray-900' : 'bg-gray-800'} border-gray-700 shadow-md overflow-hidden transition-all duration-500`}>
              <CardContent className="p-0">
                <AspectRatio ratio={1}>
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
                    {isLit ? (
                      <div className="text-center animate-fade-in">
                        <div className="relative w-24 h-32 mx-auto mb-6">
                          {/* Animated candle flame */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-24 bg-amber-200 rounded-md"></div>
                          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 w-8 h-14 bg-amber-300 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-[110px] left-1/2 transform -translate-x-1/2 w-6 h-10 bg-amber-400 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-[130px] left-1/2 transform -translate-x-1/2 w-4 h-6 bg-amber-500 rounded-full animate-pulse"></div>
                        </div>
                        
                        <h3 className="text-white text-xl font-medium mb-2">
                          In loving memory of {petName || "your beloved pet"}
                        </h3>
                        
                        {message && (
                          <p className="text-gray-300 text-sm italic max-w-xs mx-auto">
                            "{message}"
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <div className="w-24 h-32 mx-auto mb-6 opacity-50">
                          {/* Unlit candle */}
                          <div className="w-8 h-24 bg-gray-300 rounded-md mx-auto"></div>
                        </div>
                        <p className="max-w-xs mx-auto">Enter your pet's name and light a memorial to honor their memory</p>
                      </div>
                    )}
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Create, share and save this digital memorial to honor your beloved companion
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalCandles;
