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
  TrendingUp,
  DollarSign,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const UseCases = () => {
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
                    🎯 Real-World Applications
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Use Cases
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover practical scenarios where Lotus Bridge transforms
                    cross-chain interactions for Vietnamese and global users.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-4xl">
                <div className="space-y-8">
                  {/* Use Cases Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ArrowLeftRight className="h-5 w-5" />
                          Cross-Chain Asset Transfers
                        </CardTitle>
                        <CardDescription>
                          Move tokens seamlessly between different blockchain
                          networks
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            Example Scenario
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Move your <strong>VNDC</strong> from Ethereum to
                            Solana to participate in Vietnamese DeFi protocols
                            with lower fees and faster transactions.
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>
                              Support for Vietnamese tokens (VNDC, VNST, AXS,
                              SLP)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>
                              Architecture-agnostic bridging (EVM ↔ Solana)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Secure and reliable transfers</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Repeat className="h-5 w-5" />
                          Chain-to-Chain Swaps
                        </CardTitle>
                        <CardDescription>
                          Exchange tokens across different blockchain ecosystems
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            Example Scenario
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Instantly swap <strong>AXS</strong> on Ronin for{" "}
                            <strong>ETH</strong> on Ethereum, accessing global
                            liquidity from Vietnamese gaming tokens.
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Direct cross-chain token swaps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Best-rate routing across networks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Minimal slippage and fees</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Wallet className="h-5 w-5" />
                          Multi-Wallet Portfolio Management
                        </CardTitle>
                        <CardDescription>
                          Manage assets across multiple wallets and chains
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            Example Scenario
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Bridge and swap between addresses you control on
                            different chains, optimizing your portfolio across{" "}
                            <strong>Ethereum</strong>, <strong>Solana</strong>,
                            and <strong>BNB Chain</strong>.
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>
                              Multi-wallet connectivity (MetaMask, Phantom,
                              etc.)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Cross-chain portfolio optimization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Unified asset management interface</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          Localized DeFi Access
                        </CardTitle>
                        <CardDescription>
                          Participate in DeFi with Vietnamese tokens
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            Example Scenario
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Participate in DeFi protocols using regionally
                            popular tokens like <strong>KAI</strong>,{" "}
                            <strong>C98</strong>, and <strong>SIPHER</strong>{" "}
                            across multiple chains.
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Vietnamese token DeFi integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Cross-chain yield farming opportunities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Local-to-global liquidity access</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Liquidity Routing */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        💰 Liquidity Routing & Arbitrage
                      </CardTitle>
                      <CardDescription>
                        Advanced trading and liquidity provision opportunities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          Lotus Bridge opens up new opportunities for arbitrage
                          and liquidity provision across fragmented pools,
                          especially beneficial for Vietnamese tokens that may
                          have price differences across chains.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            Arbitrage Opportunities
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                Cross-chain price discovery for Vietnamese
                                tokens
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                Automated arbitrage between DEXs on different
                                chains
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                MEV opportunities in cross-chain transactions
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            Liquidity Provision
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                New liquidity pools tied to real usage patterns
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                Exposure to multiple ecosystems through single
                                bridge
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                Dynamic fee structures and yield incentives
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-background/50 p-6 rounded-lg border">
                        <h4 className="font-semibold mb-3">
                          🇻🇳 Vietnamese Token Focus
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Special attention to Vietnamese gaming tokens (AXS,
                          SLP), stablecoins (VNDC, VNST), and ecosystem tokens
                          (KAI, SIPHER, A8, C98, KNC) ensures optimal liquidity
                          routing and arbitrage opportunities for the Vietnamese
                          market.
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
                        Back to Core Concept
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Discover ecosystem benefits
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Learn how Lotus Bridge benefits different stakeholders
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/ecosystem-benefits">
                        Continue to Ecosystem Benefits
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

export default UseCases;
