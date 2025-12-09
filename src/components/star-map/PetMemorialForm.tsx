import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Upload, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export interface PetData {
  name: string;
  type: string;
  dateOfFirstMeeting: string;
  dateOfPassing: string;
  ownerName: string;
  memorialMessage: string;
}

interface PetMemorialFormProps {
  petData: PetData;
  onPetDataChange: (data: PetData) => void;
  onPhotoChange: (file: File | null) => void;
  photoPreview: string | null;
}

const memorialTemplates = [
  "Forever in our hearts, shining bright among the stars.",
  "Your light continues to guide us through the darkest nights.",
  "A beloved companion, now dancing among the constellations.",
  "Your paw prints are forever etched in our hearts.",
  "Running free among the stars, always watching over us.",
];

export const PetMemorialForm = ({
  petData,
  onPetDataChange,
  onPhotoChange,
  photoPreview,
}: PetMemorialFormProps) => {
  const [meetingDate, setMeetingDate] = useState<Date | undefined>(
    petData.dateOfFirstMeeting ? new Date(petData.dateOfFirstMeeting) : undefined
  );
  const [passingDate, setPassingDate] = useState<Date | undefined>(
    petData.dateOfPassing ? new Date(petData.dateOfPassing) : undefined
  );

  const handleInputChange = (field: keyof PetData, value: string) => {
    onPetDataChange({ ...petData, [field]: value });
  };

  const handleMeetingDateChange = (date: Date | undefined) => {
    setMeetingDate(date);
    if (date) {
      handleInputChange("dateOfFirstMeeting", date.toISOString());
    }
  };

  const handlePassingDateChange = (date: Date | undefined) => {
    setPassingDate(date);
    if (date) {
      handleInputChange("dateOfPassing", date.toISOString());
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onPhotoChange(file);
    }
  };

  const applyTemplate = (template: string) => {
    handleInputChange("memorialMessage", template);
  };

  return (
    <div className="space-y-6">
      {/* Photo Upload */}
      <div className="space-y-2">
        <Label className="text-foreground">Pet Photo</Label>
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dashed border-muted-foreground/30 bg-muted/50 flex items-center justify-center">
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Pet"
                className="w-full h-full object-cover"
              />
            ) : (
              <Upload className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1">
            <Input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Upload a photo of your beloved pet
            </p>
          </div>
        </div>
      </div>

      {/* Pet Name */}
      <div className="space-y-2">
        <Label htmlFor="petName" className="text-foreground">Pet's Name</Label>
        <Input
          id="petName"
          value={petData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="Enter your pet's name"
          className="bg-background/50"
        />
      </div>

      {/* Pet Type */}
      <div className="space-y-2">
        <Label className="text-foreground">Pet Type</Label>
        <Select
          value={petData.type}
          onValueChange={(value) => handleInputChange("type", value)}
        >
          <SelectTrigger className="bg-background/50">
            <SelectValue placeholder="Select pet type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dog">Dog</SelectItem>
            <SelectItem value="cat">Cat</SelectItem>
            <SelectItem value="bird">Bird</SelectItem>
            <SelectItem value="rabbit">Rabbit</SelectItem>
            <SelectItem value="hamster">Hamster</SelectItem>
            <SelectItem value="fish">Fish</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Owner Name */}
      <div className="space-y-2">
        <Label htmlFor="ownerName" className="text-foreground">Your Name</Label>
        <Input
          id="ownerName"
          value={petData.ownerName}
          onChange={(e) => handleInputChange("ownerName", e.target.value)}
          placeholder="Enter your name"
          className="bg-background/50"
        />
      </div>

      {/* Date of First Meeting */}
      <div className="space-y-2">
        <Label className="text-foreground">When did you first meet?</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-background/50",
                !meetingDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {meetingDate ? format(meetingDate, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={meetingDate}
              onSelect={handleMeetingDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Date of Passing */}
      <div className="space-y-2">
        <Label className="text-foreground">Date of Passing</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-background/50",
                !passingDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {passingDate ? format(passingDate, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={passingDate}
              onSelect={handlePassingDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Memorial Message */}
      <div className="space-y-2">
        <Label className="text-foreground">Memorial Message</Label>
        <Textarea
          value={petData.memorialMessage}
          onChange={(e) => handleInputChange("memorialMessage", e.target.value)}
          placeholder="Write a heartfelt message for your pet..."
          className="min-h-[100px] bg-background/50"
        />
        
        {/* Message Templates */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Or choose a template:
          </p>
          <div className="flex flex-wrap gap-2">
            {memorialTemplates.map((template, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => applyTemplate(template)}
                className="text-xs h-auto py-1 px-2"
              >
                Template {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
