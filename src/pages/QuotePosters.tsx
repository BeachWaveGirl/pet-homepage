
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const QuotePosters = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [customQuote, setCustomQuote] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("minimal");
  
  const posterStyles = [
    { id: "minimal", name: "Minimalist", description: "Clean design with simple elements" },
    { id: "nature", name: "Nature", description: "Earthy tones with natural elements" },
    { id: "vibrant", name: "Vibrant", description: "Bold colors with modern typography" },
    { id: "vintage", name: "Vintage", description: "Nostalgic feel with classic design elements" }
  ];
  
  const predefinedQuotes = [
    "Until one has loved an animal, a part of one's soul remains unawakened.",
    "The memories and paw prints of a beloved pet last a lifetime.",
    "When words fail, a pet's love speaks.",
    "Pets leave paw prints on our hearts forever.",
    "To love and be loved by an animal is a blessing beyond words."
  ];
  
  const handleSelectQuote = (quote: string) => {
    setCustomQuote(quote);
  };
  
  const handleGeneratePoster = () => {
    // In a real implementation, this would call an AI service
    const quoteToUse = customQuote || "Pets leave paw prints on our hearts forever.";
    alert(`Generating ${selectedStyle} quote poster with: "${quoteToUse}" - this would use the AI template provided`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Quote Posters
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create beautiful quote posters with uplifting messages about your beloved pet
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Quote Poster</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet's Name (Optional)</label>
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
                  <label className="block text-sm font-medium mb-1">Choose a Quote or Write Your Own</label>
                  <div className="grid grid-cols-1 gap-2 mb-3">
                    {predefinedQuotes.map((quote, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        className="justify-start h-auto py-2 px-3 text-left"
                        onClick={() => handleSelectQuote(quote)}
                      >
                        "{quote}"
                      </Button>
                    ))}
                  </div>
                  <textarea
                    className="w-full p-2 border rounded-md min-h-[80px]"
                    placeholder="Or write your own custom quote here..."
                    value={customQuote}
                    onChange={(e) => setCustomQuote(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Poster Style</label>
                  <Tabs defaultValue="minimal" value={selectedStyle} onValueChange={setSelectedStyle}>
                    <TabsList className="grid grid-cols-2 md:grid-cols-4">
                      {posterStyles.map(style => (
                        <TabsTrigger key={style.id} value={style.id}>{style.name}</TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {posterStyles.map(style => (
                      <TabsContent key={style.id} value={style.id} className="p-4 bg-gray-50 rounded-md mt-2">
                        <p>{style.description}</p>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
                
                <div className="pt-3">
                  <Button
                    onClick={handleGeneratePoster}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                  >
                    Generate Quote Poster
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

export default QuotePosters;
