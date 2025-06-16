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
                    {t("pages.coreConcept.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("navigation.coreConcept")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.coreConcept.subtitle")}
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
                        {t("pages.coreConcept.technicalInnovation.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.coreConcept.technicalInnovation.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
                        <p className="text-lg leading-relaxed">
                          {t("pages.coreConcept.technicalInnovation.content")}
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
                          {t("pages.coreConcept.sections.overview.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.coreConcept.sections.overview.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t("pages.coreConcept.sections.overview.content")}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.overview.features.tokenBridging"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.overview.features.crossChainSwaps"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.overview.features.multiWalletManagement"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.overview.features.vietnameseTokenIntegration"
                            )}
                          </li>
                        </ul>
                        <Button className="w-full mt-4" asChild>
                          <Link to="/core-overview">
                            {t("pages.coreConcept.sections.overview.button")}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Layers className="h-5 w-5" />
                          {t("pages.coreConcept.sections.architecture.title")}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.coreConcept.sections.architecture.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t("pages.coreConcept.sections.architecture.content")}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.architecture.layers.networkAdapter"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.architecture.layers.bridgeOrchestration"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.architecture.layers.walletManagement"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.architecture.layers.localization"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.architecture.layers.securityValidation"
                            )}
                          </li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/architecture">
                            {t(
                              "pages.coreConcept.sections.architecture.button"
                            )}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          {t("pages.coreConcept.sections.governance.title")}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.coreConcept.sections.governance.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t("pages.coreConcept.sections.governance.content")}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                          <Clock className="h-3 w-3" />
                          <span>
                            {t(
                              "pages.coreConcept.sections.governance.comingSoon"
                            )}
                          </span>
                        </div>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.governance.features.governanceSystem"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.governance.features.communityVoting"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.governance.features.transparentDecisionMaking"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.coreConcept.sections.governance.features.vietnameseStakeholder"
                            )}
                          </li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/governance">
                            {t("pages.coreConcept.sections.governance.button")}
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
                        {t("pages.coreConcept.keyInnovations.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.coreConcept.keyInnovations.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            {t(
                              "pages.coreConcept.keyInnovations.universalAdaptability.title"
                            )}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.coreConcept.keyInnovations.universalAdaptability.features.architectureAgnostic"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.coreConcept.keyInnovations.universalAdaptability.features.dynamicAdaptation"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.coreConcept.keyInnovations.universalAdaptability.features.futureProofScalability"
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            {t(
                              "pages.coreConcept.keyInnovations.vietnameseFocus.title"
                            )}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.coreConcept.keyInnovations.vietnameseFocus.features.nativeTokenSupport"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.coreConcept.keyInnovations.vietnameseFocus.features.localizedUx"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.coreConcept.keyInnovations.vietnameseFocus.features.regionalMarketUnderstanding"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.coreConcept.keyInnovations.vietnameseFocus.features.emergencyGovernance"
                                )}
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
                        {t("pages.coreConcept.navigation.backToBackground")}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t("pages.coreConcept.navigation.exploreApplications")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          "pages.coreConcept.navigation.exploreApplicationsDescription"
                        )}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/core-overview">
                        {t("pages.coreConcept.navigation.continueToOverview")}
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
