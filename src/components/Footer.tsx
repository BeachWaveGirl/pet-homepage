
const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 px-4 border-t relative">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-playfair text-xl mb-4">Petly</h3>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            ✨ No shipping. No clutter. Just meaningful digital art to save, share, and smile at.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy</a>
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Terms</a>
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</a>
        </div>
        
        <div className="text-xs text-gray-400 text-center">
          <p className="mb-2">Disclaimer: Petly is a creative platform designed for personal enjoyment and expression. All content is for entertainment purposes only and not intended as professional, medical, or therapeutic advice.</p>
          <p>© {new Date().getFullYear()} Petly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
