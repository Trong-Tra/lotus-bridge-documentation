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
                    {t("abstract.title")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    🌸 {t("abstract.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("abstract.subtitle")}
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
                        {t("abstract.projectOverview")}
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
                          for Viet Nam DeFi innovation, paving the way for
                          Vietnamese developers and entrepreneurs to build
                          cross-chain applications that can tap into global
                          liquidity while maintaining a seamless user
                          experience.
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
                          {t("abstract.vietnameseInnovation")}
                        </CardTitle>
                        <CardDescription>
                          {t("abstract.vietnameseInnovationDescription")}
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
                          {t("abstract.technicalExcellence")}
                        </CardTitle>
                        <CardDescription>
                          {t("abstract.technicalExcellenceDescription")}
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
                        🇻🇳 {t("abstract.visionImpact")}
                      </CardTitle>
                      <CardDescription>
                        {t("abstract.visionImpactDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none dark:prose-invert">
                        <p>
                          Lotus Bridge is more than a technical innovation—it's
                          a symbol of connection between cultures, economies,
                          and tomorrow's digital world. By integrating
                          Vietnamese tokens into the global liquidity stream,
                          Lotus Bridge empowers Vietnam to step confidently onto
                          the Web3 stage. With seamless user experience,
                          uncompromising security, and scalable infrastructure,
                          we are laying the groundwork for Vietnam to emerge as
                          a{" "}
                          <strong>
                            leading hub of Web3 innovation—pioneering
                            cross-chain interoperability and shaping the future
                            of decentralized finance
                          </strong>
                          .
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {t("introduction.readyExplore")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Explore the detailed introduction and technical
                        architecture
                      </p>
                    </div>
                    <Button className="gap-2" asChild>
                      <Link to="/introduction">
                        {t("introduction.continueToBackground")}
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
