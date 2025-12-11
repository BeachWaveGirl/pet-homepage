
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Upload } from "lucide-react";
import PageTitle from "@/components/StarMemorial/PageTitle";
import PetPhotoUpload from "@/components/pet-letter-form/PetPhotoUpload";

const PetFuneral = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [petPhoto, setPetPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Preview state - updated in real time
  const [previewData, setPreviewData] = useState({
    petName: "",
    petType: "",
    serviceDate: "",
    serviceTime: "",
    serviceLocation: "",
    additionalInfo: "",
    petPhoto: ""
  });

  // Update preview in real-time as user inputs data
  useEffect(() => {
    setPreviewData({
      petName,
      petType,
      serviceDate,
      serviceTime,
      serviceLocation,
      additionalInfo,
      petPhoto
    });
  }, [petName, petType, serviceDate, serviceTime, serviceLocation, additionalInfo, petPhoto]);
  
  const handleGenerate = () => {
    setLoading(true);
    
    // In a real implementation, this would call an API endpoint
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      <main className="flex-1 py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <PageTitle 
            title="Pet Funeral Announcement Card" 
            description="Create a dignified digital invitation to share your pet's memorial service with family and friends."
            lightMode={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-5 text-gray-800">Service Details</h3>
                
                <div className="space-y-4">
                  {/* Pet Photo Upload */}
                  <div>
                    <PetPhotoUpload
                      photoUrl={petPhoto}
                      onPhotoChange={(url) => setPetPhoto(url)}
                    />
                  </div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700">Pet's Name</label>
                      <Input
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="Max, Bella, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700">Type of Pet</label>
                      <Input
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        placeholder="Dog, Cat, etc."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Service Date</label>
                    <div className="relative">
                      <Input
                        type="date"
                        value={serviceDate}
                        onChange={(e) => setServiceDate(e.target.value)}
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Service Time</label>
                    <div className="relative">
                      <Input
                        type="time"
                        value={serviceTime}
                        onChange={(e) => setServiceTime(e.target.value)}
                      />
                      <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Service Location</label>
                    <div className="relative">
                      <Input
                        value={serviceLocation}
                        onChange={(e) => setServiceLocation(e.target.value)}
                        placeholder="Address or location name"
                      />
                      <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Additional Information</label>
                    <Textarea
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      placeholder="Any special instructions or message to attendees"
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleGenerate}
                    disabled={!petName || !serviceDate || !serviceLocation || loading}
                    className="w-full mt-2"
                  >
                    {loading ? "Generating..." : "Generate Invitation"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Live preview card that updates in real-time */}
            <div>
              <Card className="bg-white border-gray-200 shadow-md h-full flex flex-col">
                <div className="bg-gray-100 p-6 text-center flex-grow flex flex-col justify-center">
                  {previewData.petPhoto && (
                    <div className="mb-6">
                      <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-2 border-gray-300">
                        <img 
                          src={previewData.petPhoto} 
                          alt={previewData.petName || "Your pet"}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  )}
                
                  <h3 className="font-playfair text-2xl text-gray-900 mb-1">Memorial Service</h3>
                  <p className="text-gray-500 mb-4">In loving memory of</p>
                  <h2 className="font-playfair text-3xl text-gray-900 mb-1">{previewData.petName || "Your Pet"}</h2>
                  <p className="text-gray-600 mb-6">
                    {previewData.petType ? `Our beloved ${previewData.petType}` : "Our beloved companion"}
                  </p>
                  
                  <div className="border-t border-b border-gray-300 py-4 mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar size={18} className="text-gray-600 mr-2" />
                      <span className="text-gray-800">
                        {previewData.serviceDate ? 
                          new Date(previewData.serviceDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          }) : 
                          "Date to be determined"
                        }
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center mb-2">
                      <Clock size={18} className="text-gray-600 mr-2" />
                      <span className="text-gray-800">
                        {previewData.serviceTime || "Time to be determined"}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <MapPin size={18} className="text-gray-600 mr-2" />
                      <span className="text-gray-800">
                        {previewData.serviceLocation || "Location to be determined"}
                      </span>
                    </div>
                  </div>
                  
                  {previewData.additionalInfo && (
                    <p className="text-gray-700 italic text-sm mb-6">
                      {previewData.additionalInfo}
                    </p>
                  )}
                  
                  <p className="text-gray-600 text-sm">
                    Please join us as we celebrate the life and memory of our cherished companion.
                  </p>
                </div>
                
                <div className="p-4 border-t border-gray-200 bg-white">
                  <Button className="w-full">
                    Download Invitation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetFuneral;
