
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PetZodiac = () => {
  const [petName, setPetName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [petType, setPetType] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  
  const zodiacSigns = [
    { name: "Aries", dates: "Mar 21 - Apr 19", traits: "Energetic, brave, adventurous" },
    { name: "Taurus", dates: "Apr 20 - May 20", traits: "Loyal, patient, practical" },
    { name: "Gemini", dates: "May 21 - Jun 20", traits: "Curious, playful, adaptable" },
    { name: "Cancer", dates: "Jun 21 - Jul 22", traits: "Protective, intuitive, caring" },
    { name: "Leo", dates: "Jul 23 - Aug 22", traits: "Confident, generous, dramatic" },
    { name: "Virgo", dates: "Aug 23 - Sep 22", traits: "Attentive, analytical, helpful" },
    { name: "Libra", dates: "Sep 23 - Oct 22", traits: "Charming, social, harmonious" },
    { name: "Scorpio", dates: "Oct 23 - Nov 21", traits: "Intense, loyal, mysterious" },
    { name: "Sagittarius", dates: "Nov 22 - Dec 21", traits: "Optimistic, adventurous, honest" },
    { name: "Capricorn", dates: "Dec 22 - Jan 19", traits: "Disciplined, responsible, patient" },
    { name: "Aquarius", dates: "Jan 20 - Feb 18", traits: "Independent, innovative, friendly" },
    { name: "Pisces", dates: "Feb 19 - Mar 20", traits: "Compassionate, intuitive, gentle" }
  ];
  
  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setBirthdate(date);
    
    // Simple zodiac calculation (this is a simplified version)
    if (date) {
      const month = new Date(date).getMonth() + 1; // 1-12
      const day = new Date(date).getDate(); // 1-31
      
      let sign = "";
      if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sign = "Aries";
      else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sign = "Taurus";
      else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sign = "Gemini";
      else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sign = "Cancer";
      else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sign = "Leo";
      else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sign = "Virgo";
      else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sign = "Libra";
      else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sign = "Scorpio";
      else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sign = "Sagittarius";
      else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sign = "Capricorn";
      else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sign = "Aquarius";
      else sign = "Pisces";
      
      setZodiacSign(sign);
    }
  };
  
  const handleGenerateZodiacPortrait = () => {
    // In a real implementation, this would call an AI image generation service
    alert(`Generating zodiac portrait for ${petName} - ${zodiacSign} - this would use the AI template provided`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">
            Pet Zodiac Portraits
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Discover your pet's zodiac sign and create a mystical, cosmic portrait that captures their astrological essence
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Create Zodiac Pet Portrait</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet's Name</label>
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
                  <label className="block text-sm font-medium mb-1">Pet's Birthdate</label>
                  <input 
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={birthdate}
                    onChange={handleBirthdateChange}
                  />
                </div>
                
                {zodiacSign && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium mb-2">Your Pet's Zodiac Sign: {zodiacSign}</h3>
                    {zodiacSigns.find(sign => sign.name === zodiacSign) && (
                      <>
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Dates:</strong> {zodiacSigns.find(sign => sign.name === zodiacSign)?.dates}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Traits:</strong> {zodiacSigns.find(sign => sign.name === zodiacSign)?.traits}
                        </p>
                      </>
                    )}
                  </div>
                )}
                
                <div className="pt-3">
                  <Button
                    onClick={handleGenerateZodiacPortrait}
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    disabled={!zodiacSign}
                  >
                    Generate Zodiac Portrait
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

export default PetZodiac;
