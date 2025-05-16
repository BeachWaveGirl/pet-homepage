
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PetBathroom = () => {
  const [petName, setPetName] = useState("");
  const [petPhoto, setPetPhoto] = useState<string | null>(null);
  const [bathroomQuote, setBathroomQuote] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPetPhoto(url);
    }
  };
  
  const handleGenerateBathroomSign = () => {
    // Bathroom quotes to choose from
    const bathroomQuotes = [
      "Please remain seated during the entire performance",
      "Nice butt! - Sincerely, the toilet seat",
      "The toilet seat... put it down, I'm begging you!",
      "If you sprinkle when you tinkle, be a sweetie and wipe the seatie",
      `${petName} says: Wash your paws, humans!`,
      "Warning: ${petName} judges your bathroom habits",
      "No selfies in the bathroom please"
    ];
    
    // Pick a random quote if none is provided
    if (!bathroomQuote) {
      const randomQuote = bathroomQuotes[Math.floor(Math.random() * bathroomQuotes.length)];
      setBathroomQuote(randomQuote.replace("${petName}", petName || "Your pet"));
    }
    
    setIsGenerated(true);
    toast({
      title: "Bathroom sign created",
      description: "Your hilarious pet bathroom sign has been generated!",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Bathroom Sign
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create a hilarious bathroom sign featuring your pet wrapped in a towel, ready to judge your bathroom habits
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Create Bathroom Sign</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="petName">Pet's Name</Label>
                    <Input
                      id="petName"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="petPhoto">Upload Pet Photo</Label>
                    <Input
                      id="petPhoto"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    {petPhoto && (
                      <div className="mt-2 flex justify-center">
                        <img 
                          src={petPhoto} 
                          alt="Pet preview" 
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="bathroomQuote">Bathroom Quote (or we'll pick one for you)</Label>
                    <Input
                      id="bathroomQuote"
                      value={bathroomQuote}
                      onChange={(e) => setBathroomQuote(e.target.value)}
                      placeholder="Enter a funny bathroom quote"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      onClick={handleGenerateBathroomSign}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      Create Bathroom Sign
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={3/4}>
                  <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    {isGenerated ? (
                      <div className="w-full h-full relative bg-blue-100 p-6 flex flex-col items-center justify-between">
                        {/* Bathroom sign design */}
                        <div className="text-center mb-4">
                          <h3 className="font-bold text-xl text-blue-800">BATHROOM RULES</h3>
                        </div>
                        
                        <div className="flex-1 flex items-center justify-center">
                          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-300">
                              {petPhoto ? (
                                <img 
                                  src={petPhoto} 
                                  alt={petName} 
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                                  <span className="text-blue-500 font-bold">Pet Photo</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Towel wrap effect */}
                            <div className="absolute -bottom-2 -left-2 -right-2 h-1/3 bg-white border-4 border-blue-300 rounded-b-full flex items-center justify-center">
                              <div className="h-full w-full bg-blue-50 rounded-b-full flex items-end justify-center">
                                <div className="w-8 h-8 bg-blue-200 rounded-full mb-1"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                          <h4 className="font-semibold text-lg">{petName || "Your Pet"}</h4>
                          <p className="italic text-blue-700 mt-2">"{bathroomQuote}"</p>
                        </div>
                        
                        <div className="mt-4 w-full border-t-2 border-blue-300 pt-2 text-center">
                          <p className="text-xs text-blue-600">Created with Petly</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <img 
                          src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                          alt="Pet in towel" 
                          className="w-48 h-48 object-cover mx-auto mb-4 rounded-full"
                        />
                        <p className="text-gray-500">Enter your pet's information to create a funny bathroom sign</p>
                      </div>
                    )}
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetBathroom;
