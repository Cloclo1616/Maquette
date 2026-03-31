import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomeDesktop from "./pages/HomeDesktop";
import SearchDesktop from "./pages/SearchDesktop";
import CreateRequest from "./pages/CreateRequest";
import MessagesDesktop from "./pages/MessagesDesktop";
import Profile from "./pages/Profile";
import ProviderProfile from "./pages/ProviderProfile";
import ChatDetail from "./pages/ChatDetail";

/**
 * Design Philosophy: Modern & Accessible - Desktop Only
 * - Sidebar navigation persistante
 * - Teal primary color (#0D9488) pour confiance et action
 * - Multi-column layouts optimisés pour écrans larges
 * - Poppins + Inter typography pour hiérarchie
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={HomeDesktop} />
      <Route path={"/search"} component={SearchDesktop} />
      <Route path={"/create-request"} component={CreateRequest} />
      <Route path={"/messages"} component={MessagesDesktop} />
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
