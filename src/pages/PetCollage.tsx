
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const PetCollage = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [collageShape, setCollageShape] = useState("profile");
  
  const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target?.result) {
          setPhotos(prev => [...prev, e.target!.result as string]);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const handleGenerateCollage = () => {
    // In a real implementation, this would call an AI service
    alert(`Generating ${collageShape} style collage - this would use the AI template provided`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Collage Art
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create beautiful digital mosaic artwork made from pet-related images forming a unique silhouette
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Pet Collage</CardTitle>
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
                  <label className="block text-sm font-medium mb-1">Upload Photos (Max 10)</label>
                  <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <input
                      type="file"
                      onChange={handleAddPhoto}
                      accept="image/*"
                      className="hidden"
                      id="photo-upload"
                      disabled={photos.length >= 10}
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">
                        Click to upload photos ({photos.length}/10)
                      </p>
                    </label>
                  </div>
                  
                  {photos.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={photo} 
                            alt={`Pet photo ${index + 1}`}
                            className="h-16 w-16 object-cover rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Choose Collage Shape</label>
                  <RadioGroup value={collageShape} onValueChange={setCollageShape} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 border p-3 rounded-md">
                      <RadioGroupItem value="profile" id="shape-profile" />
                      <Label htmlFor="shape-profile">Pet Profile</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 rounded-md">
                      <RadioGroupItem value="heart" id="shape-heart" />
                      <Label htmlFor="shape-heart">Heart Shape</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 rounded-md">
                      <RadioGroupItem value="paw" id="shape-paw" />
                      <Label htmlFor="shape-paw">Paw Print</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="pt-3">
                  <Button
                    onClick={handleGenerateCollage}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    disabled={photos.length === 0}
                  >
                    Generate Collage
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

export default PetCollage;
