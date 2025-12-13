
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PetPhotoUpload from "@/components/pet-letter-form/PetPhotoUpload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConnectionFormProps {
  petName: string;
  setPetName: (name: string) => void;
  petPersonality: string;
  setPetPersonality: (personality: string) => void;
  favoriteMemories: string;
  setFavoriteMemories: (memories: string) => void;
  petPhoto: string;
  setPetPhoto: (url: string) => void;
}

const ConnectionForm = ({
  petName,
  setPetName,
  petPersonality,
  setPetPersonality,
  favoriteMemories,
  setFavoriteMemories,
  petPhoto,
  setPetPhoto,
}: ConnectionFormProps) => {
  return (
    <Card className="bg-white/80 border-[hsl(35,30%,80%)] shadow-md h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl text-[hsl(25,30%,25%)]">Connect With Your Pet</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-5 flex flex-col h-full">
          <div>
            <PetPhotoUpload
              photoUrl={petPhoto}
              onPhotoChange={(url) => setPetPhoto(url)}
            />
          </div>
        
          <div>
            <Label htmlFor="petName" className="text-[hsl(25,30%,30%)]">Your Pet's Name</Label>
            <Input
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Enter your pet's name"
              className="w-full border-[hsl(35,30%,75%)] focus:border-[hsl(35,30%,60%)]"
            />
          </div>
          
          <div>
            <Label htmlFor="petPersonality" className="text-[hsl(25,30%,30%)]">Your Pet's Personality</Label>
            <Input
              id="petPersonality"
              value={petPersonality}
              onChange={(e) => setPetPersonality(e.target.value)}
              placeholder="e.g. playful, shy, very loyal, curious..."
              className="w-full border-[hsl(35,30%,75%)] focus:border-[hsl(35,30%,60%)]"
            />
          </div>
          
          <div className="flex-grow">
            <Label htmlFor="favoriteMemories" className="text-[hsl(25,30%,30%)]">Favorite Memories</Label>
            <Textarea
              id="favoriteMemories"
              value={favoriteMemories}
              onChange={(e) => setFavoriteMemories(e.target.value)}
              placeholder="Share a few cherished memories of your beloved pet..."
              rows={4}
              className="w-full flex-grow border-[hsl(35,30%,75%)] focus:border-[hsl(35,30%,60%)]"
            />
          </div>
          
          <p className="text-xs text-[hsl(25,30%,50%)] italic mt-2">
            This information helps create a more personal and comforting connection experience.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionForm;
