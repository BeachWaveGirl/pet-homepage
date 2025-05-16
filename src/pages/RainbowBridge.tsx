
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const RainbowBridge = () => {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [specialMessage, setSpecialMessage] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  
  const handleGeneratePoem = () => {
    setIsGenerated(true);
    toast({
      title: "Rainbow Bridge poem created",
      description: `Your personalized poem for ${petName || "your pet"} has been generated.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-8 px-4 md:py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-2">
            <Heart className="h-6 w-6 mr-2 text-red-500" />
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-center">
              Rainbow Bridge Poem
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Create a beautiful customized Rainbow Bridge poem to honor your beloved pet's memory
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-playfair flex items-center">
                  <span>Customize Your Poem</span>
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
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Special Message (Optional)</label>
                    <textarea
                      className="w-full p-2 border rounded-md min-h-[100px]"
                      value={specialMessage}
                      onChange={(e) => setSpecialMessage(e.target.value)}
                      placeholder="Add a personal message to appear at the bottom of your poem..."
                    />
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      onClick={handleGeneratePoem}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Generate Rainbow Bridge Poem
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={4/5}>
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    {isGenerated ? (
                      <div className="relative w-full h-full">
                        <div 
                          className="absolute inset-0 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-200"
                          style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundBlendMode: "overlay",
                            opacity: 0.7
                          }}
                        />
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                          <h3 className="font-playfair text-2xl font-bold mb-4">{petName || "Pet name"}</h3>
                          
                          <div className="prose text-xs sm:text-sm md:text-base italic text-gray-900 overflow-y-auto max-h-[80%] px-4 py-2">
                            <p>Just this side of heaven is a place called Rainbow Bridge.</p>
                            <p>When an animal dies that has been especially close to someone here, that pet goes to Rainbow Bridge. There are meadows and hills for all of our special friends so they can run and play together.</p>
                            <p>There is plenty of food, water and sunshine, and our friends are warm and comfortable.</p>
                            <p>All the animals who had been ill and old are restored to health and vigor. Those who were hurt or maimed are made whole and strong again, just as we remember them in our dreams of days and times gone by.</p>
                            <p>The animals are happy and content, except for one small thing; they each miss someone very special to them, who had to be left behind.</p>
                            <p>They all run and play together, but the day comes when one suddenly stops and looks into the distance. His bright eyes are intent. His eager body quivers. Suddenly he begins to run from the group, flying over the green grass, his legs carrying him faster and faster.</p>
                            <p>You have been spotted, and when you and your special friend finally meet, you cling together in joyous reunion, never to be parted again.</p>
                            <p>The happy kisses rain upon your face; your hands again caress the beloved head, and you look once more into the trusting eyes of your pet, so long gone from your life but never absent from your heart.</p>
                            <p>Then you cross Rainbow Bridge together...</p>
                          </div>
                          
                          {specialMessage && (
                            <p className="mt-4 text-sm italic font-semibold">
                              {specialMessage}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <p className="text-gray-500">Enter your pet's information and generate a beautiful Rainbow Bridge poem to honor their memory.</p>
                        <img 
                          src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                          alt="Rainbow" 
                          className="w-48 h-48 object-cover mx-auto mt-4 rounded-full opacity-60"
                        />
                      </div>
                    )}
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Download your custom Rainbow Bridge poem and share it with loved ones
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RainbowBridge;
