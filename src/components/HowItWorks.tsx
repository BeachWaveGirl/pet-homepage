
import { Card, CardContent } from "@/components/ui/card";
import { FileText, PenTool, Mail } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Share your memories",
      description: "Tell us about your pet and upload a photo if you'd like",
      icon: FileText
    },
    {
      id: 2,
      title: "AI writes your letter",
      description: "We craft a heartfelt letter inspired by your shared memories",
      icon: PenTool
    },
    {
      id: 3,
      title: "Receive your comfort",
      description: "Get a beautiful PDF delivered to your inbox",
      icon: Mail
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:py-20">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Step {step.id}</h3>
                  <h4 className="font-medium mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
