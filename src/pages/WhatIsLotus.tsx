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
  Globe,
  ArrowRight,
  ArrowLeft,
  Zap,
  Layers,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const WhatIsLotus = () => {
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
                    {t("pages.whatIsLotus.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.whatIsLotus.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.whatIsLotus.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Core Definition */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Network className="h-5 w-5" />
                        {t("pages.whatIsLotus.dynamicUniversalAdapter.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          {t(
                            "pages.whatIsLotus.dynamicUniversalAdapter.description1"
                          )}
                        </p>

                        <p className="text-lg leading-relaxed">
                          {t(
                            "pages.whatIsLotus.dynamicUniversalAdapter.description2"
                          )}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Capabilities */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-primary/20">
                      <CardHeader className="text-center pb-4">
                        <Globe className="h-12 w-12 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {t(
                            "pages.whatIsLotus.keyCapabilities.crossArchitecture.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.whatIsLotus.keyCapabilities.crossArchitecture.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {t(
                            "pages.whatIsLotus.keyCapabilities.crossArchitecture.details"
                          )}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader className="text-center pb-4">
                        <Layers className="h-12 w-12 text-accent mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {t(
                            "pages.whatIsLotus.keyCapabilities.multiWallet.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.whatIsLotus.keyCapabilities.multiWallet.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {t(
                            "pages.whatIsLotus.keyCapabilities.multiWallet.details"
                          )}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader className="text-center pb-4">
                        <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {t(
                            "pages.whatIsLotus.keyCapabilities.adaptiveProtocol.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.whatIsLotus.keyCapabilities.adaptiveProtocol.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {t(
                            "pages.whatIsLotus.keyCapabilities.adaptiveProtocol.details"
                          )}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Core Functions */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        {t("pages.whatIsLotus.coreFunctions.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.whatIsLotus.coreFunctions.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.walletConnection.title"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.walletConnection.description"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.assetBridging.title"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.assetBridging.description"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.crossChainSwaps.title"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.crossChainSwaps.description"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.governance.title"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.governance.description"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.flexibleTransfers.title"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.flexibleTransfers.description"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.tokenStandards.title"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.tokenStandards.description"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.vietnameseTokens.title"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {t(
                                  "pages.whatIsLotus.coreFunctions.vietnameseTokens.description"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/introduction">
                        <ArrowLeft className="h-4 w-4" />
                        {t("pages.whatIsLotus.navigation.backToIntroduction")}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t("pages.whatIsLotus.navigation.understandingMission")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.whatIsLotus.navigation.learnWhy")}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/why-lotus">
                        {t("pages.whatIsLotus.navigation.continueToWhy")}
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

export default WhatIsLotus;
