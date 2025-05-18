
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Star, Clock, MessageCircle, Mic, MicOff } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Pet personalities for the simulation
const petPersonalities = [
  {
    name: "Playful Pup",
    responses: [
      "Woof! I'm so excited to talk to you! Can we play fetch soon?",
      "I love when we go on walks together! It's my favorite part of the day!",
      "Did you know I hide my favorite toys under the couch? That's my secret spot!",
      "I get so happy when I hear your car in the driveway! Best sound ever!",
      "I'm sorry about chewing your shoes that one time. They smelled like you and I missed you!"
    ]
  },
  {
    name: "Sophisticated Cat",
    responses: [
      "Meow... I suppose it's nice to speak with you. Is it dinner time yet?",
      "I knocked that glass off the table yesterday to test gravity. It's still working.",
      "I find the sunny spot by the window to be the most comfortable place to observe the birds.",
      "I allow you to pet me because you seem to enjoy it so much. You're welcome.",
      "The empty box you brought home is quite acceptable. I shall sit in it for precisely 43 minutes."
    ]
  },
  {
    name: "Wise Old Dog",
    responses: [
      "I've been by your side for many years, and each day has been a blessing.",
      "Remember when I was just a puppy? Time goes by so quickly, but my love for you remains the same.",
      "I may be slower these days, but my heart still races when I see your face.",
      "The greatest joy in my life has been being your companion through all these years.",
      "Even when I'm not by your side physically someday, I'll always be watching over you."
    ]
  },
  {
    name: "Curious Bunny",
    responses: [
      "Everything is so interesting! I love exploring all the corners of our home!",
      "Those treats you give me are my absolute favorite! Can I have one now?",
      "I like to thump my foot when I'm happy, and I'm very happy talking to you!",
      "Sometimes I binky and jump in the air because I just can't contain my joy!",
      "I feel so safe when you hold me and pet my ears. It's so comforting."
    ]
  }
];

type Message = {
  id: string;
  sender: "user" | "pet";
  text: string;
  timestamp: Date;
  is_audio?: boolean;
};

const PetVoiceChat = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petPersonality, setPetPersonality] = useState("");
  const [petImage, setPetImage] = useState<File | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedPersonality, setSelectedPersonality] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Auto scroll chat to bottom when new messages appear
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Select a random personality if custom one isn't provided
    if (!petPersonality) {
      const randomIndex = Math.floor(Math.random() * petPersonalities.length);
      setSelectedPersonality(randomIndex);
    }
    
    // Start the chat with a welcome message
    const initialMessage: Message = {
      id: Date.now().toString(),
      sender: "pet",
      text: `Hi ${petName ? petName + "'s human" : "there"}! I'm so happy to talk with you today! What would you like to chat about?`,
      timestamp: new Date()
    };
    
    setMessages([initialMessage]);
    setShowChat(true);
    
    toast({
      title: "Voice connection established",
      description: `You can now chat with ${petName || "your pet"}!`,
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
    
    // Simulate pet typing
    setIsTyping(true);
    
    // Simulate pet response (1.5-3 seconds delay)
    const responseTime = Math.floor(Math.random() * 1500) + 1500;
    setTimeout(() => {
      const personality = petPersonalities[selectedPersonality];
      const randomIndex = Math.floor(Math.random() * personality.responses.length);
      const responseText = personality.responses[randomIndex];
      
      const petMessage: Message = {
        id: `pet-${Date.now()}`,
        sender: "pet",
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, petMessage]);
      setIsTyping(false);
      
      // Simulate text-to-speech
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(responseText);
        
        // Adjust voice based on personality
        utterance.pitch = personality.name === "Sophisticated Cat" ? 1.2 : 
                          personality.name === "Wise Old Dog" ? 0.8 : 1;
        utterance.rate = personality.name === "Playful Pup" || personality.name === "Curious Bunny" ? 1.1 : 0.9;
        
        window.speechSynthesis.speak(utterance);
      }
    }, responseTime);
  };

  const toggleRecording = () => {
    if (!isRecording) {
      // Check if browser supports speech recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        setIsRecording(true);
        toast({
          title: "Listening...",
          description: "Speak to your pet!",
        });
        
        // Simulate a voice recording (in a real app, we'd use the Web Speech API)
        setTimeout(() => {
          setIsRecording(false);
          
          // Generate a random query to simulate voice input
          const randomQueries = [
            "How are you feeling today?",
            "What's your favorite toy?",
            "Do you like the food I give you?",
            "What do you do when I'm not home?",
            "Do you love me as much as I love you?"
          ];
          
          const randomIndex = Math.floor(Math.random() * randomQueries.length);
          setCurrentMessage(randomQueries[randomIndex]);
          
          toast({
            title: "Voice captured",
            description: "Your message has been recorded.",
          });
        }, 3000);
      } else {
        toast({
          title: "Voice not supported",
          description: "Your browser doesn't support voice recording. Please type your message instead.",
          variant: "destructive",
        });
      }
    } else {
      // Stop recording
      setIsRecording(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPetImage(e.target.files[0]);
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
            backgroundImage: "url('/lovable-uploads/9d05b32e-74dd-48e3-8e8b-c2700cd3789e.png')",
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
              PET <span className="block text-[#D946EF]">VOICE</span> <span className="block text-[#8B5CF6]">CHAT</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Have a conversation with your pet using our AI voice technology — hear their thoughts and share your love 🗣️💭
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">REAL-TIME</span>
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
                  <h2 className="text-2xl font-bold mb-4 text-[#D946EF]">✨ START A CONVERSATION WITH YOUR PET</h2>
                  <p className="text-gray-300 mb-6">
                    Our AI technology translates your pet's thoughts and feelings into words, allowing for a meaningful conversation. 
                    Fill out the form below to begin your chat session.
                  </p>
                </div>

                <Card className="border-2 border-[#8B5CF6] bg-black/30 shadow-lg shadow-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <MessageCircle className="inline-block h-12 w-12 text-[#D946EF] mb-3" />
                      <h3 className="text-2xl font-bold mb-2">Connect With Your Pet</h3>
                      <p className="text-gray-300">Tell us about your pet to customize the experience</p>
                    </div>
                    
                    <form onSubmit={handleStartChat} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="petName" className="text-white">✨ Pet's Name:</label>
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
                          <label htmlFor="petType" className="text-white">✨ Type of Pet:</label>
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="petAge" className="text-white">✨ Pet's Age:</label>
                          <Input 
                            id="petAge"
                            value={petAge}
                            onChange={(e) => setPetAge(e.target.value)}
                            placeholder="2 years, 6 months, etc."
                            className="bg-black/30 border-[#8B5CF6]/50 focus:border-[#D946EF] text-white placeholder:text-gray-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="petPersonality" className="text-white">✨ Pet's Personality:</label>
                          <select
                            id="petPersonality"
                            value={petPersonality}
                            onChange={(e) => {
                              setPetPersonality(e.target.value);
                              setSelectedPersonality(Number(e.target.value));
                            }}
                            className="w-full h-10 px-3 bg-black/30 border border-[#8B5CF6]/50 rounded-md text-white focus:outline-none focus:border-[#D946EF]"
                          >
                            <option value="">Select or leave blank for random</option>
                            {petPersonalities.map((personality, index) => (
                              <option key={index} value={index}>
                                {personality.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="petImage" className="text-white">✨ Upload a photo of your pet (optional):</label>
                        <Input 
                          id="petImage"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="bg-black/30 border-[#8B5CF6]/50 text-white"
                        />
                        {petImage && (
                          <p className="text-sm text-[#8B5CF6]">Photo uploaded: {petImage.name}</p>
                        )}
                      </div>

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#9B87F5] hover:to-[#E158F7] text-white font-bold py-3 text-lg"
                        >
                          Start Voice Chat
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
                          <span className="text-gray-400">Personality:</span>
                          <span className="ml-2 text-white">{petPersonalities[selectedPersonality].name}</span>
                        </div>
                      </div>
                      
                      {petImage && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2 text-gray-400">Pet Photo:</h4>
                          <div className="w-full aspect-square rounded-lg overflow-hidden">
                            <img 
                              src={URL.createObjectURL(petImage)} 
                              alt={petName} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <h4 className="text-sm font-medium mb-3 text-[#F97316]">Voice Chat Tips:</h4>
                        <ul className="space-y-2 text-xs text-gray-300">
                          <li>• Use the microphone button to speak to your pet</li>
                          <li>• Ask open-ended questions</li>
                          <li>• Your pet's personality affects their responses</li>
                          <li>• You can type questions if you prefer</li>
                          <li>• Enable your browser's permission for microphone access</li>
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
                          {petImage ? (
                            <AvatarImage src={URL.createObjectURL(petImage)} alt={petName} />
                          ) : (
                            <AvatarFallback className="bg-[#D946EF]">
                              {petName ? petName.charAt(0).toUpperCase() : "P"}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{petName || "Your Pet"}'s Voice Chat</h3>
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
                            {msg.is_audio && (
                              <span className="inline-block mb-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                                Voice message
                              </span>
                            )}
                            <p className="text-sm">{msg.text}</p>
                            <div className="mt-1 text-xs opacity-70 flex justify-end">
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
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
                          placeholder="Type a message to your pet..."
                          className="flex-grow mr-2 bg-[#2D2A49] border-[#8B5CF6]/30 text-white placeholder:text-gray-400"
                          disabled={isRecording}
                        />
                        <Button 
                          type="button" 
                          className={`mr-2 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-[#8B5CF6] hover:bg-[#7B4CF6]'}`}
                          onClick={toggleRecording}
                        >
                          {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-[#D946EF] hover:bg-[#C936DF] text-white"
                          disabled={isRecording || currentMessage.trim() === ""}
                        >
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </form>
                      <p className="text-xs text-gray-400 mt-2">
                        {isRecording ? "Listening... Speak now!" : "You can type or use voice to talk with your pet"}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}
            
            <div className="mt-10 p-6 bg-[#0F0D1A] rounded-lg border border-[#8B5CF6]/30">
              <h2 className="text-xl font-bold mb-4 text-[#F97316]">🌟 HOW PET VOICE CHAT WORKS:</h2>
              <p className="text-gray-300 mb-6">
                Our advanced AI technology uses your pet's characteristics and behavior patterns to create a personalized 
                conversation experience. The more you interact, the more the AI learns about your pet's unique personality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Personalized pet responses based on pet type and personality</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Voice recognition technology for natural conversation</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Text-to-speech conversion for hearing your pet's "voice"</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✔️</span>
                  <p className="text-gray-300">Works with dogs, cats, and other common pets</p>
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

export default PetVoiceChat;
