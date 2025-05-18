
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-8 px-4 border-t border-green-400 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-xl mb-4 text-green-400 font-bold">Petly</h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            AI-generated for comfort only — not therapy or spiritual advice. 
            Our creations are designed with care to help you celebrate and remember your pets.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <Link to="#" className="text-sm text-green-400 hover:text-pink-500 transition-colors">Privacy</Link>
          <Link to="#" className="text-sm text-green-400 hover:text-pink-500 transition-colors">Terms</Link>
          <Link to="#" className="text-sm text-green-400 hover:text-pink-500 transition-colors">Contact</Link>
        </div>
        
        <div className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Petly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
