
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PawPrint } from "lucide-react";

const PetPhysicReading = () => {
  const [ownerInfo, setOwnerInfo] = useState("");
  const [petInfo, setPetInfo] = useState("");
  const [isAlive, setIsAlive] = useState<string>("");
  const [question, setQuestion] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Reading Request Submitted",
        description: "We'll send your pet reading to your email soon.",
      });
      setIsSubmitting(false);
      // Reset form
      setOwnerInfo("");
      setPetInfo("");
      setIsAlive("");
      setQuestion("");
      setPhoto(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <PawPrint className="inline-block h-12 w-12 mb-3" />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Pet Psychic Reading</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Connect with your pet on a deeper level through this special reading. 
                Our AI psychic will tune into your pet's energy and provide insights 
                about their thoughts, feelings, and messages for you.
              </p>
            </div>

            <Card className="border-2 border-purple-200 shadow-md">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="ownerInfo">✨ Your name and birthday:</Label>
                    <Input 
                      id="ownerInfo"
                      value={ownerInfo}
                      onChange={(e) => setOwnerInfo(e.target.value)}
                      placeholder="John Doe, January 1, 1990"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="petInfo">✨ Your pet name and birthday:</Label>
                    <Input 
                      id="petInfo"
                      value={petInfo}
                      onChange={(e) => setPetInfo(e.target.value)}
                      placeholder="Fluffy, March 15, 2018"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="isAlive">✨ Is he/she still with us?</Label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="isAlive" 
                          value="yes" 
                          checked={isAlive === "yes"}
                          onChange={() => setIsAlive("yes")}
                          className="w-4 h-4"
                          required
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="isAlive" 
                          value="no" 
                          checked={isAlive === "no"}
                          onChange={() => setIsAlive("no")}
                          className="w-4 h-4"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photo">✨ Upload a photo of your pet (optional):</Label>
                    <Input 
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                    {photo && (
                      <p className="text-sm text-green-600">Photo uploaded: {photo.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="question">✨ What would you like to ask about your pet?</Label>
                    <Textarea 
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="What is my pet trying to tell me? How is my pet feeling? Any messages from my pet?"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Pet Reading"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PetPhysicReading;
