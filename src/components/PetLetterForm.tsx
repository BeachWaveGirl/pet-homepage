
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PetLetterForm = () => {
  const [formData, setFormData] = useState({
    petName: "",
    species: "",
    ownerName: "",
    petPersonality: "",
    sharedMemories: "",
    timeSincePassing: "",
    tone: "nostalgic"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your letter request has been received", {
        description: "We'll email your letter within 24 hours.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        petName: "",
        species: "",
        ownerName: "",
        petPersonality: "",
        sharedMemories: "",
        timeSincePassing: "",
        tone: "nostalgic"
      });
    }, 1500);
  };

  return (
    <section className="w-full py-16 px-4 md:py-20" id="letter-form">
      <div className="container max-w-2xl mx-auto">
        <Card className="bg-white border border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl md:text-3xl text-center">Create Your Letter</CardTitle>
            <CardDescription className="text-center">
              Tell us about your pet and we'll craft a comforting letter in their voice
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="petName">Pet's Name</Label>
                  <Input
                    id="petName"
                    name="petName"
                    placeholder="e.g., Fluffy"
                    value={formData.petName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="species">Species/Breed</Label>
                  <Input
                    id="species"
                    name="species"
                    placeholder="e.g., Golden Retriever"
                    value={formData.species}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="ownerName">Your Name</Label>
                <Input
                  id="ownerName"
                  name="ownerName"
                  placeholder="e.g., Emma (or leave blank for 'my human')"
                  value={formData.ownerName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="petPersonality">Pet's Personality</Label>
                <Textarea
                  id="petPersonality"
                  name="petPersonality"
                  placeholder="e.g., Loyal, silly, always wanted belly rubs"
                  value={formData.petPersonality}
                  onChange={handleChange}
                  required
                  className="min-h-[80px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sharedMemories">Shared Memories</Label>
                <Textarea
                  id="sharedMemories"
                  name="sharedMemories"
                  placeholder="e.g., Long walks in the park, cuddling on couch, chasing birds"
                  value={formData.sharedMemories}
                  onChange={handleChange}
                  required
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="timeSincePassing">Time Since Passing</Label>
                  <Input
                    id="timeSincePassing"
                    name="timeSincePassing"
                    placeholder="e.g., 3 months"
                    value={formData.timeSincePassing}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tone">Preferred Tone</Label>
                  <Select
                    value={formData.tone}
                    onValueChange={(value) => handleSelectChange("tone", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nostalgic">Nostalgic</SelectItem>
                      <SelectItem value="heartwarming">Heartwarming</SelectItem>
                      <SelectItem value="gentle">Gentle</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                      <SelectItem value="reflective">Reflective</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Your Letter..." : "Create My Letter"}
                </Button>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-xs text-gray-500 text-center max-w-md">
              By submitting, you agree to our terms and privacy policy. 
              Your information is used only to create your letter.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default PetLetterForm;
