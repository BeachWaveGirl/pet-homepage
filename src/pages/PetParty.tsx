
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const PetParty = () => {
  const [petName, setPetName] = useState("");
  const [partyDate, setPartyDate] = useState("");
  const [partyTime, setPartyTime] = useState("");
  const [partyLocation, setPartyLocation] = useState("");
  const [partyTheme, setPartyTheme] = useState("birthday");
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
      title: "Party invitation created",
      description: `Your pet party invitation for ${petName || "your pet"} has been generated!`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Party Invitation
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Create fun digital invitations for your pet's birthday, adoption day, or any special celebration
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Create Pet Party Invitation</CardTitle>
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
                    <Label htmlFor="partyDate">Date</Label>
                    <Input
                      id="partyDate"
                      type="date"
                      value={partyDate}
                      onChange={(e) => setPartyDate(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="partyTime">Time</Label>
                    <Input
                      id="partyTime"
                      type="time"
                      value={partyTime}
                      onChange={(e) => setPartyTime(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="partyLocation">Location</Label>
                    <Input
                      id="partyLocation"
                      value={partyLocation}
                      onChange={(e) => setPartyLocation(e.target.value)}
                      placeholder="Enter party location"
                    />
                  </div>
                  
                  <div>
                    <Label>Party Theme</Label>
                    <RadioGroup value={partyTheme} onValueChange={setPartyTheme} className="grid grid-cols-2 gap-4 mt-2">
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="birthday" id="theme-birthday" />
                        <Label htmlFor="theme-birthday">Birthday</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="adoption" id="theme-adoption" />
                        <Label htmlFor="theme-adoption">Adoption Day</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="costume" id="theme-costume" />
                        <Label htmlFor="theme-costume">Costume Party</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="playdate" id="theme-playdate" />
                        <Label htmlFor="theme-playdate">Playdate</Label>
                      </div>
                    </RadioGroup>
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
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                    >
                      Generate Party Invitation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={5/7}>
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    {isGenerated ? (
                      <div 
                        className="w-full h-full relative flex flex-col items-center justify-between p-6"
                        style={{
                          backgroundColor: partyTheme === "birthday" ? "#FFD1DC" : 
                            partyTheme === "adoption" ? "#D1FFD6" : 
                            partyTheme === "costume" ? "#D1E2FF" : "#FFE8D1",
                          backgroundImage: "url('https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                          backgroundBlendMode: "overlay",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      >
                        {/* Party invitation content */}
                        <div className="text-center bg-white bg-opacity-80 rounded-lg p-4 w-full">
                          <h3 className="font-bold text-2xl text-pink-500">
                            {partyTheme === "birthday" ? "BIRTHDAY PAWTY!" : 
                             partyTheme === "adoption" ? "ADOPTION DAY!" :
                             partyTheme === "costume" ? "COSTUME PAWTY!" : "PLAYDATE!"}
                          </h3>
                        </div>
                        
                        <div className="flex-1 flex items-center justify-center my-4">
                          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
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
                        
                        <div className="text-center bg-white bg-opacity-80 rounded-lg p-4 w-full">
                          <p className="font-medium text-xl mb-2">{petName || "Your Pet"}'s</p>
                          <p className="font-bold text-xl mb-4">
                            {partyTheme === "birthday" ? "Birthday Celebration" : 
                             partyTheme === "adoption" ? "Adoption Anniversary" :
                             partyTheme === "costume" ? "Costume Party" : "Playdate"}
                          </p>
                          
                          <div className="space-y-2 text-sm">
                            <p><strong>Date:</strong> {partyDate || "TBD"}</p>
                            <p><strong>Time:</strong> {partyTime || "TBD"}</p>
                            <p><strong>Location:</strong> {partyLocation || "TBD"}</p>
                          </div>
                          
                          <p className="mt-4 text-sm italic">
                            {partyTheme === "birthday" ? "Bring treats and toys! Pawty hats provided!" : 
                             partyTheme === "adoption" ? "Help celebrate another year of love and cuddles!" :
                             partyTheme === "costume" ? "Prize for best dressed pet! Humans can dress up too!" : 
                             "Bring your pets for fun and playtime!"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <img 
                          src="https://images.unsplash.com/photo-1605493725784-68d2eeaec6c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                          alt="Party pets" 
                          className="w-48 h-48 object-cover mx-auto mb-4 rounded-full"
                        />
                        <p className="text-gray-500">Enter your pet's information to create a fun party invitation</p>
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

export default PetParty;
