import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, MessageSquare, Star, MapPin, Calendar, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import MobileLayout from "@/components/MobileLayout";
import { toast } from "sonner";

/**
 * Design: Modern & Accessible
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
    bio: "Professional cleaner with 5+ years of experience. I pride myself on attention to detail and customer satisfaction.",
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
  ];

  const handleMessage = () => {
    toast.success("Conversation started!");
    setTimeout(() => navigate("/messages/1"), 1500);
  };

  const handleBook = () => {
    toast.success("Booking request sent!");
  };

  return (
    <MobileLayout activeTab="search">
      <div className="pb-20">
        {/* Header */}
        <div className="bg-white border-b border-border sticky top-0 z-10 p-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/search")}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Provider Profile</h1>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-teal-50 to-white p-6">
          <div className="flex gap-4 items-start mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex-shrink-0 flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
              <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{provider.name}</h2>
              <div className="flex items-center gap-2 mt-2">
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
                <span className="text-sm font-medium text-foreground">
                  {provider.rating} ({provider.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>{provider.distance}</span>
              </div>
            </div>
            {provider.available && (
              <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Available
              </div>
            )}
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Card className="p-3 text-center">
              <p className="text-lg font-bold text-primary">{provider.completedJobs}</p>
              <p className="text-xs text-muted-foreground mt-1">Jobs Completed</p>
            </Card>
            <Card className="p-3 text-center">
              <p className="text-lg font-bold text-primary">{provider.hourlyRate}</p>
              <p className="text-xs text-muted-foreground mt-1">Hourly Rate</p>
            </Card>
          </div>
        </div>

        {/* About Section */}
        <div className="px-6 py-6 border-b border-border">
          <h3 className="font-bold text-foreground mb-3">About</h3>
          <p className="text-sm text-foreground leading-relaxed mb-4">{provider.bio}</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={16} />
              <span>{provider.joinDate}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageSquare size={16} />
              <span>{provider.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="px-6 py-6 border-b border-border">
          <h3 className="font-bold text-foreground mb-3">Services</h3>
          <div className="flex gap-2 flex-wrap">
            {provider.services.map((service) => (
              <span
                key={service}
                className="bg-teal-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="px-6 py-6 border-b border-border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-foreground">Recent Reviews</h3>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {reviews.map((review) => (
              <Card key={review.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-foreground">{review.author}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-foreground">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-6 space-y-3">
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
      </div>
    </MobileLayout>
  );
}
