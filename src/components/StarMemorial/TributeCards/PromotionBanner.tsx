
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PromotionBanner = () => {
  return (
    <div className="mt-12">
      <Link to="/special-tribute-collection">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition-all">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">Special Memorial Collection</h3>
            <p className="text-gray-300">Create a complete tribute with our curated memorial package at a special price</p>
          </div>
          <Button className="bg-white text-black hover:bg-gray-200">
            Explore Collection → 
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default PromotionBanner;
