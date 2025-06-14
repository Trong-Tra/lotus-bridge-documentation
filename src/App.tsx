
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Abstract from "./pages/Abstract";
import Introduction from "./pages/Introduction";
import Background from "./pages/Background";
import CoreConcept from "./pages/CoreConcept";
import CoreOverview from "./pages/CoreOverview";
import Architecture from "./pages/Architecture";
import Governance from "./pages/Governance";
import EcosystemBenefits from "./pages/EcosystemBenefits";
import BenefitsUsers from "./pages/BenefitsUsers";
import BenefitsDevelopers from "./pages/BenefitsDevelopers";
import BenefitsLiquidity from "./pages/BenefitsLiquidity";
import BenefitsVietnam from "./pages/BenefitsVietnam";
import Security from "./pages/Security";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import Changelog from "./pages/Changelog";
import FAQs from "./pages/FAQs";
import WhatIsLotus from "./pages/WhatIsLotus";
import WhyLotus from "./pages/WhyLotus";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/abstract",
    element: <Abstract />,
  },
  {
    path: "/introduction",
    element: <Introduction />,
  },
  {
    path: "/background",
    element: <Background />,
  },
  {
    path: "/core-concept",
    element: <CoreConcept />,
  },
  {
    path: "/core-overview",
    element: <CoreOverview />,
  },
  {
    path: "/architecture",
    element: <Architecture />,
  },
  {
    path: "/governance",
    element: <Governance />,
  },
  {
    path: "/ecosystem-benefits",
    element: <EcosystemBenefits />,
  },
  {
    path: "/benefits-users",
    element: <BenefitsUsers />,
  },
  {
    path: "/benefits-developers",
    element: <BenefitsDevelopers />,
  },
  {
    path: "/benefits-liquidity",
    element: <BenefitsLiquidity />,
  },
  {
    path: "/benefits-vietnam",
    element: <BenefitsVietnam />,
  },
  {
    path: "/security",
    element: <Security />,
  },
  {
    path: "/tokenomics",
    element: <Tokenomics />,
  },
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
  {
    path: "/changelog",
    element: <Changelog />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "/what-is-lotus",
    element: <WhatIsLotus />,
  },
  {
    path: "/why-lotus",
    element: <WhyLotus />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
