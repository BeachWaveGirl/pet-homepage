
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FileUpload } from "lucide-react";

const PetPortrait = () => {
  const [petPhoto, setPetPhoto] = useState("");
  const [portraitStyle, setPortraitStyle] = useState("watercolor");
  const [generatedPortrait, setGeneratedPortrait] = useState("");
  
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
    // In a real implementation, this would call an AI image generation service
    // For demo purposes, we'll just set a placeholder image
    setGeneratedPortrait("https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=300");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Custom Pet Portrait
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Transform a photo of your beloved pet into a beautiful artistic portrait
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Your Pet Portrait</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium mb-3">Upload Pet Photo</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      {petPhoto ? (
                        <div className="relative w-full aspect-square">
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
                        <div>
                          <FileUpload className="mx-auto h-12 w-12 text-gray-400" />
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
                    <label className="block text-sm font-medium mb-3">Select Portrait Style</label>
                    <div className="space-y-3">
                      {["Watercolor", "Oil Painting", "Sketch", "Pop Art"].map((style) => (
                        <div 
                          key={style}
                          className={`p-3 border rounded-md cursor-pointer ${
                            portraitStyle === style.toLowerCase() ? "border-black bg-gray-50" : ""
                          }`}
                          onClick={() => setPortraitStyle(style.toLowerCase())}
                        >
                          {style}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-5">
                  <Button
                    onClick={handleGeneratePortrait}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    disabled={!petPhoto}
                  >
                    Generate Portrait
                  </Button>
                </div>
                
                {generatedPortrait && (
                  <div className="mt-8 p-5 bg-gray-50 rounded-lg border">
                    <h3 className="font-medium mb-4 text-lg text-center">Your Pet Portrait</h3>
                    <div className="flex justify-center">
                      <img 
                        src={generatedPortrait} 
                        alt="Generated Pet Portrait" 
                        className="max-w-full max-h-[400px] object-contain rounded-lg shadow-md"
                      />
                    </div>
                    <div className="mt-6 flex justify-center">
                      <Button>
                        Download Portrait
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetPortrait;
