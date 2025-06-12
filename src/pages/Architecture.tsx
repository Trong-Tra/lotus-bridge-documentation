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
  GitBranch,
  Wallet,
  Globe,
  Shield,
  ArrowRight,
  ArrowLeft,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Architecture = () => {
  const { t, language } = useLanguage();

  const architectureLayers = [
    {
      layer: 1,
      name: "Network Adapter Layer",
      description:
        "Interfaces with various blockchain protocols, extracting transaction methods and enabling compatibility across chains.",
      icon: Network,
      features: [
        "Protocol abstraction",
        "Transaction method extraction",
        "Cross-chain compatibility",
        "Dynamic adapter loading",
      ],
    },
    {
      layer: 2,
      name: "Bridge Orchestration Layer",
      description:
        "Coordinates transaction logic, handles validation, and manages state transitions between networks.",
      icon: GitBranch,
      features: [
        "Transaction coordination",
        "State management",
        "Validation handling",
        "Cross-chain messaging",
      ],
    },
    {
      layer: 3,
      name: "Wallet Management Layer",
      description:
        "Supports multi-wallet connectivity and address mapping across architectures.",
      icon: Wallet,
      features: [
        "Multi-wallet support",
        "Address mapping",
        "Cross-architecture compatibility",
        "Session management",
      ],
    },
    {
      layer: 4,
      name: "Localization Layer",
      description:
        "Provides localized content, user flows, and token compatibility tailored to the Vietnamese ecosystem.",
      icon: Globe,
      features: [
        "Vietnamese language support",
        "Local token integration",
        "Cultural UX adaptation",
        "Regional compliance",
      ],
    },
    {
      layer: 5,
      name: "Security & Validation Layer",
      description:
        "Incorporates decentralized validation mechanisms, rate-limiting, fraud detection, and fail-safes.",
      icon: Shield,
      features: [
        "Decentralized validation",
        "Rate limiting",
        "Fraud detection",
        "Emergency fail-safes",
      ],
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
                    🏗️ System Architecture
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Lotus Bridge Architecture
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A modular, five-layer architecture designed for maximum
                    flexibility, security, and Vietnamese market integration.
                  </p>
                </div>
              </div>
            </section>

            {/* Architecture Overview */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Modular Design Philosophy
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Lotus Bridge's architecture is built on five distinct
                    layers, each designed to handle specific aspects of
                    cross-chain interoperability while maintaining Vietnamese
                    cultural and technical priorities.
                  </p>
                </div>

                <div className="grid gap-8">
                  {architectureLayers.map((layer, index) => {
                    const IconComponent = layer.icon;
                    return (
                      <Card
                        key={layer.layer}
                        className="relative overflow-hidden"
                      >
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
                            <Badge variant="secondary">
                              Layer {layer.layer}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl">
                            {layer.name}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {layer.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {layer.features.map((feature, featureIndex) => (
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

            {/* Technical Features */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🇻🇳 Vietnamese-First Design
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Every layer of our architecture considers the unique needs
                    of Vietnamese users and the local crypto ecosystem.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <Layers className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Adaptive Protocol Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Dynamic adaptation to different blockchain protocols,
                        including Vietnamese-popular networks like Ronin and
                        KardiaChain.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Network className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Multi-Chain Orchestration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Seamless coordination between different blockchain
                        architectures, from EVM to Solana to custom Vietnamese
                        chains.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Shield className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Enterprise Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Multiple layers of security validation, designed to
                        protect high-value Vietnamese gaming and DeFi assets.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/core-overview">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Core Overview
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">Back to Core Concept</Button>
                  </Link>
                  <Link to="/consensus">
                    <Button className="flex items-center gap-2">
                      Consensus Mechanism
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

export default Architecture;
