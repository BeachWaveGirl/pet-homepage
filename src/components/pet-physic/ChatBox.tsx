
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

interface Message {
  type: 'user' | 'pet';
  content: string;
}

interface ChatBoxProps {
  petName: string;
  petPhoto: string;
  currentQuestion: string;
  setCurrentQuestion: (question: string) => void;
  chatHistory: Message[];
  onSendMessage: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

const ChatBox = ({
  petName,
  petPhoto,
  currentQuestion,
  setCurrentQuestion,
  chatHistory,
  onSendMessage,
  handleKeyDown,
}: ChatBoxProps) => {
  const chatEndRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <Card className="bg-white/80 border-[hsl(35,30%,80%)] shadow-md h-full flex flex-col">
      <CardHeader className="border-b border-[hsl(35,30%,85%)]">
        <div className="flex items-center">
          {petPhoto && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[hsl(35,30%,80%)]">
              <img
                src={petPhoto}
                alt={petName || "Your pet"}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <CardTitle className="font-playfair text-2xl text-[hsl(25,30%,25%)]">
            {petName ? `Chat with ${petName}` : "Chat with Your Pet"}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-y-auto px-4 pt-4 mb-0 pb-0 bg-[hsl(40,30%,97%)]">
        {chatHistory.length > 0 ? (
          <div className="space-y-4">
            {chatHistory.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-[hsl(35,30%,92%)] text-[hsl(25,30%,25%)] border border-[hsl(35,30%,85%)]' 
                      : 'bg-gradient-to-br from-[hsl(350,60%,92%)] via-[hsl(40,70%,92%)] to-[hsl(180,50%,90%)] text-[hsl(25,30%,25%)] border border-[hsl(40,40%,85%)] shadow-sm'
                  }`}
                >
                  {message.type === 'pet' && petPhoto && (
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border border-[hsl(35,30%,80%)]">
                        <img 
                          src={petPhoto} 
                          alt={petName} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <span className="font-medium text-[hsl(25,30%,30%)]">{petName}</span>
                    </div>
                  )}
                  <p className="leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-center">
            <div>
              <p className="text-[hsl(25,30%,50%)] mb-2">Begin your conversation with {petName || "your pet"}</p>
              <p className="text-xs text-[hsl(25,30%,60%)]">Type a message below to start</p>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 border-t border-[hsl(35,30%,85%)] mt-auto flex-col">
        <div className="w-full flex items-center">
          <Input
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-grow mr-2 border-[hsl(35,30%,75%)] focus:border-[hsl(35,30%,60%)]"
            disabled={!petName.trim()}
          />
          <Button 
            onClick={onSendMessage}
            disabled={!currentQuestion.trim() || !petName.trim()}
            className="bg-[hsl(35,30%,85%)] text-[hsl(25,30%,25%)] hover:bg-[hsl(35,30%,80%)] border border-[hsl(35,30%,70%)]"
          >
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-xs text-[hsl(25,30%,55%)] italic mt-3 text-center max-w-md">
          For comfort and reflection only – an entertainment experience, not professional support or therapy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default ChatBox;
