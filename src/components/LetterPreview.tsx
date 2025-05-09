
import { Card, CardContent } from "@/components/ui/card";

const LetterPreview = () => {
  return (
    <section className="w-full py-16 px-4 md:py-20 bg-offwhite">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">A Sample Letter</h2>
        
        <Card className="max-w-2xl mx-auto bg-white shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="font-playfair italic text-base md:text-lg text-gray-700 leading-relaxed text-left">
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
