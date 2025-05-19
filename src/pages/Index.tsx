
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Updated offering titles and descriptions
const memorialOfferings = [
  {
    id: "pet-funeral",
    title: "Pet Funeral Announcement Card",
    description: "Create a dignified digital invitation to share your pet's memorial service with family and friends. Instant download, easily shareable via text or social media.",
    imageUrl: "/lovable-uploads/c3857a85-d6ef-423a-a3bb-bd784cf7ac7d.png",
    link: "/pet-funeral",
    detailedDescription: "Design personalized announcement cards for your pet's service. Choose from elegant templates and customize with your pet's photo and memorial details.",
    keywords: ["pet loss announcement", "dog funeral invitation", "cat memorial service", "pet remembrance gathering"]
  },
  {
    id: "star-map",
    title: "Custom Pet Star Map",
    description: "A personalized celestial map showing the exact stars shining on the night your beloved pet became your guardian angel. Beautiful constellation art to remember their special place in your heart.",
    imageUrl: "/lovable-uploads/efa73ad4-f753-493c-933e-d1ec4998656f.png",
    link: "/star-map",
    detailedDescription: "Generate a personalized star chart to mark the memory of your beloved pet. See the exact stars that were shining on their special day.",
    keywords: ["pet memorial star map", "dog remembrance gift", "cat memorial print", "pet loss keepsake"]
  },
  {
    id: "pet-portrait",
    title: "Create a Memorial",
    description: "Transform your favorite photo into a touching rainbow bridge memorial portrait. A beautiful way to celebrate your pet's unique personality and the joy they brought to your life.",
    imageUrl: "/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png",
    link: "/star-memorial",
    detailedDescription: "Create a lasting digital memorial for your pet that transforms them into a beautiful star in our interactive night sky.",
    keywords: ["custom pet memorial", "dog remembrance portrait", "cat memorial picture", "rainbow bridge keepsake"]
  },
  {
    id: "rainbow-bridge",
    title: "Rainbow Bridge Poem Print",
    description: "Comforting words paired with gentle imagery to honor your pet's crossing. Personalized with their name and a special message from you.",
    imageUrl: "/lovable-uploads/be74091f-4ccb-434e-88ac-0667651f253a.png",
    link: "/rainbow-bridge",
    detailedDescription: "Create a beautiful, personalized Rainbow Bridge poem that honors your pet's memory with comforting words and gentle imagery.",
    keywords: ["pet sympathy gift", "dog memorial poem", "cat rainbow bridge", "pet bereavement print"]
  },
  {
    id: "pet-physic-reading",
    title: "Pet Spirit Connection Chat",
    description: "Receive comforting messages and insights from your pet on the other side. Our spiritual advisors help bridge the connection between worlds.",
    imageUrl: "/lovable-uploads/f33432eb-d4f4-459a-9cba-6fdfdbacd6a0.png",
    link: "/pet-physic-reading",
    detailedDescription: "A gentle AI chat experience to feel spiritually connected to your pet. Receive comforting messages that can help during the grieving process.",
    keywords: ["pet medium reading", "dog afterlife connection", "cat spirit communication", "pet loss comfort"]
  },
  {
    id: "pet-zodiac",
    title: "Pet Personality Astrology Chart",
    description: "Discover how the stars influenced your pet's unique traits and spirit. A beautiful keepsake explaining the cosmic forces that shaped their special personality.",
    imageUrl: "/lovable-uploads/6f146f9a-c7c2-4e3e-8b41-df577ef5aa27.png",
    link: "/pet-zodiac",
    detailedDescription: "Explore how the stars and planets influenced your pet's unique personality traits and behaviors through a custom astrological reading.",
    keywords: ["pet astrology reading", "dog natal chart", "cat zodiac personality", "pet horoscope gift"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-inter page-container">
      <Header />
      
      {/* Hero Section with increased background image visibility */}
      <section className="w-full py-20 md:py-28 px-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/be74091f-4ccb-434e-88ac-0667651f253a.png')] opacity-50 bg-cover bg-center"></div>
        <div className="container max-w-4xl mx-auto text-center animate-fade-in-slow relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Honor Their Memory, Celebrate Their Love
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Customized pet memorial keepsakes delivered instantly to your inbox
          </p>
          
          <Link to="/star-memorial">
            <Button className="bg-black hover:bg-gray-800 text-white transition-colors">
              Create a Memorial
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Memorial Offerings Section */}
      <section id="memorial-section" className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pet Loss Memorial Gifts & Keepsakes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Healing digital remembrances for your rainbow bridge pet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memorialOfferings.map((offering) => (
              <Link to={offering.link} key={offering.id} className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md group-hover:border-gray-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img 
                      src={offering.imageUrl} 
                      alt={offering.title} 
                      className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-medium mb-2 text-gray-900 group-hover:text-gray-700">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {offering.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {offering.keywords.slice(0,2).map((keyword, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comfort Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold mb-4 text-gray-900">Finding Comfort in Memory</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every remembrance is a celebration of the love you shared with your pet.
              Our thoughtfully designed memorials provide comfort during this difficult time.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center gap-8 justify-center">
            <Link to="/star-map" className="w-full md:w-auto">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Create a Star Map
              </Button>
            </Link>
            
            <Link to="/rainbow-bridge" className="w-full md:w-auto">
              <Button variant="outline" className="w-full border-gray-300 text-gray-900">
                Rainbow Bridge Poem
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
