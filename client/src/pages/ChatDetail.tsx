import { Button } from "@/components/ui/button";
import { ChevronLeft, Send, Paperclip, Smile } from "lucide-react";
import { useLocation } from "wouter";
import MobileLayout from "@/components/MobileLayout";
import { useState } from "react";

/**
 * Design: Modern & Accessible
 * Chat conversation interface
 */

export default function ChatDetail() {
  const [, navigate] = useLocation();
  const [messageText, setMessageText] = useState("");

  const messages = [
    {
      id: 1,
      sender: "Sarah Collins",
      text: "Hi Alex! I saw your request for house cleaning. I'd be happy to help!",
      timestamp: "10:15 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      text: "That's great! When would you be available?",
      timestamp: "10:17 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Sarah Collins",
      text: "I'm available this Saturday afternoon. Does 2 PM work for you?",
      timestamp: "10:18 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      text: "Perfect! That works great. How much do you charge?",
      timestamp: "10:20 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Sarah Collins",
      text: "For a standard 3-bedroom apartment, I charge €80-100 depending on the condition. I can give you an exact quote after a quick walkthrough.",
      timestamp: "10:22 AM",
      isOwn: false,
    },
    {
      id: 6,
      sender: "You",
      text: "Sounds good! Let's confirm for Saturday at 2 PM then.",
      timestamp: "10:23 AM",
      isOwn: true,
    },
    {
      id: 7,
      sender: "Sarah Collins",
      text: "Great! I'll see you Saturday. Looking forward to it! 😊",
      timestamp: "10:24 AM",
      isOwn: false,
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText("");
    }
  };

  return (
    <MobileLayout activeTab="messages">
      <div className="pb-20 flex flex-col h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border sticky top-0 z-10 p-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/messages")}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground">Sarah Collins</h1>
            <p className="text-xs text-green-600">Online now</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.isOwn
                    ? "bg-primary text-white rounded-br-none"
                    : "bg-gray-100 text-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.isOwn ? "text-teal-100" : "text-muted-foreground"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-border p-4 sticky bottom-0">
          <div className="flex gap-2 items-end">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition text-muted-foreground">
              <Paperclip size={20} />
            </button>
            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button className="p-1 hover:bg-gray-200 rounded transition text-muted-foreground">
                <Smile size={18} />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="p-2 bg-primary text-white rounded-lg hover:bg-teal-700 transition"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
