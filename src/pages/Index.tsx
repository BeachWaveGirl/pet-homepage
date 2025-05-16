
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import PetLetterForm from "@/components/PetLetterForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Category data for the homepage
const categories = [
  {
    id: "pet-portrait",
    title: "Custom Pet Portrait",
    description: "Beautiful digital watercolor or artistic portraits of your pet to cherish and remember them.",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
    link: "/pet-portrait"
  },
  {
    id: "pet-badly-drawn",
    title: "Badly Drawn Pet Portrait",
    description: "Cute doodle style one-line drawings of your pet with a whimsical, playful touch.",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
    link: "/pet-badly-drawn"
  },
  {
    id: "pet-health-record",
    title: "Pet Health Record",
    description: "Organized digital health records for your pet's medical history, vaccinations and appointments.",
    imageUrl: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=600&h=400&fit=crop",
    link: "/pet-health-record"
  },
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
    id: "rainbow-bridge",
    title: "Rainbow Bridge Poem",
    description: "Beautiful customized Rainbow Bridge poems to honor your beloved pet's memory.",
    imageUrl: "https://images.unsplash.com/photo-1603315688742-9e2a66e2153c?w=600&h=400&fit=crop",
    link: "/rainbow-bridge"
  },
  {
    id: "grief-journal",
    title: "Grief Journal",
    description: "Daily affirmations and journal prompts to help navigate the journey of pet loss.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    link: "/grief-journal"
  },
  {
    id: "pet-bathroom",
    title: "Pet Bathroom",
    description: "Hilarious customized bathroom signs featuring your pet wrapped in a towel with clever bathroom humor.",
    imageUrl: "https://images.unsplash.com/photo-1598397421962-e65b21ee671d?w=600&h=400&fit=crop",
    link: "/pet-bathroom"
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
  },
  {
    id: "pet-party",
    title: "Pet Party Invitation",
    description: "Cute and fun digital pet party invitations for birthdays, adoptaversaries, and special celebrations.",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
    link: "/pet-party"
  },
  {
    id: "pet-funeral",
    title: "Pet Funeral Mobile",
    description: "Mobile-friendly memorial invitations to celebrate your pet's life with friends and family.",
    imageUrl: "https://images.unsplash.com/photo-1516832877833-1bcb07a0e2a7?w=600&h=400&fit=crop",
    link: "/pet-funeral"
  }
];

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  // Curated featured categories for the top section
  const featuredCategories = [
    categories.find(cat => cat.id === "pet-portrait"),
    categories.find(cat => cat.id === "pet-badly-drawn"),
    categories.find(cat => cat.id === "pet-health-record"),
    categories.find(cat => cat.id === "pet-party")
  ].filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-4 flex items-center justify-center bg-offwhite relative overflow-hidden">
        <div className="container max-w-4xl mx-auto text-center animate-fade-in-slow relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Petly
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Whether you're celebrating a new furry friend, cherishing everyday cuddles, or honoring a beloved memory — Petly is your AI-powered creative space for all things pet love.
          </p>
          
          <Button onClick={scrollToForm} className="bg-black text-white hover:bg-gray-800 transition-colors">
            Create a Memorial
          </Button>
        </div>
      </section>
      
      {/* Sample Designs Section */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">Our Pet Creations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" 
                  alt="Pet Portrait Example" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-3">
                <p className="text-sm text-center">Custom Pet Portrait</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300" 
                  alt="Pet Doodle Example" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-3">
                <p className="text-sm text-center">Badly Drawn Pet Portrait</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300" 
                  alt="Pet Digital Art Example" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-3">
                <p className="text-sm text-center">Pet Digital Art</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How Petly Works */}
      <section className="w-full py-12 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-4">
              Here, you can create beautiful, personalized <strong>digital keepsakes</strong> that capture your pet's spirit, quirks, and story — from day one to forever.
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
      
      {/* Featured Categories Grid - Top Row */}
      <section className="w-full py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">Popular Pet Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              category && <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
                link={category.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Grid - Rest */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">All Digital Pet Categories</h2>
          
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
