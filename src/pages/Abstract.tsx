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
import { Target, Globe, ArrowRight, Zap, Users, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Abstract = () => {
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
                    Executive Summary
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    🌸 Abstract
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    The foundational vision and core mission of Lotus Bridge - A
                    next-generation multi-chain interoperability protocol rooted
                    in Vietnamese innovation.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Core Abstract */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Project Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          Lotus Bridge is a{" "}
                          <strong>
                            next-generation multi-chain interoperability
                            protocol
                          </strong>
                          , purpose-built to seamlessly connect heterogeneous
                          blockchain networks. Designed by Vietnamese developers
                          for the Vietnamese market and beyond, Lotus Bridge
                          transcends the limitations of traditional bridges by
                          enabling secure and flexible token transfers, swaps,
                          and wallet-to-wallet communication across entirely
                          different blockchain architectures—such as from
                          Ethereum to Solana.
                        </p>

                        <p className="text-lg leading-relaxed">
                          With <strong>multi-wallet support</strong> and a
                          localized focus on tokens popular in Vietnam, Lotus
                          Bridge is positioned to become a foundational layer
                          for global DeFi innovation rooted in regional
                          empowerment.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Differentiators */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          Vietnamese Innovation
                        </CardTitle>
                        <CardDescription>
                          Built by Vietnam, for Vietnam, bridging the world
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              Designed with Vietnamese market needs in mind
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              Native support for Vietnamese tokens (AXS, SLP,
                              VNDC, VNST, KAI, SIPHER, A8, C98, KNC)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              Localized documentation and user experience
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              Empowering Vietnamese developers and entrepreneurs
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Technical Excellence
                        </CardTitle>
                        <CardDescription>
                          Advanced architecture for seamless interoperability
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>
                              Architecture-agnostic bridging (Ethereum ↔ Solana)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>
                              Multi-wallet connectivity and management
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>Secure and flexible token transfers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>
                              Future-proof scalability and adaptability
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Impact & Vision */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        🇻🇳 Vision & Impact
                      </CardTitle>
                      <CardDescription>
                        Positioning Vietnam as a Web3 innovation hub
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none dark:prose-invert">
                        <p>
                          Lotus Bridge represents more than just technical
                          innovation—it's a bridge between cultures, economies,
                          and futures. By bringing Vietnamese tokens into the
                          global liquidity flow while offering seamless UX,
                          robust security, and future-proof scalability, we're
                          creating a foundation for{" "}
                          <strong>
                            global DeFi innovation rooted in regional
                            empowerment
                          </strong>
                          .
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-background/50 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">For Vietnam</h4>
                          <p className="text-sm text-muted-foreground">
                            Showcase local innovation on the global stage and
                            empower Vietnamese developers
                          </p>
                        </div>
                        <div className="bg-background/50 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">For the World</h4>
                          <p className="text-sm text-muted-foreground">
                            Access to vibrant Vietnamese Web3 ecosystem and
                            innovative cross-chain solutions
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Ready to dive deeper?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Explore the detailed introduction and technical
                        architecture
                      </p>
                    </div>
                    <Button className="gap-2" asChild>
                      <Link to="/introduction">
                        Continue to Introduction
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

export default Abstract;
