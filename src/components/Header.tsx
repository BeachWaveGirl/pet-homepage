import { Button } from "@/components/ui/button";
import ProductNavigationMenu from "./NavigationMenu";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import categoryGroups to keep menu items consistent
import { categoryGroups } from "./NavigationMenu";

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
        <Link to="/" className="text-xl font-playfair font-semibold flex items-center">
          <span>Petly</span>
        </Link>
        
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
        <div className="fixed top-[60px] left-0 right-0 bg-white p-4 shadow-md z-50 md:hidden overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col space-y-4">
            {categoryGroups.map((group) => (
              <div key={group.id} className="mb-2">
                <h3 className="text-md font-medium mb-2 flex items-center">
                  <span className="mr-2">{group.emoji}</span>
                  <span>{group.title}</span>
                </h3>
                <div className="ml-6 space-y-1">
                  {group.items.map((item) => (
                    <Link 
                      key={item.title} 
                      to={item.href} 
                      className="block py-1.5 hover:text-indigo-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Button 
              onClick={scrollToForm}
              className="bg-black text-white hover:bg-gray-800 transition-colors w-full mt-2"
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
