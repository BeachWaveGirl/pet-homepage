
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  return (
    <div className="flex flex-col">
      <Card className="bg-white border-gray-200 shadow-md flex-grow">
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
        <CardContent className="flex flex-col h-full">
          <div className="flex-grow overflow-y-auto mb-4 p-2 min-h-[300px]">
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
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <p className="text-gray-500">Ask a question to start chatting with your pet</p>
              </div>
            )}
          </div>
        </CardContent>
        
        <div className="px-4 pb-4 pt-2 border-t">
          <div className="flex items-center">
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
              className="bg-gray-800"
            >
              <SendHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Our connection service offers comfort by helping you feel closer to your pet who has crossed over, providing peace and closure during your grieving process.
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
