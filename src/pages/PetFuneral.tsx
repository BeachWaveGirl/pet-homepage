
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Download } from "lucide-react";
import PageTitle from "@/components/StarMemorial/PageTitle";
import PetPhotoUpload from "@/components/pet-letter-form/PetPhotoUpload";
import html2canvas from "html2canvas";

const PetFuneral = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [petPhoto, setPetPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  
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

  const handleDownload = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
        allowTaint: true,
        scale: 2,
      });
      
      const link = document.createElement("a");
      link.download = `${previewData.petName || "pet"}-funeral-invitation.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error downloading:", error);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-aged-paper paper-texture">
      <Header />
      
      <main className="flex-1 py-6 px-4">
        <div className="container mx-auto max-w-5xl">
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
            
            {/* Live preview card with frame */}
            <div>
              <div ref={previewRef} className="relative w-full max-w-[500px] mx-auto">
                {/* Frame image */}
                <img 
                  src="/assets/Frame.png" 
                  alt="Ornate rococo frame" 
                  className="w-full block"
                />
                
                {/* Content overlay - positioned inside the frame */}
                <div 
                  className="absolute text-center"
                  style={{
                    top: '18%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '65%',
                  }}
                >
                  {previewData.petPhoto && (
                    <div className="mb-3">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto overflow-hidden border-2 border-[hsl(43,60%,55%)] shadow-md">
                        <img 
                          src={previewData.petPhoto} 
                          alt={previewData.petName || "Your pet"}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  )}
                
                  <h3 
                    className="text-base md:text-lg mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: '#3e2f2f' }}
                  >
                    Memorial Service
                  </h3>
                  <p 
                    className="text-xs md:text-sm mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b5b5b' }}
                  >
                    In loving memory of
                  </p>
                  <h2 
                    className="text-xl md:text-2xl mb-1 font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: '#2a1f1f' }}
                  >
                    {previewData.petName || "Your Pet"}
                  </h2>
                  <p 
                    className="text-xs md:text-sm mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#5c4a4a' }}
                  >
                    {previewData.petType ? `Our beloved ${previewData.petType}` : "Our beloved companion"}
                  </p>
                  
                  <div 
                    className="border-t border-b py-2 mb-3"
                    style={{ borderColor: 'rgba(62, 47, 47, 0.25)' }}
                  >
                    <div className="flex items-center justify-center mb-1">
                      <span 
                        className="text-xs md:text-sm"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: '#3e2f2f' }}
                      >
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
                    
                    <div className="flex items-center justify-center mb-1">
                      <span 
                        className="text-xs md:text-sm"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: '#3e2f2f' }}
                      >
                        {previewData.serviceTime || "Time to be determined"}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <span 
                        className="text-xs md:text-sm"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: '#3e2f2f' }}
                      >
                        {previewData.serviceLocation || "Location to be determined"}
                      </span>
                    </div>
                  </div>
                  
                  {previewData.additionalInfo && (
                    <p 
                      className="italic text-xs mb-2 line-clamp-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: '#4a3d3d' }}
                    >
                      {previewData.additionalInfo}
                    </p>
                  )}
                  
                  <p 
                    className="text-xs"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#5c4a4a' }}
                  >
                    Please join us as we celebrate the life of our cherished companion.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 max-w-[500px] mx-auto">
                <Button onClick={handleDownload} className="w-full">
                  <Download className="mr-2" size={16} />
                  Download Invitation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetFuneral;
