import { Card } from "@/components/ui/card";
import { Search, Send, Paperclip, Smile } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { useState } from "react";

/**
 * Design: Desktop Messages with Split View
 * Left: Conversations list, Right: Chat detail
 */

export default function MessagesDesktop() {
  const [, navigate] = useLocation();
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Sarah Collins",
      lastMessage: "Great! I can help with the cleaning on Saturday.",
      timestamp: "2 hours ago",
      unread: true,
      online: true,
      avatar: "S",
    },
    {
      id: 2,
      name: "Marc Dubois",
      lastMessage: "The plumbing issue has been fixed. Please check.",
      timestamp: "Yesterday",
      unread: false,
      online: false,
      avatar: "M",
    },
    {
      id: 3,
      name: "Emma Laurent",
      lastMessage: "I'm available for tutoring sessions next week.",
      timestamp: "3 days ago",
      unread: false,
      online: true,
      avatar: "E",
    },
    {
      id: 4,
      name: "Jean Martin",
      lastMessage: "Thanks for the 5-star review!",
      timestamp: "1 week ago",
      unread: false,
      online: false,
      avatar: "J",
    },
  ];

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
      text: "For a standard 3-bedroom apartment, I charge €80-100 depending on the condition.",
      timestamp: "10:22 AM",
      isOwn: false,
    },
  ];

  const selectedChat = conversations.find((c) => c.id === selectedConversation);

  return (
    <DesktopLayout activeTab="messages">
      <div className="p-8 h-screen flex flex-col">
        <h1 className="text-3xl font-bold text-foreground mb-8">Messages</h1>

        <div className="grid grid-cols-12 gap-6 flex-1 overflow-hidden">
          {/* Left Sidebar - Conversations List */}
          <div className="col-span-4 flex flex-col bg-white rounded-lg border border-border overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border border-transparent focus:border-primary focus:outline-none transition"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto divide-y divide-border">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full p-4 hover:bg-gray-50 transition text-left border-l-4 ${
                    selectedConversation === conversation.id
                      ? "border-l-primary bg-teal-50"
                      : "border-l-transparent"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold relative">
                      {conversation.avatar}
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3
                          className={`font-semibold text-foreground ${
                            conversation.unread ? "font-bold" : ""
                          }`}
                        >
                          {conversation.name}
                        </h3>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {conversation.timestamp}
                        </span>
                      </div>
                      <p
                        className={`text-sm truncate mt-1 ${
                          conversation.unread
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {conversation.lastMessage}
                      </p>
                    </div>
                    {conversation.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Chat Detail */}
          <div className="col-span-8 flex flex-col bg-white rounded-lg border border-border overflow-hidden">
            {/* Chat Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                  {selectedChat?.avatar}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">{selectedChat?.name}</h2>
                  <p className="text-sm text-green-600">
                    {selectedChat?.online ? "Online now" : "Offline"}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition">
                View Profile
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-lg ${
                      message.isOwn
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white text-foreground rounded-bl-none border border-border"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
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
            <div className="p-6 border-t border-border bg-white">
              <div className="flex gap-3 items-end">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition text-muted-foreground">
                  <Paperclip size={20} />
                </button>
                <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                  />
                  <button className="p-1 hover:bg-gray-200 rounded transition text-muted-foreground">
                    <Smile size={20} />
                  </button>
                </div>
                <button className="p-3 bg-primary text-white rounded-lg hover:bg-teal-700 transition">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
