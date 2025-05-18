
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PawPrint, Clock, FileText, Star } from "lucide-react";

const PetTarotReading = () => {
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
        title: "Tarot Reading Request Submitted",
        description: "We'll send your pet tarot reading to your email soon.",
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
    <div className="min-h-screen flex flex-col bg-[#1A1F2C] text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with inspiration from provided image */}
        <section className="py-12 px-4 bg-gradient-to-b from-[#1A1F2C] to-[#262938]">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4">
              <span className="text-[#8B5CF6] font-bold mr-1">BESTSELLER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#8B5CF6] leading-tight">
              PET <span className="block text-[#D946EF]">TAROT</span> <span className="block text-white">READING</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Let the cards reveal your pet's energy and emotions — discover what they're trying to tell you through mystical tarot 🔮
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">SAME HOUR</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">DETAILED</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-[#F97316]" />
                <span className="text-[#F97316]">5-STARS</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-4 bg-[#1A1F2C]">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[#D946EF]">✨ WHAT YOUR PET'S TAROT CARDS MAY REVEAL:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/20 rounded-lg">
                  <p>🔮 Hidden emotions and feelings</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <p>🌟 Past experiences that affect them</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <p>✨ Future path and destiny</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <p>💫 Spiritual messages they want to share</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg col-span-1 md:col-span-2">
                  <p>🧿 Their true personality and soul purpose</p>
                </div>
              </div>
            </div>

            <Card className="border-2 border-[#8B5CF6] bg-black/30 shadow-lg shadow-purple-500/20">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <PawPrint className="inline-block h-12 w-12 text-[#D946EF] mb-3" />
                  <h3 className="text-2xl font-bold mb-2">Request Your Pet's Tarot Reading</h3>
                  <p className="text-gray-300">Fill out this form to unlock the mystical messages of the cards</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="ownerInfo" className="text-white">✨ Your name and birthday:</Label>
                    <Input 
                      id="ownerInfo"
                      value={ownerInfo}
                      onChange={(e) => setOwnerInfo(e.target.value)}
                      placeholder="John Doe, January 1, 1990"
                      required
                      className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="petInfo" className="text-white">✨ Your pet name and birthday:</Label>
                    <Input 
                      id="petInfo"
                      value={petInfo}
                      onChange={(e) => setPetInfo(e.target.value)}
                      placeholder="Fluffy, March 15, 2018"
                      required
                      className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="isAlive" className="text-white">✨ Is he/she still with us?</Label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="isAlive" 
                          value="yes" 
                          checked={isAlive === "yes"}
                          onChange={() => setIsAlive("yes")}
                          className="w-4 h-4 accent-[#D946EF]"
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
                          className="w-4 h-4 accent-[#D946EF]"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photo" className="text-white">✨ Upload a photo of your pet (optional):</Label>
                    <Input 
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="bg-black/30 border-[#8B5CF6]/50 text-white"
                    />
                    {photo && (
                      <p className="text-sm text-[#8B5CF6]">Photo uploaded: {photo.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="question" className="text-white">✨ What specific questions do you have for the cards?</Label>
                    <Textarea 
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="What do the cards reveal about my pet's personality? What energy surrounds them?"
                      rows={4}
                      required
                      className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#9B87F5] hover:to-[#E158F7] text-white font-bold py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Tarot Reading"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-10 p-6 bg-black/20 rounded-lg border border-[#8B5CF6]/30">
              <h2 className="text-xl font-bold mb-4 text-[#F97316]">🔮 THE MYSTICAL CONNECTION</h2>
              <p className="text-gray-300 mb-4">
                The tarot provides a magical doorway into your pet's inner world. Each card pulled creates a bridge between your consciousness and your pet's energy, revealing insights that might otherwise remain hidden.
              </p>
              <p className="text-gray-300">
                Whether seeking to understand behavioral changes, emotional needs, or spiritual connections, these tarot cards act as a translator for the silent language your pet speaks. The reading creates a sacred space where your pet's true essence can be expressed and understood.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PetTarotReading;
