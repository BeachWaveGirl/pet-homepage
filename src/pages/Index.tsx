
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
  "pet-physic-reading": "/pet-psychic-reading.png", // Updated image
  "pet-zodiac": "/pet-tarot-reading.png", // Updated image

  // Pet Love & Communication
  "pet-poems": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop", // Dreamy dog
  "pet-typography": "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1000&auto=format&fit=crop", // Artistic cat

  // Pet Memorial & Afterlife
  "star-map": "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1000&auto=format&fit=crop", // Cosmic night sky
  "rainbow-bridge": "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?q=80&w=1000&auto=format&fit=crop", // Rainbow with silhouette
  "digital-scrapbooks": "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1000&auto=format&fit=crop", // Memory collage

  // Pet Life & Responsibility
  "pet-health-record": "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop", // High-tech vet
  "pet-sitting-service": "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1000&auto=format&fit=crop", // Modern pet sitting
  "pet-record": "https://images.unsplash.com/photo-1553322396-0c9cd410975e?q=80&w=1000&auto=format&fit=crop", // Futuristic record

  // Pet Portraits & Artwork
  "pet-portrait": "https://images.unsplash.com/photo-1558236714-d1a6333fce68?q=80&w=1000&auto=format&fit=crop", // Modern portrait
  "pet-badly-drawn": "https://images.unsplash.com/photo-1596854372943-a50bbbdf24a7?q=80&w=1000&auto=format&fit=crop", // Artistic style
  "pet-digital-art": "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=1000&auto=format&fit=crop", // Digital art style

  // Pet Celebrations & Fun Prints
  "pet-party": "https://images.unsplash.com/photo-1563474993427-c7923146d8f0?q=80&w=1000&auto=format&fit=crop", // Party pet
  "pet-achievement": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1000&auto=format&fit=crop", // Achievement

  // Pet Home & Decor
  "pet-bathroom": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop", // Modern bathroom
  "quote-posters": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1000&auto=format&fit=crop", // Quote context
  "pet-door-sign": "https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=1000&auto=format&fit=crop", // Modern door

  // Pet Stories & Journals
  "memory-stories": "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?q=80&w=1000&auto=format&fit=crop", // Story moment
  "grief-journal": "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=1000&auto=format&fit=crop", // Reflective moment
  "pet-adventure": "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=1000&auto=format&fit=crop" // Adventure scene
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
      
      {/* Hero Section with futuristic style */}
      <section className="w-full py-16 md:py-24 px-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2000')] opacity-20 bg-cover bg-center"></div>
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
      
      {/* How Petly Works - simplified to 3 lines with futuristic style */}
      <section className="w-full py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg mb-4">
            ✨ No shipping. No clutter. Just meaningful digital art to save, share, and smile at.
          </p>
          <p className="text-lg">
            <strong className="text-indigo-300">Disclaimer:</strong> Petly is a creative platform designed for personal enjoyment and expression. All content is for entertainment purposes only and not intended as professional, medical, or therapeutic advice.
          </p>
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
            
            {category.items.length > 3 ? (
              <div className="relative px-10">
                <Carousel className="w-full">
                  <CarouselContent>
                    {category.items.map((item) => (
                      <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                        <CategoryCard
                          id={item.id}
                          title={item.title}
                          description={item.description}
                          imageUrl={item.imageUrl}
                          link={item.link}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <CarouselPrevious className="relative left-0 opacity-80 hover:opacity-100" />
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <CarouselNext className="relative right-0 opacity-80 hover:opacity-100" />
                  </div>
                </Carousel>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <CategoryCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    link={item.link}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
      
      <Footer />
    </div>
  );
};

export default Index;
