import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import UserGuides from "./pages/UserGuides";
import DeveloperDocs from "./pages/DeveloperDocs";
import Abstract from "./pages/Abstract";
import Introduction from "./pages/Introduction";
import WhatIsLotus from "./pages/WhatIsLotus";
import WhyLotus from "./pages/WhyLotus";
import Background from "./pages/Background";
import CoreConcept from "./pages/CoreConcept";
import CoreOverview from "./pages/CoreOverview";
import Architecture from "./pages/Architecture";
import Consensus from "./pages/Consensus";
import UseCases from "./pages/UseCases";
import EcosystemBenefits from "./pages/EcosystemBenefits";
import BenefitsUsers from "./pages/BenefitsUsers";
import BenefitsDevelopers from "./pages/BenefitsDevelopers";
import BenefitsLiquidity from "./pages/BenefitsLiquidity";
import BenefitsVietnam from "./pages/BenefitsVietnam";
import Whitepaper from "./pages/Whitepaper";
import FAQs from "./pages/FAQs";
import Changelog from "./pages/Changelog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/user-guides" element={<UserGuides />} />
            <Route path="/developer-docs" element={<DeveloperDocs />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/what-is-lotus" element={<WhatIsLotus />} />
            <Route path="/why-lotus" element={<WhyLotus />} />
            <Route path="/background" element={<Background />} />
            <Route path="/core-concept" element={<CoreConcept />} />
            <Route path="/core-overview" element={<CoreOverview />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/consensus" element={<Consensus />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/ecosystem-benefits" element={<EcosystemBenefits />} />
            <Route path="/benefits-users" element={<BenefitsUsers />} />
            <Route
              path="/benefits-developers"
              element={<BenefitsDevelopers />}
            />
            <Route path="/benefits-liquidity" element={<BenefitsLiquidity />} />
            <Route path="/benefits-vietnam" element={<BenefitsVietnam />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/changelog" element={<Changelog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
