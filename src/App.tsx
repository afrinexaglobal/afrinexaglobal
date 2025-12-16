import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppChat } from "@/components/layout/WhatsAppChat";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import SuccessStories from "./pages/SuccessStories";
import ClientPortal from "./pages/ClientPortal";
import AdminLogin from "./pages/AdminLogin";

// Service Pages
import VisaAssistance from "./pages/services/VisaAssistance";
import WorkAbroad from "./pages/services/WorkAbroad";
import TradeInvestment from "./pages/services/TradeInvestment";
import TalentHub from "./pages/services/TalentHub";
import Marketplace from "./pages/services/Marketplace";
import VisaApplication from "./pages/services/VisaApplication";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Services */}
            <Route path="/services/visa-assistance" element={<VisaAssistance />} />
            <Route path="/services/visa-application" element={<VisaApplication />} />
            <Route path="/services/work-abroad" element={<WorkAbroad />} />
            <Route path="/services/trade-investment" element={<TradeInvestment />} />
            <Route path="/services/talent-hub" element={<TalentHub />} />
            <Route path="/services/marketplace" element={<Marketplace />} />
            
            {/* Main Pages */}
            
            
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Portals */}
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppChat />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;