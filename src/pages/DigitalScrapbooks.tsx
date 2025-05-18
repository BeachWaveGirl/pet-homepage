
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const DigitalScrapbooks = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [memories, setMemories] = useState("");
  
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
  
  const handleGenerateScrapbook = () => {
    // In a real implementation, this would call an AI service
    alert("Generating digital scrapbook - this would use the AI template provided");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in mb-12">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Digital Pet Scrapbooks
            </h1>
            
            <p className="text-xl text-green-400 mb-10 text-center max-w-2xl mx-auto">
              Create a futuristic memory book for your beloved pet
            </p>
          </div>
          
          <Card className="bg-zinc-900 border-green-400 border-2 shadow-lg shadow-green-400/20 mb-8 overflow-hidden">
            <CardHeader className="border-b border-zinc-800">
              <CardTitle className="text-2xl font-bold text-white">Create Your Digital Scrapbook</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-green-400">Pet's Name</label>
                    <input 
                      type="text"
                      className="w-full p-3 border-2 border-green-400 bg-black text-white rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-green-400">Type of Pet</label>
                    <input 
                      type="text"
                      className="w-full p-3 border-2 border-green-400 bg-black text-white rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      placeholder="Dog, cat, rabbit, etc."
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-green-400">Upload Photos (Max 5)</label>
                  <div className="mt-1 flex items-center justify-center border-2 border-dashed border-green-400 rounded-lg p-6 bg-zinc-900 hover:bg-zinc-800 transition-colors">
                    <input
                      type="file"
                      onChange={handleAddPhoto}
                      accept="image/*"
                      className="hidden"
                      id="photo-upload"
                      disabled={photos.length >= 5}
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer text-center">
                      <Upload className="mx-auto h-12 w-12 text-green-400" />
                      <p className="mt-2 text-sm text-green-400">
                        Click to upload photos ({photos.length}/5)
                      </p>
                    </label>
                  </div>
                  
                  {photos.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative border-2 border-green-400 rounded-md overflow-hidden">
                          <img 
                            src={photo} 
                            alt={`Pet photo ${index + 1}`}
                            className="h-24 w-24 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-green-400">Share Memories</label>
                  <textarea
                    className="w-full p-3 border-2 border-green-400 bg-black text-white rounded-md min-h-[120px] focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    placeholder="Share special memories about your pet to include in the scrapbook"
                    value={memories}
                    onChange={(e) => setMemories(e.target.value)}
                  />
                </div>
                
                <div className="pt-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={handleGenerateScrapbook}
                          className="w-full bg-gradient-to-r from-pink-500 to-green-400 hover:from-pink-600 hover:to-green-500 text-black font-bold py-3 text-lg transition-all duration-300 flex items-center justify-center gap-2 rounded-md"
                        >
                          Generate Digital Scrapbook
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Create an AI-generated memory book</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg border-2 border-pink-500">
              <h3 className="text-pink-500 text-xl font-bold mb-3">About Digital Scrapbooks</h3>
              <p className="text-white">Our AI creates stunning digital memory books combining your photos and stories into a unique keepsake that captures your pet's personality and the special bond you shared.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border-2 border-green-400">
              <h3 className="text-green-400 text-xl font-bold mb-3">What You'll Get</h3>
              <ul className="text-white list-disc pl-5 space-y-2">
                <li>Custom-designed digital pages</li>
                <li>Pet portrait illustrations</li>
                <li>Memory narrative with your stories</li>
                <li>Downloadable PDF format</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalScrapbooks;
