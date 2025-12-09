import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Download, RotateCcw, ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { petTypes, getPetTypeById, PetBreed } from "@/data/petBreeds";

// Background options - Celestial
const celestialBackgrounds = [
  { id: "angel-stars", name: "Angel Stars", image: "/assets/backgrounds/celestial/angel-stars.jpg", category: "celestial" },
  { id: "constellation-sky", name: "Constellation Sky", image: "/assets/backgrounds/celestial/constellation-sky.jpg", category: "celestial" },
  { id: "cosmic-peace", name: "Cosmic Peace", image: "/assets/backgrounds/celestial/cosmic-peace.jpg", category: "celestial" },
  { id: "forever-stars", name: "Forever Stars", image: "/assets/backgrounds/celestial/forever-stars.jpg", category: "celestial" },
  { id: "galaxy-dreams", name: "Galaxy Dreams", image: "/assets/backgrounds/celestial/galaxy-dreams.jpg", category: "celestial" },
  { id: "golden-stars", name: "Golden Stars", image: "/assets/backgrounds/celestial/golden-stars.jpg", category: "celestial" },
  { id: "heavenly-glow", name: "Heavenly Glow", image: "/assets/backgrounds/celestial/heavenly-glow.jpg", category: "celestial" },
  { id: "midnight-garden", name: "Midnight Garden", image: "/assets/backgrounds/celestial/midnight-garden.jpg", category: "celestial" },
  { id: "moonlight-memorial", name: "Moonlight Memorial", image: "/assets/backgrounds/celestial/moonlight-memorial.jpg", category: "celestial" },
  { id: "northern-lights", name: "Northern Lights", image: "/assets/backgrounds/celestial/northern-lights.jpg", category: "celestial" },
  { id: "starry-night-sky", name: "Starry Night Sky", image: "/assets/backgrounds/celestial/starry-night-sky.jpg", category: "celestial" },
  { id: "twilight-stars", name: "Twilight Stars", image: "/assets/backgrounds/celestial/twilight-stars.jpg", category: "celestial" },
];

// Background options - Nature
const natureBackgrounds = [
  { id: "autumn-lake", name: "Autumn Lake", image: "/assets/backgrounds/nature/autumn-lake.png", category: "nature" },
  { id: "dunes-sea", name: "Dunes & Sea", image: "/assets/backgrounds/nature/dunes-sea.png", category: "nature" },
  { id: "floral-valley", name: "Floral Valley", image: "/assets/backgrounds/nature/floral-valley.png", category: "nature" },
  { id: "meadow-birds", name: "Meadow Birds", image: "/assets/backgrounds/nature/meadow-birds.png", category: "nature" },
  { id: "misty-dock", name: "Misty Dock", image: "/assets/backgrounds/nature/misty-dock.png", category: "nature" },
  { id: "mountain-lake", name: "Mountain Lake", image: "/assets/backgrounds/nature/mountain-lake.png", category: "nature" },
  { id: "riverside", name: "Riverside", image: "/assets/backgrounds/nature/riverside.png", category: "nature" },
  { id: "wheat-field", name: "Wheat Field", image: "/assets/backgrounds/nature/wheat-field.png", category: "nature" },
];

// Background options - Watercolor
const watercolorBackgrounds = [
  { id: "daisy-meadow", name: "Daisy Meadow", image: "/assets/backgrounds/watercolor/daisy-meadow.jpg", category: "watercolor" },
  { id: "hillside-vista", name: "Hillside Vista", image: "/assets/backgrounds/watercolor/hillside-vista.jpg", category: "watercolor" },
  { id: "meadow-field", name: "Meadow Field", image: "/assets/backgrounds/watercolor/meadow-field.jpg", category: "watercolor" },
  { id: "misty-lake-pines", name: "Misty Lake Pines", image: "/assets/backgrounds/watercolor/misty-lake-pines.jpg", category: "watercolor" },
  { id: "mountain-path", name: "Mountain Path", image: "/assets/backgrounds/watercolor/mountain-path.jpg", category: "watercolor" },
  { id: "mountain-poppies", name: "Mountain Poppies", image: "/assets/backgrounds/watercolor/mountain-poppies.jpg", category: "watercolor" },
  { id: "peaceful-countryside", name: "Peaceful Countryside", image: "/assets/backgrounds/watercolor/peaceful-countryside.jpg", category: "watercolor" },
  { id: "rolling-hills-trees", name: "Rolling Hills", image: "/assets/backgrounds/watercolor/rolling-hills-trees.jpg", category: "watercolor" },
  { id: "wildflower-hills", name: "Wildflower Hills", image: "/assets/backgrounds/watercolor/wildflower-hills.jpg", category: "watercolor" },
];

// Combined backgrounds array
const backgrounds = [
  ...celestialBackgrounds,
  ...natureBackgrounds,
  ...watercolorBackgrounds,
];

const PetMemorialCard = () => {
  // Pet selection state
  const [selectedPetType, setSelectedPetType] = useState<string | null>(null);
  const [selectedBreed, setSelectedBreed] = useState<PetBreed | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Card details state
  const [petName, setPetName] = useState("Milo");
  const [birthYear, setBirthYear] = useState("2015");
  const [passingYear, setPassingYear] = useState("2025");
  const [message, setMessage] = useState("They say memories are golden,\nWell maybe that is true.\nI never wanted memories,\nI only wanted you.");
  const [selectedBackground, setSelectedBackground] = useState("sunset");
  const [petSize, setPetSize] = useState([120]);
  const [openStep, setOpenStep] = useState("step-1");

  const selectedPetTypeData = selectedPetType ? getPetTypeById(selectedPetType) : null;
  const selectedBgData = backgrounds.find(b => b.id === selectedBackground);

  // Filter breeds by search query
  const filteredBreeds = useMemo(() => {
    if (!selectedPetTypeData) return [];
    if (!searchQuery.trim()) return selectedPetTypeData.breeds;
    return selectedPetTypeData.breeds.filter(breed => 
      breed.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedPetTypeData, searchQuery]);

  const handleReset = () => {
    setSelectedPetType(null);
    setSelectedBreed(null);
    setSearchQuery("");
    setPetName("Milo");
    setBirthYear("2015");
    setPassingYear("2025");
    setMessage("They say memories are golden,\nWell maybe that is true.\nI never wanted memories,\nI only wanted you.");
    setSelectedBackground("sunset");
    setPetSize([120]);
    setOpenStep("step-1");
  };

  const handlePetTypeSelect = (petTypeId: string) => {
    setSelectedPetType(petTypeId);
    setSearchQuery("");
  };

  const handleBreedSelect = (breed: PetBreed) => {
    setSelectedBreed(breed);
  };

  const handleBackToTypes = () => {
    setSelectedPetType(null);
    setSearchQuery("");
  };

  const handleDownload = () => {
    console.log("Downloading card...");
  };

  const getBackgroundStyle = () => {
    if (selectedBgData?.image) {
      return {
        backgroundImage: `url("${selectedBgData.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
    return {};
  };

  // Celestial backgrounds should use light text
  const darkBackgrounds = celestialBackgrounds.map(b => b.id);
  const isLightBackground = !darkBackgrounds.includes(selectedBackground);
  
  // Get the image to display in preview
  const previewImage = selectedBreed?.image || selectedPetTypeData?.image || "/assets/rabbit-representative.png";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url("/assets/hero-memorial.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gray-900">
            Create a Personalized Pet Memorial Card
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
            A gentle way to honor your beloved companion who crossed the Rainbow Bridge, or send comfort to someone who's grieving.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6"
              onClick={() => document.getElementById('card-creator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Create Memorial Card
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-800 text-lg px-8 py-6 bg-white hover:bg-gray-50"
            >
              View Card Gallery
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-6 text-gray-900">
            Create Your Pet Memorial Card
          </h2>
          <p className="text-center text-gray-600 text-lg mb-24 max-w-2xl mx-auto">
            A gentle way to honor your companion who crossed the Rainbow Bridge.
          </p>
          
          <div className="grid md:grid-cols-3 gap-16 mb-32">
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
              <div key={item.step} className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-3xl font-playfair font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Card Creator Section - Desktop */}
      <section id="card-creator" className="hidden md:flex min-h-screen overflow-hidden border-t">
        {/* Left Panel - Form */}
        <div className="w-2/5 border-r bg-white flex flex-col h-screen">
          <div className="flex-shrink-0 p-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-playfair font-bold text-gray-900">
                Create Your Pet Memorial Card
              </h1>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleReset}
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <Accordion 
              type="single" 
              collapsible 
              value={openStep}
              onValueChange={setOpenStep}
              className="space-y-2"
            >
              {/* Step 1: Choose Pet Type */}
              <AccordionItem value="step-1" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">Step 1: Choose Pet Type</span>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Show breeds list when a pet type is selected */}
                  {selectedPetType ? (
                    <div className="py-4">
                      {/* Back button and title */}
                      <div className="flex items-center gap-2 mb-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={handleBackToTypes}
                          className="p-1 h-auto"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </Button>
                        <span className="font-semibold">Choose Your {selectedPetTypeData?.name}</span>
                      </div>
                      
                      <p className="text-sm text-gray-500 mb-4">
                        {selectedPetTypeData?.breeds.length} {selectedPetTypeData?.name} Breeds Available
                      </p>
                      
                      {/* Search bar */}
                      <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input 
                          placeholder="Search for your pet..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      
                      {/* Breeds grid */}
                      <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2">
                        {filteredBreeds.map((breed) => (
                          <Card
                            key={breed.id}
                            onClick={() => handleBreedSelect(breed)}
                            className={`p-3 cursor-pointer transition-all hover:shadow-lg text-center ${
                              selectedBreed?.id === breed.id 
                                ? 'ring-2 ring-gray-900' 
                                : ''
                            }`}
                          >
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-16 h-16 flex items-center justify-center">
                                <img 
                                  src={breed.image} 
                                  alt={breed.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <h3 className="font-medium text-xs text-center leading-tight">{breed.name}</h3>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Show main pet types */
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                      {petTypes.map((pet) => (
                        <Card
                          key={pet.id}
                          onClick={() => handlePetTypeSelect(pet.id)}
                          className="p-4 cursor-pointer transition-all hover:shadow-lg hover:scale-105 text-center"
                        >
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-24 h-24 flex items-center justify-center">
                              <img 
                                src={pet.image} 
                                alt={`${pet.name} watercolor illustration`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <h3 className="font-semibold text-lg">{pet.name}</h3>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <Label className="text-sm font-medium">Adjust Pet Size</Label>
                    <Slider
                      value={petSize}
                      onValueChange={setPetSize}
                      min={80}
                      max={300}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Small</span>
                      <span>Large</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      You can also drag corners on the preview to resize
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white"
                    onClick={() => setOpenStep("step-2")}
                  >
                    Save All Changes
                  </Button>
                </AccordionContent>
              </AccordionItem>
              
              {/* Step 2: Personalize Details */}
              <AccordionItem value="step-2" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">Step 2: Personalize Details</span>
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
                    
                    <Button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                      onClick={() => setOpenStep("step-3")}
                    >
                      Save All Changes
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Step 3: Choose Background */}
              <AccordionItem value="step-3" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">Step 3: Choose Background</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-5 gap-3 py-4">
                    {backgrounds.map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => setSelectedBackground(bg.id)}
                        className={`aspect-square rounded-lg border-2 transition-all overflow-hidden ${
                          selectedBackground === bg.id 
                            ? 'border-gray-900 ring-2 ring-gray-400' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        title={bg.name}
                      >
                        <img src={bg.image} alt={bg.name} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    Save All Changes
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        {/* Right Panel - Live Preview */}
        <div className="w-3/5 bg-gray-50 p-8 h-screen overflow-y-auto">
          <div className="sticky top-0 pb-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold text-center mb-6">Live Preview</h2>
              
              <div 
                id="memorial-card-preview"
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl"
                style={{ 
                  aspectRatio: '5/7',
                  minHeight: '600px',
                }}
              >
                {/* Background */}
                <div 
                  className="absolute inset-0"
                  style={getBackgroundStyle()}
                />
                
                {/* Vignette overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(transparent 30%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.9) 100%)'
                  }}
                />
                
                {/* Bottom fade for text */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(transparent 55%, rgba(255,255,255,0.95) 78%, white 100%)'
                  }}
                />
                
                {/* Card Content */}
                <div 
                  className="relative h-full flex flex-col items-center justify-between px-8 pointer-events-none select-none"
                  style={{ paddingTop: '60px', paddingBottom: '40px' }}
                >
                  {/* "In Loving Memory of" and Pet Name */}
                  <div className="w-full text-center space-y-2 z-30">
                    <p 
                      className="text-lg tracking-wide"
                      style={{ 
                        color: isLightBackground ? '#000' : '#fff',
                        textShadow: isLightBackground ? '0 1px 2px rgba(255,255,255,0.8)' : '0 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      In Loving Memory of
                    </p>
                    <h3 
                      className="text-5xl md:text-6xl font-playfair"
                      style={{ 
                        color: isLightBackground ? '#000' : '#fff',
                        textShadow: isLightBackground ? '0 2px 4px rgba(255,255,255,0.8)' : '0 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {petName || "Pet Name"}
                    </h3>
                  </div>
                  
                  {/* Message */}
                  <div className="w-full text-center z-30 max-w-[70%] mx-auto mt-4">
                    <p 
                      className="text-sm md:text-base leading-relaxed whitespace-pre-line italic"
                      style={{ 
                        color: isLightBackground ? '#000' : '#fff',
                        textShadow: isLightBackground ? '0 1px 2px rgba(255,255,255,0.8)' : '0 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {message || "Your memorial message will appear here..."}
                    </p>
                  </div>
                  
                  {/* Pet Image */}
                  <div 
                    className="absolute z-20"
                    style={{ 
                      bottom: '8%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: `${petSize[0]}px`,
                    }}
                  >
                    <img 
                      src={previewImage}
                      alt={petName}
                      className="w-full object-contain drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Dates at bottom */}
                  <div 
                    className="absolute bottom-4 left-0 right-0 text-center z-30"
                  >
                    <p 
                      className="text-lg font-medium tracking-wide"
                      style={{ 
                        color: isLightBackground ? '#000' : '#fff',
                        textShadow: isLightBackground ? '0 1px 2px rgba(255,255,255,0.8)' : '0 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {birthYear && passingYear ? `${birthYear} - ${passingYear}` : "Birth Year - Passing Year"}
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
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
      
      {/* Card Creator Section - Mobile */}
      <section id="card-creator-mobile" className="md:hidden py-8 px-4 bg-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-playfair font-bold text-gray-900">
            Create Your Pet Memorial Card
          </h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleReset}
            className="mt-2"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Reset
          </Button>
        </div>
        
        {/* Live Preview - Mobile */}
        <div className="mb-8">
          <div 
            className="relative bg-white rounded-2xl overflow-hidden shadow-xl mx-auto"
            style={{ 
              aspectRatio: '5/7',
              maxWidth: '300px',
            }}
          >
            <div className="absolute inset-0" style={getBackgroundStyle()} />
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(transparent 55%, rgba(255,255,255,0.95) 78%, white 100%)' }}
            />
            <div className="relative h-full flex flex-col items-center justify-between px-4 py-6">
              <div className="text-center space-y-1 z-30">
                <p className="text-xs" style={{ color: isLightBackground ? '#000' : '#fff' }}>
                  In Loving Memory of
                </p>
                <h3 className="text-2xl font-playfair" style={{ color: isLightBackground ? '#000' : '#fff' }}>
                  {petName || "Pet Name"}
                </h3>
              </div>
              <div className="text-center z-30 max-w-[80%]">
                <p className="text-xs italic whitespace-pre-line" style={{ color: isLightBackground ? '#000' : '#fff' }}>
                  {message || "Your message here..."}
                </p>
              </div>
              <div 
                className="absolute z-20"
                style={{ bottom: '12%', left: '50%', transform: 'translateX(-50%)', width: `${petSize[0] * 0.5}px` }}
              >
                <img src={previewImage} alt={petName} className="w-full object-contain" />
              </div>
              <p className="absolute bottom-2 text-xs" style={{ color: isLightBackground ? '#000' : '#fff' }}>
                {birthYear && passingYear ? `${birthYear} - ${passingYear}` : ""}
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile Accordion */}
        <Accordion 
          type="single" 
          collapsible 
          value={openStep}
          onValueChange={setOpenStep}
          className="space-y-2"
        >
          <AccordionItem value="step-1" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <span className="font-semibold text-sm">Step 1: Choose Pet Type</span>
            </AccordionTrigger>
            <AccordionContent>
              {selectedPetType ? (
                <div className="py-4">
                  <Button variant="ghost" size="sm" onClick={handleBackToTypes} className="mb-2">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                  <Input 
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-3"
                  />
                  <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredBreeds.map((breed) => (
                      <button
                        key={breed.id}
                        onClick={() => handleBreedSelect(breed)}
                        className={`p-2 rounded-lg border text-center ${
                          selectedBreed?.id === breed.id ? 'border-gray-900 bg-gray-50' : 'border-gray-200'
                        }`}
                      >
                        <img src={breed.image} alt={breed.name} className="w-10 h-10 mx-auto object-contain" />
                        <p className="text-xs mt-1 leading-tight">{breed.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2 py-4">
                  {petTypes.map((pet) => (
                    <button
                      key={pet.id}
                      onClick={() => handlePetTypeSelect(pet.id)}
                      className="p-2 rounded-lg border border-gray-200 text-center hover:shadow"
                    >
                      <img src={pet.image} alt={pet.name} className="w-12 h-12 mx-auto object-contain" />
                      <p className="text-xs mt-1">{pet.name}</p>
                    </button>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step-2" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <span className="font-semibold text-sm">Step 2: Personalize Details</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 py-4">
                <div>
                  <Label htmlFor="petName-mobile" className="text-sm">Pet Name</Label>
                  <Input 
                    id="petName-mobile"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-sm">Birth Year</Label>
                    <Input value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm">Passing Year</Label>
                    <Input value={passingYear} onChange={(e) => setPassingYear(e.target.value)} className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Memorial Message</Label>
                  <Textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 min-h-[80px]" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step-3" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <span className="font-semibold text-sm">Step 3: Choose Background</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-5 gap-2 py-4">
                {backgrounds.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBackground(bg.id)}
                    className={`aspect-square rounded-lg border-2 overflow-hidden ${
                      selectedBackground === bg.id ? 'border-gray-900' : 'border-gray-200'
                    }`}
                  >
                    <img src={bg.image} alt={bg.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Button 
          onClick={handleDownload}
          className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white py-6"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Card: FREE!
        </Button>
      </section>
      
      <Footer />
    </div>
  );
};

export default PetMemorialCard;
