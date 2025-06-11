import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserGuides from "./pages/UserGuides";
import DeveloperDocs from "./pages/DeveloperDocs";
import Whitepaper from "./pages/Whitepaper";
import FAQs from "./pages/FAQs";
import Changelog from "./pages/Changelog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/user-guides" element={<UserGuides />} />
          <Route path="/developer-docs" element={<DeveloperDocs />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/changelog" element={<Changelog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
