
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FileText, Download, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PetHealthRecord = () => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petBirthday, setPetBirthday] = useState("");
  const [microchipNumber, setMicrochipNumber] = useState("");
  const [spayNeuterDate, setSpayNeuterDate] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  
  const [vaccinations, setVaccinations] = useState([
    { date: "", vaccine: "", next: "" }
  ]);
  
  const [fleaTick, setFleaTick] = useState([
    { date: "", product: "", next: "" }
  ]);
  
  const [deworming, setDeworming] = useState([
    { date: "", product: "", next: "" }
  ]);
  
  const [notes, setNotes] = useState("");
  
  const addVaccination = () => {
    setVaccinations([...vaccinations, { date: "", vaccine: "", next: "" }]);
  };
  
  const addFleaTick = () => {
    setFleaTick([...fleaTick, { date: "", product: "", next: "" }]);
  };
  
  const addDeworming = () => {
    setDeworming([...deworming, { date: "", product: "", next: "" }]);
  };
  
  const handleSave = () => {
    toast({
      title: "Health Record Saved",
      description: `${petName}'s health record has been saved.`,
    });
  };
  
  const handleDownload = () => {
    toast({
      title: "Health Record Downloaded",
      description: `${petName}'s health record has been prepared for download.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-2">
            <FileText className="h-6 w-6 mr-2 text-blue-500" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">
              Pet Health Record
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Keep track of your pet's health information in one convenient digital record
          </p>
          
          <Card className="bg-white border-gray-200 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-center">Pet Record</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Pet Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Pet's Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Microchip #</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={microchipNumber}
                      onChange={(e) => setMicrochipNumber(e.target.value)}
                      placeholder="Microchip Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Gender</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={petGender}
                      onChange={(e) => setPetGender(e.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Birthday</label>
                    <input 
                      type="date"
                      className="w-full p-2 border rounded-md"
                      value={petBirthday}
                      onChange={(e) => setPetBirthday(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Breed</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      value={petBreed}
                      onChange={(e) => setPetBreed(e.target.value)}
                      placeholder="Pet's Breed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Spay/Neuter Date</label>
                    <input 
                      type="date"
                      className="w-full p-2 border rounded-md"
                      value={spayNeuterDate}
                      onChange={(e) => setSpayNeuterDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Medical Conditions</label>
                  <textarea
                    className="w-full p-2 border rounded-md min-h-[80px]"
                    value={medicalConditions}
                    onChange={(e) => setMedicalConditions(e.target.value)}
                    placeholder="List any ongoing medical conditions..."
                  />
                </div>
                
                {/* Vaccinations */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg">VACCINATIONS</h3>
                    <Button variant="outline" size="sm" onClick={addVaccination}>
                      Add Row
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 w-1/3">DATE</th>
                          <th className="border p-2 w-1/3">VACCINE</th>
                          <th className="border p-2 w-1/3">NEXT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vaccinations.map((vac, index) => (
                          <tr key={`vac-${index}`}>
                            <td className="border p-2">
                              <input 
                                type="date" 
                                className="w-full p-1" 
                                value={vac.date} 
                                onChange={(e) => {
                                  const updated = [...vaccinations];
                                  updated[index].date = e.target.value;
                                  setVaccinations(updated);
                                }}
                              />
                            </td>
                            <td className="border p-2">
                              <input 
                                type="text" 
                                className="w-full p-1" 
                                value={vac.vaccine} 
                                onChange={(e) => {
                                  const updated = [...vaccinations];
                                  updated[index].vaccine = e.target.value;
                                  setVaccinations(updated);
                                }}
                              />
                            </td>
                            <td className="border p-2">
                              <input 
                                type="date" 
                                className="w-full p-1" 
                                value={vac.next} 
                                onChange={(e) => {
                                  const updated = [...vaccinations];
                                  updated[index].next = e.target.value;
                                  setVaccinations(updated);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Flea & Tick Prevention */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg">FLEA & TICK PREVENTION</h3>
                    <Button variant="outline" size="sm" onClick={addFleaTick}>
                      Add Row
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 w-1/3">DATE</th>
                          <th className="border p-2 w-1/3">PRODUCT & DOSE</th>
                          <th className="border p-2 w-1/3">NEXT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fleaTick.map((ft, index) => (
                          <tr key={`ft-${index}`}>
                            <td className="border p-2">
                              <input 
                                type="date" 
                                className="w-full p-1" 
                                value={ft.date} 
                                onChange={(e) => {
                                  const updated = [...fleaTick];
                                  updated[index].date = e.target.value;
                                  setFleaTick(updated);
                                }}
                              />
                            </td>
                            <td className="border p-2">
                              <input 
                                type="text" 
                                className="w-full p-1" 
                                value={ft.product} 
                                onChange={(e) => {
                                  const updated = [...fleaTick];
                                  updated[index].product = e.target.value;
                                  setFleaTick(updated);
                                }}
                              />
                            </td>
                            <td className="border p-2">
                              <input 
                                type="date" 
                                className="w-full p-1" 
                                value={ft.next} 
                                onChange={(e) => {
                                  const updated = [...fleaTick];
                                  updated[index].next = e.target.value;
                                  setFleaTick(updated);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Deworming */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg">DEWORMING</h3>
                    <Button variant="outline" size="sm" onClick={addDeworming}>
                      Add Row
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 w-1/3">DATE</th>
                          <th className="border p-2 w-1/3">PRODUCT & DOSE</th>
                          <th className="border p-2 w-1/3">NEXT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deworming.map((dw, index) => (
                          <tr key={`dw-${index}`}>
                            <td className="border p-2">
                              <input 
                                type="date" 
                                className="w-full p-1" 
                                value={dw.date} 
                                onChange={(e) => {
                                  const updated = [...deworming];
                                  updated[index].date = e.target.value;
                                  setDeworming(updated);
                                }}
                              />
                            </td>
                            <td className="border p-2">
                              <input 
                                type="text" 
                                className="w-full p-1" 
                                value={dw.product} 
                                onChange={(e) => {
                                  const updated = [...deworming];
                                  updated[index].product = e.target.value;
                                  setDeworming(updated);
                                }}
                              />
                            </td>
                            <td className="border p-2">
                              <input 
                                type="date" 
                                className="w-full p-1" 
                                value={dw.next} 
                                onChange={(e) => {
                                  const updated = [...deworming];
                                  updated[index].next = e.target.value;
                                  setDeworming(updated);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Notes */}
                <div>
                  <h3 className="font-medium text-lg mb-2">NOTES</h3>
                  <textarea
                    className="w-full p-2 border rounded-md min-h-[150px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Additional notes, observations, or special care instructions..."
                  />
                </div>
                
                <div className="flex justify-center gap-4 pt-4">
                  <Button 
                    onClick={handleSave} 
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={!petName}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Record
                  </Button>
                  
                  <Button 
                    onClick={handleDownload}
                    variant="outline"
                    disabled={!petName}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetHealthRecord;
