
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

// Update images to ensure variety and AI-generated style
const categoryImages = {
  // Memorial Tributes
  "rainbow-bridge": "https://cdn.pixabay.com/photo/2017/12/24/14/27/sunset-3037545_1280.jpg", // Rainbow sunset
  "digital-candles": "https://cdn.pixabay.com/photo/2020/02/23/15/57/candles-4873807_1280.jpg", // Memory candles
  "pet-portrait": "https://cdn.pixabay.com/photo/2017/06/24/09/13/dog-2437110_1280.jpg", // Memorial portrait

  // Pet Personality & Destiny
  "pet-physic-reading": "https://cdn.pixabay.com/photo/2018/04/16/16/16/cosmos-3325540_1280.jpg", // Mystical cosmos dog
  "pet-zodiac": "https://cdn.pixabay.com/photo/2019/04/02/11/42/fox-4097527_1280.jpg", // Zodiac fox art

  // Pet Memorial & Afterlife
  "star-map": "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg", // Star map
  "digital-scrapbooks": "https://cdn.pixabay.com/photo/2020/12/13/16/22/woman-5828786_1280.jpg", // Memory scrapbook

  // Pet Love & Communication
  "pet-poems": "https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_1280.jpg", // Magical fox
  "pet-typography": "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg", // Beautiful bird art

  // Pet Portraits & Artwork
  "pet-badly-drawn": "https://cdn.pixabay.com/photo/2021/02/01/18/11/cat-5971316_1280.jpg", // Fun sketch cat
  "pet-digital-art": "https://cdn.pixabay.com/photo/2020/11/25/14/58/cat-5775895_1280.jpg", // Digital art cat

  // Pet Stories & Journals
  "memory-stories": "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg", // Story sky
  "grief-journal": "https://cdn.pixabay.com/photo/2017/08/01/01/33/bereavement-2562652_1280.jpg", // Grief symbol
  "pet-adventure": "https://cdn.pixabay.com/photo/2017/01/19/23/46/panorama-1993645_1280.jpg", // Adventure landscape

  // Pet Celebrations & Fun Prints
  "pet-party": "https://cdn.pixabay.com/photo/2017/09/30/18/32/party-2802619_1280.jpg", // Party
  "pet-achievement": "https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1823256_1280.jpg", // Achievement cat

  // Pet Home & Decor
  "pet-bathroom": "https://cdn.pixabay.com/photo/2019/08/19/12/51/cat-4416377_1280.jpg", // Bathroom cat
  "quote-posters": "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png", // Quote cat art
  "pet-door-sign": "https://cdn.pixabay.com/photo/2021/09/25/14/04/pet-6654677_1280.jpg", // Door sign
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
      
      {/* Category Sections - Display all categories with their banners */}
      {categoriesWithImages.map((category) => (
        <section key={category.id} className="w-full py-12 px-4 bg-white border-b last:border-b-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center mb-4">
              <span className="text-2xl mr-2">{category.emoji}</span>
              <h2 className="text-3xl font-playfair font-bold text-center">{category.title}</h2>
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
