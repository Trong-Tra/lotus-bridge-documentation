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
  ArrowLeftRight,
  Repeat,
  Wallet,
  Globe,
  ArrowRight,
  ArrowLeft,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CoreOverview = () => {
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
                    ⚡ {t("pages.coreOverview.hero.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.coreOverview.hero.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.coreOverview.hero.description")}
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* What Lotus Bridge Enables */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        {t("pages.coreOverview.capabilities.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.coreOverview.capabilities.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          {t("pages.coreOverview.capabilities.content")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Core Capabilities Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ArrowLeftRight className="h-5 w-5" />
                          {t(
                            "pages.coreOverview.crossChain.tokenBridging.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.coreOverview.crossChain.tokenBridging.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            {t(
                              "pages.coreOverview.crossChain.tokenBridging.details"
                            )}
                          </strong>{" "}
                          {t(
                            "pages.coreOverview.crossChain.tokenBridging.example.chains"
                          )}
                        </p>
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            {t(
                              "pages.coreOverview.crossChain.tokenBridging.example.title"
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t(
                              "pages.coreOverview.crossChain.tokenBridging.example.description"
                            )}
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>
                              {t(
                                "pages.coreOverview.crossChain.tokenBridging.features.architectureAgnostic"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>
                              {t(
                                "pages.coreOverview.crossChain.tokenBridging.features.secureCustody"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>
                              {t(
                                "pages.coreOverview.crossChain.tokenBridging.features.realTimeTracking"
                              )}
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Repeat className="h-5 w-5" />
                          {t("pages.coreOverview.crossChain.swaps.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.coreOverview.crossChain.swaps.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            {t("pages.coreOverview.crossChain.swaps.details")}
                          </strong>
                        </p>
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            {t(
                              "pages.coreOverview.crossChain.swaps.example.title"
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t(
                              "pages.coreOverview.crossChain.swaps.example.description"
                            )}
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>
                              {t(
                                "pages.coreOverview.crossChain.swaps.features.bestRateRouting"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>
                              {t(
                                "pages.coreOverview.crossChain.swaps.features.minimalSlippage"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>
                              {t(
                                "pages.coreOverview.crossChain.swaps.features.atomicSwapGuarantees"
                              )}
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Wallet className="h-5 w-5" />
                          {t("pages.coreOverview.multiWallet.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.coreOverview.multiWallet.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            {t("pages.coreOverview.multiWallet.details")}
                          </strong>{" "}
                          {t("pages.coreOverview.multiWallet.addressMapping")}
                        </p>
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            {t("pages.coreOverview.multiWallet.support.title")}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-3">
                            {t(
                              "pages.coreOverview.multiWallet.support.subtitle"
                            )}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">🦊 MetaMask</Badge>
                            <Badge variant="outline">👻 Phantom</Badge>
                            <Badge variant="outline">🛡️ Trust Wallet</Badge>
                            <Badge variant="outline">🔗 WalletConnect</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 italic">
                            {t(
                              "pages.coreOverview.multiWallet.support.additional"
                            )}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          {t("pages.coreOverview.flexibleTransactions.title")}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.coreOverview.flexibleTransactions.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            {t(
                              "pages.coreOverview.flexibleTransactions.details"
                            )}
                          </strong>{" "}
                          {t(
                            "pages.coreOverview.flexibleTransactions.routingOptions"
                          )}
                        </p>
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            {t(
                              "pages.coreOverview.flexibleTransactions.types.title"
                            )}
                          </h4>
                          <ul className="text-sm space-y-2">
                            <li>
                              •{" "}
                              {t(
                                "pages.coreOverview.flexibleTransactions.types.walletToWallet"
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "pages.coreOverview.flexibleTransactions.types.crossAddress"
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "pages.coreOverview.flexibleTransactions.types.crossChainBridge"
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "pages.coreOverview.flexibleTransactions.types.crossChainSwap"
                              )}
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Vietnamese Token Support */}
                  <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/50 dark:bg-pink-950/20">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🇻🇳</span>
                        <CardTitle className="text-pink-800 dark:text-pink-400">
                          {t("pages.coreOverview.vietnameseTokens.title")}
                        </CardTitle>
                      </div>
                      <CardDescription>
                        {t("pages.coreOverview.vietnameseTokens.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          <strong>
                            {t(
                              "pages.coreOverview.vietnameseTokens.localization"
                            )}
                          </strong>{" "}
                          {t(
                            "pages.coreOverview.vietnameseTokens.priorityOptimization"
                          )}
                        </p>
                      </div>

                      {/* Token Categories in Columns */}
                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        {/* Gaming Ecosystem */}
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-4 text-center">
                            🎮{" "}
                            {t(
                              "pages.coreOverview.vietnameseTokens.categories.gaming.title"
                            )}
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-white dark:bg-pink-950/10 p-4 rounded border border-pink-200/30 dark:border-pink-800/30 text-center token-icon-hover h-24 flex flex-col justify-center transition-color">
                              <img
                                src="https://coin-images.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1696512817"
                                alt="AXS"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-blue-600 block text-xs">
                                AXS
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                Axie Infinity
                              </span>
                            </div>
                            <div className="bg-white dark:bg-pink-950/10 p-4 rounded border border-pink-200/30 dark:border-pink-800/30 text-center token-icon-hover h-24 flex flex-col justify-center transition-colors">
                              <img
                                src="https://coin-images.coingecko.com/coins/images/10366/large/SLP.png?1696510368"
                                alt="SLP"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-green-600 block text-xs">
                                SLP
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                Smooth Love Potion
                              </span>
                            </div>
                            <div className="bg-white dark:bg-pink-950/10 p-4 rounded border border-pink-200/30 dark:border-pink-800/30 text-center token-icon-hover h-24 flex flex-col justify-center transition-colors">
                              <img
                                src="https://assets.coingecko.com/coins/images/21070/standard/SipherToken.png?1696520453"
                                alt="SIPHER"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-indigo-600 block text-xs">
                                SIPHER
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                Sipher Token
                              </span>
                            </div>
                            <div className="bg-white dark:bg-pink-950/10 p-4 rounded border border-pink-200/30 dark:border-pink-800/30 text-center token-icon-hover h-24 flex flex-col justify-center transition-colors hover:bg-pink-50/50 hover:border-pink-300/50">
                              <img
                                src="https://assets.coingecko.com/coins/images/39170/standard/A8_Token-04_200x200.png?1720798300"
                                alt="A8"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-purple-600 block text-xs">
                                A8
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                A8 Token
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Vietnamese Stablecoins */}
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-orange-800 dark:text-orange-400 mb-4 text-center">
                            💰{" "}
                            {t(
                              "pages.coreOverview.vietnameseTokens.categories.stablecoins.title"
                            )}
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded border text-center token-icon-hover h-24 flex flex-col justify-center">
                              <img
                                src="https://assets.coingecko.com/coins/images/9670/standard/vndc-gold-coin.png?1696509740"
                                alt="VNDC"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-purple-600 block text-xs">
                                VNDC
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                VND Coin
                              </span>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded border text-center token-icon-hover h-24 flex flex-col justify-center">
                              <img
                                src="https://vnst.io/_next/image?url=%2Fassets%2Fimages%2Fcryptos%2Fvnst.png&w=96&q=75"
                                alt="VNST"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-orange-600 block text-xs">
                                VNST
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                VN Stable Token
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* DeFi Infrastructure */}
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-teal-800 dark:text-teal-400 mb-4 text-center">
                            🔧{" "}
                            {t(
                              "pages.coreOverview.vietnameseTokens.categories.defi.title"
                            )}
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded border text-center token-icon-hover h-24 flex flex-col justify-center">
                              <img
                                src="https://assets.coingecko.com/coins/images/7942/standard/kai.png?1696508172"
                                alt="KAI"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-red-600 block text-xs">
                                KAI
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                KardiaChain
                              </span>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded border text-center token-icon-hover h-24 flex flex-col justify-center">
                              <img
                                src="https://assets.coingecko.com/coins/images/17117/standard/logo.png?1696516677"
                                alt="C98"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-yellow-600 block text-xs">
                                C98
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                Coin98
                              </span>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded border text-center token-icon-hover h-24 flex flex-col justify-center">
                              <img
                                src="https://assets.coingecko.com/coins/images/14899/standard/RwdVsGcw_400x400.jpg?1696514562"
                                alt="KNC"
                                className="w-8 h-8 mx-auto mb-2 rounded-full"
                              />
                              <strong className="text-teal-600 block text-xs">
                                KNC
                              </strong>
                              <span className="text-xs text-muted-foreground">
                                Kyber Network Crystal
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-pink-950/20 p-6 rounded-lg border border-pink-200/50 dark:border-pink-800/50">
                        <h4 className="font-semibold mb-3 text-pink-800 dark:text-pink-400">
                          {t(
                            "pages.coreOverview.vietnameseTokens.prioritySupport.title"
                          )}
                        </h4>
                        <p className="text-sm text-pink-700 dark:text-pink-300">
                          {t(
                            "pages.coreOverview.vietnameseTokens.prioritySupport.description"
                          )}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/core-concept">
                        <ArrowLeft className="h-4 w-4" />
                        {t("pages.coreOverview.navigation.backToConcept")}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t("pages.coreOverview.navigation.explore.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.coreOverview.navigation.explore.description")}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/architecture">
                        {t(
                          "pages.coreOverview.navigation.continueToArchitecture"
                        )}
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

export default CoreOverview;
