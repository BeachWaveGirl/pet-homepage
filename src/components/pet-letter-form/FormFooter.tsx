
import { CardFooter } from "@/components/ui/card";

const FormFooter = () => {
  return (
    <CardFooter className="flex justify-center border-t pt-6">
      <p className="text-xs text-gray-500 text-center max-w-md">
        By submitting, you agree to our terms and privacy policy. 
        Your information is used only to create your letter.
      </p>
    </CardFooter>
  );
};

export default FormFooter;
