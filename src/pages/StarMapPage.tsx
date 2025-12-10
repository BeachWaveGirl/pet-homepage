import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PetMemorialForm, PetData } from "@/components/star-map/PetMemorialForm";
import { MemorialPreviewCard } from "@/components/star-map/MemorialPreviewCard";
import { AstronomicalStarMap } from "@/components/star-map/AstronomicalStarMap";
import { useNasaStarData } from "@/hooks/useNasaStarData";
import { trackDownload, trackCTAClick } from "@/utils/analytics";
import { Download, Sparkles, Star, Heart, Moon } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";

const StarMapPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [petData, setPetData] = useState<PetData>({
    name: "",
    type: "",
    dateOfFirstMeeting: "",
    dateOfPassing: "",
    ownerName: "",
    memorialMessage: "",
  });

  const previewRef = useRef<HTMLDivElement>(null);
  const { starMemorialData } = useNasaStarData(petData);

  const handlePhotoChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  const handleDownload = async () => {
    const element = document.querySelector("[data-memorial-card]") as HTMLElement;
    if (!element) {
      toast.error("Unable to generate download");
      return;
    }

    try {
      toast.loading("Generating your star map...");
      
      const canvas = await html2canvas(element, {
        backgroundColor: "#000000",
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `${petData.name || "pet"}-star-memorial.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      trackDownload(link.download, "png");
      toast.dismiss();
      toast.success("Star map downloaded successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to generate download");
    }
  };

  const handleStartCreating = () => {
    trackCTAClick("Start Creating", "hero", "form");
    setShowForm(true);
  };

  if (!showForm) {
    // Hero State
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        {/* Hero Section with Live Star Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Star Background */}
          <div className="absolute inset-0">
            <AstronomicalStarMap
              date={new Date()}
              width={1920}
              height={1080}
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Custom Pet Star Memorial</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 text-white">
              Honor Your Pet with a
              <span className="block text-primary">Personalized Star Map</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create a beautiful memorial showing the night sky as it appeared on the special day 
              your beloved companion crossed the Rainbow Bridge.
            </p>
            
            <Button
              size="lg"
              onClick={handleStartCreating}
              className="text-lg px-8 py-6 rounded-full"
            >
              <Star className="mr-2 w-5 h-5" />
              Create Your Star Map
            </Button>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-white mb-1">Unique Star Selection</h3>
                <p className="text-sm text-muted-foreground">
                  A real star is selected based on the date to honor your pet
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Moon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-white mb-1">Accurate Moon Phase</h3>
                <p className="text-sm text-muted-foreground">
                  Shows the exact moon phase on your special date
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-white mb-1">Personal Touch</h3>
                <p className="text-sm text-muted-foreground">
                  Add your pet's photo and a heartfelt message
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Form State
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-light mb-2">
            Create Your Star Memorial
          </h1>
          <p className="text-muted-foreground">
            Fill in the details below and watch your memorial come to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form Column */}
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Pet Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PetMemorialForm
                petData={petData}
                onPetDataChange={setPetData}
                onPhotoChange={handlePhotoChange}
                photoPreview={photoPreview}
              />

              <div className="mt-6 pt-6 border-t space-y-4">
                <Button
                  onClick={handleDownload}
                  disabled={!petData.name || !petData.dateOfPassing}
                  className="w-full"
                  size="lg"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Star Map
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="w-full"
                >
                  Back to Start
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview Column */}
          <div ref={previewRef}>
            <MemorialPreviewCard
              petData={petData}
              photoPreview={photoPreview}
            />
          </div>
        </div>

        {/* Star Data Info */}
        {starMemorialData && (
          <div className="max-w-6xl mx-auto mt-8">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl mb-1">{starMemorialData.moonPhase.emoji}</div>
                    <div className="text-sm font-medium">{starMemorialData.moonPhase.phase}</div>
                    <div className="text-xs text-muted-foreground">Moon Phase</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="text-sm font-medium">{starMemorialData.starName}</div>
                    <div className="text-xs text-muted-foreground">Memorial Star</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1">🌅</div>
                    <div className="text-sm font-medium">{starMemorialData.sunTimes.sunset}</div>
                    <div className="text-xs text-muted-foreground">Sunset</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1">🍂</div>
                    <div className="text-sm font-medium">{starMemorialData.season.season}</div>
                    <div className="text-xs text-muted-foreground">Season</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default StarMapPage;
