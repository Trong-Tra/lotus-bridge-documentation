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
  Globe,
  ArrowRight,
  ArrowLeft,
  Zap,
  Layers,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const WhatIsLotus = () => {
  const { t, language } = useLanguage();

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
                    🌸 Universal Adapter
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    What is Lotus Bridge?
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A dynamic, universal adapter between blockchains that
                    transcends traditional bridging limitations.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Core Definition */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Network className="h-5 w-5" />
                        Dynamic Universal Adapter
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          Lotus Bridge is a{" "}
                          <strong>
                            decentralized application (dApp) and infrastructure
                            protocol
                          </strong>{" "}
                          that allows users to connect wallets and bridge assets
                          across multiple blockchain networks—regardless of
                          their architecture, consensus mechanisms, or token
                          standards.
                        </p>

                        <p className="text-lg leading-relaxed">
                          With the ability to adapt to any exchange method
                          supported by the connected networks,{" "}
                          <strong>
                            Lotus is more than a bridge: it is a dynamic,
                            universal adapter between blockchains.
                          </strong>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Capabilities */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-primary/20">
                      <CardHeader className="text-center pb-4">
                        <Globe className="h-12 w-12 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          Cross-Architecture
                        </CardTitle>
                        <CardDescription>
                          Bridge between entirely different blockchain
                          architectures
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          Connect Ethereum to Solana, BNB Chain to Polygon, and
                          more - regardless of underlying technology
                          differences.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader className="text-center pb-4">
                        <Layers className="h-12 w-12 text-accent mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          Multi-Wallet Support
                        </CardTitle>
                        <CardDescription>
                          Connect and manage multiple wallets simultaneously
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          Seamlessly interact with MetaMask, Phantom, and other
                          wallets in a unified interface.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader className="text-center pb-4">
                        <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          Adaptive Protocol
                        </CardTitle>
                        <CardDescription>
                          Automatically adapts to available exchange methods
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          Dynamically selects the best bridging method based on
                          network capabilities and user preferences.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Core Functions */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Core Functions
                      </CardTitle>
                      <CardDescription>
                        What Lotus Bridge enables for users
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">Wallet Connection</h4>
                              <p className="text-sm text-muted-foreground">
                                Connect wallets from different blockchain
                                ecosystems
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">Asset Bridging</h4>
                              <p className="text-sm text-muted-foreground">
                                Transfer assets across heterogeneous networks
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">Cross-Chain Swaps</h4>
                              <p className="text-sm text-muted-foreground">
                                Exchange tokens across different blockchain
                                networks
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                Flexible Transfers
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Send to same or different user addresses
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">Token Standards</h4>
                              <p className="text-sm text-muted-foreground">
                                Support for various token standards and types
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">Vietnamese Tokens</h4>
                              <p className="text-sm text-muted-foreground">
                                Native support for AXS, SLP, VNDC, VNST, and
                                more
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/introduction">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Introduction
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Understanding the mission
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Learn why Lotus Bridge was created and its cultural
                        significance
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/why-lotus">
                        Continue to Why Lotus?
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

export default WhatIsLotus;
