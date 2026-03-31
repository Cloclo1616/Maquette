import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Search, Filter, Star, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import MobileLayout from "@/components/MobileLayout";
import SearchDesktop from "./SearchDesktop";
import { useState, useEffect } from "react";

/**
 * Design: Modern & Accessible
 * Search results with filtering and provider listings
 * Responsive for both mobile and desktop
 */

export default function SearchPage() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDesktop) {
    return <SearchDesktop />;
  }

  const providers = [
    {
      id: 1,
      name: "Sarah Collins",
      rating: 4.9,
      reviews: 120,
      services: ["House Cleaning", "Gardening"],
      distance: "0.5 km away",
      available: true,
    },
    {
      id: 2,
      name: "Marc Dubois",
      rating: 4.8,
      reviews: 95,
      services: ["Plumbing", "Repairs"],
      distance: "1.2 km away",
      available: true,
    },
    {
      id: 3,
      name: "Emma Laurent",
      rating: 5.0,
      reviews: 87,
      services: ["Tutoring", "Coaching"],
      distance: "2.1 km away",
      available: false,
    },
    {
      id: 4,
      name: "Jean Martin",
      rating: 4.7,
      reviews: 156,
      services: ["Handyman", "Repairs"],
      distance: "0.8 km away",
      available: true,
    },
  ];

  return (
    <MobileLayout activeTab="search">
      <div className="pb-20">
        {/* Search Header */}
        <div className="bg-white border-b border-border sticky top-0 z-10">
          <div className="p-4 flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border border-transparent focus:border-primary focus:outline-none transition"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Filter size={20} className="text-foreground" />
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="px-4 pb-4 border-t border-border">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Distance
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground">
                    <option>Any distance</option>
                    <option>0-1 km</option>
                    <option>1-5 km</option>
                    <option>5-10 km</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Rating
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground">
                    <option>Any rating</option>
                    <option>4.5+ stars</option>
                    <option>4.0+ stars</option>
                    <option>3.5+ stars</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Availability
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-sm text-foreground">Available now</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="px-4 py-6">
          <p className="text-sm text-muted-foreground mb-4">
            Found {providers.length} helpers matching your search
          </p>

          <div className="space-y-3">
            {providers.map((provider) => (
              <Card
                key={provider.id}
                className="p-4 hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/provider/${provider.id}`)}
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                    {provider.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-foreground">{provider.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
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
                        className={`w-2 h-2 rounded-full mt-1 ${
                          provider.available ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                      <MapPin size={12} />
                      <span>{provider.distance}</span>
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {provider.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="text-xs bg-teal-100 text-primary px-2 py-0.5 rounded-full"
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
      </div>
    </MobileLayout>
  );
}
