
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PetTypography = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("elegant");
  
  const typographyStyles = [
    { id: "elegant", name: "Elegant Script", description: "Flowing calligraphy with delicate lines" },
    { id: "bold", name: "Bold Modern", description: "Strong, contemporary typography with clean lines" },
    { id: "playful", name: "Playful", description: "Fun and whimsical lettering with decorative elements" },
    { id: "rustic", name: "Rustic", description: "Vintage-inspired design with a handmade feel" }
  ];
  
  const handleGenerateTypography = () => {
    // In a real implementation, this would call an AI service
    alert(`Generating ${selectedStyle} typography for ${petName} - this would use the AI template provided`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Typography Art
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create elegant calligraphy featuring your pet's name with beautiful decorative elements
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Pet Typography</CardTitle>
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
                  <label className="block text-sm font-medium mb-2">Select Typography Style</label>
                  <Tabs defaultValue="elegant" value={selectedStyle} onValueChange={setSelectedStyle}>
                    <TabsList className="grid grid-cols-2 md:grid-cols-4">
                      {typographyStyles.map(style => (
                        <TabsTrigger key={style.id} value={style.id}>{style.name}</TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {typographyStyles.map(style => (
                      <TabsContent key={style.id} value={style.id} className="p-4 bg-gray-50 rounded-md mt-2">
                        <p>{style.description}</p>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
                
                <div className="pt-3">
                  <Button
                    onClick={handleGenerateTypography}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    disabled={!petName.trim()}
                  >
                    Generate Typography Art
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

export default PetTypography;
