
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Star } from "lucide-react";

const PetMemorial = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [passingDate, setPassingDate] = useState("");
  const [memories, setMemories] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const { toast } = useToast();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  
  const handleCreateMemorial = () => {
    toast({
      title: "Memorial Created",
      description: `Your memorial for ${petName} has been created and saved.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Memorial
          </h1>
          
          <div className="relative w-full h-64 md:h-80 lg:h-96 mb-10 rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/c3857a85-d6ef-423a-a3bb-bd784cf7ac7d.png"
              alt="Rainbow Bridge" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white text-lg md:text-xl p-6 max-w-2xl">
                Create a beautiful memorial to honor your beloved pet's memory and celebrate the joy they brought to your life.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Create Memorial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      <Label htmlFor="petType">Type of Pet</Label>
                      <Input
                        id="petType"
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        placeholder="Dog, cat, rabbit, etc."
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="birthDate">Birth/Adoption Date</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="passingDate">Passing Date</Label>
                      <Input
                        id="passingDate"
                        type="date"
                        value={passingDate}
                        onChange={(e) => setPassingDate(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="photo">Upload a Photo</Label>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="memories">Share Your Memories</Label>
                    <Textarea
                      id="memories"
                      value={memories}
                      onChange={(e) => setMemories(e.target.value)}
                      placeholder="Share your favorite memories, stories, or thoughts about your pet..."
                      rows={5}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      onClick={handleCreateMemorial}
                      className="w-full bg-gray-800 hover:bg-black text-white"
                    >
                      Create Memorial
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Memorial Preview */}
            <div>
              <Card className="bg-gradient-to-b from-blue-50 to-purple-50 border-gray-200 shadow-md overflow-hidden h-full">
                <CardHeader className="text-center border-b border-gray-100 bg-white">
                  <CardTitle className="font-playfair">Memorial Preview</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex flex-col items-center">
                  {photo ? (
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                      <img 
                        src={URL.createObjectURL(photo)} 
                        alt={petName} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 bg-gray-100 rounded-full mb-6 flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-gray-400 text-sm">Pet Photo</span>
                    </div>
                  )}
                  
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {petName || "Your Pet's Name"}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {petType || "Pet Type"}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {birthDate ? new Date(birthDate).toLocaleDateString() : "Birth Date"} - 
                      {passingDate ? new Date(passingDate).toLocaleDateString() : "Passing Date"}
                    </span>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm w-full mb-6">
                    <p className="text-gray-600 italic">
                      {memories || "Your memories will appear here..."}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-amber-500 mt-4">
                    <Star className="h-5 w-5 fill-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-playfair font-bold mb-6 text-center">Memorial Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white border-gray-200 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Star className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-center mb-2">Forever Memorial</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Your pet's memorial will be preserved online forever, accessible anytime.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-center mb-2">Anniversary Reminders</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Receive gentle reminders for important dates related to your pet.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-pink-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-center mb-2">Shareable Link</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Share your pet's memorial with friends and family through a custom link.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetMemorial;
