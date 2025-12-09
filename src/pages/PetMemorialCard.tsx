import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Download, RotateCcw } from "lucide-react";

// Pet types with placeholder images
const petTypes = [
  { id: "dog", name: "Dog", image: "/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png" },
  { id: "cat", name: "Cat", image: "/lovable-uploads/c767ea95-f4d6-4875-aa3d-c9f854be9e40.png" },
  { id: "rabbit", name: "Rabbit", image: "/lovable-uploads/d2df99a1-71d4-4d47-999f-5159bfdf52be.png" },
  { id: "bird", name: "Bird", image: "/lovable-uploads/9d05b32e-74dd-48e3-8e8b-c2700cd3789e.png" },
  { id: "hamster", name: "Hamster", image: "/lovable-uploads/500de6cf-1ba5-4a1a-95dc-cee82a126210.png" },
  { id: "fish", name: "Fish", image: "/lovable-uploads/a0fc43da-849b-4f80-a304-2ad0953ed05d.png" },
];

// Background options
const backgrounds = [
  { id: "rainbow", name: "Rainbow Sky", gradient: "linear-gradient(180deg, #fef3c7 0%, #fde68a 30%, #fbbf24 50%, #f472b6 70%, #a78bfa 100%)" },
  { id: "sunset", name: "Peaceful Sunset", gradient: "linear-gradient(180deg, #fef3c7 0%, #fdba74 40%, #fb923c 70%, #f87171 100%)" },
  { id: "starry", name: "Starry Night", gradient: "linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)" },
  { id: "clouds", name: "Soft Clouds", gradient: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)" },
  { id: "meadow", name: "Green Meadow", gradient: "linear-gradient(180deg, #ecfccb 0%, #d9f99d 50%, #a3e635 100%)" },
];

const PetMemorialCard = () => {
  const [selectedPet, setSelectedPet] = useState("dog");
  const [petName, setPetName] = useState("Milo");
  const [birthYear, setBirthYear] = useState("2015");
  const [passingYear, setPassingYear] = useState("2025");
  const [message, setMessage] = useState("They say memories are golden,\nWell maybe that is true.\nI never wanted memories,\nI only wanted you.");
  const [selectedBackground, setSelectedBackground] = useState("rainbow");
  const [petSize, setPetSize] = useState([50]);
  const [openStep, setOpenStep] = useState("step-1");

  const selectedPetData = petTypes.find(p => p.id === selectedPet);
  const selectedBgData = backgrounds.find(b => b.id === selectedBackground);

  const handleReset = () => {
    setSelectedPet("dog");
    setPetName("Milo");
    setBirthYear("2015");
    setPassingYear("2025");
    setMessage("They say memories are golden,\nWell maybe that is true.\nI never wanted memories,\nI only wanted you.");
    setSelectedBackground("rainbow");
    setPetSize([50]);
    setOpenStep("step-1");
  };

  const handleDownload = () => {
    // Placeholder for download functionality
    console.log("Downloading card...");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 px-4 overflow-hidden">
        {/* Rainbow background */}
        <div 
          className="absolute inset-0 opacity-90"
          style={{ 
            background: "linear-gradient(180deg, #fef3c7 0%, #fde68a 20%, #fbbf24 40%, #f472b6 60%, #a78bfa 80%, #e0f2fe 100%)" 
          }}
        />
        
        {/* Hero dog image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block">
          <img 
            src="/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png" 
            alt="Memorial dog"
            className="object-contain h-full w-full object-right"
          />
        </div>
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Create a Personalized Pet Memorial Card
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            A gentle way to honor your beloved companion who crossed the Rainbow Bridge, or send comfort to someone who's grieving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('card-creator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Create Memorial Card
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-400 text-gray-800 px-8 py-6 text-lg bg-white/80 hover:bg-white"
            >
              View Card Gallery
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Create Your Pet Memorial Card
            </h2>
            <p className="text-lg text-gray-600">
              A gentle way to honor your companion who crossed the Rainbow Bridge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Choose Pet Type",
                description: "Choose from dogs, cats, rabbits, and more. Beautiful illustrations that honor your beloved companion."
              },
              {
                step: 2,
                title: "Personalize Details",
                description: "Add your pet's name, dates, and a heartfelt message. Create a keepsake for yourself or send sympathy to someone who's hurting."
              },
              {
                step: 3,
                title: "Choose a Background",
                description: "Soft skies, peaceful rainbows, and starry nights. Preview your card live, then download instantly to print or share."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Card Creator Section */}
      <section id="card-creator" className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
              Create Your Pet Memorial Card
            </h2>
            <Button 
              variant="ghost" 
              className="mt-2 text-gray-500"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Form */}
            <div>
              <Accordion 
                type="single" 
                collapsible 
                value={openStep}
                onValueChange={setOpenStep}
                className="space-y-4"
              >
                {/* Step 1: Choose Pet Type */}
                <AccordionItem value="step-1" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-playfair text-lg font-semibold">Step 1: Choose Pet Type</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-3 gap-4 py-4">
                      {petTypes.map((pet) => (
                        <button
                          key={pet.id}
                          onClick={() => setSelectedPet(pet.id)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedPet === pet.id 
                              ? 'border-gray-900 bg-gray-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img 
                            src={pet.image} 
                            alt={pet.name}
                            className="w-full aspect-square object-cover rounded-md mb-2"
                          />
                          <p className="text-sm font-medium text-gray-900">{pet.name}</p>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <Label className="text-sm text-gray-600 mb-2 block">Adjust Pet Size</Label>
                      <Slider
                        value={petSize}
                        onValueChange={setPetSize}
                        min={20}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Small</span>
                        <span>Large</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                {/* Step 2: Personalize Details */}
                <AccordionItem value="step-2" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-playfair text-lg font-semibold">Step 2: Personalize Details</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="petName">Pet Name</Label>
                        <Input 
                          id="petName"
                          value={petName}
                          onChange={(e) => setPetName(e.target.value)}
                          placeholder="Enter pet's name"
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="birthYear">Birth Year</Label>
                          <Input 
                            id="birthYear"
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                            placeholder="e.g., 2015"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="passingYear">Passing Year</Label>
                          <Input 
                            id="passingYear"
                            value={passingYear}
                            onChange={(e) => setPassingYear(e.target.value)}
                            placeholder="e.g., 2025"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Memorial Message</Label>
                        <Textarea 
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write a heartfelt message..."
                          className="mt-1 min-h-[120px]"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                {/* Step 3: Choose Background */}
                <AccordionItem value="step-3" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-playfair text-lg font-semibold">Step 3: Choose Background</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-5 gap-3 py-4">
                      {backgrounds.map((bg) => (
                        <button
                          key={bg.id}
                          onClick={() => setSelectedBackground(bg.id)}
                          className={`aspect-square rounded-lg border-2 transition-all ${
                            selectedBackground === bg.id 
                              ? 'border-gray-900 ring-2 ring-gray-400' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          style={{ background: bg.gradient }}
                          title={bg.name}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Right: Live Preview */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-gray-900">Live Preview</h3>
              
              <Card className="overflow-hidden shadow-xl">
                <div 
                  className="aspect-[3/4] relative flex flex-col items-center justify-center p-8"
                  style={{ background: selectedBgData?.gradient }}
                >
                  {/* Pet image */}
                  <div 
                    className="relative mb-4"
                    style={{ width: `${petSize[0]}%`, maxWidth: '200px' }}
                  >
                    <img 
                      src={selectedPetData?.image}
                      alt={petName}
                      className="w-full object-contain drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Pet info */}
                  <div className={`text-center ${selectedBackground === 'starry' ? 'text-white' : 'text-gray-900'}`}>
                    <h3 className="font-playfair text-3xl font-bold mb-2">{petName || "Pet Name"}</h3>
                    <p className="text-lg mb-4 opacity-80">
                      {birthYear && passingYear ? `${birthYear} - ${passingYear}` : "Birth Year - Passing Year"}
                    </p>
                    <p className="text-sm italic max-w-xs mx-auto whitespace-pre-line opacity-90">
                      {message || "Your memorial message will appear here..."}
                    </p>
                  </div>
                </div>
              </Card>
              
              <p className="text-sm text-gray-500 text-center mt-3">
                Updates in real-time as you edit
              </p>
              
              <Button 
                onClick={handleDownload}
                className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white py-6"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Card: <span className="line-through mx-2 opacity-60">$3.99</span> FREE for a limited time!
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PetMemorialCard;
