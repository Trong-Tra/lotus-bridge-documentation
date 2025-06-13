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
  Layers,
  Settings,
  ArrowRight,
  ArrowLeft,
  Zap,
  Network,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const CoreConcept = () => {
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
                    🔧 Technical Foundation
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Core Concept
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Deep dive into the technical architecture and innovative
                    concepts that power Lotus Bridge.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Core Concept Overview */}
                  <Card className="border-primary/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">
                        Technical Innovation
                      </CardTitle>
                      <CardDescription>
                        Explore the foundational concepts that make Lotus Bridge
                        possible
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
                        <p className="text-lg leading-relaxed">
                          Lotus Bridge's core concept revolves around creating a
                          truly universal adapter that transcends the
                          limitations of existing bridge solutions. Our modular
                          architecture enables seamless interoperability across
                          any blockchain network.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section Navigation */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Overview
                        </CardTitle>
                        <CardDescription>
                          Core capabilities and features
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Discover what Lotus Bridge enables and how it
                          revolutionizes cross-chain interactions with
                          Vietnamese token support.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Token bridging capabilities</li>
                          <li>• Cross-chain asset swaps</li>
                          <li>• Multi-wallet management</li>
                          <li>• Vietnamese token integration</li>
                        </ul>
                        <Button className="w-full mt-4" asChild>
                          <Link to="/core-overview">
                            Explore Capabilities
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Layers className="h-5 w-5" />
                          Architecture
                        </CardTitle>
                        <CardDescription>
                          Modular design and components
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Understand the five-layer modular architecture that
                          enables Lotus Bridge's universal adaptability and
                          robust security.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Network Adapter Layer</li>
                          <li>• Bridge Orchestration Layer</li>
                          <li>• Wallet Management Layer</li>
                          <li>• Localization Layer</li>
                          <li>• Security & Validation Layer</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/architecture">
                            Study Architecture
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          Governance
                        </CardTitle>
                        <CardDescription>
                          Future governance protocol
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Learn about the planned Lotus Bridge Governance
                          protocol that will help preventing and stopping
                          malicious activities while enhancing community
                          participation.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                          <Clock className="h-3 w-3" />
                          <span>Coming in future update</span>
                        </div>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Governance System</li>
                          <li>• Community voting mechanisms</li>
                          <li>• Transparent decision making</li>
                          <li>• Vietnamese stakeholder participation</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/governance">
                            Learn About Governance
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Key Innovations */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Network className="h-5 w-5" />
                        🚀 Key Innovations
                      </CardTitle>
                      <CardDescription>
                        What makes Lotus Bridge unique in the cross-chain
                        ecosystem
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            Universal Adaptability
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                Architecture-agnostic bridging (Ethereum ↔
                                Solana)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                Dynamic adaptation to network capabilities
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Future-proof scalability design</span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            Vietnamese Focus
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>Native support for Vietnamese tokens</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>Localized user experience design</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>Regional market understanding</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                Governance system for emergency scenarios
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/background">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Background
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Explore practical applications
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Discover real-world use cases and scenarios
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/core-overview">
                        Continue to Core Overview
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

export default CoreConcept;
