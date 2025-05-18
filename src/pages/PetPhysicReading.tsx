
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle, Star, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Dummy responses for the psychic chat simulation
const psychicResponses = [
  "I'm sensing your pet has a very playful energy. They're showing me images of running through fields.",
  "Your pet is showing me that they feel very loved and safe with you. They appreciate the care you give them.",
  "I see your pet has a favorite spot in the house - somewhere by a window where they can watch the world outside.",
  "Your pet is showing me that they enjoy when you scratch behind their ears. It's their favorite form of affection.",
  "I'm sensing your pet has a protective nature. They see themselves as your guardian.",
  "Your pet is showing me memories of a special toy they had or still have - it's very important to them.",
  "I can feel that your pet has a very wise old soul. They've been with you in past lives.",
  "Your pet is communicating that they can sense your emotions very clearly, especially when you're feeling sad.",
  "I'm getting a feeling that your pet has a special connection to water - perhaps they enjoy bath time or watching rainfall.",
  "Your pet wants you to know that they're always listening when you talk to them. They understand more than you might think."
];

type Message = {
  id: string;
  sender: "user" | "psychic";
  text: string;
  timestamp: Date;
};

const PetPhysicReading = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [isAlive, setIsAlive] = useState<string>("");
  const [question, setQuestion] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto scroll chat to bottom when new messages appear
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStartReading = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Start the chat session with an intro message
    const initialMessage: Message = {
      id: Date.now().toString(),
      sender: "psychic",
      text: `Hello! I'm connecting with ${petName}'s energy now. What would you like to know about ${petName} today?`,
      timestamp: new Date()
    };
    
    setMessages([initialMessage]);
    setShowChat(true);
    
    toast({
      title: "Psychic connection established",
      description: `We're now connected to ${petName}'s energy. You can begin your reading.`,
    });
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (currentMessage.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: currentMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);
    
    // Clear any existing typing simulation
    if (typingTimeout) clearTimeout(typingTimeout);
    
    // Simulate psychic typing and response (2-4 seconds)
    const responseTime = Math.floor(Math.random() * 2000) + 2000;
    const newTimeout = setTimeout(() => {
      const randomResponseIndex = Math.floor(Math.random() * psychicResponses.length);
      const responseText = psychicResponses[randomResponseIndex];
      
      const psychicMessage: Message = {
        id: `psychic-${Date.now()}`,
        sender: "psychic",
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, psychicMessage]);
      setIsLoading(false);
    }, responseTime);
    
    setTypingTimeout(newTimeout);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C] text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="py-12 px-4 bg-[#1A1F2C] relative overflow-hidden"
          style={{
            backgroundImage: "url('/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/70 to-[#1A1F2C] pointer-events-none"></div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4">
              <span className="text-[#8B5CF6] font-bold mr-1">FAST DELIVERY</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              PET <span className="block text-[#D946EF]">PSYCHIC</span> <span className="block text-[#8B5CF6]">READING</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Connect with your pet on a deeper level — discover what they're thinking, feeling, and what messages they have for you 💫
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">SAME HOUR</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">INTERACTIVE</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-[#F97316]" />
                <span className="text-[#F97316]">5-STARS</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-4 bg-[#1A1F2C]">
          <div className="container mx-auto max-w-4xl">
            {!showChat ? (
              <>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 text-[#D946EF]">✨ WHAT YOU CAN ASK DURING THIS READING:</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>🐶 "Is my pet happy?"</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>🐱 "Why is my cat acting distant lately?"</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>🌈 "Does my deceased pet still visit me?"</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <p>❓ "Is my dog in pain?"</p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg col-span-1 md:col-span-2">
                      <p>🕊️ "What does my animal need me to understand?"</p>
                    </div>
                  </div>
                </div>

                <Card className="border-2 border-[#8B5CF6] bg-black/30 shadow-lg shadow-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <MessageCircle className="inline-block h-12 w-12 text-[#D946EF] mb-3" />
                      <h3 className="text-2xl font-bold mb-2">Connect With Your Pet</h3>
                      <p className="text-gray-300">Fill out this form to begin your psychic chat session</p>
                    </div>
                    
                    <form onSubmit={handleStartReading} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="petName" className="text-white">✨ Pet's Name:</Label>
                          <Input 
                            id="petName"
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                            placeholder="Max, Luna, etc."
                            required
                            className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="petType" className="text-white">✨ Type of Pet:</Label>
                          <Input 
                            id="petType"
                            value={petType}
                            onChange={(e) => setPetType(e.target.value)}
                            placeholder="Dog, cat, rabbit, etc."
                            required
                            className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="petAge" className="text-white">✨ Pet's Age:</Label>
                        <Input 
                          id="petAge"
                          value={petAge}
                          onChange={(e) => setPetAge(e.target.value)}
                          placeholder="2 years, 6 months, etc."
                          className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="isAlive" className="text-white">✨ Is your pet still with us physically?</Label>
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="isAlive" 
                              value="yes" 
                              checked={isAlive === "yes"}
                              onChange={() => setIsAlive("yes")}
                              className="w-4 h-4 accent-[#D946EF]"
                              required
                            />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="isAlive" 
                              value="no" 
                              checked={isAlive === "no"}
                              onChange={() => setIsAlive("no")}
                              className="w-4 h-4 accent-[#D946EF]"
                            />
                            <span>No (crossed rainbow bridge)</span>
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="photo" className="text-white">✨ Upload a photo of your pet (recommended):</Label>
                        <Input 
                          id="photo"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="bg-black/30 border-[#8B5CF6]/50 text-white"
                        />
                        {photo && (
                          <p className="text-sm text-[#8B5CF6]">Photo uploaded: {photo.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="question" className="text-white">✨ Initial question for your psychic reading:</Label>
                        <Textarea 
                          id="question"
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          placeholder="What would you like to know about your pet? What questions do you have?"
                          rows={4}
                          required
                          className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                        />
                      </div>

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#9B87F5] hover:to-[#E158F7] text-white font-bold py-3 text-lg"
                        >
                          Start Psychic Chat
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 order-2 md:order-1">
                  <Card className="bg-black/30 border-[#8B5CF6]/30">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-4 text-[#D946EF]">About Your Pet</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-gray-400">Name:</span>
                          <span className="ml-2 text-white">{petName}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Type:</span>
                          <span className="ml-2 text-white">{petType}</span>
                        </div>
                        {petAge && (
                          <div>
                            <span className="text-gray-400">Age:</span>
                            <span className="ml-2 text-white">{petAge}</span>
                          </div>
                        )}
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className="ml-2 text-white">{isAlive === "yes" ? "Living" : "Crossed rainbow bridge"}</span>
                        </div>
                      </div>
                      
                      {photo && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2 text-gray-400">Pet Photo:</h4>
                          <div className="w-full aspect-square rounded-lg overflow-hidden">
                            <img 
                              src={URL.createObjectURL(photo)} 
                              alt={petName} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <h4 className="text-sm font-medium mb-3 text-[#F97316]">Psychic Connection Tips:</h4>
                        <ul className="space-y-2 text-xs text-gray-300">
                          <li>• Ask specific questions for clearer responses</li>
                          <li>• Be open to unexpected messages</li>
                          <li>• Focus on your pet while reading their responses</li>
                          <li>• Trust your intuition about the information</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2 order-1 md:order-2">
                  <Card className="bg-black/30 border-[#8B5CF6]/30 overflow-hidden flex flex-col h-[600px]">
                    <div className="bg-gradient-to-r from-[#362C5A] to-[#251D3F] p-4 border-b border-[#8B5CF6]/30">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png" alt="Psychic" />
                          <AvatarFallback className="bg-[#D946EF]">PS</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Pet Psychic Chat</h3>
                          <div className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-xs text-green-400">Connected</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: 'smooth' }}>
                      {messages.map((msg) => (
                        <div 
                          key={msg.id} 
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] px-4 py-3 rounded-xl ${
                              msg.sender === 'user' 
                                ? 'bg-[#8B5CF6] text-white rounded-tr-none' 
                                : 'bg-[#2D2A49] text-white rounded-tl-none'
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                            <div className="mt-1 text-xs opacity-70 flex justify-end">
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-[#2D2A49] text-white px-4 py-3 rounded-xl rounded-tl-none">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={chatEndRef} />
                    </div>
                    
                    <div className="p-4 border-t border-[#8B5CF6]/30 bg-[#1E1935]">
                      <form onSubmit={handleSendMessage} className="flex items-center">
                        <Input
                          value={currentMessage}
                          onChange={(e) => setCurrentMessage(e.target.value)}
                          placeholder="Ask a question about your pet..."
                          className="flex-grow mr-2 bg-[#2D2A49] border-[#8B5CF6]/30 text-white placeholder:text-gray-400"
                        />
                        <Button 
                          type="submit" 
                          className="bg-[#D946EF] hover:bg-[#C936DF] text-white"
                          disabled={isLoading || currentMessage.trim() === ""}
                        >
                          <Send className="h-4 w-4" />
                          <span className="sr-only">Send message</span>
                        </Button>
                      </form>
                      <p className="text-xs text-gray-400 mt-2">
                        Your pet is listening. What would you like to ask?
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}
            
            <div className="mt-10 p-6 bg-[#0F0D1A] rounded-lg border border-[#8B5CF6]/30">
              <h2 className="text-xl font-bold mb-4 text-[#F97316]">🌟 WHAT'S INCLUDED IN YOUR PET READING:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">1 personalized pet psychic reading</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Delivered as a same hour reading</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Insight into your living pet reading or deceased pet reading</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Support from a real pet psychic medium</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">A compassionate and tuned-in animal reading</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Can also assist in missing pet reading cases</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PetPhysicReading;
