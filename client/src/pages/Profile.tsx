import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, LogOut, Settings, Bell, Shield, HelpCircle } from "lucide-react";
import { useLocation } from "wouter";
import MobileLayout from "@/components/MobileLayout";
import { toast } from "sonner";

/**
 * Design: Modern & Accessible
 * User profile and account settings
 */

export default function Profile() {
  const [, navigate] = useLocation();

  const userProfile = {
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+33 6 12 34 56 78",
    rating: 4.8,
    reviews: 42,
    joinDate: "Joined March 2024",
    verified: true,
  };

  const menuItems = [
    { icon: Settings, label: "Account Settings", action: () => toast.info("Coming soon") },
    { icon: Bell, label: "Notifications", action: () => toast.info("Coming soon") },
    { icon: Shield, label: "Privacy & Security", action: () => toast.info("Coming soon") },
    { icon: HelpCircle, label: "Help & Support", action: () => toast.info("Coming soon") },
  ];

  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <MobileLayout activeTab="profile">
      <div className="pb-20">
        {/* Header */}
        <div className="bg-gradient-to-b from-teal-50 to-white p-6">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {userProfile.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-foreground">{userProfile.name}</h1>
                {userProfile.verified && (
                  <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    ✓ Verified
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{userProfile.email}</p>
              <p className="text-sm text-muted-foreground">{userProfile.joinDate}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-4 p-3 bg-white rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Your Rating</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl font-bold text-foreground">{userProfile.rating}</span>
                  <span className="text-sm text-muted-foreground">({userProfile.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Math.floor(userProfile.rating) ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 py-6 grid grid-cols-3 gap-3">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground mt-1">Requests Completed</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">8</p>
            <p className="text-xs text-muted-foreground mt-1">Active Requests</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">156</p>
            <p className="text-xs text-muted-foreground mt-1">Total Earnings</p>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition border border-transparent hover:border-border"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-primary" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight size={20} className="text-muted-foreground" />
              </button>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="px-4 py-6">
          <Button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition flex items-center justify-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
