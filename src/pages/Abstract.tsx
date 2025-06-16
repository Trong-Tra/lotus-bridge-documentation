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
                    {t("pages.abstract.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.abstract.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.abstract.subtitle")}
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
                        {t("pages.abstract.projectOverview.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          {t("pages.abstract.projectOverview.content")}
                        </p>

                        <p className="text-lg leading-relaxed">
                          {t(
                            "pages.abstract.projectOverview.foundationalLayer"
                          )}
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
                          {t("pages.abstract.vietnameseInnovation.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.abstract.vietnameseInnovation.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.vietnameseInnovation.marketNeeds"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.vietnameseInnovation.nativeSupport"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.vietnameseInnovation.localizedUX"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.vietnameseInnovation.communityDriven"
                              )}
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          {t("pages.abstract.technicalExcellence.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.abstract.technicalExcellence.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.technicalExcellence.architectureAgnostic"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.technicalExcellence.multiWallet"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.technicalExcellence.secureTransfers"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <span>
                              {t(
                                "pages.abstract.technicalExcellence.futureProof"
                              )}
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
                        {t("pages.abstract.visionImpact.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.abstract.visionImpact.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none dark:prose-invert">
                        <p>{t("pages.abstract.visionImpact.content")}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {t("pages.abstract.navigation.readyToDive")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.abstract.navigation.exploreDetailed")}
                      </p>
                    </div>
                    <Button className="gap-2" asChild>
                      <Link to="/introduction">
                        {t("pages.abstract.navigation.continueToIntroduction")}
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
