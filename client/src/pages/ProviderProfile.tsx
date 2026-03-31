import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Star, MapPin, Calendar, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { toast } from "sonner";

/**
 * Design: Modern & Accessible - Desktop Only
 * Detailed provider profile with booking options
 */

export default function ProviderProfile() {
  const [, navigate] = useLocation();

  const provider = {
    id: 1,
    name: "Sarah Collins",
    rating: 4.9,
    reviews: 120,
    services: ["House Cleaning", "Gardening", "Pet Sitting"],
    distance: "0.5 km away",
    available: true,
    responseTime: "Usually responds in 1 hour",
    bio: "Professional cleaner with 5+ years of experience. I pride myself on attention to detail and customer satisfaction. I use eco-friendly products and am fully insured.",
    hourlyRate: "€25-35/hour",
    joinDate: "Joined March 2020",
    completedJobs: 342,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498329649/DTLPYiQM8raBphNC3zQuYs/helpngo-hero-profile-NbH9DwnDc2P9Pc79L5oiBu.webp",
  };

  const reviews = [
    {
      id: 1,
      author: "Marie D.",
      rating: 5,
      text: "Excellent work! Very professional and thorough. Highly recommended!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      author: "Pierre L.",
      rating: 5,
      text: "Great service, arrived on time, and did a fantastic job.",
      date: "1 month ago",
    },
    {
      id: 3,
      author: "Sophie M.",
      rating: 4,
      text: "Good work overall. Very friendly and communicative.",
      date: "2 months ago",
    },
    {
      id: 4,
      author: "Jean T.",
      rating: 5,
      text: "Perfect! Will definitely book again for my next cleaning.",
      date: "3 months ago",
    },
  ];

  const handleMessage = () => {
    toast.success("Conversation started!");
    setTimeout(() => navigate("/messages"), 1500);
  };

  const handleBook = () => {
    toast.success("Booking request sent!");
  };

  return (
    <DesktopLayout activeTab="search">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => navigate("/search")}
            className="mb-4 bg-white border border-border text-foreground hover:bg-gray-50 transition"
          >
            ← Back to Search
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left - Provider Info */}
          <div className="col-span-2">
            {/* Hero Section */}
            <Card className="p-8 mb-8">
              <div className="flex gap-6 items-start mb-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-3">{provider.name}</h1>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i < Math.floor(provider.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-foreground">
                      {provider.rating} ({provider.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} />
                      <span>{provider.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={18} />
                      <span>{provider.joinDate}</span>
                    </div>
                  </div>
                  {provider.available && (
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      Available
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">{provider.completedJobs}</p>
                  <p className="text-sm text-muted-foreground mt-1">Jobs Completed</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">{provider.hourlyRate}</p>
                  <p className="text-sm text-muted-foreground mt-1">Hourly Rate</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">1h</p>
                  <p className="text-sm text-muted-foreground mt-1">Response Time</p>
                </div>
              </div>
            </Card>

            {/* About Section */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
              <p className="text-foreground leading-relaxed mb-6">{provider.bio}</p>

              <h3 className="font-bold text-foreground mb-3">Services</h3>
              <div className="flex gap-2 flex-wrap mb-6">
                {provider.services.map((service) => (
                  <span
                    key={service}
                    className="bg-teal-100 text-primary px-4 py-2 rounded-full font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </Card>

            {/* Reviews Section */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-foreground">{review.author}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar - Actions */}
          <div>
            <Card className="p-6 sticky top-8">
              <h3 className="font-bold text-foreground mb-4 text-lg">Ready to book?</h3>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-semibold text-foreground mt-1">{provider.responseTime}</p>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <p className="text-sm text-muted-foreground">Rate</p>
                  <p className="font-semibold text-foreground mt-1">{provider.hourlyRate}</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleMessage}
                  className="w-full bg-white border-2 border-primary text-primary py-3 rounded-lg font-medium hover:bg-teal-50 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  Message
                </Button>
                <Button
                  onClick={handleBook}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  Book Now
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-xs text-muted-foreground mb-2">Verified & Trusted</p>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm font-bold">
                    ✓
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-sm font-bold">
                    ★
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
