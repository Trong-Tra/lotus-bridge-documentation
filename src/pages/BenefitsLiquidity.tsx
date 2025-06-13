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
      title: "New Liquidity Pools Tied to Real Usage",
      description:
        "Participate in innovative liquidity pools that serve actual cross-chain transaction demand, not just speculation.",
      icon: DollarSign,
      features: [
        "Real utility-driven demand",
        "Cross-chain arbitrage opportunities",
        "Vietnamese token pair liquidity",
        "Gaming ecosystem integration",
        "Stable revenue from bridge fees",
      ],
    },
    {
      title: "Exposure to Multiple Ecosystems",
      description:
        "Diversify your liquidity provision across multiple blockchain ecosystems through a single, unified bridge protocol.",
      icon: Layers,
      features: [
        "Multi-chain portfolio exposure",
        "Reduced concentration risk",
        "Access to Vietnamese gaming tokens",
        "Cross-ecosystem arbitrage",
        "Balanced risk distribution",
      ],
    },
    {
      title: "Dynamic Fee Structures and Yield Incentives",
      description:
        "Benefit from intelligent fee optimization and additional yield incentives designed to maximize liquidity provider returns.",
      icon: TrendingUp,
      features: [
        "Dynamic fee adjustment",
        "Volume-based incentives",
        "Vietnamese market bonuses",
        "Long-term staking rewards",
        "Governance token distribution",
      ],
    },
  ];

  const poolTypes = [
    {
      name: "🎮 Gaming Token Pools",
      description: "AXS/ETH, SLP/USDC cross-chain pairs",
      apr: "15-25%",
      risk: "Medium",
      demand: "High",
      tokens: ["AXS", "SLP", "RON", "ETH", "USDC"],
    },
    {
      name: "🇻🇳 Vietnamese Stablecoin Pools",
      description: "VNDC/VNST cross-chain liquidity",
      apr: "8-12%",
      risk: "Low",
      demand: "Stable",
      tokens: ["VNDC", "VNST", "USDT", "USDC"],
    },
    {
      name: "⚡ Cross-Chain Bridge Pools",
      description: "ETH/SOL, BNB/MATIC bridge liquidity",
      apr: "20-35%",
      risk: "High",
      demand: "Very High",
      tokens: ["ETH", "SOL", "BNB", "MATIC", "AVAX"],
    },
    {
      name: "🚀 Vietnamese Innovation Pools",
      description: "KAI/C98, KNC cross-ecosystem pairs",
      apr: "18-28%",
      risk: "Medium-High",
      demand: "Growing",
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
            <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    💰 Liquidity Provider Benefits
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Benefits for Liquidity Providers
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Unlock new yield opportunities by providing liquidity to the
                    Vietnamese blockchain ecosystem's first comprehensive
                    cross-chain bridge.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Benefits */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
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
                          </div>
                          <CardTitle className="text-2xl">
                            {benefit.title}
                          </CardTitle>
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
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 Available Liquidity Pools
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Diverse pool options catering to different risk appetites
                    and focusing on Vietnamese market opportunities.
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
                          <div>
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
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    ⚡ Yield Optimization
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Advanced mechanisms to maximize returns for liquidity
                    providers in the Vietnamese blockchain ecosystem.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <Target className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Smart Rebalancing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Automated pool rebalancing based on Vietnamese market
                        conditions and cross-chain demand patterns.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Vietnamese trading hours optimization</li>
                        <li>• Gaming token demand cycles</li>
                        <li>• Cross-chain arbitrage timing</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <BarChart3 className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Dynamic Fees</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Fee structures that adapt to Vietnamese market
                        volatility and cross-chain transaction volume.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Volume-based fee scaling</li>
                        <li>• Peak demand surcharges</li>
                        <li>• Vietnamese holiday adjustments</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Coins className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Bonus Rewards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Additional incentives for supporting Vietnamese
                        blockchain innovation and ecosystem growth.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Vietnamese token bonuses</li>
                        <li>• Long-term loyalty rewards</li>
                        <li>• Community governance tokens</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="container mx-auto max-w-6xl">
                <Card className="border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">
                      🚀 Start Providing Liquidity
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Join the Vietnamese blockchain revolution and earn
                      competitive yields
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">💎 Premium APR</h4>
                        <p className="text-sm text-muted-foreground">
                          Competitive yields on Vietnamese and cross-chain pairs
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          🛡️ Secure Protocol
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Multi-layer security with Vietnamese market focus
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          📊 Real-Time Analytics
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive dashboard with Vietnamese language
                          support
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          🎯 Targeted Opportunities
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Pools designed for Vietnamese gaming and DeFi
                          ecosystems
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-accent text-white"
                      >
                        Start Providing Liquidity
                      </Button>
                      <Button size="lg" variant="outline">
                        View Pool Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/benefits-developers">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      For Developers
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">Back to Overview</Button>
                  </Link>
                  <Link to="/benefits-vietnam">
                    <Button className="flex items-center gap-2">
                      For Vietnam's Industry
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
