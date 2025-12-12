
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Updated offering titles and descriptions
const memorialOfferings = [
  {
    id: "pet-funeral",
    title: "Pet Funeral Announcement Card",
    description: "Create a dignified digital invitation to share your pet's memorial service with family and friends. Instant download, easily shareable via text or social media.",
    imageUrl: "/assets/banners/HP_funeral.png",
    link: "/pet-funeral",
    detailedDescription: "Design personalized announcement cards for your pet's service. Choose from elegant templates and customize with your pet's photo and memorial details.",
    keywords: ["pet loss announcement", "dog funeral invitation", "cat memorial service", "pet remembrance gathering"]
  },
  {
    id: "star-map",
    title: "Custom Pet Star Map",
    description: "A personalized celestial map showing the exact stars shining on the night your beloved pet became your guardian angel. Beautiful constellation art to remember their special place in your heart.",
    imageUrl: "/assets/banners/HP_starmap2.png",
    link: "/star-map",
    detailedDescription: "Generate a personalized star chart to mark the memory of your beloved pet. See the exact stars that were shining on their special day.",
    keywords: ["pet memorial star map", "dog remembrance gift", "cat memorial print", "pet loss keepsake"]
  },
  {
    id: "memorial-card",
    title: "Create a Memorial Card",
    description: "Create a personalized pet memorial card with beautiful watercolor illustrations. Choose your pet type, add their name, dates, and a heartfelt message.",
    imageUrl: "/assets/banners/HP_memorial2.png",
    link: "/memorial-card",
    detailedDescription: "Design a beautiful memorial card featuring watercolor pet illustrations, customizable backgrounds, and your personal tribute message.",
    keywords: ["pet memorial card", "dog remembrance card", "cat memorial keepsake", "rainbow bridge card"]
  },
  {
    id: "rainbow-bridge",
    title: "Rainbow Bridge Poem Print",
    description: "Comforting words paired with gentle imagery to honor your pet's crossing. Personalized with their name and a special message from you.",
    imageUrl: "/assets/banners/HP_poem.png",
    link: "/rainbow-bridge",
    detailedDescription: "Create a beautiful, personalized Rainbow Bridge poem that honors your pet's memory with comforting words and gentle imagery.",
    keywords: ["pet sympathy gift", "dog memorial poem", "cat rainbow bridge", "pet bereavement print"]
  },
  {
    id: "pet-physic-reading",
    title: "Pet Spirit Connection Chat",
    description: "Receive comforting messages and insights from your pet on the other side. Our spiritual advisors help bridge the connection between worlds.",
    imageUrl: "/assets/banners/HP_chat2.png",
    link: "/pet-physic-reading",
    detailedDescription: "A gentle AI chat experience to feel spiritually connected to your pet. Receive comforting messages that can help during the grieving process.",
    keywords: ["pet medium reading", "dog afterlife connection", "cat spirit communication", "pet loss comfort"]
  },
  {
    id: "candle-ceremony",
    title: "Candle Ceremony",
    description: "Light a virtual memorial candle for your beloved pet. A peaceful, interactive tribute that keeps their memory glowing bright in your heart.",
    imageUrl: "/assets/banners/HP_candle2.png",
    link: "/candle-ceremony",
    detailedDescription: "Honor your pet's memory with a virtual candle that burns for 24 hours. Join a community of pet lovers in remembrance.",
    keywords: ["pet memorial candle", "virtual pet tribute", "dog remembrance light", "cat memorial flame"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-inter">
      <Header />
      
      {/* Hero Section - Full image display with centered text */}
      <section className="w-full pt-16 relative">
        {/* Hero image - full display at 100% opacity */}
        <div className="w-full relative">
          <img 
            src="/assets/hero-memorial.png" 
            alt="Pet Memorial - Rainbow Bridge with beloved pets in ornate baroque frame"
            className="w-full h-auto object-contain"
          />
          
          {/* Text overlay centered within the image scene */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl" style={{ marginTop: '-5%' }}>
              <h1 
                className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-foreground"
                style={{ 
                  textShadow: '0 0 30px rgba(245, 241, 232, 0.9), 0 0 60px rgba(245, 241, 232, 0.7), 0 2px 4px rgba(0,0,0,0.1)' 
                }}
              >
                A soft place for hard goodbyes
              </h1>
              <p 
                className="text-base md:text-lg lg:text-xl text-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed"
                style={{ 
                  textShadow: '0 0 20px rgba(245, 241, 232, 0.95), 0 0 40px rgba(245, 241, 232, 0.8)' 
                }}
              >
                Turn your memories into gentle keepsakes—like a poem, a postcard, a small light you can visit whenever your heart misses them.
              </p>
              
              <Link to="/memorial-card">
                <Button 
                  className="bg-primary hover:bg-pastel-blue-dark text-primary-foreground transition-colors shadow-rococo px-8 py-5 text-base"
                  style={{ 
                    boxShadow: '0 0 20px rgba(245, 241, 232, 0.6), 0 4px 15px rgba(0,0,0,0.1)' 
                  }}
                >
                  Create a Memorial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Memorial Offerings Section */}
      <section id="memorial-section" className="w-full py-16 px-4 bg-aged-paper paper-texture paper-vignette relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mb-2"></div>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">Pet Loss Memorial Gifts & Keepsakes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Healing digital remembrances for your rainbow bridge pet
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-pastel-gold/50 to-transparent mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memorialOfferings.map((offering) => (
              <Link to={offering.link} key={offering.id} className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-rococo-lg bg-cream-light border-2 border-primary/20 rounded-xl relative">
                  {/* Ornate corner detail */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl z-20"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl z-20"></div>
                  
                  {/* Full image container with text overlay */}
                  <div className="relative bg-cream/30">
                    {/* Full image - object-contain to show entire illustration */}
                    <img 
                      src={offering.imageUrl} 
                      alt={offering.title} 
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    
                    {/* Copy overlay panel at top of image */}
                    <div className="absolute top-0 left-0 right-0 p-4 z-10">
                      <div className="bg-gradient-to-b from-cream/95 via-cream/90 to-transparent p-4 pb-8 rounded-t-lg">
                        {/* Decorative line */}
                        <div className="h-px w-full bg-gradient-to-r from-primary/30 via-pastel-gold/40 to-primary/30 mb-3"></div>
                        <h3 className="font-playfair text-lg font-medium mb-2 text-foreground group-hover:text-primary transition-colors leading-tight">
                          {offering.title}
                        </h3>
                        <p className="text-muted-foreground mb-3 text-xs leading-relaxed line-clamp-3">
                          {offering.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {offering.keywords.slice(0,2).map((keyword, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="text-[10px] border-primary/50 text-primary bg-primary/10 rounded-full px-2 py-0.5"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom ornate corners */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-xl z-20"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-xl z-20"></div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comfort Section */}
      <section className="w-full py-16 px-4 bg-cream-dark paper-texture relative">
        {/* Top decorative border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold mb-4 text-foreground">Finding Comfort in Memory</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every remembrance is a celebration of the love you shared with your pet.
              Our thoughtfully designed memorials provide comfort during this difficult time.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 justify-center">
            <Link to="/star-map" className="w-full md:w-auto">
              <Button className="w-full bg-primary hover:bg-pastel-blue-dark text-primary-foreground shadow-rococo px-8 rounded-lg">
                Create a Star Map
              </Button>
            </Link>
            
            <Link to="/rainbow-bridge" className="w-full md:w-auto">
              <Button variant="outline" className="w-full border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 rounded-lg">
                Rainbow Bridge Poem
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Bottom decorative border */}
        <div className="absolute bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
