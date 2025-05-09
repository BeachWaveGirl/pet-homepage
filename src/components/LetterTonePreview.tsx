
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LetterTonePreview = () => {
  return (
    <section className="w-full py-16 px-4 md:py-20 bg-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Choose Your Letter Style</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Preview our different letter tones before placing your order
        </p>

        <Tabs defaultValue="classic" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="classic">🕊️ Classic</TabsTrigger>
            <TabsTrigger value="funny">🐾 Funny</TabsTrigger>
            <TabsTrigger value="spiritual">🌈 Spiritual</TabsTrigger>
          </TabsList>
          
          <TabsContent value="classic">
            <Card className="bg-white shadow-md border border-gray-100">
              <CardContent className="p-6 md:p-8">
                <div className="font-playfair italic text-base md:text-lg text-gray-700 leading-relaxed text-left">
                  <p className="mb-4">Dear Emma,</p>
                  
                  <p className="mb-4">
                    It's me, Fluffy. I've been thinking about those long walks we used to take in the park—how the sun felt on my golden fur and how happy I was just being by your side.
                  </p>
                  
                  <p className="mb-4">
                    Those evenings cuddled up on the couch were my favorite. The way you would scratch behind my ears just right, and how you always knew when I needed an extra belly rub...
                  </p>
                  
                  <p className="text-right italic text-gray-500">Continue reading in your personalized letter...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="funny">
            <Card className="bg-white shadow-md border border-gray-100">
              <CardContent className="p-6 md:p-8">
                <div className="font-playfair italic text-base md:text-lg text-gray-700 leading-relaxed text-left">
                  <p className="mb-4">Dear Emma,</p>
                  
                  <p className="mb-4">
                    It's me, Fluffy! Yes — I'm still a little mad you never let me eat the neighbor's gnome. But hey, water under the bridge, right?
                  </p>
                  
                  <p className="mb-4">
                    Remember how I'd trip over my own paws chasing those squirrels? I was just trying to impress you with my hunting skills! I might not have caught any, but I sure gave them a good scare...
                  </p>
                  
                  <p className="text-right italic text-gray-500">Continue reading in your personalized letter...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="spiritual">
            <Card className="bg-white shadow-md border border-gray-100">
              <CardContent className="p-6 md:p-8">
                <div className="font-playfair italic text-base md:text-lg text-gray-700 leading-relaxed text-left">
                  <p className="mb-4">Dearest Emma,</p>
                  
                  <p className="mb-4">
                    It's Fluffy. Though we may not share the same space anymore, our souls remain connected by the love we created together. I feel your thoughts when you remember our walks in the park.
                  </p>
                  
                  <p className="mb-4">
                    The energy of our bond remains unbroken. When you feel a gentle breeze against your face, know that my spirit is near, watching over you with the same devotion I always had...
                  </p>
                  
                  <p className="text-right italic text-gray-500">Continue reading in your personalized letter...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LetterTonePreview;
