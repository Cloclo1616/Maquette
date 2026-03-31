import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut, Settings, Bell, Shield, HelpCircle } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { toast } from "sonner";

/**
 * Design: Modern & Accessible - Desktop Only
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
    <DesktopLayout activeTab="profile">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">My Profile</h1>

        <div className="grid grid-cols-3 gap-8">
          {/* Left - Profile Info */}
          <div className="col-span-2">
            {/* Profile Card */}
            <Card className="p-8 mb-8">
              <div className="flex gap-6 items-start mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                  {userProfile.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">{userProfile.name}</h2>
                    {userProfile.verified && (
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        ✓ Verified
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-1">{userProfile.email}</p>
                  <p className="text-muted-foreground mb-4">{userProfile.phone}</p>
                  <p className="text-sm text-muted-foreground">{userProfile.joinDate}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="p-4 bg-gradient-to-br from-teal-50 to-white rounded-lg border border-teal-200">
                <p className="text-sm text-muted-foreground mb-2">Your Rating</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-foreground">{userProfile.rating}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < Math.floor(userProfile.rating) ? "bg-yellow-400" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-muted-foreground">({userProfile.reviews} reviews)</span>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground mt-2">Requests Completed</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground mt-2">Active Requests</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">€1,560</p>
                <p className="text-sm text-muted-foreground mt-2">Total Earnings</p>
              </Card>
            </div>
          </div>

          {/* Right - Settings */}
          <div>
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">Settings</h3>
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition border border-transparent hover:border-border"
                    >
                      <Icon size={18} className="text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Logout */}
              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition flex items-center justify-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
