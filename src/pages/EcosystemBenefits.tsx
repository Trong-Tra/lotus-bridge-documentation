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
  Users,
  Code,
  DollarSign,
  Flag,
  ArrowRight,
  ArrowLeft,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const EcosystemBenefits = () => {
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
                    🌍 {t("pages.ecosystemBenefits.hero.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.ecosystemBenefits.hero.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.ecosystemBenefits.hero.description")}
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Overview */}
                  <Card className="border-primary/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">
                        {t("pages.ecosystemBenefits.overview.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.ecosystemBenefits.overview.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
                        <p className="text-lg leading-relaxed">
                          {t("pages.ecosystemBenefits.overview.content")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Stakeholder Categories */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          {t(
                            "pages.ecosystemBenefits.stakeholders.users.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.ecosystemBenefits.stakeholders.users.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.ecosystemBenefits.stakeholders.users.content"
                          )}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.users.features.simplifiedAccess"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.users.features.localFirstDesign"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.users.features.flexibleRouting"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.users.features.multiWalletManagement"
                            )}
                          </li>
                        </ul>
                        <Button className="w-full mt-4" asChild>
                          <Link to="/benefits-users">
                            {t(
                              "pages.ecosystemBenefits.stakeholders.users.buttonText"
                            )}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          {t(
                            "pages.ecosystemBenefits.stakeholders.builders.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.ecosystemBenefits.stakeholders.builders.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.ecosystemBenefits.stakeholders.builders.content"
                          )}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.builders.features.smartContractIntegration"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.builders.features.dappDevelopment"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.builders.features.defiInnovation"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.builders.features.startupSupport"
                            )}
                          </li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/benefits-developers">
                            {t(
                              "pages.ecosystemBenefits.stakeholders.builders.buttonText"
                            )}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-green-500/20 hover:border-green-500/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5" />
                          {t(
                            "pages.ecosystemBenefits.stakeholders.liquidity.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.ecosystemBenefits.stakeholders.liquidity.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.ecosystemBenefits.stakeholders.liquidity.content"
                          )}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.liquidity.features.newPools"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.liquidity.features.multiEcosystem"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.liquidity.features.dynamicFees"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.liquidity.features.yieldIncentives"
                            )}
                          </li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/benefits-liquidity">
                            {t(
                              "pages.ecosystemBenefits.stakeholders.liquidity.buttonText"
                            )}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          🇻🇳{" "}
                          {t(
                            "pages.ecosystemBenefits.stakeholders.vietnam.title"
                          )}
                        </CardTitle>
                        <CardDescription>
                          {t(
                            "pages.ecosystemBenefits.stakeholders.vietnam.description"
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.ecosystemBenefits.stakeholders.vietnam.content"
                          )}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.vietnam.features.innovationHub"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.vietnam.features.globalShowcase"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.vietnam.features.developerEmpowerment"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "pages.ecosystemBenefits.stakeholders.vietnam.features.economicGrowth"
                            )}
                          </li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/benefits-vietnam">
                            {t(
                              "pages.ecosystemBenefits.stakeholders.vietnam.buttonText"
                            )}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Network Effect */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        🌐 {t("pages.ecosystemBenefits.networkEffect.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.ecosystemBenefits.networkEffect.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          {t("pages.ecosystemBenefits.networkEffect.content")}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            {t(
                              "pages.ecosystemBenefits.networkEffect.positiveFeedback.title"
                            )}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.ecosystemBenefits.networkEffect.positiveFeedback.items.userLiquidity"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.ecosystemBenefits.networkEffect.positiveFeedback.items.developerAdoption"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.ecosystemBenefits.networkEffect.positiveFeedback.items.liquidityStability"
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            {t(
                              "pages.ecosystemBenefits.networkEffect.globalImpact.title"
                            )}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.ecosystemBenefits.networkEffect.globalImpact.items.vietnameseInnovation"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.ecosystemBenefits.networkEffect.globalImpact.items.culturalBridge"
                                )}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                {t(
                                  "pages.ecosystemBenefits.networkEffect.globalImpact.items.regionalEmpowerment"
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
                      <Link to="/governance">
                        <ArrowLeft className="h-4 w-4" />
                        {t(
                          "pages.ecosystemBenefits.navigation.backToGovernance"
                        )}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t(
                          "pages.ecosystemBenefits.navigation.questions.title"
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          "pages.ecosystemBenefits.navigation.questions.description"
                        )}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/faqs">
                        {t("pages.ecosystemBenefits.navigation.continueToFaqs")}
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

export default EcosystemBenefits;
