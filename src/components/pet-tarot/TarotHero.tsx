
import { Clock, MessageCircle, Star } from "lucide-react";

interface TarotHeroProps {
  backgroundImage?: string;
}

const TarotHero = ({ backgroundImage = '/lovable-uploads/f33432eb-d4f4-459a-9cba-6fdfdbacd6a0.png' }: TarotHeroProps) => {
  return (
    <section 
      className="py-12 px-4 bg-black relative overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4">
          <span className="text-white font-bold mr-1">CONNECT WITH YOUR PET</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
          PET <span className="block text-white">TAROT</span> <span className="block text-gray-300">READING</span>
        </h1>
        
        <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
          Connect with the spirit of your beloved pet through tarot. Choose a card and receive a comforting message inspired by their soul's energy 🔮
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center">
            <Clock className="w-6 h-6 mr-2 text-white" />
            <span className="text-white">SAME HOUR</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-6 h-6 mr-2 text-white" />
            <span className="text-white">INTERACTIVE</span>
          </div>
          <div className="flex items-center">
            <Star className="w-6 h-6 mr-2 text-white" />
            <span className="text-white">5-STARS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarotHero;
