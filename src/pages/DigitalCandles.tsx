
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DigitalCandles = () => {
  const [petName, setPetName] = useState("");
  const [isLit, setIsLit] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleLightCandle = () => {
    setIsLit(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Digital Memorial Candle
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Light a digital candle in memory of your beloved pet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Light a Candle</CardTitle>
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
                    <label className="block text-sm font-medium mb-1">Add a Message</label>
                    <textarea
                      className="w-full p-2 border rounded-md min-h-[100px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a memory or message..."
                    />
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      onClick={handleLightCandle}
                      className="w-full bg-black hover:bg-gray-800 text-white"
                    >
                      Light the Candle
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-700 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={1}>
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
                    {isLit ? (
                      <div className="text-center">
                        <div className="relative w-24 h-32 mx-auto mb-6">
                          {/* Simple animated candle flame */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-24 bg-amber-200 rounded-md"></div>
                          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 w-8 h-14 bg-amber-300 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-[110px] left-1/2 transform -translate-x-1/2 w-6 h-10 bg-amber-400 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-[130px] left-1/2 transform -translate-x-1/2 w-4 h-6 bg-amber-500 rounded-full animate-pulse"></div>
                        </div>
                        
                        <h3 className="text-white text-xl font-medium mb-2">
                          In loving memory of {petName || "your beloved pet"}
                        </h3>
                        
                        {message && (
                          <p className="text-gray-300 text-sm italic">
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
                        <p>Enter your pet's name and light the candle in their memory</p>
                      </div>
                    )}
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              A digital candle to honor the memory of your beloved companion
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalCandles;
