
const Footer = () => {
  return (
    <footer className="w-full bg-cream-dark py-10 px-4 paper-texture relative">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pastel-gold/40 to-transparent"></div>
      
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-playfair text-xl mb-4 text-foreground">Pet Memorial Star</h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            ✨ No shipping. No clutter. Just meaningful digital art to save, share, and smile at.
          </p>
        </div>
        
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-6"></div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="text-xs text-muted-foreground/70 text-center">
          <p className="mb-2">Disclaimer: Pet Memorial Star is a creative platform designed for personal enjoyment and expression. All content is for entertainment purposes only and not intended as professional, medical, or therapeutic advice.</p>
          <p>© {new Date().getFullYear()} Pet Memorial Star. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
