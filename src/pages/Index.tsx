
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { categoryGroups } from "@/components/NavigationMenu";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Create a mapping of categories to display on the homepage
const categoriesMapping = categoryGroups.map(group => ({
  id: group.id,
  emoji: group.emoji,
  title: group.title,
  description: group.description,
  items: group.items.map(item => ({
    id: item.href.replace('/', ''),
    title: item.title,
    description: item.description,
    imageUrl: `https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg`, // Default image
    link: item.href
  }))
}));

// Update images to more futuristic, AI-style images
const categoryImages = {
  // Pet Personality & Destiny
  "pet-physic-reading": "/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png", // Updated image with cat on shark
  "pet-zodiac": "/lovable-uploads/bbeee178-1311-4366-8650-1648c40df369.png", // Updated image with mouse
  "pet-tarot-reading": "/lovable-uploads/f33432eb-d4f4-459a-9cba-6fdfdbacd6a0.png", // Cat on horse

  // Pet Memorial & Afterlife
  "star-map": "/lovable-uploads/efa73ad4-f753-493c-933e-d1ec4998656f.png", // Cats in space
  "rainbow-bridge": "/lovable-uploads/c767ea95-f4d6-4875-aa3d-c9f854be9e40.png", // Rainbow bridge with UFO cat
  "pet-funeral": "/lovable-uploads/c767ea95-f4d6-4875-aa3d-c9f854be9e40.png", // Rainbow bridge image
};

// Apply the custom images to our categories
const categoriesWithImages = categoriesMapping.map(category => {
  const categoryWithImageItems = category.items.map(item => ({
    ...item,
    imageUrl: categoryImages[item.id] || item.imageUrl
  }));
  return {
    ...category,
    items: categoryWithImageItems
  };
});

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-inter">
      <Header />
      
      {/* Hero Section with rainbow UFO cat image */}
      <section className="w-full py-16 md:py-24 px-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 to-black">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c767ea95-f4d6-4875-aa3d-c9f854be9e40.png')] opacity-40 bg-cover bg-center"></div>
        <div className="container max-w-4xl mx-auto text-center animate-fade-in-slow relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Welcome to Petly
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Celebrate your pet's life — from joyful beginnings to cherished memories. Petly is your creative AI-powered space to make heartfelt, downloadable keepsakes for every silly, snuggly, unforgettable moment.
          </p>
          
          <Button onClick={scrollToForm} className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
            Create a Memorial
          </Button>
        </div>
      </section>
      
      {/* Category Sections with Carousel Navigation */}
      {categoriesWithImages.map((category) => (
        <section key={category.id} className="w-full py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 border-b last:border-b-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">{category.emoji}</span>
              <h2 className="text-3xl font-playfair font-bold text-center">{category.title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
              {category.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <CategoryCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.link}
                  aspectRatio={9/16}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
      
      <Footer />
    </div>
  );
};

export default Index;
