
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
    <Card className="bg-white border-gray-200 shadow-md h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center">
          {petPhoto && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
              <img
                src={petPhoto}
                alt={petName || "Your pet"}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <CardTitle className="font-playfair text-2xl">
            {petName ? `Chat with ${petName}` : "Chat with Your Pet"}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-y-auto px-4 pt-2 mb-0 pb-0">
        {chatHistory.length > 0 ? (
          <div className="space-y-4">
            {chatHistory.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  {message.type === 'pet' && petPhoto && (
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img 
                          src={petPhoto} 
                          alt={petName} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <span className="font-medium">{petName}</span>
                    </div>
                  )}
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-center">
            <p className="text-gray-500">Ask a question to start chatting with your pet</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 border-t mt-auto">
        <div className="w-full flex items-center">
          <Input
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-grow mr-2"
            disabled={!petName.trim()}
          />
          <Button 
            onClick={onSendMessage}
            disabled={!currentQuestion.trim() || !petName.trim()}
            className="bg-[hsl(35,30%,85%)] text-[hsl(25,30%,25%)] hover:bg-[hsl(35,30%,80%)]"
          >
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-2 text-center w-full">
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Our connection service offers comfort by helping you feel closer to your pet.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatBox;
