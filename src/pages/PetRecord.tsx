
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
                  
                  <TabsContent value="info" className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Pet Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">NAME</label>
                          <Input id="name" placeholder="" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="gender" className="text-sm font-medium">GENDER</label>
                          <Input id="gender" placeholder="" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="breed" className="text-sm font-medium">BREED</label>
                          <Input id="breed" placeholder="" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="medical" className="text-sm font-medium">MEDICAL CONDITIONS</label>
                          <Input id="medical" placeholder="" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="microchip" className="text-sm font-medium">MICROCHIP #</label>
                          <Input id="microchip" placeholder="" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="birthday" className="text-sm font-medium">BIRTHDAY</label>
                          <Input id="birthday" placeholder="" type="date" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="spay" className="text-sm font-medium">SPAY / NEUTER</label>
                          <Input id="spay" placeholder="" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full">Save Pet Information</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="vaccination" className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Vaccination Record</h2>
                    
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-medium text-center">VACCINATIONS</h3>
                        <div className="border rounded-md overflow-hidden">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50 border-b">
                                <th className="py-3 px-4 text-left font-medium w-1/3">DATE</th>
                                <th className="py-3 px-4 text-left font-medium w-1/3">VACCINE</th>
                                <th className="py-3 px-4 text-left font-medium w-1/3">NEXT</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(8)].map((_, i) => (
                                <tr key={i} className="border-b last:border-b-0">
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-medium text-center">FLEA & TICK PREVENTION</h3>
                        <div className="border rounded-md overflow-hidden">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50 border-b">
                                <th className="py-3 px-4 text-left font-medium w-1/3">DATE</th>
                                <th className="py-3 px-4 text-left font-medium w-1/3">PRODUCT & DOSE</th>
                                <th className="py-3 px-4 text-left font-medium w-1/3">NEXT</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(5)].map((_, i) => (
                                <tr key={i} className="border-b last:border-b-0">
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save Vaccination Records</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="health" className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Health History</h2>
                    
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-medium text-center">DEWORMING</h3>
                        <div className="border rounded-md overflow-hidden">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50 border-b">
                                <th className="py-3 px-4 text-left font-medium w-1/3">DATE</th>
                                <th className="py-3 px-4 text-left font-medium w-1/3">PRODUCT & DOSE</th>
                                <th className="py-3 px-4 text-left font-medium w-1/3">NEXT</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(5)].map((_, i) => (
                                <tr key={i} className="border-b last:border-b-0">
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-medium text-center">NOTES</h3>
                        <Textarea className="min-h-[200px]" placeholder="Add health notes here..." />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save Health Records</Button>
                    </div>
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
