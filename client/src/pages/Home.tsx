import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Search, MessageSquare, Star, Plus } from "lucide-react";
import { useLocation } from "wouter";
import MobileLayout from "@/components/MobileLayout";

/**
 * Design: Modern & Accessible
 * Hero section with search bar, featured providers, and action buttons
 * Optimized for iPhone display with tab navigation
 */

export default function Home() {
  const [, navigate] = useLocation();

  const featuredProviders = [
    {
      id: 1,
      name: "Sarah Collins",
      rating: 4.9,
      reviews: 120,
      services: ["House Cleaning", "Gardening"],
      available: true,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498329649/DTLPYiQM8raBphNC3zQuYs/helpngo-hero-profile-NbH9DwnDc2P9Pc79L5oiBu.webp",
    },
    {
      id: 2,
      name: "Marc Dubois",
      rating: 4.8,
      reviews: 95,
      services: ["Plumbing", "Repairs"],
      available: true,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498329649/DTLPYiQM8raBphNC3zQuYs/helpngo-hero-profile-NbH9DwnDc2P9Pc79L5oiBu.webp",
    },
    {
      id: 3,
      name: "Emma Laurent",
      rating: 5.0,
      reviews: 87,
      services: ["Tutoring", "Coaching"],
      available: false,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498329649/DTLPYiQM8raBphNC3zQuYs/helpngo-hero-profile-NbH9DwnDc2P9Pc79L5oiBu.webp",
    },
  ];

  const recentRequests = [
    {
      id: 1,
      title: "Need help with garden landscaping",
      category: "Gardening",
      location: "Paris, 75001",
      urgency: "Normal",
      responses: 3,
    },
    {
      id: 2,
      title: "Looking for English tutor",
      category: "Tutoring",
      location: "Paris, 75005",
      urgency: "Normal",
      responses: 5,
    },
  ];

  return (
    <MobileLayout activeTab="home">
      <div className="pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-teal-50 to-white pt-6 pb-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-foreground">Help'N'Go</h1>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <MessageSquare size={20} className="text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                  3
                </div>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <button
            onClick={() => navigate("/search")}
            className="w-full bg-primary text-white rounded-lg py-3 px-4 flex items-center gap-3 shadow-sm hover:shadow-md transition"
          >
            <Search size={20} />
            <span className="text-left">Search for services...</span>
          </button>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => navigate("/create-request")}
              className="bg-white border border-border rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm"
            >
              <Plus size={18} className="text-primary" />
              <span className="text-sm font-medium text-foreground">Create Request</span>
            </button>
            <button
              onClick={() => navigate("/messages")}
              className="bg-white border border-border rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm"
            >
              <MessageSquare size={18} className="text-primary" />
              <span className="text-sm font-medium text-foreground">Messages</span>
            </button>
          </div>
        </div>

        {/* Featured Providers Section */}
        <div className="px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-foreground">Featured Helpers</h2>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>

          <div className="space-y-3">
            {featuredProviders.map((provider) => (
              <Card
                key={provider.id}
                className="p-4 hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/provider/${provider.id}`)}
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-foreground">{provider.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < Math.floor(provider.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {provider.rating} ({provider.reviews})
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          provider.available ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {provider.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs bg-teal-100 text-primary px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Requests Section */}
        <div className="px-4 py-6 border-t border-border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-foreground">Recent Requests</h2>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>

          <div className="space-y-3">
            {recentRequests.map((request) => (
              <Card key={request.id} className="p-4 hover:shadow-md transition cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">{request.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin size={14} />
                  <span>{request.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-100 text-foreground px-2 py-1 rounded">
                      {request.category}
                    </span>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                      {request.urgency}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-primary">{request.responses} responses</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
