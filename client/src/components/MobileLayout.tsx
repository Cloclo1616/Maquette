import { Home, Search, Plus, MessageSquare, User } from "lucide-react";
import { useLocation } from "wouter";
import { ReactNode } from "react";

/**
 * Design: Mobile-first tab navigation at bottom
 * Consistent layout for all pages with iPhone-optimized navigation
 */

interface MobileLayoutProps {
  children: ReactNode;
  activeTab: "home" | "search" | "create" | "messages" | "profile";
}

export default function MobileLayout({ children, activeTab }: MobileLayoutProps) {
  const [, navigate] = useLocation();

  const tabs = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "search", label: "Search", icon: Search, path: "/search" },
    { id: "create", label: "Create", icon: Plus, path: "/create-request" },
    { id: "messages", label: "Messages", icon: MessageSquare, path: "/messages" },
    { id: "profile", label: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`flex flex-col items-center justify-center w-full h-full gap-1 transition ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={24} />
                <span className="text-xs font-medium">{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 w-12 h-1 bg-primary rounded-t-lg" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
