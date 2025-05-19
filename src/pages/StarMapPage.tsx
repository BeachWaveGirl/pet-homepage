
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import StarMapPoster from "@/components/StarMapPoster";
import { generateStarMap } from "@/utils/starMapGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import PageTitle from "@/components/StarMemorial/PageTitle";

const StarMapPage = () => {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [passingDate, setPassingDate] = useState("");
  const [location, setLocation] = useState("Charlotte, North Carolina");
  const [letterText, setLetterText] = useState("");
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [starMapUrl, setStarMapUrl] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [coordinates, setCoordinates] = useState("");
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  };
  
  const handleGenerateStarMap = async () => {
    setIsLoading(true);
    try {
      const { starMapUrl: generatedUrl, formattedCoordinates } = await generateStarMap({
        date: passingDate,
        location,
        coordinates: {
          latitude: 35.2271,
          longitude: -80.8431
        }
      });
      
      setStarMapUrl(generatedUrl);
      setCoordinates(formattedCoordinates);
      setIsGenerated(true);
      
      toast({
        title: "Star map created",
        description: `Your star map for ${petName || "your pet"} has been generated.`,
      });
    } catch (error) {
      console.error("Error generating star map:", error);
      toast({
        title: "Error",
        description: "There was an error generating your star map. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDownload = () => {
    // In a real implementation, this would generate a PDF or image download
    toast({
      title: "Downloading poster",
      description: "Your star map poster is being downloaded.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <PageTitle
            title="Custom Pet Star Map"
            description="Generate a personalized star chart to mark the memory of your beloved pet. See the exact stars that were shining on their special day."
            lightMode={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-center">Create Your Letter</CardTitle>
                <CardDescription className="text-center">
                  Tell us about your pet and we'll craft a comforting letter in their voice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="petPhoto">Pet's Photo (Optional)</Label>
                    <Input
                      id="petPhoto"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    {photoUrl && (
                      <div className="mt-2 flex justify-center">
                        <div className="w-32 h-32 rounded-lg overflow-hidden">
                          <img 
                            src={photoUrl} 
                            alt="Pet preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="petName">Pet's Name</Label>
                      <Input
                        id="petName"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="e.g., Fluffy"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerName">Your Name</Label>
                      <Input
                        id="ownerName"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        placeholder="e.g., Emma (or leave blank for 'my human')"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="passingDate">Pet's Passing Date</Label>
                    <Input
                      id="passingDate"
                      type="date"
                      value={passingDate}
                      onChange={(e) => setPassingDate(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      This date will be used to create a commemorative star chart of the night sky.
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="letterText">Message for the Letter</Label>
                    <Textarea
                      id="letterText"
                      value={letterText}
                      onChange={(e) => setLetterText(e.target.value)}
                      placeholder="Add a personal message or leave blank for an AI-generated letter..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="pt-3">
                    <Button 
                      onClick={handleGenerateStarMap}
                      className="w-full bg-black hover:bg-gray-800 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Generating Star Map..." : "Generate Star Map Letter"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-md overflow-hidden">
              <CardContent className="p-0">
                {isGenerated ? (
                  <StarMapPoster 
                    date={passingDate ? new Date(passingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ""}
                    location={location}
                    petName={petName}
                    coordinates={coordinates}
                    starMapUrl={starMapUrl}
                    letterText={letterText || "I'll always be your guiding star.\nLook up when you miss me.\nI'm watching over you with love."}
                    photoUrl={photoUrl || undefined}
                    isLoading={isLoading}
                  />
                ) : (
                  <div className="h-96 flex flex-col items-center justify-center text-gray-600 p-4">
                    <img 
                      src="https://images.unsplash.com/photo-1435224668334-0f82ec57b605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                      alt="Stars" 
                      className="w-48 h-48 object-cover mx-auto mb-6 rounded-full opacity-80"
                    />
                    <p className="text-lg text-center">Fill out the form to create your star map letter</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {isGenerated && (
            <div className="mt-8 flex justify-center">
              <Button 
                className="bg-black text-white hover:bg-gray-800"
                onClick={handleDownload}
              >
                Download Poster
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StarMapPage;
