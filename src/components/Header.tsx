
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    }
  ];

  return (
    <header className={`w-full bg-white py-4 px-4 md:px-6 flex justify-center border-b border-gray-200 fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-50 backdrop-blur-sm shadow-sm' : 'bg-opacity-100'}`}>
      <div className="container flex justify-between items-center">
        {/* Hamburger Menu with side slide effect */}
        <Button variant="ghost" size="sm" className="p-1 text-gray-900 hover:bg-gray-100" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-8 w-8" />
          <span className="sr-only">Open main menu</span>
        </Button>
        
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogContent className="p-0 sm:max-w-[320px] h-full fixed left-0 top-0 rounded-none border-r border-gray-200 bg-white text-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out" 
            style={{transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'}}
            onInteractOutside={(e) => {e.preventDefault(); setIsMenuOpen(false);}}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link 
                  to="/" 
                  className="text-xl font-playfair font-semibold text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HaloPet
                </Link>
                <Button variant="ghost" size="sm" className="p-1 text-gray-900 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-3">Memorial Tools</h3>
                  <div className="space-y-3">
                    {memorialTools.map((tool) => (
                      <Link 
                        key={tool.title}
                        to={tool.href} 
                        className="block py-2 px-4 text-left text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium">{tool.title}</div>
                        <p className="text-xs text-gray-500 mt-1">{tool.description}</p>
                      </Link>
                    ))}
                    
                    <Link to="/star-memorial" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        className="w-full bg-black text-white hover:bg-gray-800 transition-colors mt-4 border border-gray-200"
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
        
        <Link to="/" className="text-xl font-playfair font-semibold flex items-center text-gray-900">
          <span>HaloPet</span>
        </Link>
        
        <Link to="/star-memorial">
          <Button 
            className="bg-black text-white hover:bg-gray-800 transition-colors hidden md:flex border border-gray-200"
          >
            Create a Memorial
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
