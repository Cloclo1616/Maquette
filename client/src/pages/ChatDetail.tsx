import { Button } from "@/components/ui/button";
import { Send, Paperclip, Smile } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { useState } from "react";

/**
 * Design: Modern & Accessible - Desktop Only
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
    <DesktopLayout activeTab="messages">
      <div className="p-8 h-screen flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sarah Collins</h1>
            <p className="text-muted-foreground mt-1">Online now</p>
          </div>
          <Button
            onClick={() => navigate("/messages")}
            className="bg-white border border-border text-foreground hover:bg-gray-50 transition"
          >
            ← Back to Messages
          </Button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 rounded-lg mb-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-lg px-6 py-3 rounded-lg ${
                  message.isOwn
                    ? "bg-primary text-white rounded-br-none"
                    : "bg-white text-foreground rounded-bl-none border border-border"
                }`}
              >
                <p className="text-base">{message.text}</p>
                <p
                  className={`text-xs mt-2 ${
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
        <div className="flex gap-3 items-end">
          <button className="p-3 hover:bg-gray-100 rounded-lg transition text-muted-foreground">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
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
            <button className="p-2 hover:bg-gray-200 rounded transition text-muted-foreground">
              <Smile size={20} />
            </button>
          </div>
          <button
            onClick={handleSendMessage}
            className="p-3 bg-primary text-white rounded-lg hover:bg-teal-700 transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </DesktopLayout>
  );
}
