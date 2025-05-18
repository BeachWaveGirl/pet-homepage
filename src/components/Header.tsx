
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
import { categoryGroups } from "./NavigationMenu";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      // If we're not on a page with the letter form, navigate to memorial page
      window.location.href = '/star-memorial';
    }
  };

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

  return (
    <header className={`w-full bg-white py-4 px-4 md:px-6 flex justify-center border-b sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container flex justify-between items-center">
        {/* Hamburger Menu with side slide effect */}
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <Button variant="ghost" size="sm" className="p-1" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-7 w-7" />
            <span className="sr-only">Open main menu</span>
          </Button>
          <DialogContent className="p-0 sm:max-w-[280px] h-full fixed left-0 top-0 rounded-none border-r shadow-xl transform transition-transform duration-300 ease-in-out" 
            style={{transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'}}
            onInteractOutside={(e) => {e.preventDefault(); setIsMenuOpen(false);}}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <Link 
                  to="/" 
                  className="text-xl font-playfair font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HaloPet
                </Link>
                <Button variant="ghost" size="sm" className="p-1" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <Accordion type="multiple" className="space-y-4">
                  {categoryGroups.map((group) => (
                    <AccordionItem key={group.id} value={group.id} className="border rounded-md">
                      <AccordionTrigger className="px-4 py-3 flex items-center text-left">
                        <span className="mr-2">{group.emoji}</span>
                        <span>{group.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-2 py-2">
                        <div className="space-y-2 pl-4">
                          {group.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="block py-2 px-2 text-left hover:text-indigo-600 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 space-y-3">
                  <Link 
                    to="/pricing" 
                    className="block py-2 px-4 text-left hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Memorial Products
                  </Link>
                  <Link to="/star-memorial">
                    <Button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full bg-black text-white hover:bg-gray-800 transition-colors mt-4"
                    >
                      Create a Memorial
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <Link to="/" className="text-xl font-playfair font-semibold flex items-center">
          <span>HaloPet</span>
        </Link>
        
        <Link to="/star-memorial">
          <Button 
            className="bg-black text-white hover:bg-gray-800 transition-colors hidden md:flex"
          >
            Create a Memorial
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
