
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { categoryGroups } from "@/components/NavigationMenu";
import { Link } from "react-router-dom";

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

// Update images to ensure variety and proper loading
const categoryImages = {
  // Pet Personality & Destiny
  "pet-physic-reading": "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg", // Mystic husky
  "pet-zodiac": "https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg", // Zodiac dog

  // Pet Love & Communication
  "pet-poems": "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149924_1280.jpg", // Pet love
  "pet-typography": "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg", // Typography dog

  // Pet Memorial & Afterlife
  "star-map": "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg", // Cat stargazing
  "rainbow-bridge": "https://cdn.pixabay.com/photo/2013/07/05/01/08/rainbow-143349_1280.jpg", // Rainbow image
  "digital-scrapbooks": "https://cdn.pixabay.com/photo/2020/05/18/13/32/dog-5186030_1280.jpg", // Memory scrapbook

  // Pet Life & Responsibility
  "pet-health-record": "https://cdn.pixabay.com/photo/2016/11/22/19/41/animal-1850276_1280.jpg", // Vet record
  "pet-sitting-service": "https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_1280.jpg", // Pet sitting
  "pet-record": "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg", // Pet record

  // Pet Portraits & Artwork
  "pet-portrait": "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg", // Portrait
  "pet-badly-drawn": "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg", // Fun pet
  "pet-digital-art": "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg", // Digital art

  // Pet Celebrations & Fun Prints
  "pet-party": "https://cdn.pixabay.com/photo/2016/11/29/02/07/animal-1866972_1280.jpg", // Party pet
  "pet-achievement": "https://cdn.pixabay.com/photo/2016/11/22/23/13/dog-1850465_1280.jpg", // Achievement

  // Pet Home & Decor
  "pet-bathroom": "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg", // Bathroom
  "quote-posters": "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg", // Quote poster
  "pet-door-sign": "https://cdn.pixabay.com/photo/2016/11/21/00/47/dog-1844110_1280.jpg", // Door sign

  // Pet Stories & Journals
  "memory-stories": "https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_1280.jpg", // Stories
  "grief-journal": "https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_1280.jpg", // Journal
  "pet-adventure": "https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_1280.jpg" // Adventure
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
      
      {/* How Petly Works - simplified to 3 lines */}
      <section className="w-full py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg mb-4">
            Here, you can create beautiful, personalized <strong>digital keepsakes</strong> that capture your pet's spirit, quirks, and story — from day one to forever.
          </p>
          <p className="text-lg mb-4">
            ✨ No shipping. No clutter. Just meaningful, downloadable digital art you can save, share, and revisit anytime.
          </p>
          <p className="text-lg">
            <strong>Petly</strong> is made for people who love their pets deeply — not just when they're gone, but in every silly, snuggly, unforgettable moment.
          </p>
        </div>
      </section>
      
      {/* Category Sections - Display all 8 categories with their banners */}
      {categoriesWithImages.map((category) => (
        <section key={category.id} className="w-full py-12 px-4 bg-white border-b last:border-b-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">{category.emoji}</span>
              <h2 className="text-3xl font-playfair font-bold">{category.title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
              {category.description}
            </p>
            
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
          </div>
        </section>
      ))}
      
      <Footer />
    </div>
  );
};

export default Index;
