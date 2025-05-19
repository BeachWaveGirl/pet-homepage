
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PetPhotoUpload from "@/components/pet-letter-form/PetPhotoUpload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConnectionFormProps {
  petName: string;
  setPetName: (name: string) => void;
  question: string;
  setQuestion: (question: string) => void;
  petPhoto: string;
  setPetPhoto: (url: string) => void;
  onConnect: () => void;
}

const ConnectionForm = ({
  petName,
  setPetName,
  question,
  setQuestion,
  petPhoto,
  setPetPhoto,
  onConnect,
}: ConnectionFormProps) => {
  return (
    <Card className="bg-white border-gray-200 shadow-md">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl">Connect With Your Pet</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div>
            <PetPhotoUpload
              photoUrl={petPhoto}
              onPhotoChange={(url) => setPetPhoto(url)}
            />
          </div>
        
          <div>
            <Label htmlFor="petName">Your Pet's Name</Label>
            <Input
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Enter your pet's name"
              className="w-full"
            />
          </div>
          
          <div>
            <Label htmlFor="question">Ask Your Question</Label>
            <Textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What would you like to ask or know from your pet?"
              rows={4}
              className="w-full"
            />
          </div>
          
          <Button 
            onClick={onConnect} 
            className="w-full bg-black text-white hover:bg-gray-800"
            disabled={!petName.trim() || !question.trim()}
          >
            Connect with {petName || "your pet"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionForm;
