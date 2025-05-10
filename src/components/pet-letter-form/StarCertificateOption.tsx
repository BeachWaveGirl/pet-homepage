
import { Checkbox } from "@/components/ui/checkbox";
import { Award } from "lucide-react";

interface StarCertificateOptionProps {
  petName: string;
  isChecked: boolean;
  onCheckChange: (checked: boolean) => void;
}

const StarCertificateOption = ({ 
  petName, 
  isChecked, 
  onCheckChange 
}: StarCertificateOptionProps) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-2">
        <Award className="h-5 w-5 text-indigo-600" />
        <h3 className="font-medium text-lg">Free Star Certificate</h3>
      </div>
      <div className="flex items-center space-x-3 mb-2">
        <Checkbox 
          id="includeStar" 
          checked={isChecked}
          onCheckedChange={onCheckChange}
          className="border-indigo-400 data-[state=checked]:bg-indigo-600"
        />
        <label 
          htmlFor="includeStar" 
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Include a free Star Certificate naming a star after {petName || "your pet"}
        </label>
      </div>
      <p className="text-xs text-gray-500 ml-8">
        A beautiful digital certificate commemorating your pet with a star in their name
      </p>
    </div>
  );
};

export default StarCertificateOption;
