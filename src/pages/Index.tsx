
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetLetterForm from "@/components/PetLetterForm";
import LetterPreview from "@/components/LetterPreview";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import LetterTonePreview from "@/components/LetterTonePreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Header />
      
      {/* Hero Section with Form */}
      <section className="w-full py-16 md:py-24 px-4 flex items-center justify-center bg-offwhite">
        <div className="container max-w-4xl mx-auto text-center animate-fade-in-slow">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            A Letter From Your Pet's Heart
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Instant AI-written messages inspired by your memories together
          </p>
          
          {/* Letter Form moved to top */}
          <PetLetterForm />
          
          {/* Link to Star Map Demo */}
          <div className="mt-8">
            <Link to="/star-map">
              <Button variant="outline" className="bg-transparent border-black text-black hover:bg-gray-100">
                View Star Map Demo
              </Button>
            </Link>
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
      
      <Footer />
    </div>
  );
};

export default Index;
