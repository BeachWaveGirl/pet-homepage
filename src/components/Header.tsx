
import { Button } from "@/components/ui/button";
import ProductNavigationMenu from "./NavigationMenu";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white py-4 px-4 md:px-6 flex justify-center border-b">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-xl font-playfair font-semibold">Letters From Beyond</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ProductNavigationMenu />
        </div>
        
        {/* Mobile Toggle Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        <Button 
          onClick={scrollToForm}
          className="bg-black text-white hover:bg-gray-800 transition-colors hidden md:flex"
        >
          Create a Memorial
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[60px] left-0 right-0 bg-white p-4 shadow-md z-50 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/pet-poems" className="py-2" onClick={() => setMobileMenuOpen(false)}>Pet Poems</Link>
            <Link to="/pet-portrait" className="py-2" onClick={() => setMobileMenuOpen(false)}>Pet Portrait</Link>
            <Link to="/memory-stories" className="py-2" onClick={() => setMobileMenuOpen(false)}>Memory Stories</Link>
            <Link to="/digital-candles" className="py-2" onClick={() => setMobileMenuOpen(false)}>Digital Candles</Link>
            <Link to="/grief-journal" className="py-2" onClick={() => setMobileMenuOpen(false)}>Grief Journal</Link>
            <Link to="/how-it-works" className="py-2" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <Link to="/pricing" className="py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            
            <Button 
              onClick={scrollToForm}
              className="bg-black text-white hover:bg-gray-800 transition-colors w-full"
            >
              Create a Memorial
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
