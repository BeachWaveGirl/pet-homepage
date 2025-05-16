
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StarMapPage from "./pages/StarMapPage";
import PetPoems from "./pages/PetPoems";
import PetPortrait from "./pages/PetPortrait";
import MemoryStories from "./pages/MemoryStories";
import RainbowBridge from "./pages/RainbowBridge";
import GriefJournal from "./pages/GriefJournal";
import NotFound from "./pages/NotFound";
import DigitalScrapbooks from "./pages/DigitalScrapbooks";
import PetDigitalArt from "./pages/PetDigitalArt";
import PetZodiac from "./pages/PetZodiac";
import PetBathroom from "./pages/PetBathroom";
import PetTypography from "./pages/PetTypography";
import QuotePosters from "./pages/QuotePosters";
import PetParty from "./pages/PetParty";
import PetFuneral from "./pages/PetFuneral";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/star-map" element={<StarMapPage />} />
          <Route path="/pet-poems" element={<PetPoems />} />
          <Route path="/pet-portrait" element={<PetPortrait />} />
          <Route path="/memory-stories" element={<MemoryStories />} />
          <Route path="/rainbow-bridge" element={<RainbowBridge />} />
          <Route path="/grief-journal" element={<GriefJournal />} />
          <Route path="/digital-scrapbooks" element={<DigitalScrapbooks />} />
          <Route path="/pet-digital-art" element={<PetDigitalArt />} />
          <Route path="/pet-zodiac" element={<PetZodiac />} />
          <Route path="/pet-bathroom" element={<PetBathroom />} />
          <Route path="/pet-typography" element={<PetTypography />} />
          <Route path="/quote-posters" element={<QuotePosters />} />
          <Route path="/pet-party" element={<PetParty />} />
          <Route path="/pet-funeral" element={<PetFuneral />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
