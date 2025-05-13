
import { Card, CardContent } from "@/components/ui/card";

const LetterPreview = () => {
  return (
    <section className="w-full py-16 px-4 md:py-20 bg-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">A Sample Letter</h2>
        
        <Card className="max-w-2xl mx-auto bg-white shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6 md:p-8">
            {/* Star Chart Section */}
            <div className="mb-10">
              <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto mb-8 rounded-full overflow-hidden border-2 border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000" 
                  alt="Night Sky Star Chart"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="uppercase tracking-widest text-xl md:text-2xl font-bold mb-3">THE NIGHT WE SAID GOODBYE</h3>
              
              <p className="text-sm mb-1">August 12, 2023</p>
              <p className="text-sm mb-3">San Francisco, California</p>
              
              <p className="text-xs text-gray-500">37°77'49"N | 122°41'94"W</p>
            </div>
            
            {/* Letter Content */}
            <div className="font-playfair italic text-base md:text-lg text-gray-700 leading-relaxed text-left border-t pt-8">
              <p className="mb-4">Dearest Emma,</p>
              
              <p className="mb-4">
                It's me, Fluffy. I've been thinking about those long walks we used to take in the park—how the sun felt on my golden fur and how happy I was just being by your side. Remember how I would always stop to chase those birds? I never caught one, but oh how I loved to try.
              </p>
              
              <p className="mb-4">
                Those evenings cuddled up on the couch were my favorite. The way you would scratch behind my ears just right, and how you always knew when I needed an extra belly rub. Those little moments meant everything to me.
              </p>
              
              <p className="mb-4">
                I miss our little routines, but I want you to know that the love we shared doesn't go away. It stays with you, just like all the little fur clumps I left on your black pants (sorry about that, by the way).
              </p>
              
              <p className="mb-4">
                You gave me the best life any dog could dream of. Please smile when you think of me—that's how I'd want to be remembered.
              </p>
              
              <p>
                Love forever and always,<br/>
                Your loyal Fluffy
              </p>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-sm text-gray-500 mt-6 italic">Inspired by real users — always with consent</p>
      </div>
    </section>
  );
};

export default LetterPreview;
