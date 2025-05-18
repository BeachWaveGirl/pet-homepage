
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categoryGroups } from "./NavigationMenu";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <header className="w-full bg-white py-4 px-4 md:px-6 flex justify-center border-b">
      <div className="container flex justify-between items-center">
        {/* Hamburger Menu - Made slightly bigger */}
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="sm" className="p-1">
              <Menu className="h-7 w-7" /> {/* Increased size */}
              <span className="sr-only">Open main menu</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-[80%] max-w-sm left-0 right-auto">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <Link 
                  to="/" 
                  className="text-xl font-playfair font-semibold"
                  onClick={() => setDrawerOpen(false)}
                >
                  Petly
                </Link>
                <DrawerClose asChild>
                  <Button variant="ghost" size="sm" className="p-1">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </DrawerClose>
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
                              onClick={() => setDrawerOpen(false)}
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
                    onClick={() => setDrawerOpen(false)}
                  >
                    Memorial Products
                  </Link>
                  <Button
                    onClick={() => {
                      scrollToForm();
                      setDrawerOpen(false);
                    }}
                    className="w-full bg-black text-white hover:bg-gray-800 transition-colors mt-4"
                  >
                    Create a Memorial
                  </Button>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
        
        <Link to="/" className="text-xl font-playfair font-semibold flex items-center">
          <span>Petly</span>
        </Link>
        
        <Button 
          onClick={scrollToForm}
          className="bg-black text-white hover:bg-gray-800 transition-colors hidden md:flex"
        >
          Create a Memorial
        </Button>
      </div>
    </header>
  );
};

export default Header;
