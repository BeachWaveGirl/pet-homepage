
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, FileSearch, FileHeart } from "lucide-react";

const PetRecord = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <FileText className="inline-block h-12 w-12 mb-3" />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Pet Record</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Keep track of your pet's important information, vaccination history, 
                and health records all in one convenient digital place.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="info" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="info" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Pet Info</span>
                    </TabsTrigger>
                    <TabsTrigger value="vaccination" className="flex items-center gap-2">
                      <FileHeart className="h-4 w-4" />
                      <span>Vaccinations</span>
                    </TabsTrigger>
                    <TabsTrigger value="health" className="flex items-center gap-2">
                      <FileSearch className="h-4 w-4" />
                      <span>Health History</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="info" className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4">Pet Information</h2>
                    <p className="text-gray-600">
                      Track your pet's basic details including name, breed, birthdate, 
                      microchip information, and emergency contacts.
                    </p>
                    <div className="my-6">
                      <img 
                        src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=600" 
                        alt="Pet Information Example" 
                        className="mx-auto rounded-lg shadow-md"
                      />
                    </div>
                    <Button className="w-full mt-4">Create Pet Information Record</Button>
                  </TabsContent>
                  
                  <TabsContent value="vaccination" className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4">Vaccination Record</h2>
                    <p className="text-gray-600">
                      Keep track of all your pet's vaccinations, including dates administered, 
                      due dates for boosters, and the veterinarian information.
                    </p>
                    <div className="my-6">
                      <img 
                        src="https://images.unsplash.com/photo-1612531822296-6365264dca46?w=600" 
                        alt="Pet Vaccination Example" 
                        className="mx-auto rounded-lg shadow-md"
                      />
                    </div>
                    <Button className="w-full mt-4">Create Vaccination Record</Button>
                  </TabsContent>
                  
                  <TabsContent value="health" className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4">Health History</h2>
                    <p className="text-gray-600">
                      Document your pet's health history, including vet visits, 
                      medications, allergies, and important medical events.
                    </p>
                    <div className="my-6">
                      <img 
                        src="https://images.unsplash.com/photo-1584130969499-78ea7c5a9c5f?w=600" 
                        alt="Pet Health History Example" 
                        className="mx-auto rounded-lg shadow-md"
                      />
                    </div>
                    <Button className="w-full mt-4">Create Health History Record</Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PetRecord;
