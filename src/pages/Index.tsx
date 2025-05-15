
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import PetLetterForm from "@/components/PetLetterForm";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/LottieAnimation";
import { dogAnimation, catAnimation, pawPrintsAnimation, heartAnimation, starAnimation } from "@/animations";

// Category data for the homepage
const categories = [
  {
    id: "star-map",
    title: "Star Map Letter",
    description: "A personalized letter with a star map showing the night sky when your pet became a star.",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
    link: "/star-map"
  },
  {
    id: "pet-poems",
    title: "Pet Poems",
    description: "Beautiful, custom poems that capture the unique bond you shared with your beloved pet.",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
    link: "/pet-poems"
  },
  {
    id: "pet-portrait",
    title: "Custom Pet Portrait",
    description: "Beautiful digital watercolor or artistic portraits of your pet to cherish and remember them.",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
    link: "/pet-portrait"
  },
  {
    id: "memory-stories",
    title: "Memory Stories",
    description: "Heartwarming stories from your pet's perspective, highlighting their favorite memories with you.",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
    link: "/memory-stories"
  },
  {
    id: "digital-scrapbooks",
    title: "Digital Scrapbooks",
    description: "Digital memory books featuring collages of photos and loving captions celebrating your pet's life.",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
    link: "/digital-scrapbooks"
  },
  {
    id: "pet-digital-art",
    title: "Pet Digital Art",
    description: "Vibrant digital art prints and illustrations capturing your pet's unique personality and spirit.",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    link: "/pet-digital-art"
  },
  {
    id: "pet-zodiac",
    title: "Pet Zodiac Portraits",
    description: "Mystical astrological portraits incorporating your pet's zodiac sign, constellations, and cosmic elements.",
    imageUrl: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=600&h=400&fit=crop",
    link: "/pet-zodiac"
  },
  {
    id: "digital-candles",
    title: "Digital Candles",
    description: "Virtual memorial candles that you can light digitally to remember your pet.",
    imageUrl: "https://images.unsplash.com/photo-1603315688742-9e2a66e2153c?w=600&h=400&fit=crop",
    link: "/digital-candles"
  },
  {
    id: "grief-journal",
    title: "Grief Journal",
    description: "Daily affirmations and journal prompts to help navigate the journey of pet loss.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    link: "/grief-journal"
  },
  {
    id: "pet-collage",
    title: "Pet Collage Art",
    description: "Digital mosaic artwork made from pet-related images forming a beautiful silhouette of your pet.",
    imageUrl: "https://images.unsplash.com/photo-1598397421962-e65b21ee671d?w=600&h=400&fit=crop",
    link: "/pet-collage"
  },
  {
    id: "pet-typography",
    title: "Pet Typography",
    description: "Elegant calligraphy featuring your pet's name with decorative elements perfect for framing.",
    imageUrl: "https://images.unsplash.com/photo-1599909631215-4c19d381f5fe?w=600&h=400&fit=crop",
    link: "/pet-typography"
  },
  {
    id: "quote-posters",
    title: "Quote Posters",
    description: "Motivational and comforting pet quotes paired with simple illustrations for healing and remembrance.",
    imageUrl: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=600&h=400&fit=crop",
    link: "/quote-posters"
  }
];

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-4 flex items-center justify-center bg-offwhite relative overflow-hidden">
        {/* Dog animation in top left corner */}
        <div className="absolute top-0 left-0 w-36 h-36 opacity-70 pointer-events-none">
          <LottieAnimation animationData={dogAnimation} />
        </div>
        
        {/* Cat animation in top right corner */}
        <div className="absolute top-0 right-0 w-36 h-36 opacity-70 pointer-events-none">
          <LottieAnimation animationData={catAnimation} />
        </div>
        
        <div className="container max-w-4xl mx-auto text-center animate-fade-in-slow relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Petly
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Your AI-powered digital pet memorial shop. Create beautiful, personalized digital keepsakes to celebrate your beloved pet's life.
          </p>
          
          <Button onClick={scrollToForm} className="bg-black text-white hover:bg-gray-800 transition-colors">
            Create a Memorial
          </Button>

          {/* Paw prints animation beneath the button */}
          <div className="w-full h-12 mt-8 opacity-50 pointer-events-none">
            <LottieAnimation animationData={pawPrintsAnimation} />
          </div>
        </div>
      </section>
      
      {/* How Petly Works */}
      <section className="w-full py-12 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-center">🐾 Welcome to Petly</h2>
          <div className="bg-gray-50 p-6 rounded-lg relative">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-70 transform -translate-y-1/2 translate-x-1/4 pointer-events-none">
              <LottieAnimation animationData={heartAnimation} />
            </div>

            <p className="mb-4">
              Whether you're celebrating a new furry friend, cherishing everyday cuddles, or honoring a beloved memory — <strong>Petly</strong> is your AI-powered creative space for all things pet love.
            </p>
            <p className="mb-4">
              Here, you can create beautiful, personalized <strong>digital keepsakes</strong> that capture your pet's spirit, quirks, and story — from day one to forever.
            </p>
            <p className="mb-4">
              💌 Explore trending digital categories like:
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3 ml-4">
                <div>• Custom AI Pet Portraits</div>
                <div>• Adorable Memory Stories</div>
                <div>• Astrology-Inspired Pet Art</div>
                <div>• Birthday Tributes</div>
                <div>• Heartfelt Goodbye Letters</div>
                <div>• ...and more</div>
              </div>
            </p>
            <p className="mb-4">
              Just pick a category, tell us a little about your pet, and let our AI create something magical — made just for you and your best friend.
            </p>
            <p className="mb-4">
              ✨ No shipping. No clutter. Just meaningful, downloadable digital art you can save, share, and revisit anytime.
            </p>
            <p>
              <strong>Petly</strong> is made for people who love their pets deeply — not just when they're gone, but in every silly, snuggly, unforgettable moment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="w-full py-12 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-center">Trending Digital Pet Memorial Categories</h2>
            <div className="w-16 h-16 ml-2">
              <LottieAnimation animationData={starAnimation} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
                link={category.link}
              />
            ))}
          </div>

          {/* Paw prints animation at the bottom of the grid */}
          <div className="w-full h-16 mt-8 opacity-50 pointer-events-none">
            <LottieAnimation animationData={pawPrintsAnimation} />
          </div>
        </div>
      </section>
      
      {/* Pet Letter Form */}
      <section id="letter-form" className="w-full py-12 px-4 bg-offwhite relative">
        <div className="absolute bottom-0 right-0 w-36 h-36 opacity-70 pointer-events-none">
          <LottieAnimation animationData={dogAnimation} />
        </div>

        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Create a Letter From Your Pet's Heart</h2>
          <PetLetterForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
