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
  Users,
  Wallet,
  Globe,
  Zap,
  ArrowRight,
  ArrowLeft,
  Heart,
  Target,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsUsers = () => {
  const { t, language } = useLanguage();

  const userBenefits = [
    {
      title: "Simplified Access to Global DeFi",
      description:
        "Navigate the complex DeFi landscape with ease, accessing protocols across multiple chains through a single, intuitive interface.",
      icon: Globe,
      features: [
        "One-click access to multiple DeFi protocols",
        "Unified portfolio management across chains",
        "Simplified transaction routing",
        "Reduced complexity for beginners",
      ],
    },
    {
      title: "Local-First Design with Vietnamese Token Support",
      description:
        "Enjoy a platform designed specifically for Vietnamese users, with native support for popular local tokens and cultural preferences.",
      icon: Heart,
      features: [
        "Native AXS, SLP, VNDC, VNST support",
        "Vietnamese language interface",
        "Local payment method integration",
        "Cultural UI/UX design elements",
      ],
    },
    {
      title: "Flexible Transaction Routing",
      description:
        "Experience unparalleled flexibility in how you move and use your assets across multiple blockchain networks.",
      icon: Target,
      features: [
        "Cross-chain asset transfers",
        "Multi-wallet transaction support",
        "Optimal routing algorithms",
        "Gas optimization across chains",
      ],
    },
  ];

  const scenarioCards = [
    {
      title: "🎮 Gaming Enthusiast",
      scenario: "Move AXS tokens from Ronin to Ethereum for DeFi opportunities",
      benefit: "Access global DeFi yields while keeping gaming assets active",
      tokens: ["AXS", "SLP", "RON"],
    },
    {
      title: "💰 DeFi Investor",
      scenario:
        "Swap VNDC for ETH across chains to participate in new protocols",
      benefit: "Seamless Vietnamese stablecoin integration with global DeFi",
      tokens: ["VNDC", "VNST", "ETH"],
    },
    {
      title: "🚀 Crypto Trader",
      scenario:
        "Arbitrage opportunities between Vietnamese and international exchanges",
      benefit: "Quick cross-chain transfers for time-sensitive trading",
      tokens: ["KAI", "C98", "KNC"],
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
                    👥 User Benefits
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Benefits for Users
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover how Lotus Bridge empowers Vietnamese users to
                    access global DeFi opportunities with local-first design and
                    seamless cross-chain functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Benefits */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="grid gap-8">
                  {userBenefits.map((benefit, index) => {
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

            {/* User Scenarios */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🇻🇳 Real Vietnamese User Scenarios
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    See how Lotus Bridge creates value for different types of
                    Vietnamese crypto users.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {scenarioCards.map((scenario, index) => (
                    <Card key={index} className="relative overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {scenario.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {scenario.scenario}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h4 className="font-semibold text-green-600 mb-2">
                            ✅ Benefit:
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {scenario.benefit}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            🪙 Supported Tokens:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {scenario.tokens.map((token, tokenIndex) => (
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

            {/* Vietnamese Token Showcase */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 Vietnamese Token Integration
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Lotus Bridge natively supports the most popular tokens in
                    the Vietnamese crypto ecosystem.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      token: "AXS",
                      name: "Axie Infinity",
                      chain: "Ronin",
                      color: "bg-blue-500",
                    },
                    {
                      token: "SLP",
                      name: "Smooth Love Potion",
                      chain: "Ronin",
                      color: "bg-pink-500",
                    },
                    {
                      token: "VNDC",
                      name: "VND Coin",
                      chain: "Multiple",
                      color: "bg-red-500",
                    },
                    {
                      token: "VNST",
                      name: "Vietnam Stable Token",
                      chain: "Multiple",
                      color: "bg-green-500",
                    },
                    {
                      token: "KAI",
                      name: "KardiaChain",
                      chain: "Kardia",
                      color: "bg-purple-500",
                    },
                    {
                      token: "C98",
                      name: "Coin98",
                      chain: "Multiple",
                      color: "bg-yellow-500",
                    },
                    {
                      token: "KNC",
                      name: "Kyber Network",
                      chain: "Ethereum",
                      color: "bg-indigo-500",
                    },
                    {
                      token: "SIPHER",
                      name: "Sipher",
                      chain: "Ethereum",
                      color: "bg-teal-500",
                    },
                  ].map((token, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div
                          className={`w-12 h-12 ${token.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold`}
                        >
                          {token.token.slice(0, 2)}
                        </div>
                        <CardTitle className="text-lg">{token.token}</CardTitle>
                        <CardDescription>{token.name}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="outline" className="text-xs">
                          {token.chain}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/ecosystem-benefits">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Ecosystem Benefits
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">Back to Overview</Button>
                  </Link>
                  <Link to="/benefits-developers">
                    <Button className="flex items-center gap-2">
                      For Developers
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

export default BenefitsUsers;
