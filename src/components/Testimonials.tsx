
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This made me cry in the best way. I felt like my cat was speaking to me again.",
      name: "Melanie R."
    },
    {
      id: 2,
      quote: "After losing my dog of 12 years, this letter brought me so much comfort. Thank you.",
      name: "James T."
    },
    {
      id: 3,
      quote: "A beautiful way to remember my sweet bunny. It captured his personality perfectly.",
      name: "Sarah W."
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:py-20 bg-offwhite">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="text-4xl text-lavender mb-4">"</div>
                  <p className="text-gray-700 italic mb-4 flex-grow">{testimonial.quote}</p>
                  <p className="text-sm font-medium">— {testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
