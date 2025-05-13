
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

interface PassingDatePickerProps {
  petName: string;
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

const PassingDatePicker = ({ 
  petName, 
  date, 
  onDateChange 
}: PassingDatePickerProps) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-2">
        <CalendarIcon className="h-5 w-5 text-indigo-600" />
        <h3 className="font-medium text-lg">Pet's Passing Date</h3>
      </div>
      
      <div className="mb-2">
        <Label htmlFor="passingDate" className="text-sm font-medium leading-none mb-2 block">
          When did {petName || "your pet"} pass away?
        </Label>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              initialFocus
              disabled={(date) => date > new Date()}
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="flex flex-col mt-2">
        <p className="text-xs text-gray-500">
          This date will be used to create a commemorative star chart of the night sky when {petName || "your pet"} became part of the stars.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          It will also be used to calculate how much time has passed since their transition.
        </p>
      </div>
    </div>
  );
};

export default PassingDatePicker;
