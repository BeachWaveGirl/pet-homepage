
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PetDigitalArt = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petColor, setPetColor] = useState("");
  const [referencePhoto, setReferencePhoto] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("watercolor");
  
  const artStyles = [
    { id: "watercolor", name: "Watercolor", description: "Soft and dreamy watercolor style" },
    { id: "pop-art", name: "Pop Art", description: "Vibrant and bold pop art style" },
    { id: "minimalist", name: "Minimalist", description: "Clean and modern minimalist style" },
    { id: "cartoon", name: "Cartoon", description: "Playful and cheerful cartoon style" }
  ];
  
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target?.result) {
          setReferencePhoto(e.target.result as string);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const handleGenerateArt = () => {
    // In a real implementation, this would call an AI image generation service
    alert(`Generating ${selectedStyle} style digital art - this would use the AI template provided`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Digital Art
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Transform your pet's photo into beautiful digital artwork in various artistic styles
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Digital Pet Art</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <label className="block text-sm font-medium mb-1">Type of Pet</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      placeholder="Dog, cat, rabbit, etc."
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Pet's Color/Description</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={petColor}
                    onChange={(e) => setPetColor(e.target.value)}
                    placeholder="e.g., Black and white spotted, golden retriever, tabby orange"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Upload Reference Photo (Optional)</label>
                  <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <input
                      type="file"
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="hidden"
                      id="photo-upload"
                    />
                    {!referencePhoto ? (
                      <label htmlFor="photo-upload" className="cursor-pointer text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">
                          Click to upload a photo of your pet
                        </p>
                      </label>
                    ) : (
                      <div className="relative">
                        <img 
                          src={referencePhoto} 
                          alt="Pet reference"
                          className="h-48 object-contain"
                        />
                        <Button
                          variant="outline" 
                          size="sm" 
                          className="mt-2"
                          onClick={() => setReferencePhoto("")}
                        >
                          Remove Photo
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Art Style</label>
                  <Tabs defaultValue="watercolor" value={selectedStyle} onValueChange={setSelectedStyle}>
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
                      {artStyles.map(style => (
                        <TabsTrigger key={style.id} value={style.id}>{style.name}</TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {artStyles.map(style => (
                      <TabsContent key={style.id} value={style.id} className="p-4 bg-gray-50 rounded-md">
                        <p>{style.description}</p>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
                
                <div className="pt-3">
                  <Button
                    onClick={handleGenerateArt}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                  >
                    Generate Digital Art
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetDigitalArt;
