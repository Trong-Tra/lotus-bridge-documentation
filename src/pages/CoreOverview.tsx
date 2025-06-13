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

const CoreOverview = () => {
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
                    ⚡ Core Capabilities
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Overview
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover what Lotus Bridge enables and how it revolutionizes
                    cross-chain interactions.
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
                        What Lotus Bridge Enables
                      </CardTitle>
                      <CardDescription>
                        Core capabilities that transform cross-chain
                        interactions
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          Lotus Bridge enables a comprehensive suite of
                          cross-chain capabilities designed to make blockchain
                          interoperability seamless, secure, and accessible to
                          Vietnamese and global users alike.
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
                          Token Bridging
                        </CardTitle>
                        <CardDescription>
                          Seamless cross-chain asset transfers
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            Token bridging between heterogeneous blockchains
                          </strong>{" "}
                          (e.g., Ethereum ↔ Solana).
                        </p>
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">Example</h4>
                          <p className="text-sm text-muted-foreground">
                            Move VNDC from Ethereum to Solana to access lower
                            fees and faster transactions while maintaining full
                            asset control.
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Architecture-agnostic bridging</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Secure custody mechanisms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Real-time transaction tracking</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Repeat className="h-5 w-5" />
                          Cross-Chain Swaps
                        </CardTitle>
                        <CardDescription>
                          Direct token exchanges across networks
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            Asset swaps within the same chain or across
                            different chains.
                          </strong>
                        </p>
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">Example</h4>
                          <p className="text-sm text-muted-foreground">
                            Instantly swap AXS on Ronin for ETH on Ethereum,
                            accessing global liquidity from Vietnamese gaming
                            tokens.
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Best-rate routing algorithms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Minimal slippage optimization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Atomic swap guarantees</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Wallet className="h-5 w-5" />
                          Multi-Wallet Management
                        </CardTitle>
                        <CardDescription>
                          Unified interface for multiple wallets
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            Multi-wallet connection and management
                          </strong>{" "}
                          with address mapping across architectures.
                        </p>
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            Supported Wallets
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">MetaMask</Badge>
                            <Badge variant="outline">Phantom</Badge>
                            <Badge variant="outline">Trust Wallet</Badge>
                            <Badge variant="outline">WalletConnect</Badge>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Cross-platform wallet connectivity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Unified transaction interface</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Portfolio aggregation</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          Flexible Transactions
                        </CardTitle>
                        <CardDescription>
                          Advanced transaction capabilities
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>
                            Transactions between same or different user
                            addresses
                          </strong>{" "}
                          with advanced routing options.
                        </p>
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">
                            Transaction Types
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Wallet-to-wallet (same user)</li>
                            <li>• Cross-address transfers</li>
                            <li>• Batch transactions</li>
                            <li>• Scheduled transfers</li>
                          </ul>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Flexible recipient addressing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Advanced transaction routing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Gas optimization strategies</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Vietnamese Token Support */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        🇻🇳 Vietnamese Token Integration
                      </CardTitle>
                      <CardDescription>
                        Native support for popular Vietnamese tokens
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          <strong>
                            Localization and native support for Vietnamese
                            tokens
                          </strong>{" "}
                          such as AXS, SLP, VNDC, VNST, KAI, SIPHER, A8, C98,
                          and KNC.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            Gaming Tokens
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge>AXS</Badge>
                              <span className="text-sm text-muted-foreground">
                                Axie Infinity
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge>SLP</Badge>
                              <span className="text-sm text-muted-foreground">
                                Smooth Love Potion
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge>SIPHER</Badge>
                              <span className="text-sm text-muted-foreground">
                                Sipher
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            Stablecoins
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">VNDC</Badge>
                              <span className="text-sm text-muted-foreground">
                                VND Coin
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">VNST</Badge>
                              <span className="text-sm text-muted-foreground">
                                VND Stablecoin
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            Ecosystem Tokens
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">KAI</Badge>
                              <span className="text-sm text-muted-foreground">
                                KardiaChain
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">C98</Badge>
                              <span className="text-sm text-muted-foreground">
                                Coin98
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">KNC</Badge>
                              <span className="text-sm text-muted-foreground">
                                Kyber Network
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-background/50 p-6 rounded-lg border">
                        <h4 className="font-semibold mb-3">Priority Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Vietnamese tokens receive priority optimization for
                          routing, liquidity access, and fee structures,
                          ensuring the best possible experience for local users
                          while facilitating global market access.
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
                        Explore the architecture
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Learn how our modular design enables these capabilities
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/architecture">
                        Continue to Architecture
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
