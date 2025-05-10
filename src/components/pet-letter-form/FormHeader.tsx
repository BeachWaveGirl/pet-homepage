
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FormHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="font-playfair text-2xl md:text-3xl text-center">Create Your Letter</CardTitle>
      <CardDescription className="text-center">
        Tell us about your pet and we'll craft a comforting letter in their voice
      </CardDescription>
    </CardHeader>
  );
};

export default FormHeader;
