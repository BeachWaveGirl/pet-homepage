
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

// Update some images to ensure variety
const categoryImages = {
  "pet-portrait": "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
  "pet-badly-drawn": "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg",
  "pet-health-record": "https://cdn.pixabay.com/photo/2016/11/22/19/41/animal-1850276_1280.jpg",
  "pet-record": "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg",
  "star-map": "https://cdn.pixabay.com/photo/2017/08/25/04/18/cat-2679478_1280.jpg",
  "pet-poems": "https://cdn.pixabay.com/photo/2018/10/01/09/21/dogs-3715729_1280.jpg",
  "memory-stories": "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149924_1280.jpg",
  "digital-scrapbooks": "https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_1280.jpg",
  "pet-digital-art": "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg",
  "pet-physic-reading": "https://cdn.pixabay.com/photo/2016/11/29/10/22/dog-1868871_1280.jpg",
  "pet-zodiac": "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_1280.jpg",
  "rainbow-bridge": "https://cdn.pixabay.com/photo/2019/03/15/12/44/rainbow-4057030_1280.jpg",
  "grief-journal": "https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_1280.jpg",
  "pet-bathroom": "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg",
  "pet-typography": "https://cdn.pixabay.com/photo/2016/12/23/21/11/canine-1927742_1280.jpg",
  "quote-posters": "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg",
  "pet-party": "https://cdn.pixabay.com/photo/2020/03/31/11/03/crowd-4987227_1280.jpg",
  "pet-funeral": "https://cdn.pixabay.com/photo/2016/11/23/00/32/candle-1851921_1280.jpg",
  "pet-sitting-service": "https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_1280.jpg"
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
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">{category.emoji}</span>
              <h2 className="text-3xl font-playfair font-bold">{category.title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
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
