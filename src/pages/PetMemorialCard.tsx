import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, RotateCcw, ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { petTypes, getPetTypeById, PetBreed } from "@/data/petBreeds";

// Default background - Sunset Pastels (always available)
const defaultBackground = {
  id: "sunset-pastels",
  name: "Sunset Pastels",
  image: "/assets/backgrounds/sunset-pastels.jpg",
  category: "default"
};

// Background options - Celestial (12 images)
const celestialBackgrounds = [{
  id: "starry-night",
  name: "Starry Night",
  image: "/assets/backgrounds/celestial/starry-night-sky.jpg",
  category: "celestial"
}, {
  id: "cosmic-dreams",
  name: "Cosmic Dreams",
  image: "/assets/backgrounds/celestial/cosmic-peace.jpg",
  category: "celestial"
}, {
  id: "galaxy-peace",
  name: "Galaxy Peace",
  image: "/assets/backgrounds/celestial/galaxy-dreams.jpg",
  category: "celestial"
}, {
  id: "midnight-stars",
  name: "Midnight Stars",
  image: "/assets/backgrounds/celestial/midnight-garden.jpg",
  category: "celestial"
}, {
  id: "northern-lights",
  name: "Northern Lights",
  image: "/assets/backgrounds/celestial/northern-lights.jpg",
  category: "celestial"
}, {
  id: "heavenly-glow",
  name: "Heavenly Glow",
  image: "/assets/backgrounds/celestial/heavenly-glow.jpg",
  category: "celestial"
}, {
  id: "golden-stars",
  name: "Golden Stars",
  image: "/assets/backgrounds/celestial/golden-stars.jpg",
  category: "celestial"
}, {
  id: "moonlight",
  name: "Moonlight",
  image: "/assets/backgrounds/celestial/moonlight-memorial.jpg",
  category: "celestial"
}, {
  id: "twilight-sky",
  name: "Twilight Sky",
  image: "/assets/backgrounds/celestial/twilight-stars.jpg",
  category: "celestial"
}, {
  id: "angel-stars",
  name: "Angel Stars",
  image: "/assets/backgrounds/celestial/angel-stars.jpg",
  category: "celestial"
}, {
  id: "forever-stars",
  name: "Forever Stars",
  image: "/assets/backgrounds/celestial/forever-stars.jpg",
  category: "celestial"
}, {
  id: "constellation",
  name: "Constellation",
  image: "/assets/backgrounds/celestial/constellation-sky.jpg",
  category: "celestial"
}];

// Background options - Nature (8 images)
const natureBackgrounds = [{
  id: "autumn-lake",
  name: "Autumn Lake",
  image: "/assets/backgrounds/nature/autumn-lake.png",
  category: "nature"
}, {
  id: "mountain-vista",
  name: "Mountain Vista",
  image: "/assets/backgrounds/nature/mountain-lake.png",
  category: "nature"
}, {
  id: "peaceful-meadow",
  name: "Peaceful Meadow",
  image: "/assets/backgrounds/nature/meadow-birds.png",
  category: "nature"
}, {
  id: "misty-morning",
  name: "Misty Morning",
  image: "/assets/backgrounds/nature/misty-dock.png",
  category: "nature"
}, {
  id: "rolling-hills",
  name: "Rolling Hills",
  image: "/assets/backgrounds/nature/floral-valley.png",
  category: "nature"
}, {
  id: "riverside",
  name: "Riverside",
  image: "/assets/backgrounds/nature/riverside.png",
  category: "nature"
}, {
  id: "sunset-field",
  name: "Sunset Field",
  image: "/assets/backgrounds/nature/wheat-field.png",
  category: "nature"
}, {
  id: "flower-garden",
  name: "Flower Garden",
  image: "/assets/backgrounds/nature/dunes-sea.png",
  category: "nature"
}];

// Background options - Watercolor (9 images)
const watercolorBackgrounds = [{
  id: "soft-meadow",
  name: "Soft Meadow",
  image: "/assets/backgrounds/watercolor/meadow-field.jpg",
  category: "watercolor"
}, {
  id: "hillside-vista",
  name: "Hillside Vista",
  image: "/assets/backgrounds/watercolor/hillside-vista.jpg",
  category: "watercolor"
}, {
  id: "daisy-field",
  name: "Daisy Field",
  image: "/assets/backgrounds/watercolor/daisy-meadow.jpg",
  category: "watercolor"
}, {
  id: "lake-pines",
  name: "Lake Pines",
  image: "/assets/backgrounds/watercolor/misty-lake-pines.jpg",
  category: "watercolor"
}, {
  id: "mountain-path",
  name: "Mountain Path",
  image: "/assets/backgrounds/watercolor/mountain-path.jpg",
  category: "watercolor"
}, {
  id: "poppy-fields",
  name: "Poppy Fields",
  image: "/assets/backgrounds/watercolor/mountain-poppies.jpg",
  category: "watercolor"
}, {
  id: "countryside",
  name: "Countryside",
  image: "/assets/backgrounds/watercolor/peaceful-countryside.jpg",
  category: "watercolor"
}, {
  id: "rolling-hills-trees",
  name: "Rolling Hills",
  image: "/assets/backgrounds/watercolor/rolling-hills-trees.jpg",
  category: "watercolor"
}, {
  id: "wildflowers",
  name: "Wildflowers",
  image: "/assets/backgrounds/watercolor/wildflower-hills.jpg",
  category: "watercolor"
}];

// Combined backgrounds array - default first
const backgrounds = [defaultBackground, ...celestialBackgrounds, ...natureBackgrounds, ...watercolorBackgrounds];
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
  const [selectedBackground, setSelectedBackground] = useState("sunset-pastels");
  const [petSize, setPetSize] = useState([120]);
  const [openStep, setOpenStep] = useState("step-1");
  const selectedPetTypeData = selectedPetType ? getPetTypeById(selectedPetType) : null;
  const selectedBgData = backgrounds.find(b => b.id === selectedBackground);

  // Filter breeds by search query
  const filteredBreeds = useMemo(() => {
    if (!selectedPetTypeData) return [];
    if (!searchQuery.trim()) return selectedPetTypeData.breeds;
    return selectedPetTypeData.breeds.filter(breed => breed.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [selectedPetTypeData, searchQuery]);
  const handleReset = () => {
    setSelectedPetType(null);
    setSelectedBreed(null);
    setSearchQuery("");
    setPetName("Milo");
    setBirthYear("2015");
    setPassingYear("2025");
    setMessage("They say memories are golden,\nWell maybe that is true.\nI never wanted memories,\nI only wanted you.");
    setSelectedBackground("sunset-pastels");
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
        backgroundPosition: 'center'
      };
    }
    return {};
  };

  // Celestial backgrounds should use light text
  const darkBackgrounds = celestialBackgrounds.map(b => b.id);
  const isLightBackground = !darkBackgrounds.includes(selectedBackground);

  // Get the image to display in preview - default to white lop rabbit
  const defaultRabbitImage = "/assets/white-lop.png";
  const previewImage = selectedBreed?.image || selectedPetTypeData?.image || defaultRabbitImage;
  return <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      {/* Hero Section - Full width like homepage */}
      <section className="w-full pt-16 relative">
        {/* Hero image - full display at 100% opacity, edge-to-edge */}
        <div className="w-full relative">
          <img src="/assets/banners/Pet_Memorial_Hero.png" alt="Pet Memorial - Ornate rococo frame with beloved pets" className="w-full h-auto object-contain" />
          
          {/* Text overlay centered within the image scene */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl" style={{
            marginTop: '-5%'
          }}>
              <h1 style={{
              textShadow: '0 0 30px rgba(245, 241, 232, 0.9), 0 0 60px rgba(245, 241, 232, 0.7), 0 2px 4px rgba(0,0,0,0.1)'
            }} className="font-playfair text-3xl md:text-4xl xl:text-6xl font-bold mb-4 text-foreground lg:text-3xl">
                Create a Personalized<br />Pet Memorial Card
              </h1>
              <p style={{
              textShadow: '0 0 20px rgba(245, 241, 232, 0.95), 0 0 40px rgba(245, 241, 232, 0.8)'
            }} className="text-base md:text-lg text-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed lg:text-lg">
                A gentle way to honor your beloved companion<br />who crossed the Rainbow Bridge
              </p>
              
              <div className="flex justify-center">
                <Button className="px-8 py-5 text-base backdrop-blur-sm" style={{
                boxShadow: '0 0 20px rgba(245, 241, 232, 0.6), 0 4px 15px rgba(0,0,0,0.1)'
              }} onClick={() => document.getElementById('card-creator')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Create Memorial Card
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section - Matching homepage styling */}
      <section className="w-full py-16 px-4 bg-aged-paper paper-texture paper-vignette relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mb-2"></div>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Create Your Pet Memorial Card
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A gentle way to honor your companion who crossed the Rainbow Bridge
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-pastel-gold/50 to-transparent mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[{
            step: 1,
            title: "Choose Pet Type",
            description: "Choose from dogs, cats, rabbits, and more. Beautiful illustrations that honor your beloved companion."
          }, {
            step: 2,
            title: "Personalize Details",
            description: "Add your pet's name, dates, and a heartfelt message. Create a keepsake for yourself or send sympathy to someone who's hurting."
          }, {
            step: 3,
            title: "Choose a Background",
            description: "Soft skies, peaceful rainbows, and starry nights. Preview your card live, then download instantly to print or share."
          }].map(item => <div key={item.step} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/40 text-foreground flex items-center justify-center mx-auto">
                  <span className="text-base font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-playfair font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Card Creator Section - Desktop */}
      <section id="card-creator" className="hidden md:flex min-h-screen overflow-hidden">
        {/* Left Panel - Form */}
        <div className="w-2/5 bg-aged-paper paper-texture flex flex-col h-screen relative">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pastel-gold/60 to-transparent"></div>
          
          {/* Decorative right border */}
          <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-pastel-gold/30 via-pastel-gold/60 to-pastel-gold/30"></div>
          
          <div className="flex-shrink-0 p-6">
            {/* Decorative header divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pastel-gold/40 to-pastel-gold/60"></div>
              <div className="w-2 h-2 rotate-45 border border-pastel-gold/60 bg-cream-light"></div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-pastel-gold/40 to-pastel-gold/60"></div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-playfair font-bold text-foreground">
                Create Your Memorial
              </h1>
              <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground hover:text-foreground">
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
            
            {/* Decorative divider below title */}
            <div className="h-px w-full bg-gradient-to-r from-pastel-gold/60 via-pastel-gold/30 to-transparent"></div>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <Accordion type="single" collapsible value={openStep} onValueChange={setOpenStep} className="space-y-4">
              {/* Step 1: Choose Pet Type */}
              <AccordionItem value="step-1" className="border border-pastel-gold/30 rounded-xl px-5 py-1 bg-cream-light/80 shadow-sm">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">1</span>
                    </div>
                    <span className="font-playfair font-semibold text-foreground">Choose Pet Type</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Decorative divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent mb-4"></div>
                  
                  {/* Show breeds list when a pet type is selected */}
                  {selectedPetType ? <div className="py-2">
                      {/* Back button and title */}
                      <div className="flex items-center gap-2 mb-2">
                        <Button variant="ghost" size="sm" onClick={handleBackToTypes} className="p-1 h-auto text-muted-foreground hover:text-foreground">
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </Button>
                        <span className="font-semibold text-foreground">Choose Your {selectedPetTypeData?.name}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {selectedPetTypeData?.breeds.length} {selectedPetTypeData?.name} Breeds Available
                      </p>
                      
                      {/* Search bar */}
                      <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search for your pet..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 border-pastel-gold/30 bg-cream-light" />
                      </div>
                      
                      {/* Breeds grid */}
                      <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2">
                        {filteredBreeds.map(breed => <Card key={breed.id} onClick={() => handleBreedSelect(breed)} className={`p-3 cursor-pointer transition-all hover:shadow-lg text-center border-pastel-gold/20 bg-cream-light/50 ${selectedBreed?.id === breed.id ? 'ring-2 ring-pastel-gold border-pastel-gold' : ''}`}>
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-16 h-16 flex items-center justify-center">
                                <img src={breed.image} alt={breed.name} className="w-full h-full object-contain" />
                              </div>
                              <h3 className="font-medium text-xs text-center leading-tight text-foreground">{breed.name}</h3>
                            </div>
                          </Card>)}
                      </div>
                    </div> : (/* Show main pet types */
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-2">
                      {petTypes.map(pet => <Card key={pet.id} onClick={() => handlePetTypeSelect(pet.id)} className="p-4 cursor-pointer transition-all hover:shadow-lg hover:scale-105 text-center border-pastel-gold/20 bg-cream-light/50">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-20 flex items-center justify-center">
                              <img src={pet.image} alt={`${pet.name} watercolor illustration`} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-semibold text-base text-foreground">{pet.name}</h3>
                          </div>
                        </Card>)}
                    </div>)}
                  
                  {/* Decorative divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent my-4"></div>
                  
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Adjust Pet Size</Label>
                    <Slider value={petSize} onValueChange={setPetSize} min={80} max={300} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Small</span>
                      <span>Large</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-transparent border-2 border-pastel-gold text-foreground hover:bg-pastel-gold/10" onClick={() => setOpenStep("step-2")}>
                    Continue to Step 2
                  </Button>
                </AccordionContent>
              </AccordionItem>
              
              {/* Step 2: Personalize Details */}
              <AccordionItem value="step-2" className="border border-pastel-gold/30 rounded-xl px-5 py-1 bg-cream-light/80 shadow-sm">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">2</span>
                    </div>
                    <span className="font-playfair font-semibold text-foreground">Personalize Details</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Decorative divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent mb-4"></div>
                  
                  <div className="space-y-4 py-2">
                    <div>
                      <Label htmlFor="petName" className="text-foreground">Pet Name</Label>
                      <Input id="petName" value={petName} onChange={e => setPetName(e.target.value)} placeholder="Enter pet's name" className="mt-1 border-pastel-gold/30 bg-cream-light" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="birthYear" className="text-foreground">Birth Year</Label>
                        <Input id="birthYear" value={birthYear} onChange={e => setBirthYear(e.target.value)} placeholder="e.g., 2015" className="mt-1 border-pastel-gold/30 bg-cream-light" />
                      </div>
                      <div>
                        <Label htmlFor="passingYear" className="text-foreground">Passing Year</Label>
                        <Input id="passingYear" value={passingYear} onChange={e => setPassingYear(e.target.value)} placeholder="e.g., 2025" className="mt-1 border-pastel-gold/30 bg-cream-light" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground">Memorial Message</Label>
                      <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Write a heartfelt message..." className="mt-1 min-h-[120px] border-pastel-gold/30 bg-cream-light" />
                    </div>
                    
                    <Button className="w-full bg-transparent border-2 border-pastel-gold text-foreground hover:bg-pastel-gold/10" onClick={() => setOpenStep("step-3")}>
                      Continue to Step 3
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Step 3: Choose Background */}
              <AccordionItem value="step-3" className="border border-pastel-gold/30 rounded-xl px-5 py-1 bg-cream-light/80 shadow-sm">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">3</span>
                    </div>
                    <span className="font-playfair font-semibold text-foreground">Choose Background</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Decorative divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent mb-4"></div>
                  
                  <div className="grid grid-cols-5 gap-3 py-2">
                    {backgrounds.map(bg => <button key={bg.id} onClick={() => setSelectedBackground(bg.id)} className={`aspect-square rounded-lg border-2 transition-all overflow-hidden ${selectedBackground === bg.id ? 'border-pastel-gold ring-2 ring-pastel-gold/40' : 'border-pastel-gold/20 hover:border-pastel-gold/50'}`} title={bg.name}>
                        <img src={bg.image} alt={bg.name} className="w-full h-full object-cover" />
                      </button>)}
                  </div>
                  
                  <Button className="w-full mt-4 bg-transparent border-2 border-pastel-gold text-foreground hover:bg-pastel-gold/10">
                    Finalize Card
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            {/* Decorative bottom flourish */}
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pastel-gold/30 to-pastel-gold/50"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-pastel-gold/40"></div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-pastel-gold/30 to-pastel-gold/50"></div>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Live Preview */}
        <div className="w-3/5 bg-aged-paper/50 paper-texture p-6 h-screen overflow-hidden flex flex-col relative">
          {/* Decorative left border */}
          <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-pastel-gold/30 via-pastel-gold/60 to-pastel-gold/30"></div>
          
          <div className="flex-1 flex flex-col min-h-0">
            <div className="max-w-xl mx-auto w-full flex flex-col h-full">
              {/* Preview header with decorative elements */}
              <div className="flex-shrink-0 mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pastel-gold/40 to-pastel-gold/60"></div>
                  <h2 className="text-lg font-playfair font-bold text-foreground">Live Preview</h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-pastel-gold/40 to-pastel-gold/60"></div>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center min-h-0">
                <div id="memorial-card-preview" className="relative bg-white rounded-2xl overflow-hidden shadow-xl w-full" style={{
                aspectRatio: '5/7',
                maxHeight: 'calc(100vh - 200px)'
              }}>
                {/* Background */}
                <div className="absolute inset-0" style={getBackgroundStyle()} />
                
                {/* Vignette overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(transparent 30%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.9) 100%)'
                }} />
                
                {/* Bottom fade for text */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(transparent 55%, rgba(255,255,255,0.95) 78%, white 100%)'
                }} />
                
                {/* Card Content */}
                <div className="relative h-full flex flex-col items-center justify-between px-8 pointer-events-none select-none" style={{
                  paddingTop: '60px',
                  paddingBottom: '40px'
                }}>
                  {/* "In Loving Memory of" and Pet Name */}
                  <div className="w-full text-center space-y-2 z-30">
                    <p className="text-lg tracking-wide" style={{
                      color: isLightBackground ? '#000' : '#fff',
                      textShadow: isLightBackground ? '0 1px 2px rgba(255,255,255,0.8)' : '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      In Loving Memory of
                    </p>
                    <h3 className="text-5xl md:text-6xl font-playfair" style={{
                      color: isLightBackground ? '#000' : '#fff',
                      textShadow: isLightBackground ? '0 2px 4px rgba(255,255,255,0.8)' : '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                      {petName || "Pet Name"}
                    </h3>
                  </div>
                  
                  {/* Message */}
                  <div className="w-full text-center z-30 max-w-[70%] mx-auto mt-4">
                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-line italic" style={{
                      color: isLightBackground ? '#000' : '#fff',
                      textShadow: isLightBackground ? '0 1px 2px rgba(255,255,255,0.8)' : '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {message || "Your memorial message will appear here..."}
                    </p>
                  </div>
                  
                  {/* Pet Image */}
                  <div className="absolute z-20" style={{
                    bottom: '8%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: `${petSize[0]}px`
                  }}>
                    <img src={previewImage} alt={petName} className="w-full object-contain drop-shadow-lg" />
                  </div>
                  
                  {/* Dates at bottom */}
                  <div className="absolute bottom-4 left-0 right-0 text-center z-30">
                    <p className="text-lg font-medium tracking-wide" style={{
                      color: isLightBackground ? '#000' : '#fff',
                      textShadow: isLightBackground ? '0 1px 2px rgba(255,255,255,0.8)' : '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {birthYear && passingYear ? `${birthYear} - ${passingYear}` : "Birth Year - Passing Year"}
                    </p>
                  </div>
                </div>
              </div>
              </div>
              
              <div className="flex-shrink-0 mt-4">
                <p className="text-xs text-muted-foreground text-center mb-3">
                  Updates in real-time as you edit
                </p>
                
                <Button onClick={handleDownload} className="w-full bg-transparent border-2 border-pastel-gold text-charcoal hover:bg-pastel-gold/10 py-5">
                  <Download className="w-4 h-4 mr-2" />
                  Download Card: <span className="line-through mx-2 opacity-60">$3.99</span> FREE for a limited time!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Card Creator Section - Mobile */}
      <section id="card-creator-mobile" className="md:hidden py-8 px-4 bg-aged-paper paper-texture">
        {/* Decorative header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pastel-gold/40 to-pastel-gold/60"></div>
          <div className="w-2 h-2 rotate-45 border border-pastel-gold/60 bg-cream-light"></div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-pastel-gold/40 to-pastel-gold/60"></div>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-playfair font-bold text-foreground">
            Create Your Memorial
          </h2>
          <Button variant="ghost" size="sm" onClick={handleReset} className="mt-2 text-muted-foreground">
            <RotateCcw className="w-4 h-4 mr-1" />
            Reset
          </Button>
        </div>
        
        {/* Live Preview - Mobile */}
        <div className="mb-8">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl mx-auto" style={{
          aspectRatio: '5/7',
          maxWidth: '300px'
        }}>
            <div className="absolute inset-0" style={getBackgroundStyle()} />
            <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(transparent 55%, rgba(255,255,255,0.95) 78%, white 100%)'
          }} />
            <div className="relative h-full flex flex-col items-center justify-between px-4 py-6">
              <div className="text-center space-y-1 z-30">
                <p className="text-xs" style={{
                color: isLightBackground ? '#000' : '#fff'
              }}>
                  In Loving Memory of
                </p>
                <h3 className="text-2xl font-playfair" style={{
                color: isLightBackground ? '#000' : '#fff'
              }}>
                  {petName || "Pet Name"}
                </h3>
              </div>
              <div className="text-center z-30 max-w-[80%]">
                <p className="text-xs italic whitespace-pre-line" style={{
                color: isLightBackground ? '#000' : '#fff'
              }}>
                  {message || "Your message here..."}
                </p>
              </div>
              <div className="absolute z-20" style={{
              bottom: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${petSize[0] * 0.5}px`
            }}>
                <img src={previewImage} alt={petName} className="w-full object-contain" />
              </div>
              <p className="absolute bottom-2 text-xs" style={{
              color: isLightBackground ? '#000' : '#fff'
            }}>
                {birthYear && passingYear ? `${birthYear} - ${passingYear}` : ""}
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile Accordion */}
        <Accordion type="single" collapsible value={openStep} onValueChange={setOpenStep} className="space-y-2">
          <AccordionItem value="step-1" className="border border-primary/20 rounded-lg px-4 bg-cream-light">
            <AccordionTrigger className="hover:no-underline">
              <span className="font-semibold text-sm text-charcoal">Step 1: Choose Pet Type</span>
            </AccordionTrigger>
            <AccordionContent>
              {selectedPetType ? <div className="py-4">
                  <Button variant="ghost" size="sm" onClick={handleBackToTypes} className="mb-2">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                  <Input placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="mb-3" />
                  <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredBreeds.map(breed => <button key={breed.id} onClick={() => handleBreedSelect(breed)} className={`p-2 rounded-lg border text-center ${selectedBreed?.id === breed.id ? 'border-gray-900 bg-gray-50' : 'border-gray-200'}`}>
                        <img src={breed.image} alt={breed.name} className="w-10 h-10 mx-auto object-contain" />
                        <p className="text-xs mt-1 leading-tight">{breed.name}</p>
                      </button>)}
                  </div>
                </div> : <div className="grid grid-cols-3 gap-2 py-4">
                  {petTypes.map(pet => <button key={pet.id} onClick={() => handlePetTypeSelect(pet.id)} className="p-2 rounded-lg border border-gray-200 text-center hover:shadow">
                      <img src={pet.image} alt={pet.name} className="w-12 h-12 mx-auto object-contain" />
                      <p className="text-xs mt-1">{pet.name}</p>
                    </button>)}
                </div>}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step-2" className="border border-primary/20 rounded-lg px-4 bg-cream-light">
            <AccordionTrigger className="hover:no-underline">
              <span className="font-semibold text-sm text-charcoal">Step 2: Personalize Details</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 py-4">
                <div>
                  <Label htmlFor="petName-mobile" className="text-sm">Pet Name</Label>
                  <Input id="petName-mobile" value={petName} onChange={e => setPetName(e.target.value)} className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-sm">Birth Year</Label>
                    <Input value={birthYear} onChange={e => setBirthYear(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm">Passing Year</Label>
                    <Input value={passingYear} onChange={e => setPassingYear(e.target.value)} className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Memorial Message</Label>
                  <Textarea value={message} onChange={e => setMessage(e.target.value)} className="mt-1 min-h-[80px]" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step-3" className="border border-primary/20 rounded-lg px-4 bg-cream-light">
            <AccordionTrigger className="hover:no-underline">
              <span className="font-semibold text-sm text-charcoal">Step 3: Choose Background</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-5 gap-2 py-4">
                {backgrounds.map(bg => <button key={bg.id} onClick={() => setSelectedBackground(bg.id)} className={`aspect-square rounded-lg border-2 overflow-hidden ${selectedBackground === bg.id ? 'border-gray-900' : 'border-gray-200'}`}>
                    <img src={bg.image} alt={bg.name} className="w-full h-full object-cover" />
                  </button>)}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Button onClick={handleDownload} className="w-full mt-6 bg-transparent border-2 border-pastel-gold text-charcoal hover:bg-pastel-gold/10 py-6">
          <Download className="w-4 h-4 mr-2" />
          Download Card: FREE!
        </Button>
      </section>
      
      <Footer />
    </div>;
};
export default PetMemorialCard;