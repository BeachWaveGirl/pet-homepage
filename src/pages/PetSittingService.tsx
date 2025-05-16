
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, ClipboardList, FileCheck } from "lucide-react";

const PetSittingService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <ClipboardList className="inline-block h-12 w-12 mb-3" />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Pet Sitting Service</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Editable & Printable Pet Sitting Business New Client Intake Form, 
                Invoice, Business Signs, and Service Agreements.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="client" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="client" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Client Intake</span>
                    </TabsTrigger>
                    <TabsTrigger value="agreement" className="flex items-center gap-2">
                      <FileCheck className="h-4 w-4" />
                      <span>Service Agreement</span>
                    </TabsTrigger>
                    <TabsTrigger value="invoice" className="flex items-center gap-2">
                      <ClipboardList className="h-4 w-4" />
                      <span>Invoice</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="client" className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Client Information Form</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h3 className="font-medium mb-3">Pet Owner Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Owner Name</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Address</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Phone Number</label>
                            <Input className="mt-1" type="tel" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Email</label>
                            <Input className="mt-1" type="email" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h3 className="font-medium mb-3">Pet Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Pet Name</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Type/Breed</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Age</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Gender</label>
                            <Input className="mt-1" />
                          </div>
                          <div className="md:col-span-2">
                            <label className="text-sm font-medium">Special Instructions</label>
                            <Textarea className="mt-1" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h3 className="font-medium mb-3">Emergency Contact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Contact Name</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Contact Number</label>
                            <Input className="mt-1" type="tel" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Vet Name</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Vet Phone</label>
                            <Input className="mt-1" type="tel" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save Client Information</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="agreement" className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Service Agreement</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h3 className="font-medium mb-3">Service Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Start Date</label>
                            <Input className="mt-1" type="date" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">End Date</label>
                            <Input className="mt-1" type="date" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Service Type</label>
                            <Input className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Number of Visits</label>
                            <Input className="mt-1" type="number" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h3 className="font-medium mb-3">Terms & Conditions</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-baseline gap-2">
                              <span className="font-medium">1.</span>
                              <p>Pet sitter agrees to provide the services stated in this contract in a reliable and trustworthy manner.</p>
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-medium">2.</span>
                              <p>Client will pay the pet sitter for services as outlined in this agreement.</p>
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-medium">3.</span>
                              <p>Client grants permission to seek veterinary care in case of emergency.</p>
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-medium">4.</span>
                              <p>Pet sitter is not liable for injury or loss of pet that is prone to escaping.</p>
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-medium">5.</span>
                              <p>Client will reimburse pet sitter for any additional fees for tending to emergencies or for any supplies needed.</p>
                            </div>
                          </div>
                          
                          <div className="pt-4">
                            <label className="text-sm font-medium">Client Signature</label>
                            <div className="mt-2 h-24 border border-gray-300 rounded-md bg-white"></div>
                            <div className="mt-2 grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Print Name</label>
                                <Input className="mt-1" />
                              </div>
                              <div>
                                <label className="text-sm font-medium">Date</label>
                                <Input className="mt-1" type="date" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save & Print Agreement</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="invoice" className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Invoice</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">INVOICE</h3>
                            <div className="mt-1 text-sm text-gray-500">
                              <p>Date: {new Date().toLocaleDateString()}</p>
                              <p>Invoice #: {Math.floor(Math.random() * 10000)}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <h3 className="font-medium">Your Pet Service</h3>
                            <div className="mt-1 text-sm text-gray-500">
                              <p>123 Pet Street</p>
                              <p>Pet City, PC 12345</p>
                              <p>info@petservice.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h3 className="font-medium mb-3">Service Details</h3>
                        <div className="border rounded-md overflow-hidden">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-100 border-b">
                                <th className="py-2 px-4 text-left font-medium">Item</th>
                                <th className="py-2 px-4 text-left font-medium">Qty</th>
                                <th className="py-2 px-4 text-left font-medium">Rate</th>
                                <th className="py-2 px-4 text-left font-medium">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(4)].map((_, i) => (
                                <tr key={i} className="border-b">
                                  <td className="py-3 px-4"><Input className="h-8" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" type="number" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" type="number" step="0.01" /></td>
                                  <td className="py-3 px-4"><Input className="h-8" readOnly /></td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr className="bg-gray-50">
                                <td colSpan={2}></td>
                                <td className="py-3 px-4 font-medium text-right">Total:</td>
                                <td className="py-3 px-4"><Input className="h-8" readOnly /></td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h3 className="font-medium mb-3">Payment Information</h3>
                        <div className="text-sm space-y-1">
                          <p>Payment due within 15 days of invoice date.</p>
                          <p>Please make checks payable to "Your Pet Service".</p>
                          <p>For online payments, please visit yourpetservice.com/pay</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Print Invoice</Button>
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

export default PetSittingService;
