
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white py-4 px-4 md:px-6 flex justify-center border-b">
      <div className="container flex justify-between items-center">
        <div className="text-xl font-playfair font-semibold">Letters From Beyond</div>
        <Button 
          onClick={scrollToForm}
          className="bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Create a Letter
        </Button>
      </div>
    </header>
  );
};

export default Header;
