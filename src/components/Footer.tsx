
const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 px-4 border-t">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-playfair text-xl mb-4">Letters From Beyond</h3>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            AI-generated for comfort only — not therapy or spiritual advice. 
            Our letters are created with care to help you process grief.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy</a>
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Terms</a>
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</a>
        </div>
        
        <div className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Letters From Beyond. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
