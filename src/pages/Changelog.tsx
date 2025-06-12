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
  Calendar,
  GitBranch,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  Shield,
  Users,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Changelog = () => {
  const { t } = useLanguage();

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
                    {t("changelog.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("changelog.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("changelog.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Release Timeline */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Latest Release */}
                  <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                          <CardTitle className="text-2xl">
                            v2.1.0 - "Lotus Consensus"
                          </CardTitle>
                          <Badge>Latest</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          December 15, 2024
                        </div>
                      </div>
                      <CardDescription>
                        Major release introducing the Lotus Consensus Algorithm
                        and enhanced security features
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <h4 className="font-semibold">
                              {t("changelog.majorUpdates")}
                            </h4>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Lotus Consensus Algorithm (LCA) implementation
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Zero-knowledge proof integration for enhanced
                                privacy
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Advanced MEV protection mechanisms</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Real-time transaction monitoring dashboard
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-blue-500" />
                            <h4 className="font-semibold">
                              {t("changelog.improvements")}
                            </h4>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                40% reduction in transaction finality time
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Enhanced UI/UX with mobile-first design
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Optimized gas consumption (25% savings)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Improved error handling and user feedback
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-500" />
                            <h4 className="font-semibold">
                              {t("changelog.security")}
                            </h4>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>CertiK security audit completion</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Enhanced validator slashing conditions
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Emergency pause mechanism implementation
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Bug bounty program expansion ($1M pool)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <Separator />

                      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="h-4 w-4 text-amber-600" />
                          <span className="font-medium text-amber-800 dark:text-amber-400">
                            {t("changelog.breaking")}
                          </span>
                        </div>
                        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                          <li>
                            • API v1 endpoints deprecated - migrate to v2 before
                            January 31, 2025
                          </li>
                          <li>
                            • Legacy bridge contracts on testnets will be sunset
                            on January 15, 2025
                          </li>
                          <li>
                            • Minimum stake requirement increased to 100,000
                            LOTUS for validators
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Previous Releases */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                          <CardTitle>
                            v2.0.3 - "Stability & Performance"
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          November 28, 2024
                        </div>
                      </div>
                      <CardDescription>
                        Performance optimizations and stability improvements
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">
                            {t("changelog.improvements")}
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              • Reduced average transaction time to 18 seconds
                            </li>
                            <li>
                              • Fixed intermittent connection issues with
                              MetaMask
                            </li>
                            <li>
                              • Enhanced error messages for failed transactions
                            </li>
                            <li>• Improved validator node synchronization</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">
                            {t("changelog.bugFixes")}
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              • Resolved token balance display inconsistencies
                            </li>
                            <li>
                              • Fixed rare edge case in cross-chain state
                              verification
                            </li>
                            <li>
                              • Corrected fee calculation for large transactions
                            </li>
                            <li>• Fixed mobile responsive layout issues</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                          <CardTitle>
                            v2.0.0 - "Multi-Chain Expansion"
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          October 15, 2024
                        </div>
                      </div>
                      <CardDescription>
                        Major release with support for 6 additional blockchain
                        networks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-600">
                            New Networks
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Arbitrum One mainnet support</li>
                            <li>• Optimism mainnet integration</li>
                            <li>• Fantom Opera network</li>
                            <li>• Avalanche C-Chain support</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-orange-600">
                            Features
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Dynamic fee adjustment algorithm</li>
                            <li>• Enhanced transaction batching</li>
                            <li>• Improved validator incentive system</li>
                            <li>• Advanced analytics dashboard</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                          <CardTitle>
                            v1.5.0 - "Governance & Community"
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          August 22, 2024
                        </div>
                      </div>
                      <CardDescription>
                        Introduction of DAO governance and community features
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-indigo-600">
                            Governance
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• LOTUS token governance launch</li>
                            <li>• Community voting on protocol upgrades</li>
                            <li>• Proposal submission system</li>
                            <li>• Validator nomination process</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-pink-600">
                            Community
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Ambassador program launch</li>
                            <li>• Developer grant program</li>
                            <li>• Community Discord integration</li>
                            <li>• Educational content hub</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                          <CardTitle>v1.0.0 - "Genesis Launch"</CardTitle>
                          <Badge variant="secondary">Genesis</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          June 1, 2024
                        </div>
                      </div>
                      <CardDescription>
                        Initial mainnet launch with Ethereum ↔ Polygon bridge
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border-l-4 border-primary">
                        <h4 className="font-semibold mb-2">
                          Launch Highlights
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>
                            • First cross-chain bridge built with Vietnamese
                            innovation
                          </li>
                          <li>
                            • Support for 15+ major tokens (USDC, USDT, ETH,
                            WBTC)
                          </li>
                          <li>• Sub-30 second transaction finality</li>
                          <li>• 99.9% uptime commitment</li>
                          <li>• Security audit by Trail of Bits</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Releases */}
                <div className="mt-16">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      Upcoming Releases
                    </h2>
                    <p className="text-muted-foreground">
                      Planned features and improvements for future versions
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-dashed border-2">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <CardTitle>v2.2.0 - "Layer 2 Integration"</CardTitle>
                          <Badge variant="outline">Q1 2025</Badge>
                        </div>
                        <CardDescription>
                          Enhanced Layer 2 support and rollup integrations
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-orange-500 mt-1" />
                            <span>Native zkSync Era support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-orange-500 mt-1" />
                            <span>Polygon zkEVM integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-orange-500 mt-1" />
                            <span>Base network support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-orange-500 mt-1" />
                            <span>Ultra-low fee transactions</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-dashed border-2">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-blue-500" />
                          <CardTitle>v2.3.0 - "Global Expansion"</CardTitle>
                          <Badge variant="outline">Q2 2025</Badge>
                        </div>
                        <CardDescription>
                          Support for additional blockchain ecosystems
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-blue-500 mt-1" />
                            <span>Solana network integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-blue-500 mt-1" />
                            <span>Cosmos ecosystem support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-blue-500 mt-1" />
                            <span>Near Protocol bridge</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-3 w-3 text-blue-500 mt-1" />
                            <span>Multi-language interface</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-16 text-center">
                  <div className="bg-muted/30 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                    <p className="text-muted-foreground mb-6">
                      Follow our development progress and get notified about new
                      releases
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button className="gap-2">
                        <GitBranch className="h-4 w-4" />
                        Follow on GitHub
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <Users className="h-4 w-4" />
                        Join Community
                      </Button>
                    </div>
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

export default Changelog;
