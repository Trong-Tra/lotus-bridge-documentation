import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Network,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Globe,
  Flag,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Background = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleTokenHover = (event: MouseEvent) => {
      const tokenCard = event.currentTarget as HTMLElement;
      const img = tokenCard.querySelector("img");

      if (img) {
        // Remove any existing animation
        img.style.animation = "none";
        // Force reflow
        void img.offsetHeight;
        // Add the animation
        img.style.animation = "tokenIconSpin 0.8s ease-in-out";

        // Clean up after animation completes
        setTimeout(() => {
          img.style.animation = "";
        }, 800);
      }
    };

    // Add event listeners to all token cards
    const tokenCards = document.querySelectorAll(".token-icon-hover");
    tokenCards.forEach((card) => {
      card.addEventListener("mouseenter", handleTokenHover);
    });

    // Cleanup
    return () => {
      tokenCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleTokenHover);
      });
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />

            {/* Hero Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    🌍 {t("pages.background.problemStatement")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.background.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.background.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Problem Statement Card - Enhanced from Whitepaper */}
                  <Card className="border-destructive/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        {t("pages.background.fragmentedWorldTitle")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.background.blockchainCrisisDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {t("pages.background.landscapeDescription")}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t("pages.background.userNavigationDescription")}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                          <h4 className="font-semibold text-destructive mb-2">
                            {t("pages.background.currentChallengesTitle")}
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>
                              •{" "}
                              {t(
                                "pages.background.currentChallenges.multipleSteps"
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "pages.background.currentChallenges.clumsyRisky"
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "pages.background.currentChallenges.vietnameseTokens"
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "pages.background.currentChallenges.globalAdoption"
                              )}
                            </li>
                          </ul>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            {t("pages.background.resultTitle")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("pages.background.resultDescription")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Solution Card - Enhanced from Whitepaper */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Flag className="h-5 w-5" />
                        {t("pages.background.lotusEnterTitle")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.background.vietnameseSolutionDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {t("pages.background.lotusInspiredDescription")}
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-background/50 rounded-lg border">
                          <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold mb-2">
                            {t("pages.background.universalBridgeLayer")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("pages.background.universalDescription")}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg border">
                          <Network className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold mb-2">
                            {t("pages.background.crossArchitectureConnector")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("pages.background.crossArchitectureDescription")}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg border">
                          <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold mb-2">
                            {t("pages.background.multiWalletPortal")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("pages.background.multiWalletDescription")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Current Limitations */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                          <Network className="h-5 w-5" />
                          {t("pages.background.technicalLimitations")}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.background.technicalLimitationsDescription"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.technicalLimitationsList.evmLimited"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.technicalLimitationsList.complexInteractions"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.technicalLimitationsList.highRisk"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.technicalLimitationsList.poorArchitectureSupport"
                              )}
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                          <Globe className="h-5 w-5" />
                          {t("pages.background.marketBarriers")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.background.marketBarriersDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.marketBarriersList.regionalTokensLack"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.marketBarriersList.poorLocalization"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.marketBarriersList.fragmentedLiquidity"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.background.marketBarriersList.limitedDeveloper"
                              )}
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Vietnam's Position */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {t("pages.background.vietnamCryptoLeadership")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.background.vietnamPotentialDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          <strong>
                            {t("pages.background.vietnamCryptoNation")}
                          </strong>
                          , {t("pages.background.vietnamBarriers")}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="flex flex-col h-full">
                          <h4 className="font-semibold text-primary mb-4">
                            {t("pages.background.marketStrengths")}
                          </h4>
                          <div className="grid gap-3 flex-1">
                            {/* Adoption & Awareness */}
                            <div className="p-4 bg-white dark:bg-background rounded-lg border">
                              <h5 className="font-medium text-sm mb-3 text-primary">
                                {t("pages.background.adoptionAwareness")}
                              </h5>
                              <div className="space-y-2 mb-3">
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t(
                                      "pages.background.adoptionItems.top3Global"
                                    )}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t(
                                      "pages.background.adoptionItems.highRetailAdoption"
                                    )}
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {t("pages.background.adoptionDescription")}
                              </p>
                            </div>

                            {/* Gaming & NFTs */}
                            <div className="p-4 bg-white dark:bg-background rounded-lg border">
                              <h5 className="font-medium text-sm mb-3 text-primary">
                                {t("pages.background.gamingNftLeadership")}
                              </h5>
                              <div className="space-y-2 mb-3">
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t("pages.background.gamingItems.axieHub")}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t(
                                      "pages.background.gamingItems.strongP2E"
                                    )}
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {t("pages.background.gamingDescription")}
                              </p>
                            </div>

                            {/* Developer Ecosystem */}
                            <div className="p-4 bg-white dark:bg-background rounded-lg border">
                              <h5 className="font-medium text-sm mb-3 text-primary">
                                {t("pages.background.developerEcosystem")}
                              </h5>
                              <div className="space-y-2 mb-3">
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t(
                                      "pages.background.developerItems.growingDefi"
                                    )}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t(
                                      "pages.background.developerItems.activeDeveloper"
                                    )}
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {t("pages.background.developerDescription")}
                              </p>
                            </div>

                            {/* Growth Potential */}
                            <div className="p-4 bg-white dark:bg-background rounded-lg border">
                              <h5 className="font-medium text-sm mb-3 text-primary">
                                {t("pages.background.growthPotential")}
                              </h5>
                              <div className="space-y-2 mb-3">
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t(
                                      "pages.background.growthItems.youngPopulation"
                                    )}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                                  <div className="w-2 h-2 rounded-full bg-pink-600 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">
                                    {t(
                                      "pages.background.growthItems.risingDemand"
                                    )}
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {t("pages.background.growthDescription")}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                                  {t("pages.background.untappedPotential")}
                                </p>
                                <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                                  {t("pages.background.untappedDescription")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col h-full">
                          <h4 className="font-semibold text-accent mb-4">
                            {t("pages.background.popularVietnameseTokens")}
                          </h4>
                          <div className="grid gap-4 flex-1">
                            {/* Gaming Tokens */}
                            <div className="p-5 bg-white dark:bg-background rounded-lg border">
                              <h5 className="font-medium text-base mb-6 text-primary">
                                {t("pages.background.gamingEcosystem")}
                              </h5>
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                {/* AXS, SLP, SIPHER, A8 cards remain unchanged since they contain images */}
                                <div className="flex items-center gap-3 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png"
                                    alt="AXS"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-base">
                                    AXS
                                  </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/10366/small/SLP.png"
                                    alt="SLP"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-base">
                                    SLP
                                  </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/21070/standard/SipherToken.png?1696520453"
                                    alt="SIPHER"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-base">
                                    SIPHER
                                  </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/39170/standard/A8_Token-04_200x200.png?1720798300"
                                    alt="A8"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-base">
                                    A8
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground text-center">
                                {t(
                                  "pages.background.gamingEcosystemDescription"
                                )}
                              </p>
                            </div>

                            {/* Stablecoins */}
                            <div className="p-5 bg-white dark:bg-background rounded-lg border">
                              <h5 className="font-medium text-base mb-6 text-primary">
                                {t("pages.background.vietnameseStablecoins")}
                              </h5>
                              <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
                                <div className="flex items-center gap-3 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/9670/standard/vndc-gold-coin.png?1696509740"
                                    alt="VNDC"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-base">
                                    VNDC
                                  </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://vnst.io/_next/image?url=%2Fassets%2Fimages%2Fcryptos%2Fvnst.png&w=96&q=75"
                                    alt="VNST"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-base">
                                    VNST
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground text-center">
                                {t("pages.background.stablesDescription")}
                              </p>
                            </div>

                            {/* DeFi Infrastructure */}
                            <div className="p-5 bg-white dark:bg-background rounded-lg border">
                              <h5 className="font-medium text-base mb-6 text-primary">
                                {t("pages.background.defiInfrastructure")}
                              </h5>
                              <div className="grid grid-cols-3 gap-3 mb-6">
                                <div className="flex flex-col items-center gap-2 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/7942/standard/kai.png?1696508172"
                                    alt="KAI"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-sm">
                                    KAI
                                  </span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/17117/small/logo.png"
                                    alt="C98"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-sm">
                                    C98
                                  </span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-800/50 hover:border-primary/50 transition-colors cursor-pointer shadow-sm token-icon-hover">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/14899/standard/RwdVsGcw_400x400.jpg?1696514562"
                                    alt="KNC"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <span className="font-medium text-sm">
                                    KNC
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground text-center">
                                {t("pages.background.defiDescription")}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                            <div className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                                  {t("pages.background.limitedCrossChain")}
                                </p>
                                <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                                  {t("pages.background.limitedDescription")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* The Solution Need */}
                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <TrendingUp className="h-5 w-5" />
                        {t("pages.background.criticalGap")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.background.criticalGapDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          {t("pages.background.criticalGapSolution")}{" "}
                          <strong>
                            {t("pages.background.highlyAdaptable")}
                          </strong>{" "}
                          {t("pages.background.criticalGapResult")}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            {t("pages.background.adaptable")}
                          </h4>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            {t("pages.background.adaptableDescription")}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            {t("pages.background.regional")}
                          </h4>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            {t("pages.background.regionalDescription")}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            {t("pages.background.advanced")}
                          </h4>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            {t("pages.background.advancedDescription")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/why-lotus">
                        <ArrowLeft className="h-4 w-4" />
                        {t("pages.background.navigation.backToWhyLotus")}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t("pages.background.navigation.discoverSolution")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.background.navigation.solutionDescription")}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/core-concept">
                        {t("pages.background.navigation.continueToCoreConcept")}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Background;
