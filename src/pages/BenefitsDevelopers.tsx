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
  Code,
  Building,
  Wrench,
  Globe,
  ArrowRight,
  ArrowLeft,
  Terminal,
  Layers,
  FileCode,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsDevelopers = () => {
  const { t, language } = useLanguage();

  const builderOpportunities = [
    {
      title: "Smart Contract Integration Opportunities",
      description:
        "Build innovative smart contracts that leverage Lotus Bridge protocol for cross-chain functionality and Vietnamese token integration.",
      icon: Code,
      features: [
        "Cross-chain DeFi protocols",
        "Vietnamese gaming token utilities",
        "Multi-chain yield farming contracts",
        "Cross-border payment solutions",
        "NFT marketplace integration",
      ],
    },
    {
      title: "dApp Development Ecosystem",
      description:
        "Create revolutionary decentralized applications using Lotus Bridge as the backbone for seamless cross-chain user experiences.",
      icon: Globe,
      features: [
        "Vietnamese-first dApp experiences",
        "Gaming ecosystem applications",
        "Cross-chain portfolio managers",
        "Local remittance platforms",
        "Cultural token communities",
      ],
    },
    {
      title: "DeFi Innovation Opportunities",
      description:
        "Pioneer new DeFi protocols and financial products that serve the Vietnamese market while connecting to global liquidity.",
      icon: Layers,
      features: [
        "Vietnamese stablecoin protocols",
        "Cross-chain lending platforms",
        "Gaming token derivatives",
        "Local asset tokenization",
        "Yield optimization strategies",
      ],
    },
  ];

  const startupOpportunities = [
    {
      title: "Cross-Chain Gaming Studios",
      category: "Gaming & Entertainment",
      description:
        "Build gaming platforms that seamlessly integrate AXS, SLP, and other Vietnamese gaming tokens across multiple blockchains.",
      marketSize: "$2B+ Vietnamese gaming market",
      examples: [
        "Play-to-earn ecosystems",
        "Cross-chain NFT games",
        "Gaming token bridges",
      ],
      icon: Target,
    },
    {
      title: "Vietnamese DeFi Protocols",
      category: "DeFi & Finance",
      description:
        "Create DeFi protocols specifically designed for Vietnamese users, featuring local tokens and cultural preferences.",
      marketSize: "$500M+ Vietnamese crypto market",
      examples: [
        "VNDC/VNST yield farming",
        "Local lending protocols",
        "Cross-chain remittance",
      ],
      icon: Building,
    },
    {
      title: "Enterprise Blockchain Solutions",
      category: "B2B & Enterprise",
      description:
        "Develop blockchain solutions for Vietnamese businesses looking to integrate cross-chain functionality.",
      marketSize: "Growing enterprise adoption",
      examples: [
        "Supply chain tracking",
        "Cross-border payments",
        "Digital identity solutions",
      ],
      icon: Wrench,
    },
  ];

  const builderResources = [
    {
      title: "Lotus Bridge SDK",
      description:
        "Comprehensive development kit with Vietnamese documentation",
      features: [
        "TypeScript/JavaScript",
        "Python bindings",
        "Smart contract libraries",
      ],
      icon: Code,
    },
    {
      title: "Grant Program",
      description: "Funding for innovative projects building on Lotus Bridge",
      features: [
        "Up to $50K grants",
        "Technical mentorship",
        "Go-to-market support",
      ],
      icon: Rocket,
    },
    {
      title: "Builder Community",
      description: "Vietnamese developer community with local language support",
      features: ["Discord channels", "Local meetups", "Hackathon events"],
      icon: Terminal,
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
                    🏗️ Builder Opportunities
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Benefits for Builders
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Leverage Lotus Bridge protocol to build innovative smart
                    contracts, create revolutionary dApps, unlock new DeFi
                    opportunities, and launch successful startups in the
                    Vietnamese blockchain ecosystem.
                  </p>
                </div>
              </div>
            </section>

            {/* Builder Opportunities */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🚀 Building Opportunities
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover how to leverage Lotus Bridge protocol to create
                    innovative solutions for the Vietnamese blockchain
                    ecosystem.
                  </p>
                </div>

                <div className="grid gap-8">
                  {builderOpportunities.map((opportunity, index) => {
                    const IconComponent = opportunity.icon;
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
                              {opportunity.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {opportunity.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {opportunity.features.map(
                              (feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full" />
                                  <span className="text-sm font-medium">
                                    {feature}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Startup Opportunities */}
            <section className="py-10 px-6 bg-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    💡 Startup Opportunities
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Entrepreneurial opportunities for ambitious builders looking
                    to create the next generation of Vietnamese blockchain
                    companies.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {startupOpportunities.map((startup, index) => {
                    const IconComponent = startup.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-3">
                            <IconComponent className="h-6 w-6 text-primary" />
                            <Badge variant="outline" className="text-xs">
                              {startup.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">
                            {startup.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {startup.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-green-600 mb-2">
                                📈 Market Opportunity:
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {startup.marketSize}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">
                                🎯 Example Applications:
                              </h4>
                              <ul className="text-sm space-y-1">
                                {startup.examples.map(
                                  (example, exampleIndex) => (
                                    <li key={exampleIndex}>• {example}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Builder Resources */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🛠️ Builder Resources & Support
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to start building on Lotus Bridge today,
                    with dedicated support for Vietnamese developers.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {builderResources.map((resource, index) => {
                    const IconComponent = resource.icon;
                    return (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="h-6 w-6 text-primary" />
                            <CardTitle>{resource.title}</CardTitle>
                          </div>
                          <CardDescription>
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {resource.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full mt-4" variant="outline">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Vietnamese Builder Community */}
            <section className="py-10 px-6 bg-gradient-to-r from-red-50 to-yellow-50 border-t border-red-200">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🇻🇳 Vietnamese Builder Community
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join a thriving community of Vietnamese blockchain builders
                    creating the future of Web3 in Vietnam.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center">
                    <CardHeader>
                      <Terminal className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">Builder Forum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Vietnamese-language technical discussions and project
                        showcases
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Layers className="h-8 w-8 text-accent mx-auto mb-2" />
                      <CardTitle className="text-lg">Hackathons</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Regular events focused on Vietnamese blockchain
                        innovation
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">Mentorship</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect with experienced Vietnamese blockchain
                        entrepreneurs
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <FileCode className="h-8 w-8 text-accent mx-auto mb-2" />
                      <CardTitle className="text-lg">Open Source</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Contribute to Vietnamese blockchain tooling and
                        libraries
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="py-10 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="container mx-auto max-w-5xl">
                <Card className="border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">
                      🚀 Start Building Today
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Ready to leverage Lotus Bridge protocol for your next
                      breakthrough project?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          📚 Builder Documentation
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Complete guides for smart contract integration and
                          dApp development
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          💰 Grant Opportunities
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Funding and support for innovative Vietnamese
                          blockchain projects
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          🤝 Partnership Program
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Strategic partnerships for promising startups and
                          projects
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">🎯 Market Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Direct access to Vietnamese crypto market and user
                          base
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
                  <Link to="/benefits-users">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      For Users
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">Back to Overview</Button>
                  </Link>
                  <Link to="/benefits-liquidity">
                    <Button className="flex items-center gap-2">
                      For Liquidity Providers
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

export default BenefitsDevelopers;
