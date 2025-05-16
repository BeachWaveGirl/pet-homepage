
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const PetFuneral = () => {
  const [petName, setPetName] = useState("");
  const [memorialDate, setMemorialDate] = useState("");
  const [memorialTime, setMemorialTime] = useState("");
  const [memorialLocation, setMemorialLocation] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");
  const [petPassingDate, setPetPassingDate] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [petPhoto, setPetPhoto] = useState<string | null>(null);
  const [isGenerated, setIsGenerated] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPetPhoto(url);
    }
  };
  
  const handleGenerateInvitation = () => {
    setIsGenerated(true);
    toast({
      title: "Memorial invitation created",
      description: `Your pet memorial invitation for ${petName || "your pet"} has been generated.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Funeral Mobile Invitation
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create a mobile-friendly memorial invitation to celebrate your pet's life with friends and family
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Create Memorial Invitation</CardTitle>
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
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="petBirthDate">Birth/Adoption Date</Label>
                      <Input
                        id="petBirthDate"
                        type="date"
                        value={petBirthDate}
                        onChange={(e) => setPetBirthDate(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="petPassingDate">Passing Date</Label>
                      <Input
                        id="petPassingDate"
                        type="date"
                        value={petPassingDate}
                        onChange={(e) => setPetPassingDate(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="memorialDate">Memorial Date</Label>
                    <Input
                      id="memorialDate"
                      type="date"
                      value={memorialDate}
                      onChange={(e) => setMemorialDate(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="memorialTime">Memorial Time</Label>
                    <Input
                      id="memorialTime"
                      type="time"
                      value={memorialTime}
                      onChange={(e) => setMemorialTime(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="memorialLocation">Memorial Location</Label>
                    <Input
                      id="memorialLocation"
                      value={memorialLocation}
                      onChange={(e) => setMemorialLocation(e.target.value)}
                      placeholder="Enter memorial location"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      placeholder="Any additional details about the memorial service..."
                      rows={3}
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
                  
                  <div className="pt-4">
                    <Button
                      onClick={handleGenerateInvitation}
                      className="w-full bg-gray-800 hover:bg-black text-white"
                    >
                      Generate Memorial Invitation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={9/16}>
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    {isGenerated ? (
                      <div 
                        className="w-full h-full flex flex-col items-center justify-between relative"
                        style={{
                          backgroundColor: "#F3F3F3",
                          backgroundImage: "url('https://images.unsplash.com/photo-1558386620-08e0998d3737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                          backgroundBlendMode: "soft-light",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-black bg-opacity-30 text-white">
                          {/* Memorial invitation header */}
                          <div className="text-center mt-8">
                            <h3 className="font-playfair text-xl mb-2">In Loving Memory Of</h3>
                            <h2 className="font-playfair text-3xl font-bold">{petName || "Your Pet"}</h2>
                          </div>
                          
                          {/* Pet photo */}
                          <div className="flex-1 flex items-center justify-center my-6">
                            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                              {petPhoto ? (
                                <img 
                                  src={petPhoto} 
                                  alt={petName} 
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-500 font-bold">Pet Photo</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Dates */}
                          <div className="text-center mb-6">
                            <p className="text-sm mb-1 font-light tracking-wider">
                              {petBirthDate ? new Date(petBirthDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Birth date"} 
                              {" - "}
                              {petPassingDate ? new Date(petPassingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Passing date"}
                            </p>
                            <div className="w-16 h-px bg-white mx-auto my-4"></div>
                            <p className="italic">"Forever in our hearts"</p>
                          </div>
                          
                          {/* Memorial details */}
                          <div className="w-full text-center bg-white bg-opacity-90 text-gray-800 p-6 rounded-t-lg">
                            <h4 className="font-bold text-lg mb-4">Memorial Service</h4>
                            
                            <div className="space-y-2">
                              <p><strong>Date:</strong> {memorialDate ? new Date(memorialDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "TBD"}</p>
                              <p><strong>Time:</strong> {memorialTime || "TBD"}</p>
                              <p><strong>Location:</strong> {memorialLocation || "TBD"}</p>
                              
                              {additionalInfo && (
                                <p className="text-sm italic mt-4">
                                  {additionalInfo}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <img 
                          src="https://images.unsplash.com/photo-1568393691383-989143b57423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                          alt="Pet memorial" 
                          className="w-48 h-48 object-cover mx-auto mb-4 rounded-full"
                        />
                        <p className="text-gray-500">Enter your pet's information to create a memorial invitation</p>
                      </div>
                    )}
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              The digital invitation can be easily shared via text message, email, or social media
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetFuneral;
