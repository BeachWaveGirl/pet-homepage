
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import PetLetterForm from "@/components/PetLetterForm";
import { Button } from "@/components/ui/button";

// Category data for the homepage
const categories = [
  {
    id: "pet-portrait",
    title: "Custom Pet Portrait",
    description: "Beautiful digital watercolor or artistic portraits of your pet to cherish and remember them.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    link: "/pet-portrait"
  },
  {
    id: "pet-badly-drawn",
    title: "Badly Drawn Pet Portrait",
    description: "Cute doodle style one-line drawings of your pet with a whimsical, playful touch.",
    imageUrl: "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg",
    link: "/pet-badly-drawn"
  },
  {
    id: "pet-health-record",
    title: "Pet Health Record",
    description: "Organized digital health records for your pet's medical history, vaccinations and appointments.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/22/19/41/animal-1850276_1280.jpg",
    link: "/pet-health-record"
  },
  {
    id: "pet-record",
    title: "Pet Record",
    description: "Pet Tracker, Pet Information, Vaccination and complete health records for your furry friend.",
    imageUrl: "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg",
    link: "/pet-record"
  },
  {
    id: "star-map",
    title: "Star Map Letter",
    description: "A personalized letter with a star map showing the night sky when your pet became a star.",
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/25/04/18/cat-2679478_1280.jpg",
    link: "/star-map"
  },
  {
    id: "pet-poems",
    title: "Pet Poems",
    description: "Beautiful, custom poems that capture the unique bond you shared with your beloved pet.",
    imageUrl: "https://cdn.pixabay.com/photo/2018/10/01/09/21/dogs-3715729_1280.jpg",
    link: "/pet-poems"
  },
  {
    id: "memory-stories",
    title: "Memory Stories",
    description: "Heartwarming stories from your pet's perspective, highlighting their favorite memories with you.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149924_1280.jpg",
    link: "/memory-stories"
  },
  {
    id: "digital-scrapbooks",
    title: "Digital Scrapbooks",
    description: "Digital memory books featuring collages of photos and loving captions celebrating your pet's life.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_1280.jpg",
    link: "/digital-scrapbooks"
  },
  {
    id: "pet-digital-art",
    title: "Pet Digital Art",
    description: "Vibrant digital art prints and illustrations capturing your pet's unique personality and spirit.",
    imageUrl: "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg",
    link: "/pet-digital-art"
  },
  {
    id: "pet-physic-reading",
    title: "Pet Physic Reading",
    description: "Connect with your pet on a deeper level through personalized spiritual readings and insights.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/10/22/dog-1868871_1280.jpg",
    link: "/pet-physic-reading"
  },
  {
    id: "pet-zodiac",
    title: "Pet Zodiac Portraits",
    description: "Mystical astrological portraits incorporating your pet's zodiac sign, constellations, and cosmic elements.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_1280.jpg",
    link: "/pet-zodiac"
  },
  {
    id: "rainbow-bridge",
    title: "Rainbow Bridge Poem",
    description: "Beautiful customized Rainbow Bridge poems to honor your beloved pet's memory.",
    imageUrl: "https://cdn.pixabay.com/photo/2019/03/15/12/44/rainbow-4057030_1280.jpg",
    link: "/rainbow-bridge"
  },
  {
    id: "grief-journal",
    title: "Grief Journal",
    description: "Daily affirmations and journal prompts to help navigate the journey of pet loss.",
    imageUrl: "https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_1280.jpg",
    link: "/grief-journal"
  },
  {
    id: "pet-bathroom",
    title: "Pet Bathroom",
    description: "Hilarious customized bathroom signs featuring your pet wrapped in a towel with clever bathroom humor.",
    imageUrl: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg",
    link: "/pet-bathroom"
  },
  {
    id: "pet-typography",
    title: "Pet Typography",
    description: "Elegant calligraphy featuring your pet's name with decorative elements perfect for framing.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/12/23/21/11/canine-1927742_1280.jpg",
    link: "/pet-typography"
  },
  {
    id: "quote-posters",
    title: "Quote Posters",
    description: "Motivational and comforting pet quotes paired with simple illustrations for healing and remembrance.",
    imageUrl: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg",
    link: "/quote-posters"
  },
  {
    id: "pet-party",
    title: "Pet Party Invitation",
    description: "Cute and fun digital pet party invitations for birthdays, adoptaversaries, and special celebrations.",
    imageUrl: "https://cdn.pixabay.com/photo/2020/03/31/11/03/crowd-4987227_1280.jpg",
    link: "/pet-party"
  },
  {
    id: "pet-funeral",
    title: "Pet Funeral Mobile",
    description: "Mobile-friendly memorial invitations to celebrate your pet's life with friends and family.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/23/00/32/candle-1851921_1280.jpg",
    link: "/pet-funeral"
  },
  {
    id: "pet-sitting-service",
    title: "Pet Sitting Service",
    description: "Pet Sitting Service Agreement/Contract, Editable & Printable Pet Sitting Business New Client Intake Form, Invoice, Business Signs.",
    imageUrl: "https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_1280.jpg",
    link: "/pet-sitting-service"
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
      
      {/* Categories Grid - All Categories */}
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
      
      {/* How Petly Works */}
      <section className="w-full py-12 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
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
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
