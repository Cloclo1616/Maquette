import { Home, Search, Plus, MessageSquare, User, LogOut, Settings, Bell } from "lucide-react";
import { useLocation } from "wouter";
import { ReactNode } from "react";

/**
 * Design: Desktop Layout with Sidebar
 * Optimized for PC screens with persistent navigation and multi-column layout
 */

interface DesktopLayoutProps {
  children: ReactNode;
  activeTab: "home" | "search" | "create" | "messages" | "profile";
}

export default function DesktopLayout({ children, activeTab }: DesktopLayoutProps) {
  const [, navigate] = useLocation();

  const mainMenuItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "search", label: "Search", icon: Search, path: "/search" },
    { id: "create", label: "Create Request", icon: Plus, path: "/create-request" },
    { id: "messages", label: "Messages", icon: MessageSquare, path: "/messages" },
    { id: "profile", label: "Profile", icon: User, path: "/profile" },
  ];

  const bottomMenuItems = [
    { label: "Settings", icon: Settings, action: () => {} },
    { label: "Notifications", icon: Bell, action: () => {} },
    { label: "Logout", icon: LogOut, action: () => navigate("/") },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border flex flex-col fixed left-0 top-0 h-screen">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <h1 className="text-2xl font-bold text-primary">Help'N'Go</h1>
          <p className="text-xs text-muted-foreground mt-1">Assistance & Mise en relation</p>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {mainMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-border space-y-2">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-gray-100 transition"
              >
                <Icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
