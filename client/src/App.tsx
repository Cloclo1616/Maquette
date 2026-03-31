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

/**
 * Design Philosophy: Modern & Accessible
 * - Teal primary color (#0D9488) for trust and action
 * - Clean white background (#FAFAFA) for clarity
 * - Poppins + Inter typography for hierarchy
 * - Mobile-first tab navigation at bottom
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
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
