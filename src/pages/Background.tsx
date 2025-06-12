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
                  {/* Industry Challenges */}
                  <Card className="border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        The Fragmentation Problem
                      </CardTitle>
                      <CardDescription>
                        Current state of blockchain interoperability
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          The blockchain industry is expanding rapidly with{" "}
                          <strong>
                            hundreds of layer-1 and layer-2 networks
                          </strong>
                          , each optimized for different use cases. However, the
                          lack of interoperability across these networks hinders
                          composability, user adoption, and liquidity flow.
                        </p>

                        <p className="text-lg leading-relaxed">
                          Existing bridges are typically limited to
                          EVM-compatible chains or require complex, risk-prone
                          interactions.
                        </p>
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
