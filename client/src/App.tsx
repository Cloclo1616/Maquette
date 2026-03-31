import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Search from "./pages/Search";
import CreateRequest from "./pages/CreateRequest";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import ProviderProfile from "./pages/ProviderProfile";
import ChatDetail from "./pages/ChatDetail";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern & Accessible
 * - Responsive design that adapts between mobile (tab bar) and desktop (sidebar)
 * - Teal primary color (#0D9488) for trust and action
 * - Clean white background (#FAFAFA) for clarity
 * - Poppins + Inter typography for hierarchy
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/search"} component={Search} />
      <Route path={"/create-request"} component={CreateRequest} />
      <Route path={"/messages"} component={Messages} />
      <Route path={"/messages/:id"} component={ChatDetail} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/provider/:id"} component={ProviderProfile} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className={isDesktop ? "lg:block hidden" : "lg:hidden block"}>
            <Router />
          </div>
          {isDesktop && (
            <div className="hidden lg:block">
              <Router />
            </div>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
