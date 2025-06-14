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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wallet,
  ArrowRightLeft,
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect } from "react";

const UserGuides = () => {
  const { t } = useLanguage();

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
                    {t("userGuides.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    User Guides
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Step-by-step instructions on how to bridge assets across
                    supported blockchain networks, with guidance tailored for
                    both general users and Viet Nam region-specific tokens
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Tabs defaultValue="getting-started" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="getting-started">
                      {t("userGuides.gettingStarted")}
                    </TabsTrigger>
                    <TabsTrigger value="bridging">
                      {t("userGuides.tokenBridging")}
                    </TabsTrigger>
                    <TabsTrigger value="security">
                      {t("userGuides.securityBestPractices")}
                    </TabsTrigger>
                    <TabsTrigger value="troubleshooting">
                      {t("userGuides.troubleshooting")}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="getting-started" className="space-y-8">
                    {/* Vietnamese Token Spotlight */}
                    <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">🇻🇳</span>
                          <CardTitle className="text-green-800 dark:text-green-400">
                            Vietnamese Token Support
                          </CardTitle>
                        </div>
                        <CardDescription>
                          Lotus Bridge provides native support for Vietnamese
                          tokens often neglected by other platforms
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://coin-images.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1696512817"
                              alt="AXS"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-blue-600">AXS</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              Axie Infinity
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://coin-images.coingecko.com/coins/images/10366/large/SLP.png?1696510368"
                              alt="SLP"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-green-600">SLP</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              Smooth Love Potion
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://assets.coingecko.com/coins/images/9670/standard/vndc-gold-coin.png?1696509740"
                              alt="VNDC"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-purple-600">VNDC</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              VND Coin
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://vnst.io/_next/image?url=%2Fassets%2Fimages%2Fcryptos%2Fvnst.png&w=96&q=75"
                              alt="VNST"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-orange-600">VNST</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              VN Stable Token
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://assets.coingecko.com/coins/images/7942/standard/kai.png?1696508172"
                              alt="KAI"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-red-600">KAI</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              KardiaChain
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://assets.coingecko.com/coins/images/21070/standard/SipherToken.png?1696520453"
                              alt="SIPHER"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-indigo-600">SIPHER</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              Sipher Token
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://assets.coingecko.com/coins/images/17117/standard/logo.png?1696516677"
                              alt="C98"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-yellow-600">C98</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              Coin98
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center token-icon-hover">
                            <img
                              src="https://assets.coingecko.com/coins/images/14899/standard/RwdVsGcw_400x400.jpg?1696514562"
                              alt="KNC"
                              className="w-8 h-8 mx-auto mb-2 rounded-full"
                            />
                            <strong className="text-teal-600">KNC</strong>
                            <br />
                            <span className="text-xs text-muted-foreground">
                              Kyber Network Crystal
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Use Cases Examples */}
                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ArrowRightLeft className="h-5 w-5" />
                          Real-World Use Cases
                        </CardTitle>
                        <CardDescription>
                          Examples of how to use Lotus Bridge for common
                          Vietnamese token scenarios
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">
                              🔄 Cross-chain Asset Transfer
                            </h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              "Move your VNDC from Ethereum to Solana to access
                              lower fees and faster transactions"
                            </p>
                          </div>
                          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded border border-green-200 dark:border-green-800">
                            <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                              ⚡ Chain-to-chain Swaps
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              "Instantly swap AXS on Ronin for ETH on Ethereum
                              without multiple steps"
                            </p>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded border border-purple-200 dark:border-purple-800">
                            <h4 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">
                              💼 Multi-wallet Management
                            </h4>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              "Bridge and swap between addresses you control on
                              different chains"
                            </p>
                          </div>
                          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded border border-orange-200 dark:border-orange-800">
                            <h4 className="font-semibold text-orange-800 dark:text-orange-400 mb-2">
                              🌏 Localized DeFi
                            </h4>
                            <p className="text-sm text-orange-700 dark:text-orange-300">
                              "Participate in DeFi protocols using regionally
                              popular Vietnamese tokens"
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Wallet Recommendations - Full Width */}
                    <Card className="border-primary/20">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Wallet className="h-5 w-5 text-primary" />
                          <CardTitle>Wallet Recommendations</CardTitle>
                        </div>
                        <CardDescription>
                          Choose the best wallet for your network and experience
                          level
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Wallet Recommendations */}
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* MetaMask for Beginners */}
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                  🦊
                                </span>
                                <div>
                                  <h4 className="font-semibold text-blue-800 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors duration-300">
                                    MetaMask
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors duration-300"
                                  >
                                    Beginner Friendly
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                                Perfect for newcomers to DeFi. Simple interface
                                with excellent tutorials and widespread
                                compatibility.
                              </p>
                              <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                                <div>✓ Easy setup and onboarding</div>
                                <div>✓ Wide ecosystem support</div>
                                <div>✓ Excellent for basic usage</div>
                                <div>✓ Great educational resources</div>
                              </div>
                            </div>

                            {/* Rabby for Advanced EVM */}
                            <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                  🐰
                                </span>
                                <div>
                                  <h4 className="font-semibold text-purple-800 dark:text-purple-400 group-hover:text-purple-900 dark:group-hover:text-purple-300 transition-colors duration-300">
                                    Rabby Wallet
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors duration-300"
                                  >
                                    EVM Advanced
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3 group-hover:text-purple-800 dark:group-hover:text-purple-200 transition-colors duration-300">
                                Superior UI/UX with better asset management
                                across EVM chains. Perfect for power users.
                              </p>
                              <div className="text-xs text-purple-600 dark:text-purple-400 space-y-1 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                                <div>✓ Beautiful, intuitive interface</div>
                                <div>✓ Advanced multi-chain view</div>
                                <div>✓ Better asset control</div>
                                <div>✓ Enhanced security features</div>
                              </div>
                            </div>

                            {/* Phantom for Solana */}
                            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                  👻
                                </span>
                                <div>
                                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-400 group-hover:text-indigo-900 dark:group-hover:text-indigo-300 transition-colors duration-300">
                                    Phantom
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900 transition-colors duration-300"
                                  >
                                    Solana
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-3 group-hover:text-indigo-800 dark:group-hover:text-indigo-200 transition-colors duration-300">
                                The most popular and trusted wallet for Solana
                                ecosystem with native SPL token support.
                              </p>
                              <div className="text-xs text-indigo-600 dark:text-indigo-400 space-y-1 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                                <div>✓ Solana native integration</div>
                                <div>✓ Lightning fast transactions</div>
                                <div>✓ Built-in NFT support</div>
                                <div>✓ DeFi protocol optimization</div>
                              </div>
                            </div>

                            {/* Sui Wallet */}
                            <div className="bg-teal-50 dark:bg-teal-950/20 p-6 rounded-lg border border-teal-200 dark:border-teal-800 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                  🌊
                                </span>
                                <div>
                                  <h4 className="font-semibold text-teal-800 dark:text-teal-400 group-hover:text-teal-900 dark:group-hover:text-teal-300 transition-colors duration-300">
                                    Slush Wallet
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs group-hover:bg-teal-200 dark:group-hover:bg-teal-900 transition-colors duration-300"
                                  >
                                    Sui Network
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-teal-700 dark:text-teal-300 mb-3 group-hover:text-teal-800 dark:group-hover:text-teal-200 transition-colors duration-300">
                                Official wallet developed by Mysten Labs for
                                optimal Sui blockchain experience.
                              </p>
                              <div className="text-xs text-teal-600 dark:text-teal-400 space-y-1 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                                <div>✓ Official Mysten Labs support</div>
                                <div>✓ Sui blockchain optimized</div>
                                <div>✓ Advanced object management</div>
                                <div>✓ Move language integration</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Connection Steps */}
                        <div className="space-y-4 border-t pt-6">
                          <h4 className="font-semibold text-lg mb-4">
                            How to Connect Your Wallet:
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary text-white text-sm flex items-center justify-center mt-0.5">
                                1
                              </div>
                              <div>
                                <p className="font-medium">
                                  Install Your Preferred Wallet
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Download the recommended wallet for your
                                  target network from official sources
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary text-white text-sm flex items-center justify-center mt-0.5">
                                2
                              </div>
                              <div>
                                <p className="font-medium">
                                  Click "Connect Wallet"
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Find the connect button in the top right
                                  corner of the Lotus Bridge interface
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary text-white text-sm flex items-center justify-center mt-0.5">
                                3
                              </div>
                              <div>
                                <p className="font-medium">
                                  Approve Connection
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Authorize Lotus Bridge to view your wallet
                                  address and interact securely
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center pt-4">
                            <Button size="lg" className="px-8">
                              View Detailed Setup Guides
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="bridging" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <ArrowRightLeft className="h-5 w-5 text-primary" />
                          <CardTitle>How to Bridge Tokens</CardTitle>
                        </div>
                        <CardDescription>
                          Complete walkthrough of the token bridging process
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Bridging Process Diagram Placeholder */}
                        <div className="bg-muted/30 rounded-lg p-8 text-center border-2 border-dashed border-muted-foreground/30">
                          <div className="text-muted-foreground">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="font-semibold text-lg mb-2">
                              Bridging Process Diagram
                            </h3>
                            <p className="text-sm">[Diagram Coming Soon]</p>
                            <p className="text-xs mt-2 text-muted-foreground/70">
                              Awaiting Gia Bao completion of the visual bridging
                              flow diagram
                            </p>
                          </div>
                        </div>

                        <div className="bg-muted/30 rounded-lg p-6 cursor-default">
                          <h4 className="font-semibold mb-4">
                            Supported Networks
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/1/light.png"
                                alt="Ethereum"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">
                                Ethereum
                              </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/56/light.png"
                                alt="BSC"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">BSC</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/137/light.png"
                                alt="Polygon"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">
                                Polygon
                              </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/43114/light.png"
                                alt="Avalanche"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">
                                Avalanche
                              </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/8453/light.png"
                                alt="Base"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">Base</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/10/light.png"
                                alt="Optimism"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">
                                Optimism
                              </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/792703809/light.png"
                                alt="Solana"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">
                                Solana
                              </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/673ca438b041dcc7ecb0f0ce_Logo.png"
                                alt="Sui"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">Sui</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/2020/light.png"
                                alt="Ronin"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">Ronin</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/2741/light.png"
                                alt="Abstract"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">
                                Abstract
                              </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border cursor-default">
                              <img
                                src="https://assets.relay.link/icons/square/1135/light.png"
                                alt="Lisk"
                                className="w-8 h-8 rounded-lg"
                              />
                              <span className="font-medium text-sm">Lisk</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-dashed border-blue-300 dark:border-blue-700 cursor-default">
                              <span className="text-2xl">⋯</span>
                              <div className="text-center">
                                <p className="font-medium text-sm text-blue-800 dark:text-blue-400">
                                  +50 More
                                </p>
                                <p className="text-xs text-blue-600 dark:text-blue-500">
                                  Networks
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="text-center pt-2 cursor-default">
                            <p className="text-sm text-muted-foreground">
                              New networks are continuously being added to
                              expand cross-chain capabilities
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-8">
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-amber-600" />
                          <CardTitle>Security Best Practices</CardTitle>
                        </div>
                        <CardDescription>
                          Protect your assets while using cross-chain bridges
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Always verify the bridge URL
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Bookmark the official URL and avoid clicking
                                links from unknown sources
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Double-check transaction details
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Verify recipient address, amount, and network
                                before confirming
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Start with small amounts
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Test with smaller transfers before bridging
                                large amounts
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Keep transaction records
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Save transaction hashes and timestamps for
                                reference
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="troubleshooting" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-5 w-5 text-orange-500" />
                          <CardTitle>Common Issues & Solutions</CardTitle>
                        </div>
                        <CardDescription>
                          Quick fixes for the most common problems
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Transaction Stuck or Pending
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Your transaction has been confirmed on the source
                              chain but hasn't appeared on the destination
                              chain.
                            </p>
                            <div className="space-y-2 text-sm">
                              <p>
                                • Check the transaction status in our bridge
                                explorer
                              </p>
                              <p>
                                • Allow up to 30 minutes for completion during
                                high network congestion
                              </p>
                              <p>
                                • Contact support if stuck for more than 1 hour
                              </p>
                            </div>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Insufficient Gas Fees
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Transaction failed due to low gas fees or
                              insufficient native tokens.
                            </p>
                            <div className="space-y-2 text-sm">
                              <p>
                                • Ensure you have enough native tokens (ETH,
                                BNB, etc.) for gas
                              </p>
                              <p>
                                • Increase gas limit if transaction keeps
                                failing
                              </p>
                              <p>• Try during off-peak hours for lower fees</p>
                            </div>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Wallet Connection Issues
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Unable to connect wallet or wallet not detected.
                            </p>
                            <div className="space-y-2 text-sm">
                              <p>• Refresh the page and try reconnecting</p>
                              <p>• Check if wallet extension is enabled</p>
                              <p>
                                • Switch to the correct network in your wallet
                              </p>
                              <p>• Clear browser cache and cookies</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default UserGuides;
