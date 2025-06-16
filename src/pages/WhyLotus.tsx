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
                    🇻🇳 {t("pages.whyLotus.vietnameseInnovation")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.whyLotus.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.whyLotus.subtitle")}
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
                        {t("pages.whyLotus.culturalSignificance")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.whyLotus.culturalDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          {t("pages.whyLotus.lotusSymbolIntro")}{" "}
                          <strong>
                            {t("pages.whyLotus.nationalFlowerStrong")}
                          </strong>
                          , {t("pages.whyLotus.symbolismDescription")}
                        </p>

                        <p className="text-lg leading-relaxed">
                          {t("pages.whyLotus.fragmentedEcosystem")}{" "}
                          <strong>{t("pages.whyLotus.unifiedSolution")}</strong>{" "}
                          {t("pages.whyLotus.tailoredNeeds")}
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
                          {t("pages.whyLotus.mission.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.whyLotus.mission.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.whyLotus.mission.items.bringVietnameseTokens"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.whyLotus.mission.items.seamlessExperience"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t("pages.whyLotus.mission.items.robustSecurity")}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.whyLotus.mission.items.futureProofScalability"
                              )}
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          {t("pages.whyLotus.vision.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.whyLotus.vision.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t("pages.whyLotus.vision.items.positionVietnam")}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.whyLotus.vision.items.showcaseVietnamese"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t(
                                "pages.whyLotus.vision.items.bridgeRegionalGlobal"
                              )}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              {t("pages.whyLotus.vision.items.fosterInclusive")}
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
                        {t("pages.whyLotus.valueProposition.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.whyLotus.valueProposition.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            {t(
                              "pages.whyLotus.valueProposition.regionalFocus.title"
                            )}
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                {t(
                                  "pages.whyLotus.valueProposition.regionalFocus.items.nativeSupport"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                {t(
                                  "pages.whyLotus.valueProposition.regionalFocus.items.localizedUX"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                {t(
                                  "pages.whyLotus.valueProposition.regionalFocus.items.builtByVietnamese"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                {t(
                                  "pages.whyLotus.valueProposition.regionalFocus.items.emergencyGovernance"
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            {t(
                              "pages.whyLotus.valueProposition.technicalInnovation.title"
                            )}
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                {t(
                                  "pages.whyLotus.valueProposition.technicalInnovation.items.architectureAgnostic"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                {t(
                                  "pages.whyLotus.valueProposition.technicalInnovation.items.multiWallet"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-sm">
                                {t(
                                  "pages.whyLotus.valueProposition.technicalInnovation.items.dynamicAdaptation"
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-6 bg-background/50 rounded-lg border">
                        <div className="text-center">
                          <h4 className="font-semibold mb-2">
                            {t("pages.whyLotus.growingFromChallenges.title")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t(
                              "pages.whyLotus.growingFromChallenges.description"
                            )}
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
                        {t("pages.whyLotus.navigation.backToWhatIsLotus")}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t("pages.whyLotus.navigation.understandingLandscape")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.whyLotus.navigation.landscapeDescription")}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/background">
                        {t("pages.whyLotus.navigation.continueToBackground")}
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
