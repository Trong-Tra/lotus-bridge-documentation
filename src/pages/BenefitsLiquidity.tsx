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
  DollarSign,
  TrendingUp,
  Layers,
  Zap,
  ArrowRight,
  ArrowLeft,
  Target,
  BarChart3,
  Coins,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsLiquidity = () => {
  const { t, language } = useLanguage();

  const liquidityBenefits = [
    {
      title: t("pages.benefitsLiquidity.benefits.opportunities.title"),
      description: t(
        "pages.benefitsLiquidity.benefits.opportunities.description"
      ),
      icon: DollarSign,
      features: [
        t(
          "pages.benefitsLiquidity.benefits.opportunities.features.realUtility"
        ),
        t(
          "pages.benefitsLiquidity.benefits.opportunities.features.arbitrageOpportunities"
        ),
        t(
          "pages.benefitsLiquidity.benefits.opportunities.features.vietnameseTokenLiquidity"
        ),
        t(
          "pages.benefitsLiquidity.benefits.opportunities.features.gamingIntegration"
        ),
        t(
          "pages.benefitsLiquidity.benefits.opportunities.features.stableRevenue"
        ),
      ],
    },
    {
      title: t("pages.benefitsLiquidity.benefits.exposure.title"),
      description: t("pages.benefitsLiquidity.benefits.exposure.description"),
      icon: Layers,
      features: [
        t(
          "pages.benefitsLiquidity.benefits.exposure.features.multiChainPortfolio"
        ),
        t("pages.benefitsLiquidity.benefits.exposure.features.reducedRisk"),
        t(
          "pages.benefitsLiquidity.benefits.exposure.features.vietnameseGamingTokens"
        ),
        t(
          "pages.benefitsLiquidity.benefits.exposure.features.crossEcosystemArbitrage"
        ),
        t(
          "pages.benefitsLiquidity.benefits.exposure.features.balancedRiskDistribution"
        ),
      ],
    },
    {
      title: t("pages.benefitsLiquidity.benefits.dynamicFees.title"),
      description: t(
        "pages.benefitsLiquidity.benefits.dynamicFees.description"
      ),
      icon: TrendingUp,
      features: [
        t(
          "pages.benefitsLiquidity.benefits.dynamicFees.features.dynamicAdjustment"
        ),
        t(
          "pages.benefitsLiquidity.benefits.dynamicFees.features.volumeIncentives"
        ),
        t(
          "pages.benefitsLiquidity.benefits.dynamicFees.features.vietnameseMarketBonus"
        ),
        t(
          "pages.benefitsLiquidity.benefits.dynamicFees.features.longTermStaking"
        ),
        t(
          "pages.benefitsLiquidity.benefits.dynamicFees.features.governanceDistribution"
        ),
      ],
    },
  ];

  const poolTypes = [
    {
      name: `🎮 ${t("pages.benefitsLiquidity.poolTypes.gaming.name")}`,
      description: t("pages.benefitsLiquidity.poolTypes.gaming.description"),
      apr: t("pages.benefitsLiquidity.poolTypes.gaming.apr"),
      risk: t("pages.benefitsLiquidity.poolTypes.gaming.risk"),
      demand: t("pages.benefitsLiquidity.poolTypes.gaming.demand"),
      tokens: ["AXS", "SLP", "RON", "ETH", "USDC"],
    },
    {
      name: `🇻🇳 ${t("pages.benefitsLiquidity.poolTypes.stablecoins.name")}`,
      description: t(
        "pages.benefitsLiquidity.poolTypes.stablecoins.description"
      ),
      apr: t("pages.benefitsLiquidity.poolTypes.stablecoins.apr"),
      risk: t("pages.benefitsLiquidity.poolTypes.stablecoins.risk"),
      demand: t("pages.benefitsLiquidity.poolTypes.stablecoins.demand"),
      tokens: ["VNDC", "VNST", "USDT", "USDC"],
    },
    {
      name: `⚡ ${t("pages.benefitsLiquidity.poolTypes.bridge.name")}`,
      description: t("pages.benefitsLiquidity.poolTypes.bridge.description"),
      apr: t("pages.benefitsLiquidity.poolTypes.bridge.apr"),
      risk: t("pages.benefitsLiquidity.poolTypes.bridge.risk"),
      demand: t("pages.benefitsLiquidity.poolTypes.bridge.demand"),
      tokens: ["ETH", "SOL", "BNB", "MATIC", "AVAX"],
    },
    {
      name: `🚀 ${t("pages.benefitsLiquidity.poolTypes.innovation.name")}`,
      description: t(
        "pages.benefitsLiquidity.poolTypes.innovation.description"
      ),
      apr: t("pages.benefitsLiquidity.poolTypes.innovation.apr"),
      risk: t("pages.benefitsLiquidity.poolTypes.innovation.risk"),
      demand: t("pages.benefitsLiquidity.poolTypes.innovation.demand"),
      tokens: ["KAI", "C98", "KNC", "SIPHER", "A8"],
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />

            {/* Hero Section */}
            <section className="py-12 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    💰 {t("pages.benefitsLiquidity.hero.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.benefitsLiquidity.hero.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.benefitsLiquidity.hero.description")}
                  </p>
                </div>
              </div>
            </section>

            {/* Core Benefits */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="grid gap-8">
                  {liquidityBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${
                            index % 2 === 0
                              ? "from-primary to-accent"
                              : "from-accent to-primary"
                          }`}
                        />
                        <CardHeader className="pl-8">
                          <div className="flex items-center gap-4 mb-2">
                            <div
                              className={`p-3 rounded-lg ${
                                index % 2 === 0
                                  ? "bg-primary/10"
                                  : "bg-accent/10"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${
                                  index % 2 === 0
                                    ? "text-primary"
                                    : "text-accent"
                                }`}
                              />
                            </div>
                            <CardTitle className="text-2xl">
                              {benefit.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {benefit.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {benefit.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm font-medium">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Liquidity Pool Types */}
            <section className="py-10 px-6 bg-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 {t("pages.benefitsLiquidity.poolTypes.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.benefitsLiquidity.poolTypes.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {poolTypes.map((pool, index) => (
                    <Card key={index} className="relative overflow-hidden">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{pool.name}</CardTitle>
                          <Badge
                            variant={
                              pool.risk === "Low"
                                ? "secondary"
                                : pool.risk === "Medium"
                                ? "default"
                                : "destructive"
                            }
                            className="text-xs"
                          >
                            {pool.risk} Risk
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {pool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-1">
                              📈 APR Range
                            </h4>
                            <p className="text-lg font-bold">{pool.apr}</p>
                          </div>
                          <div className="text-right">
                            <h4 className="font-semibold text-blue-600 mb-1">
                              🔥 Demand
                            </h4>
                            <p className="text-lg font-bold">{pool.demand}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            🪙 Pool Tokens:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {pool.tokens.map((token, tokenIndex) => (
                              <Badge
                                key={tokenIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {token}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Yield Optimization */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    ⚡ {t("pages.benefitsLiquidity.yieldOptimization.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.benefitsLiquidity.yieldOptimization.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Target className="h-6 w-6 text-primary" />
                        <CardTitle>
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.smartRebalancing.title"
                          )}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {t(
                          "pages.benefitsLiquidity.yieldOptimization.smartRebalancing.description"
                        )}
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.smartRebalancing.features.tradingHours"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.smartRebalancing.features.gamingCycles"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.smartRebalancing.features.arbitrageTiming"
                          )}
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <BarChart3 className="h-6 w-6 text-accent" />
                        <CardTitle>
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.dynamicFees.title"
                          )}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {t(
                          "pages.benefitsLiquidity.yieldOptimization.dynamicFees.description"
                        )}
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.dynamicFees.features.volumeScaling"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.dynamicFees.features.peakDemandSurcharges"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.dynamicFees.features.holidayAdjustments"
                          )}
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Coins className="h-6 w-6 text-primary" />
                        <CardTitle>
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.bonusRewards.title"
                          )}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {t(
                          "pages.benefitsLiquidity.yieldOptimization.bonusRewards.description"
                        )}
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.bonusRewards.features.vietnameseTokenBonus"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.bonusRewards.features.loyaltyRewards"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "pages.benefitsLiquidity.yieldOptimization.bonusRewards.features.governanceTokens"
                          )}
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="py-10 px-6">
              <div className="container mx-auto max-w-5xl">
                <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">
                      🚀 {t("pages.benefitsLiquidity.gettingStarted.title")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.benefitsLiquidity.gettingStarted.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          💎{" "}
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.premiumApr.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.premiumApr.description"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          🛡️{" "}
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.secureProtocol.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.secureProtocol.description"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          📊{" "}
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.realTimeAnalytics.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.realTimeAnalytics.description"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          🎯{" "}
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.targetedOpportunities.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsLiquidity.gettingStarted.features.targetedOpportunities.description"
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center">
                  <Link to="/benefits-developers">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {t("pages.benefitsLiquidity.navigation.backToDevelopers")}
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">
                      {t("pages.benefitsLiquidity.navigation.backToOverview")}
                    </Button>
                  </Link>
                  <Link to="/benefits-vietnam">
                    <Button className="flex items-center gap-2">
                      {t(
                        "pages.benefitsLiquidity.navigation.continueToVietnam"
                      )}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BenefitsLiquidity;
