
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetLetterForm from "@/components/PetLetterForm";
import LetterPreview from "@/components/LetterPreview";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import LetterTonePreview from "@/components/LetterTonePreview";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-4 flex items-center justify-center bg-offwhite">
        <div className="container max-w-4xl mx-auto text-center animate-fade-in-slow">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            A Letter From Your Pet's Heart
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Instant AI-written messages inspired by your memories together
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-md transition-all"
          >
            Create a Letter
          </Button>
          
          <div className="mt-12 max-w-sm mx-auto">
            <img 
              src="/placeholder.svg" 
              alt="Pet silhouette" 
              className="w-40 h-40 mx-auto opacity-70"
            />
          </div>
        </div>
      </section>
      
      {/* Letter Tone Preview */}
      <LetterTonePreview />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Letter Preview */}
      <LetterPreview />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Pricing */}
      <Pricing />
      
      {/* Letter Form */}
      <PetLetterForm />
      
      <Footer />
    </div>
  );
};

export default Index;
