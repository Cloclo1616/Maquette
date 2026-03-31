import { Card } from "@/components/ui/card";
import { Search, MoreVertical } from "lucide-react";
import { useLocation } from "wouter";
import MobileLayout from "@/components/MobileLayout";
import MessagesDesktop from "./MessagesDesktop";
import { useState, useEffect } from "react";

/**
 * Design: Modern & Accessible
 * Messages list with conversation preview
 * Responsive for both mobile and desktop
 */

export default function Messages() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDesktop) {
    return <MessagesDesktop />;
  }

  const conversations = [
    {
      id: 1,
      name: "Sarah Collins",
      lastMessage: "Great! I can help with the cleaning on Saturday.",
      timestamp: "2 hours ago",
      unread: true,
      online: true,
    },
    {
      id: 2,
      name: "Marc Dubois",
      lastMessage: "The plumbing issue has been fixed. Please check.",
      timestamp: "Yesterday",
      unread: false,
      online: false,
    },
    {
      id: 3,
      name: "Emma Laurent",
      lastMessage: "I'm available for tutoring sessions next week.",
      timestamp: "3 days ago",
      unread: false,
      online: true,
    },
    {
      id: 4,
      name: "Jean Martin",
      lastMessage: "Thanks for the 5-star review!",
      timestamp: "1 week ago",
      unread: false,
      online: false,
    },
  ];

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout activeTab="messages">
      <div className="pb-20">
        {/* Header */}
        <div className="bg-white border-b border-border sticky top-0 z-10 p-4">
          <h1 className="text-lg font-bold text-foreground mb-4">Messages</h1>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border border-transparent focus:border-primary focus:outline-none transition"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="divide-y divide-border">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => navigate(`/messages/${conversation.id}`)}
                className="w-full p-4 hover:bg-gray-50 transition text-left"
              >
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold relative">
                    {conversation.name.charAt(0)}
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
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No conversations found</p>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
}
