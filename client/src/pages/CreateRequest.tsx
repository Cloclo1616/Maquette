import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design: Modern & Accessible - Desktop Only
 * Form for creating a help request with validation
 */

export default function CreateRequest() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    urgency: "normal",
  });

  const categories = [
    "House Cleaning",
    "Gardening",
    "Repairs",
    "Tutoring",
    "Pet Sitting",
    "Errands",
    "Moving Help",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.category || !formData.location) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Request created successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <DesktopLayout activeTab="create">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Create Help Request</h1>

        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter a brief title for your request"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Describe what you need help with in detail..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition resize-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:border-primary focus:outline-none transition"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your location or address"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
              />
            </div>

            {/* Urgency */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-3">
                Urgency Level
              </label>
              <div className="space-y-2">
                {[
                  { value: "low", label: "Low - Can wait a few days", color: "bg-blue-100 text-blue-700" },
                  { value: "normal", label: "Normal - Within a few days", color: "bg-gray-100 text-gray-700" },
                  { value: "high", label: "High - Within 24 hours", color: "bg-orange-100 text-orange-700" },
                  { value: "urgent", label: "Urgent - ASAP", color: "bg-red-100 text-red-700" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 border border-border rounded-lg hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="urgency"
                      value={option.value}
                      checked={formData.urgency === option.value}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-4 h-4"
                    />
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${option.color}`}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <Card className="p-4 bg-teal-50 border-teal-200">
              <div className="flex gap-3">
                <AlertCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  Your request will be visible to helpers in your area. You can message them directly to discuss details and pricing.
                </p>
              </div>
            </Card>

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition"
              >
                Create Request
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 bg-white border-2 border-border text-foreground py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </DesktopLayout>
  );
}
