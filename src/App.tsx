
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelegramSidebar from "@/components/TelegramSidebar";
import Index from "./pages/Index";
import CoffeeGuide from "./pages/CoffeeGuide";
import VideoTutorials from "./pages/VideoTutorials";
import CoffeeGame from "./pages/CoffeeGame";
import Menu from "./pages/Menu";
import Waffles from "./pages/Waffles";
import CoffeeFacts from "./pages/CoffeeFacts";
import ContactUs from "./pages/ContactUs";
import BrewingMethods from "./pages/BrewingMethods";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TelegramSidebar 
            isMobileSidebarOpen={isMobileSidebarOpen} 
            setMobileSidebarOpen={setMobileSidebarOpen}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/coffee-guide" element={<CoffeeGuide />} />
              <Route path="/video-tutorials" element={<VideoTutorials />} />
              <Route path="/coffee-game" element={<CoffeeGame />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/waffles" element={<Waffles />} />
              <Route path="/coffee-facts" element={<CoffeeFacts />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/support" element={<Support />} />
              <Route path="/articles/brewing" element={<BrewingMethods />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TelegramSidebar>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
