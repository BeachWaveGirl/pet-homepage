
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload, Download, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PetBadlyDrawn = () => {
  const [petPhoto, setPetPhoto] = useState("");
  const [petType, setPetType] = useState("dog");
  const [generatedPortrait, setGeneratedPortrait] = useState("");
  const [name, setName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPetPhoto(e.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const handleGeneratePortrait = () => {
    if (!petPhoto) {
      toast({
        title: "No photo selected",
        description: "Please upload a photo of your pet first.",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate generation with a timeout
    setTimeout(() => {
      // For demo purposes, use a placeholder image
      // In a real implementation, this would call an AI service to generate the doodle
      setGeneratedPortrait("https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500");
      setIsGenerating(false);
      
      toast({
        title: "Portrait created!",
        description: "Your badly drawn pet portrait is ready.",
      });
    }, 2000);
  };
  
  const handleDownload = () => {
    toast({
      title: "Portrait downloaded",
      description: "Your badly drawn pet portrait has been downloaded.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Badly Drawn Pet Portrait
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Transform your pet's photo into a cute, whimsical one-line doodle drawing
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Your Pet Doodle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-3">Upload Pet Photo</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      {petPhoto ? (
                        <div className="relative w-full">
                          <img 
                            src={petPhoto} 
                            alt="Pet" 
                            className="mx-auto max-h-[200px] object-contain"
                          />
                          <button 
                            className="mt-4 text-sm text-gray-500 underline"
                            onClick={() => setPetPhoto("")}
                          >
                            Remove photo
                          </button>
                        </div>
                      ) : (
                        <div className="relative">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-500">
                            Click to upload or drag and drop
                          </p>
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            accept="image/*"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3">Pet's Name (Optional)</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3">Pet Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div 
                        className={`p-3 border rounded-md cursor-pointer ${
                          petType === "dog" ? "border-black bg-gray-50" : ""
                        }`}
                        onClick={() => setPetType("dog")}
                      >
                        Dog
                      </div>
                      <div 
                        className={`p-3 border rounded-md cursor-pointer ${
                          petType === "cat" ? "border-black bg-gray-50" : ""
                        }`}
                        onClick={() => setPetType("cat")}
                      >
                        Cat
                      </div>
                      <div 
                        className={`p-3 border rounded-md cursor-pointer ${
                          petType === "bird" ? "border-black bg-gray-50" : ""
                        }`}
                        onClick={() => setPetType("bird")}
                      >
                        Bird
                      </div>
                      <div 
                        className={`p-3 border rounded-md cursor-pointer ${
                          petType === "other" ? "border-black bg-gray-50" : ""
                        }`}
                        onClick={() => setPetType("other")}
                      >
                        Other
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      onClick={handleGeneratePortrait}
                      className="w-full bg-black hover:bg-gray-800 text-white"
                      disabled={!petPhoto || isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        "Create Doodle Portrait"
                      )}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Your Doodle Preview</label>
                  <div className="border rounded-md p-4 bg-gray-50 h-full flex items-center justify-center">
                    {generatedPortrait ? (
                      <div className="w-full">
                        <AspectRatio ratio={1/1} className="bg-white">
                          <div className="relative w-full h-full">
                            <img 
                              src={generatedPortrait} 
                              alt="Generated Pet Doodle" 
                              className="object-contain w-full h-full"
                            />
                            {name && (
                              <div className="absolute bottom-4 w-full text-center text-lg font-bold">
                                {name}
                              </div>
                            )}
                          </div>
                        </AspectRatio>
                        <div className="mt-4 text-center">
                          <Button onClick={handleDownload}>
                            <Download className="h-4 w-4 mr-2" />
                            Download Doodle
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <p className="mb-2">Your doodle will appear here</p>
                        <p className="text-xs">Upload a photo and hit create to see the magic</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">About Badly Drawn Pet Portraits</h3>
            <p className="text-gray-700">
              Our badly drawn pet portraits are minimalist one-line drawings that capture your pet's 
              essence in a whimsical, artistic style. These adorable doodles make great social media
              profile pictures, phone backgrounds, or can be printed as unique wall art!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetBadlyDrawn;
