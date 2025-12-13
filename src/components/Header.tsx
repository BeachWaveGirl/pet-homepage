
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll event listener to detect when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memorial tools for mobile menu
  const memorialTools = [
    {
      title: "Create a Memorial",
      href: "/star-memorial",
      description: "Transform your beloved pet into an eternal star in our interactive night sky."
    },
    {
      title: "Pet Funeral Announcement Card",
      href: "/pet-funeral",
      description: "Create a dignified digital invitation to share your pet's memorial service with family and friends."
    },
    {
      title: "Custom Pet Star Map",
      href: "/star-map",
      description: "Generate a personalized star chart to mark the memory of your beloved pet."
    },
    {
      title: "Rainbow Bridge Poem Print",
      href: "/rainbow-bridge",
      description: "Create a beautiful, personalized poem to honor and remember your beloved pet companion."
    },
    {
      title: "Pet Spirit Connection Chat",
      href: "/pet-physic-reading",
      description: "A gentle AI chat experience to feel spiritually connected to your pet."
    },
    {
      title: "Pet Tarot Card",
      href: "/pet-tarot-reading",
      description: "Receive comforting messages inspired by your pet's energy through tarot."
    },
    {
      title: "Candle Ceremony",
      href: "/candle-ceremony",
      description: "Light a virtual memorial candle to honor your beloved pet's memory."
    }
  ];

  return (
    <header className={`w-full bg-aged-paper py-4 px-4 md:px-6 flex justify-center fixed top-0 z-50 transition-all duration-300 paper-texture paper-vignette ${isScrolled ? 'bg-opacity-95 backdrop-blur-sm shadow-rococo' : 'bg-opacity-100'}`}>
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-[-1px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent"></div>
      
      <div className="container flex justify-between items-center">
        {/* Hamburger Menu with side slide effect */}
        <Button variant="ghost" size="sm" className="p-1 text-foreground hover:bg-muted" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-8 w-8" />
          <span className="sr-only">Open main menu</span>
        </Button>
        
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogContent className="p-0 sm:max-w-[320px] h-full fixed left-0 top-0 rounded-none border-r border-border bg-card text-foreground shadow-rococo-lg transform transition-transform duration-300 ease-in-out" 
            style={{transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'}}
            onInteractOutside={(e) => {e.preventDefault(); setIsMenuOpen(false);}}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link 
                  to="/" 
                  className="text-xl font-playfair font-semibold text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pet Memorial Star
                </Link>
                <Button variant="ghost" size="sm" className="p-1 text-foreground hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="mt-6">
                  <h3 className="font-medium text-foreground mb-3">Memorial Tools</h3>
                  <div className="space-y-3">
                    {memorialTools.map((tool) => (
                      <Link 
                        key={tool.title}
                        to={tool.href} 
                        className="block py-2 px-4 text-left text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium">{tool.title}</div>
                        <p className="text-xs text-muted-foreground mt-1">{tool.description}</p>
                      </Link>
                    ))}
                    
                    <Link to="/star-memorial" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        className="w-full bg-[hsl(43,50%,60%)] text-white hover:bg-[hsl(43,50%,50%)] transition-colors mt-4"
                      >
                        Create a Memorial
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <Link to="/" className="flex items-center">
          <img 
            src="/assets/logo.png" 
            alt="Pet Memorial Star" 
            className="h-12 md:h-14 w-auto"
          />
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/blog" 
            className="text-muted-foreground hover:text-foreground transition-colors hidden md:block font-medium"
          >
            Blog
          </Link>
          <Link to="/star-memorial">
            <Button 
              className="bg-[hsl(43,50%,60%)] text-white hover:bg-[hsl(43,50%,50%)] transition-colors hidden md:flex shadow-rococo rounded-lg"
            >
              Create a Memorial
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
