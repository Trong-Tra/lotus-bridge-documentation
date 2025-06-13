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

const Background = () => {
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
                    🌍 Industry Landscape
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Background
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Understanding the blockchain ecosystem challenges that Lotus
                    Bridge was designed to solve.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-4xl">
                <div className="space-y-8">
                  {/* Problem Statement Card - Enhanced from Whitepaper */}
                  <Card className="border-destructive/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        <Globe className="h-5 w-5" />
                        🌍 The Problem: A Fragmented World of Chains
                      </CardTitle>
                      <CardDescription>
                        Understanding the blockchain interoperability crisis
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Today's blockchain landscape is vast, vibrant, and…
                        fractured. Ethereum. Solana. BNB Chain. Polygon. Cosmos.
                        Each network speaks its own language, runs on its own
                        logic, and is home to unique communities and ecosystems.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        But for the average user — especially those in emerging
                        markets like Vietnam — navigating this complexity feels
                        like crossing rivers with no bridges.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                          <h4 className="font-semibold text-destructive mb-2">
                            Current Challenges
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>
                              • You want to swap an asset from Solana to
                              Ethereum? You'll need multiple steps, tools,
                              wallets, bridges
                            </li>
                            <li>
                              • Often clunky, risky, or downright impossible if
                              networks have fundamentally different
                              architectures
                            </li>
                            <li>
                              • Vietnamese tokens like VNDC, VNST, KNC, and C98?
                              Often excluded from global bridging conversations
                            </li>
                            <li>
                              • Global adoption? Stunted by exclusion.
                              Liquidity? Siloed. Users? Confused.
                            </li>
                          </ul>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">The Result</h4>
                          <p className="text-sm text-muted-foreground">
                            The dream of a unified Web3 world remains out of
                            reach. Each blockchain becomes an island, and users
                            are left to navigate treacherous waters between
                            them.
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
                        🌸 Enter Lotus Bridge – Blooming Unity From Diversity
                      </CardTitle>
                      <CardDescription>
                        A Vietnamese-inspired solution for global blockchain
                        interoperability
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Inspired by the Lotus — a sacred symbol of purity,
                        resilience, and rebirth in Vietnamese culture — Lotus
                        Bridge rises as a trustless, multi-chain,
                        architecture-agnostic super-bridge.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-background/50 rounded-lg border">
                          <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold mb-2">
                            Universal Bridge Layer
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Able to adapt to any exchange method used in any
                            network it connects to.
                          </p>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg border">
                          <Network className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold mb-2">
                            Cross-Architecture Connector
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Swap and send across chains that don't even share
                            address formats or VM compatibilities.
                          </p>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg border">
                          <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold mb-2">
                            Multi-Wallet Portal
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Bridging and swapping across tokens, user
                            identities, Vietnamese and global assets.
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
                          Technical Limitations
                        </CardTitle>
                        <CardDescription>
                          What existing bridges struggle with
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Limited to EVM-compatible chains
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Complex user interactions required
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              High risk of funds loss or delays
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Poor support for diverse architectures
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                          <Globe className="h-5 w-5" />
                          Market Barriers
                        </CardTitle>
                        <CardDescription>
                          Challenges for regional adoption
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Regional tokens lack global access
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Poor localization and UX
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Fragmented liquidity pools
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Limited developer resources
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
                        <Flag className="h-5 w-5" />
                        🇻🇳 Vietnam's Crypto Leadership
                      </CardTitle>
                      <CardDescription>
                        A thriving ecosystem with untapped potential
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          <strong>
                            Vietnam has emerged as one of the most crypto-savvy
                            nations
                          </strong>
                          , yet local users face barriers in accessing global
                          liquidity with Vietnamese-origin tokens.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            Market Strengths
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                High crypto adoption rates
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Strong gaming and NFT communities
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Growing DeFi participation
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Tech-savvy user base
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            Popular Vietnamese Tokens
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">AXS</Badge>
                            <Badge variant="outline">SLP</Badge>
                            <Badge variant="outline">VNDC</Badge>
                            <Badge variant="outline">VNST</Badge>
                            <Badge variant="outline">KAI</Badge>
                            <Badge variant="outline">SIPHER</Badge>
                            <Badge variant="outline">A8</Badge>
                            <Badge variant="outline">C98</Badge>
                            <Badge variant="outline">KNC</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            These tokens often struggle to access global
                            liquidity and cross-chain opportunities.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* The Solution Need */}
                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <TrendingUp className="h-5 w-5" />
                        The Critical Gap
                      </CardTitle>
                      <CardDescription>
                        Why Lotus Bridge was needed
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          Lotus Bridge addresses this critical gap by offering a{" "}
                          <strong>
                            highly adaptable, regionally-conscious, and
                            technologically advanced bridge
                          </strong>{" "}
                          that connects Vietnamese innovation with global
                          opportunities.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            Adaptable
                          </h4>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            Works across any blockchain architecture
                          </p>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            Regional
                          </h4>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            Built with Vietnamese needs in mind
                          </p>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            Advanced
                          </h4>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            Cutting-edge technology and security
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
                        Back to Why Lotus?
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Discover the solution
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Learn about Lotus Bridge's core concepts and
                        architecture
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/core-concept">
                        Continue to Core Concept
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
