
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Star, Upload, Heart } from "lucide-react";

const StarMemorialPage = () => {
  // State for memorial creation form
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");
  const [petPassingDate, setPetPassingDate] = useState("");
  const [petMessage, setPetMessage] = useState("");
  const [petPhoto, setPetPhoto] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memorialCreated, setMemorialCreated] = useState(false);
  const [allMemorials, setAllMemorials] = useState<any[]>([]);
  
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Handle file upload for pet photo
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setPetPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setMemorialCreated(true);
      
      // Create new memorial object
      const newMemorial = {
        id: Date.now().toString(),
        petName,
        petType,
        petBirthDate,
        petPassingDate,
        petMessage,
        petPhoto,
        createdAt: new Date().toISOString()
      };
      
      // Add to memorials list
      setAllMemorials(prev => [newMemorial, ...prev]);
      
      toast.success("Memorial Created", {
        description: `${petName} has been transformed into a beautiful star in our celestial map.`
      });
      
      // Animate the canvas to show the pet becoming a star
      animateStarTransformation();
    }, 1500);
  };
  
  // Function to animate stars on the canvas
  const animateStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match its display size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Create stars
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      brightness: Math.random(),
      speed: Math.random() * 0.05
    }));
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Make stars twinkle
        star.brightness += star.speed;
        if (star.brightness > 1 || star.brightness < 0.2) {
          star.speed = -star.speed;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  };
  
  // Function to animate pet transformation into a star
  const animateStarTransformation = () => {
    // This would be implemented with more complex canvas or WebGL animations
    // For now, we'll display a simpler version
    console.log("Pet transformed into star animation would play here");
  };
  
  // Initialize star animation when component mounts
  useEffect(() => {
    animateStars();
  }, []);

  // Reset form fields after successful submission
  const handleCreateAnother = () => {
    setMemorialCreated(false);
    setPetName("");
    setPetType("");
    setPetBirthDate("");
    setPetPassingDate("");
    setPetMessage("");
    setPetPhoto(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 to-black text-white">
      <Header />
      
      <main className="flex-grow pt-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Create a Celestial Memorial
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your beloved pet into an eternal star in our interactive night sky
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Memorial Creation Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={memorialCreated ? "hidden md:block" : ""}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-xl">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-playfair mb-6 flex items-center">
                    <Star className="mr-2 h-5 w-5 text-yellow-300" />
                    Create Their Star
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Pet Photo Upload */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4 w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-2 border-indigo-400 relative">
                        {petPhoto ? (
                          <img 
                            src={petPhoto} 
                            alt="Pet preview" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Upload className="h-8 w-8 text-gray-400" />
                        )}
                      </div>
                      <Label 
                        htmlFor="pet-photo" 
                        className="cursor-pointer py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm flex items-center justify-center transition-colors"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Pet Photo
                      </Label>
                      <Input 
                        id="pet-photo" 
                        type="file" 
                        accept="image/*" 
                        onChange={handlePhotoUpload}
                        className="hidden" 
                      />
                    </div>
                    
                    {/* Pet Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="pet-name">Pet's Name</Label>
                        <Input
                          id="pet-name"
                          value={petName}
                          onChange={(e) => setPetName(e.target.value)}
                          placeholder="e.g., Luna"
                          required
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="pet-type">Type of Pet</Label>
                        <Input
                          id="pet-type"
                          value={petType}
                          onChange={(e) => setPetType(e.target.value)}
                          placeholder="e.g., Dog, Cat, Bird"
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="birth-date">Birth Date (optional)</Label>
                          <Input
                            id="birth-date"
                            type="date"
                            value={petBirthDate}
                            onChange={(e) => setPetBirthDate(e.target.value)}
                            className="bg-white/20 border-white/20 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="passing-date">Passing Date</Label>
                          <Input
                            id="passing-date"
                            type="date"
                            value={petPassingDate}
                            onChange={(e) => setPetPassingDate(e.target.value)}
                            required
                            className="bg-white/20 border-white/20 text-white"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="pet-message">Memorial Message</Label>
                        <Textarea
                          id="pet-message"
                          value={petMessage}
                          onChange={(e) => setPetMessage(e.target.value)}
                          placeholder="Share your favorite memories or a special message..."
                          rows={4}
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    >
                      {isSubmitting ? "Creating Star Memorial..." : "Transform to Star"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Star Canvas Display */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={memorialCreated ? "col-span-2" : ""}
            >
              <div className="relative w-full h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden border border-white/20 shadow-lg">
                <canvas 
                  ref={canvasRef} 
                  className="absolute inset-0 w-full h-full bg-black"
                ></canvas>
                
                {memorialCreated && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/60 backdrop-blur-sm p-4">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, type: "spring" }}
                      className="text-center"
                    >
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-yellow-300 shadow-xl shadow-yellow-500/30">
                        {petPhoto && <img src={petPhoto} alt={petName} className="w-full h-full object-cover" />}
                      </div>
                      
                      <h2 className="text-3xl font-playfair font-bold mb-2">{petName}</h2>
                      <p className="text-gray-300 mb-6">{petPassingDate ? new Date(petPassingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ""}</p>
                      
                      <div className="flex justify-center space-x-4 mb-8">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                          <Star className="mr-2 h-4 w-4" />
                          View Memorial
                        </Button>
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                          <Heart className="mr-2 h-4 w-4" />
                          Send Light
                        </Button>
                      </div>
                      
                      <p className="text-sm text-gray-400 max-w-md mx-auto">
                        {petName}'s star will shine brightly in our celestial memorial sky forever.
                        Visit anytime to send light and remember your beloved companion.
                      </p>
                      
                      <Button 
                        onClick={handleCreateAnother} 
                        variant="outline" 
                        className="mt-6 border-white/30 text-white hover:bg-white/10"
                      >
                        Create Another Memorial
                      </Button>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* All Memorials Section */}
          {allMemorials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-playfair font-bold mb-6 flex items-center">
                <Star className="mr-2 h-5 w-5 text-yellow-300" />
                Your Pet Memorials
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allMemorials.map((memorial) => (
                  <Card key={memorial.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-xl overflow-hidden">
                    <div className="h-40 bg-gray-800 relative">
                      {memorial.petPhoto && (
                        <img 
                          src={memorial.petPhoto} 
                          alt={memorial.petName} 
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-playfair font-bold">{memorial.petName}</h3>
                      <p className="text-sm text-gray-300">{memorial.petType}</p>
                      {memorial.petPassingDate && (
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(memorial.petPassingDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      )}
                      {memorial.petMessage && (
                        <p className="mt-3 text-sm line-clamp-2">{memorial.petMessage}</p>
                      )}
                      <div className="flex justify-between mt-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-indigo-300 hover:text-indigo-200 hover:bg-white/5"
                        >
                          <Star className="mr-1 h-4 w-4" />
                          View
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-pink-300 hover:text-pink-200 hover:bg-white/5"
                        >
                          <Heart className="mr-1 h-4 w-4" />
                          Send Light
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StarMemorialPage;
