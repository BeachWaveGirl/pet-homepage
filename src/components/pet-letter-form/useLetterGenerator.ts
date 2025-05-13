
import { useState } from "react";
import { toast } from "sonner";

export interface FormData {
  petName: string;
  species: string;
  ownerName: string;
  petPersonality: string;
  sharedMemories: string;
  passingDate: Date | undefined;
  tone: string;
  photoUrl: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export const useLetterGenerator = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [showFullLetter, setShowFullLetter] = useState(false);
  const [showStarCertificate, setShowStarCertificate] = useState(false);
  const [starChartUrl, setStarChartUrl] = useState("");

  const generateLetter = async (formData: FormData) => {
    // This is a mock implementation - in a real app, you would call an AI API here
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

Time moves differently for me now, but the time since I left has been but a moment in the eternal connection we share. Your love continues to give me peace.

When you look at the stars, know that I am there in the light that reaches you. When you feel unexplained comfort in moments of sadness, that is me, still caring for you as I always did.

You taught me what love means, and that wisdom I carry forever in my spirit.

Connected always,
${formData.petName}`,

      gratitude: `Dear ${formData.ownerName || "my wonderful human"},

I wanted to take a moment to thank you for the incredible life you gave me. From the day you brought me home, you filled my world with love, care, and so many belly rubs.

Thank you for our ${formData.sharedMemories.includes("walks") ? "long walks in the park" : "special times together"} that I cherished every single day. Thank you for always making sure my bowl was full and my bed was soft, but most importantly, thank you for your endless love.

I'm grateful for how you understood me - my quirks, my ${formData.petPersonality.includes("silly") ? "silly antics" : "unique personality"}. You always knew just what I needed even when I couldn't ask for it.

These past days may have separated us physically, but nothing could ever diminish my gratitude for the life we shared.

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

Though time has passed since I left your side,
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

Though our story entered a new chapter when I had to journey onward, the book of our love remains open, with pages still turning in your heart.

Every story has its ending, but in the tale of true companions, love continues beyond the final page. Keep telling our story, for in your words and memories, I live on.

With storybook love that never ends,
Your faithful companion,
${formData.petName}`,
    };

    // Select template based on tone, defaulting to classic if not found
    return letterTemplates[formData.tone] || letterTemplates.classic;
  };

  const fetchStarChart = async (formData: FormData) => {
    // In a real implementation, this would call the astronomy API
    // For now, returning a placeholder
    try {
      // Mock implementation of astronomy API call
      const date = formData.passingDate ? new Date(formData.passingDate).toISOString().split('T')[0] : '2023-08-12';
      const latitude = formData.location?.latitude || 37.7749;
      const longitude = formData.location?.longitude || -122.4194;
      
      // In a real implementation, you would call the astronomy API here
      // and get back an actual star chart image URL
      // For now, just return a placeholder message
      console.log(`Would fetch star chart for date: ${date}, lat: ${latitude}, long: ${longitude}`);
      
      // Mocked URL for demonstration
      return "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000";
    } catch (error) {
      console.error("Error fetching star chart:", error);
      return "";
    }
  };

  const calculateTimeSincePassing = (passingDate: Date | undefined) => {
    if (!passingDate) return "";
    
    const now = new Date();
    const passed = new Date(passingDate);
    
    const diffTime = Math.abs(now.getTime() - passed.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);
    
    if (diffYears > 0) {
      return diffYears === 1 ? "1 year" : `${diffYears} years`;
    } else if (diffMonths > 0) {
      return diffMonths === 1 ? "1 month" : `${diffMonths} months`;
    } else {
      return diffDays === 1 ? "1 day" : `${diffDays} days`;
    }
  };

  const handleLetterGeneration = async (formData: FormData) => {
    setIsSubmitting(true);

    try {
      // Calculate time since passing
      const timeSincePassing = calculateTimeSincePassing(formData.passingDate);
      
      // Generate star chart
      const chartUrl = await fetchStarChart(formData);
      setStarChartUrl(chartUrl);
      
      // Generate a preview of the letter
      const letter = await generateLetter({
        ...formData,
        // Add time since passing for letter generation
      });
      
      setGeneratedLetter(letter);
      setShowPreview(true);
      
      toast.success("Letter generated successfully", {
        description: "Your letter is ready to view with a Star Certificate!",
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

  return {
    isSubmitting,
    showPreview,
    generatedLetter,
    showFullLetter,
    showStarCertificate,
    starChartUrl,
    setShowPreview,
    setShowFullLetter,
    setShowStarCertificate,
    handleLetterGeneration,
    handleDownloadLetter,
    handleDownloadCertificate
  };
};
