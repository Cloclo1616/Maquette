import { Card } from "@/components/ui/card";
import { MapPin, Star, Filter } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { useState } from "react";

/**
 * Design: Desktop Search with Advanced Filters
 * Left sidebar with filters, main area with results
 */

export default function SearchDesktop() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const providers = [
    {
      id: 1,
      name: "Sarah Collins",
      rating: 4.9,
      reviews: 120,
      services: ["House Cleaning", "Gardening", "Pet Sitting"],
      distance: "0.5 km away",
      available: true,
      hourlyRate: "€25-35/hour",
      completedJobs: 342,
    },
    {
      id: 2,
      name: "Marc Dubois",
      rating: 4.8,
      reviews: 95,
      services: ["Plumbing", "Repairs", "Maintenance"],
      distance: "1.2 km away",
      available: true,
      hourlyRate: "€30-40/hour",
      completedJobs: 287,
    },
    {
      id: 3,
      name: "Emma Laurent",
      rating: 5.0,
      reviews: 87,
      services: ["Tutoring", "Coaching", "Language"],
      distance: "2.1 km away",
      available: false,
      hourlyRate: "€20-30/hour",
      completedJobs: 156,
    },
    {
      id: 4,
      name: "Jean Martin",
      rating: 4.7,
      reviews: 156,
      services: ["Handyman", "Repairs", "Installation"],
      distance: "0.8 km away",
      available: true,
      hourlyRate: "€28-38/hour",
      completedJobs: 412,
    },
  ];

  const categories = [
    "House Cleaning",
    "Gardening",
    "Repairs",
    "Tutoring",
    "Pet Sitting",
    "Errands",
    "Moving Help",
  ];

  return (
    <DesktopLayout activeTab="search">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Search Helpers</h1>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="col-span-3">
            <Card className="p-6 sticky top-8">
              <h2 className="font-bold text-foreground mb-6 flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h2>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground focus:border-primary focus:outline-none transition"
                  >
                    <option value="">All categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Distance */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Distance
                  </label>
                  <select
                    value={selectedDistance}
                    onChange={(e) => setSelectedDistance(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground focus:border-primary focus:outline-none transition"
                  >
                    <option value="">Any distance</option>
                    <option value="0-1">0-1 km</option>
                    <option value="1-5">1-5 km</option>
                    <option value="5-10">5-10 km</option>
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Minimum Rating
                  </label>
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground focus:border-primary focus:outline-none transition"
                  >
                    <option value="">Any rating</option>
                    <option value="4.5">4.5+ stars</option>
                    <option value="4.0">4.0+ stars</option>
                    <option value="3.5">3.5+ stars</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={availableOnly}
                      onChange={(e) => setAvailableOnly(e.target.checked)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm font-medium text-foreground">Available now</span>
                  </label>
                </div>

                {/* Reset */}
                <button className="w-full px-4 py-2 border border-border rounded-lg text-foreground hover:bg-gray-50 transition font-medium">
                  Reset Filters
                </button>
              </div>
            </Card>
          </div>

          {/* Main Content - Results */}
          <div className="col-span-9">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Found <span className="font-bold text-foreground">{providers.length}</span> helpers
                matching your search
              </p>
            </div>

            <div className="space-y-4">
              {providers.map((provider) => (
                <Card
                  key={provider.id}
                  className="p-6 hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/provider/${provider.id}`)}
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl">
                      {provider.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{provider.name}</h3>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
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
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            provider.available
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {provider.available ? "Available" : "Unavailable"}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 my-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Distance</p>
                          <p className="font-semibold text-foreground flex items-center gap-1 mt-1">
                            <MapPin size={14} />
                            {provider.distance}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Hourly Rate</p>
                          <p className="font-semibold text-foreground mt-1">{provider.hourlyRate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Completed Jobs</p>
                          <p className="font-semibold text-foreground mt-1">{provider.completedJobs}</p>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap mb-4">
                        {provider.services.map((service) => (
                          <span
                            key={service}
                            className="text-sm bg-teal-100 text-primary px-3 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-teal-50 transition">
                          Message
                        </button>
                        <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition">
                          View Profile
                        </button>
                      </div>
                    </div>
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
