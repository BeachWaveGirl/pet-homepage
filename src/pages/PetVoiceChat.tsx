
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mic, MicOff, Send, MessageCircle, VolumeX, Volume2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  id: string;
  sender: "user" | "pet";
  text: string;
  timestamp: Date;
};

const petResponses = [
  "Woof! I'm so happy to see you!",
  "Meow! Can I have some treats please?",
  "I've missed you so much!",
  "I love it when you scratch behind my ears.",
  "Remember when we used to play in the park?",
  "I'm always watching over you, even if you can't see me.",
  "Thank you for taking such good care of me.",
  "I'll always be with you in spirit.",
  "I never forget the love you gave me.",
  "The rainbow bridge is beautiful, but I miss you.",
  "I'm at peace now, don't worry about me."
];

const PetVoiceChat = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Initialize with welcome message
    const initialMessage: Message = {
      id: Date.now().toString(),
      sender: "pet",
      text: `Hi there! It's me, ${petName}. I'm so happy we can talk! What would you like to tell me?`,
      timestamp: new Date()
    };
    
    setMessages([initialMessage]);
    setIsSetupComplete(true);
    
    toast({
      title: "Connection established",
      description: `You are now connected with ${petName}. You can start chatting!`,
    });
  };

  const sendMessage = (text: string, sender: "user" | "pet") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    if (sender === "user") {
      // Simulate pet response after a delay
      setTimeout(() => {
        const petMessage: Message = {
          id: Date.now().toString(),
          sender: "pet",
          text: petResponses[Math.floor(Math.random() * petResponses.length)],
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, petMessage]);
        
        // Speak the pet's response if not muted
        if (!isMuted) {
          speakText(petMessage.text);
        }
      }, 1000 + Math.random() * 1000);
    }
  };

  const handleSendTextMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage, "user");
      setInputMessage("");
    }
  };

  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
      return;
    }
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new AudioContext();
      
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        
        // In a real app, you would send this to a speech-to-text API
        // For now we'll simulate speech recognition with a placeholder
        
        const fakeSpeechResult = "I miss you so much and love you.";
        sendMessage(fakeSpeechResult, "user");
        
        // Reset audio chunks
        audioChunksRef.current = [];
      };
      
      mediaRecorderRef.current.start();
      setIsRecording(true);
      
      toast({
        title: "Recording started",
        description: "Speak to your pet. Click the mic button again to stop recording.",
      });
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast({
        title: "Microphone access error",
        description: "Could not access your microphone. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const speakText = (text: string) => {
    setIsPlaying(true);
    
    // Use browser's speech synthesis
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Choose a voice that might sound like a pet
    utterance.pitch = 1.5; // Higher pitch for pets
    utterance.rate = 1.1; // Slightly faster
    
    // Set different voice based on pet type
    if (petType.toLowerCase().includes("cat")) {
      utterance.pitch = 1.7; // Higher for cats
    } else if (petType.toLowerCase().includes("dog")) {
      utterance.pitch = 1.3; // Lower for dogs
    }
    
    utterance.onend = () => {
      setIsPlaying(false);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      window.speechSynthesis.cancel(); // Stop any current speech
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C] text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/70 to-[#1A1F2C] pointer-events-none"></div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4">
              <span className="text-[#8B5CF6] font-bold mr-1">NEW FEATURE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              PET <span className="block text-[#D946EF]">VOICE</span> <span className="block text-[#8B5CF6]">CHAT</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Speak directly with your beloved pet using our voice technology. Hear their thoughts, feelings, and messages to you 💫
            </p>
          </div>
        </section>
        
        <section className="py-12 px-4 bg-[#1A1F2C]">
          <div className="container mx-auto max-w-4xl">
            {!isSetupComplete ? (
              <Card className="border-2 border-[#8B5CF6] bg-black/30 shadow-lg shadow-purple-500/20">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <MessageCircle className="inline-block h-12 w-12 text-[#D946EF] mb-3" />
                    <h3 className="text-2xl font-bold mb-2 text-white">Connect With Your Pet</h3>
                    <p className="text-gray-300">Fill out this form to begin your voice chat session</p>
                  </div>
                  
                  <form onSubmit={handleStartChat} className="space-y-6">
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
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <h4 className="text-sm font-medium mb-3 text-[#F97316]">Voice Chat Tips:</h4>
                        <ul className="space-y-2 text-xs text-gray-300">
                          <li>• Speak clearly and naturally</li>
                          <li>• Ask open-ended questions</li>
                          <li>• Share memories or feelings</li>
                          <li>• Be patient during the translation</li>
                          <li>• You can use text chat or voice</li>
                        </ul>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <Button
                          onClick={toggleMute}
                          variant="outline" 
                          size="sm"
                          className="w-full border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/20"
                        >
                          {isMuted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
                          {isMuted ? "Unmute Pet Voice" : "Mute Pet Voice"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2 order-1 md:order-2">
                  <Card className="bg-black/30 border-[#8B5CF6]/30 overflow-hidden flex flex-col h-[600px]">
                    <div className="bg-gradient-to-r from-[#362C5A] to-[#251D3F] p-4 border-b border-[#8B5CF6]/30">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/lovable-uploads/ae4cb9db-7c24-479a-bd6b-bfdab9c1c6e2.png" alt="Pet" />
                          <AvatarFallback className="bg-[#D946EF]">PET</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{petName}</h3>
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
                      
                      <div ref={chatEndRef} />
                    </div>
                    
                    <div className="p-4 border-t border-[#8B5CF6]/30 bg-[#1E1935]">
                      <form onSubmit={handleSendTextMessage} className="flex items-center">
                        <Input
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Type a message to your pet..."
                          className="flex-grow mr-2 bg-[#2D2A49] border-[#8B5CF6]/30 text-white placeholder:text-gray-400"
                        />
                        <div className="flex space-x-2">
                          <Button 
                            type="button" 
                            variant="outline"
                            className={`border-[#D946EF] ${isRecording ? 'bg-[#D946EF] text-white' : 'text-[#D946EF]'}`}
                            onClick={toggleRecording}
                          >
                            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                          </Button>
                          <Button 
                            type="submit" 
                            className="bg-[#D946EF] hover:bg-[#C936DF] text-white"
                            disabled={!inputMessage.trim()}
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </form>
                      {isPlaying && (
                        <div className="mt-2 text-xs text-[#F97316] flex items-center">
                          <span className="h-2 w-2 rounded-full bg-[#F97316] mr-2 animate-pulse"></span>
                          {petName} is speaking...
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            )}
            
            <div className="mt-10 p-6 bg-[#0F0D1A] rounded-lg border border-[#8B5CF6]/30">
              <h2 className="text-xl font-bold mb-4 text-[#F97316]">🌟 HOW VOICE CHAT WORKS:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                <div className="p-4 bg-black/20 rounded-lg">
                  <h3 className="font-medium mb-2">Text-to-Speech Technology</h3>
                  <p className="text-sm text-gray-300">Our advanced voice technology allows you to hear your pet speak to you with a voice tailored to their species and personality.</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <h3 className="font-medium mb-2">Speech Recognition</h3>
                  <p className="text-sm text-gray-300">Speak directly to your pet through your device's microphone. Our system translates your speech into messages your pet can understand.</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <h3 className="font-medium mb-2">AI-Powered Responses</h3>
                  <p className="text-sm text-gray-300">Pet responses are generated based on typical pet behaviors, personalities, and the information you provide about your pet.</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <h3 className="font-medium mb-2">Emotional Connection</h3>
                  <p className="text-sm text-gray-300">Whether your pet is with you or has crossed the rainbow bridge, this technology helps maintain and strengthen your emotional bond.</p>
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
