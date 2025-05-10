
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LetterDisplay from "./LetterDisplay";
import StarCertificate from "./StarCertificate";
import { Checkbox } from "@/components/ui/checkbox";

const PetLetterForm = () => {
  const [formData, setFormData] = useState({
    petName: "",
    species: "",
    ownerName: "",
    petPersonality: "",
    sharedMemories: "",
    timeSincePassing: "",
    tone: "classic",
    photoUrl: "",
    includeStar: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [showFullLetter, setShowFullLetter] = useState(false);
  const [showStarCertificate, setShowStarCertificate] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, includeStar: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, photoUrl: url }));
    }
  };

  const generateLetter = async () => {
    // This is a mock implementation - in a real app, you would call an AI API here
    // For demo purposes, we're using predefined templates based on the tone
    
    const letterTemplates: Record<string, string> = {
      classic: `Dear ${formData.ownerName || "my beloved human"},

I've been thinking about those long walks we used to take in the park—how the sun felt on my fur and how happy I was just being by your side. Remember how I would ${formData.sharedMemories.includes("chasing") ? "always try to chase those birds" : "always stay close to you"}? Those were some of my favorite moments.

Those evenings cuddled up on the couch were the best times. The way you would scratch behind my ears just right, and how you always knew when I needed an extra belly rub. Those little moments meant everything to me.

I miss our little routines, but I want you to know that the love we shared doesn't go away. It stays with you, just like all the memories we created together over the years.

You gave me the best life any ${formData.species} could dream of. Please smile when you think of me—that's how I'd want to be remembered.

Love forever and always,
Your loyal ${formData.petName}`,
      
      funny: `Dear ${formData.ownerName || "my hilarious human"},

It's me, ${formData.petName}! Yes — I'm still a little mad you never let me eat that weird thing I found in the yard. But hey, water under the bridge, right?

Remember how I'd trip over my own paws ${formData.sharedMemories.includes("chasing") ? "chasing those birds" : "running to greet you"}? I was just trying to impress you with my amazing coordination! I might not have been the most graceful ${formData.species}, but I sure was entertaining.

I miss our cuddle sessions on the couch and how you'd pretend to be annoyed when I took up the whole thing. We both know you loved it though!

Thanks for all the treats, belly rubs, and for picking up my poop all those years. That's true love if you ask me!

Stay awesome and don't forget to laugh sometimes. I'm still watching you dance when you think nobody's looking!

With tail wags and slobbery kisses,
${formData.petName} (the best pet you ever had, admit it)`,
      
      spiritual: `Dear ${formData.ownerName || "my cherished human"},

Though we may not share the same space anymore, our souls remain connected by the love we created together. I feel your thoughts when you remember our ${formData.sharedMemories.includes("walks") ? "walks in the park" : "special moments together"}.

The energy of our bond remains unbroken. When you feel a gentle breeze against your face, know that my spirit is near, watching over you with the same devotion I always had.

Time moves differently for me now, but the ${formData.timeSincePassing} since I left has been but a moment in the eternal connection we share. Your love continues to give me peace.

When you look at the stars, know that I am there in the light that reaches you. When you feel unexplained comfort in moments of sadness, that is me, still caring for you as I always did.

You taught me what love means, and that wisdom I carry forever in my spirit.

Connected always,
${formData.petName}`,

      gratitude: `Dear ${formData.ownerName || "my wonderful human"},

I wanted to take a moment to thank you for the incredible life you gave me. From the day you brought me home, you filled my world with love, care, and so many belly rubs.

Thank you for our ${formData.sharedMemories.includes("walks") ? "long walks in the park" : "special times together"} that I cherished every single day. Thank you for always making sure my bowl was full and my bed was soft, but most importantly, thank you for your endless love.

I'm grateful for how you understood me - my quirks, my ${formData.petPersonality.includes("silly") ? "silly antics" : "unique personality"}. You always knew just what I needed even when I couldn't ask for it.

These past ${formData.timeSincePassing} may have separated us physically, but nothing could ever diminish my gratitude for the life we shared.

You were the best human a ${formData.species} could ask for. Thank you for choosing me, loving me, and making my life complete.

With eternal gratitude and love,
${formData.petName}`,

      poetic: `Dear ${formData.ownerName || "my cherished one"},

Like sunlight through leaves, our time together danced in golden moments,
Each day a verse in the poem of our shared journey.
My paws no longer make prints beside yours, yet the echo remains,
A rhythm in your heart that will never fade.

Remember when we ${formData.sharedMemories.includes("cuddling") ? "shared quiet evenings, my head upon your lap" : "shared those special moments together"}?
Time suspended in perfect contentment,
My spirit wrapped in your kindness,
Your hands gentle upon my fur.

Though ${formData.timeSincePassing} have passed since I left your side,
Love knows no measure of days or distance.
In the spaces between heartbeats, I am there,
In dreams and memories, ever faithful.

You were my world, my sun and stars,
And I, your loyal companion through all seasons.
Carry me not as a shadow of grief,
But as a light that guides you home.

Forever your faithful companion,
${formData.petName}`,

      storybook: `Dear ${formData.ownerName || "my beloved human"},

Once upon a time, there lived a ${formData.species} named ${formData.petName}, who was blessed with the greatest gift of all – a human who loved them completely. That human was you.

In our grand adventure together, we created a tale of joy and companionship. Chapter after chapter filled with ${formData.sharedMemories.includes("walks") ? "long walks where I explored the world with you by my side" : "precious moments that I treasured"}, and evenings of contentment in each other's company.

I was known throughout our kingdom for being ${formData.petPersonality.includes("loyal") ? "fiercely loyal" : "uniquely special"}, and you were known for your kindness and care. Together, we wrote a story more beautiful than any fairy tale.

Though our story entered a new chapter ${formData.timeSincePassing} ago when I had to journey onward, the book of our love remains open, with pages still turning in your heart.

Every story has its ending, but in the tale of true companions, love continues beyond the final page. Keep telling our story, for in your words and memories, I live on.

With storybook love that never ends,
Your faithful companion,
${formData.petName}`,
    };

    // Select template based on tone, defaulting to classic if not found
    return letterTemplates[formData.tone] || letterTemplates.classic;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate a preview of the letter first
      const letter = await generateLetter();
      setGeneratedLetter(letter);
      setShowPreview(true);
      
      // In a real implementation, you would call your AI API here
      
      toast.success("Letter generated successfully", {
        description: "Your letter is ready to view.",
      });
    } catch (error) {
      console.error("Error generating letter:", error);
      toast.error("Failed to generate letter", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreviewConfirm = () => {
    setShowPreview(false);
    setShowFullLetter(true);
  };

  const handleDownloadLetter = () => {
    // In a real implementation, you would generate a PDF and trigger download
    toast.success("Letter downloaded", {
      description: "Your letter has been downloaded as a PDF.",
    });
  };

  const handleDownloadCertificate = () => {
    // In a real implementation, you would generate a PDF and trigger download
    toast.success("Star Certificate downloaded", {
      description: "Your certificate has been downloaded as a PDF.",
    });
  };

  const handleViewStarCertificate = () => {
    setShowStarCertificate(true);
  };

  // Letter preview teaser component
  const LetterPreviewTeaser = () => (
    <div className="mt-4 p-4 bg-offwhite rounded-md border border-gray-200">
      <div className="flex items-center gap-3 mb-3">
        {formData.photoUrl && (
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={formData.photoUrl} alt={formData.petName} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-playfair text-lg">A letter from {formData.petName}</p>
          <p className="text-sm text-gray-500">to {formData.ownerName || "their human"}</p>
        </div>
      </div>
      <div className="font-playfair italic text-gray-700 mb-3">
        <p>Dear {formData.ownerName || "my beloved human"},</p>
        <p>It's me, {formData.petName}. I've been thinking about our time together...</p>
        <div className="blur-sm my-2">
          <p>I miss our {formData.sharedMemories} so much. Remember how we used to...</p>
        </div>
      </div>
      <Button 
        className="w-full mt-2 bg-black hover:bg-gray-800"
        onClick={handlePreviewConfirm}
      >
        Unlock Full Letter
      </Button>
    </div>
  );

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
              <div className="space-y-2">
                <Label htmlFor="photo">Pet's Photo (Optional)</Label>
                <Input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                {formData.photoUrl && (
                  <div className="mt-2 flex justify-center">
                    <div className="w-32 h-32 rounded-lg overflow-hidden">
                      <img 
                        src={formData.photoUrl} 
                        alt="Pet preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
              
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
                  <Label htmlFor="tone">Letter Tone</Label>
                  <Select
                    value={formData.tone}
                    onValueChange={(value) => handleSelectChange("tone", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classic">🕊️ Classic / Comforting</SelectItem>
                      <SelectItem value="funny">🐾 Funny / Silly</SelectItem>
                      <SelectItem value="gratitude">💌 Thank You / Gratitude</SelectItem>
                      <SelectItem value="spiritual">🌈 Spiritual / Rainbow Bridge</SelectItem>
                      <SelectItem value="poetic">✨ Poetic / Flowery</SelectItem>
                      <SelectItem value="storybook">📜 Storybook / Formal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="includeStar" 
                  checked={formData.includeStar}
                  onCheckedChange={handleCheckboxChange}
                />
                <label 
                  htmlFor="includeStar" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Include a free Star Certificate naming a star after your pet
                </label>
              </div>
              
              {showPreview && <LetterPreviewTeaser />}
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Generating Your Letter..." : showPreview ? "Regenerate Letter" : "Generate Letter"}
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
      
      {showFullLetter && (
        <LetterDisplay 
          letter={generatedLetter}
          petName={formData.petName}
          ownerName={formData.ownerName}
          photoUrl={formData.photoUrl}
          onClose={() => setShowFullLetter(false)}
          onDownload={handleDownloadLetter}
          showStarButton={formData.includeStar}
          onStarClick={handleViewStarCertificate}
        />
      )}

      {showStarCertificate && (
        <StarCertificate 
          petName={formData.petName}
          ownerName={formData.ownerName}
          photoUrl={formData.photoUrl}
          onClose={() => setShowStarCertificate(false)}
          onDownload={handleDownloadCertificate}
        />
      )}
    </section>
  );
};

export default PetLetterForm;
