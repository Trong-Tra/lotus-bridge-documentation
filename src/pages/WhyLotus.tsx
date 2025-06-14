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
  Heart,
  Flower,
  ArrowRight,
  ArrowLeft,
  Globe,
  Users,
  Shield,
  Target,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const WhyLotus = () => {
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
                    🇻🇳 Vietnamese Innovation
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Why Lotus?
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Named after Vietnam's national flower, symbolizing
                    resilience, purity, and growth from challenging
                    environments.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Cultural Significance */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Flower className="h-5 w-5" />
                        The Lotus Symbol
                      </CardTitle>
                      <CardDescription>
                        Cultural heritage meets technological innovation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          Named after the{" "}
                          <strong>national flower of Vietnam</strong>, the Lotus
                          symbolizes resilience, purity, and growth from murky
                          environments—perfectly reflecting the mission of Lotus
                          Bridge.
                        </p>

                        <p className="text-lg leading-relaxed">
                          In a fragmented blockchain ecosystem, Lotus Bridge
                          offers a{" "}
                          <strong>
                            unified, elegant, and powerful solution
                          </strong>{" "}
                          tailored to the needs of both Vietnamese users and the
                          global crypto community.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mission & Vision */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5" />
                          Our Mission
                        </CardTitle>
                        <CardDescription>
                          Bridging cultures and economies through technology
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Bring Vietnamese tokens into global liquidity flow
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Offer seamless user experience across chains
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Provide robust security and reliability
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Ensure future-proof scalability
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Our Vision
                        </CardTitle>
                        <CardDescription>
                          Empowering regional innovation globally
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Position Vietnam as a Web3 innovation hub
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Showcase Vietnamese culture and technology
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Bridge regional and global crypto communities
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Foster inclusive financial innovation
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Value Proposition */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        🇻🇳 Unique Value Proposition
                      </CardTitle>
                      <CardDescription>
                        What makes Lotus Bridge special in the crowded bridge
                        market
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            Regional Focus
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Native support for Vietnamese tokens (AXS, SLP,
                                VNDC, VNST, KAI, SIPHER, A8, C98, KNC)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Localized user experience and documentation
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Built by Vietnamese developers for Vietnamese
                                needs
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Emergency governance by trusted key holders to
                                safeguard the network in critical situations
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            Technical Innovation
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Architecture-agnostic bridging capabilities
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Multi-wallet connectivity and management
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                Dynamic adaptation to network capabilities
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-6 bg-background/50 rounded-lg border">
                        <div className="text-center">
                          <h4 className="font-semibold mb-2">
                            🌸 Growing from Challenges
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Just as the lotus flower blooms beautifully despite
                            growing in muddy water, Lotus Bridge creates elegant
                            solutions in the fragmented blockchain landscape,
                            turning complexity into opportunity.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/what-is-lotus">
                        <ArrowLeft className="h-4 w-4" />
                        Back to What is Lotus?
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Understanding the landscape
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Learn about the blockchain industry challenges we're
                        solving
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/background">
                        Continue to Background
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

export default WhyLotus;
