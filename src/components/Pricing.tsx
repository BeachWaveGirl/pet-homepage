
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Single Letter",
      price: "$12",
      description: "One comfort letter from your pet",
      features: [
        "Personalized AI-written letter",
        "Beautifully formatted PDF",
        "Unlimited revisions",
        "Email delivery within 24 hours"
      ],
      popular: false,
      buttonText: "Choose Plan"
    },
    {
      id: 2,
      name: "Letter Pack",
      price: "$35",
      description: "Three different comfort letters",
      features: [
        "3 uniquely written letters",
        "Different tones (nostalgic, playful, etc)",
        "Beautifully formatted PDFs",
        "Priority email delivery"
      ],
      popular: true,
      buttonText: "Best Value"
    },
    {
      id: 3,
      name: "Digital Altar",
      price: "$5/mo",
      description: "Online memorial for your pet",
      features: [
        "Dedicated memorial page",
        "Photo gallery upload",
        "Share memories with family",
        "Cancel anytime"
      ],
      popular: false,
      buttonText: "Coming Soon"
    }
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('letter-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 px-4 md:py-20" id="pricing">
      <div className="container max-w-5xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`border ${plan.popular ? 'border-black shadow-md' : 'border-gray-200'} transition-all hover:shadow-lg`}
            >
              <CardHeader>
                <CardTitle className="font-playfair text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  {plan.id === 3 && <span className="text-sm text-gray-500 ml-1">per month</span>}
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-sm mr-2">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  onClick={scrollToForm}
                  disabled={plan.id === 3}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
