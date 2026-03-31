import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Search, MessageSquare, Star, Plus, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";

/**
 * Design: Desktop Home with Multi-Column Layout
 * Left: Search and filters, Center: Featured providers, Right: Recent requests
 */

export default function HomeDesktop() {
  const [, navigate] = useLocation();

  const featuredProviders = [
    {
      id: 1,
      name: "Sarah Collins",
      rating: 4.9,
      reviews: 120,
      services: ["House Cleaning", "Gardening"],
      available: true,
      distance: "0.5 km",
    },
    {
      id: 2,
      name: "Marc Dubois",
      rating: 4.8,
      reviews: 95,
      services: ["Plumbing", "Repairs"],
      available: true,
      distance: "1.2 km",
    },
    {
      id: 3,
      name: "Emma Laurent",
      rating: 5.0,
      reviews: 87,
      services: ["Tutoring", "Coaching"],
      available: false,
      distance: "2.1 km",
    },
    {
      id: 4,
      name: "Jean Martin",
      rating: 4.7,
      reviews: 156,
      services: ["Handyman", "Repairs"],
      available: true,
      distance: "0.8 km",
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
      author: "Marie D.",
    },
    {
      id: 2,
      title: "Looking for English tutor",
      category: "Tutoring",
      location: "Paris, 75005",
      urgency: "Normal",
      responses: 5,
      author: "Pierre L.",
    },
    {
      id: 3,
      title: "Need plumbing repair",
      category: "Repairs",
      location: "Paris, 75003",
      urgency: "High",
      responses: 8,
      author: "Sophie M.",
    },
  ];

  return (
    <DesktopLayout activeTab="home">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, Alex</h1>
          <p className="text-muted-foreground">Find the help you need or offer your services</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Search & Quick Actions */}
          <div className="col-span-3 space-y-6">
            {/* Search Card */}
            <Card className="p-6">
              <h2 className="font-bold text-foreground mb-4">Find Services</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
                <select className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:border-primary focus:outline-none transition">
                  <option>All categories</option>
                  <option>House Cleaning</option>
                  <option>Gardening</option>
                  <option>Repairs</option>
                  <option>Tutoring</option>
                </select>
                <select className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:border-primary focus:outline-none transition">
                  <option>Any distance</option>
                  <option>0-1 km</option>
                  <option>1-5 km</option>
                  <option>5-10 km</option>
                </select>
                <Button
                  onClick={() => navigate("/search")}
                  className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition"
                >
                  <Search size={18} className="mr-2" />
                  Search
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="font-bold text-foreground mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button
                  onClick={() => navigate("/create-request")}
                  className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition border border-border"
                >
                  <Plus size={20} className="text-primary" />
                  <span className="font-medium text-foreground">Create Request</span>
                </button>
                <button
                  onClick={() => navigate("/messages")}
                  className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition border border-border"
                >
                  <MessageSquare size={20} className="text-primary" />
                  <span className="font-medium text-foreground">Messages</span>
                </button>
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-6 bg-gradient-to-br from-teal-50 to-white border-teal-200">
              <h2 className="font-bold text-foreground mb-4">Your Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="font-bold text-lg text-primary">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active</span>
                  <span className="font-bold text-lg text-primary">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <span className="font-bold text-lg text-primary">4.8 ⭐</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Center - Featured Providers */}
          <div className="col-span-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Featured Helpers</h2>
              <button className="text-primary font-medium hover:underline flex items-center gap-1">
                View All <ChevronRight size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {featuredProviders.map((provider) => (
                <Card
                  key={provider.id}
                  className="p-5 hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/provider/${provider.id}`)}
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                      {provider.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{provider.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
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
                            <span className="text-sm text-muted-foreground">
                              {provider.rating} ({provider.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div
                          className={`w-3 h-3 rounded-full ${
                            provider.available ? "bg-green-500" : "bg-gray-300"
                          }`}
                        />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                        <MapPin size={14} />
                        <span>{provider.distance} away</span>
                      </div>
                      <div className="flex gap-2 mt-3 flex-wrap">
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

          {/* Right Sidebar - Recent Requests */}
          <div className="col-span-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Recent Requests</h2>
              <button className="text-primary font-medium hover:underline flex items-center gap-1">
                View All <ChevronRight size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {recentRequests.map((request) => (
                <Card key={request.id} className="p-5 hover:shadow-lg transition cursor-pointer">
                  <h3 className="font-bold text-foreground mb-2">{request.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {request.author}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{request.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="text-xs bg-gray-100 text-foreground px-2 py-1 rounded">
                        {request.category}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          request.urgency === "High"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {request.urgency}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-primary">{request.responses} responses</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
