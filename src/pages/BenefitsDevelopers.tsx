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
  Code,
  Building,
  Wrench,
  Globe,
  ArrowRight,
  ArrowLeft,
  Terminal,
  Layers,
  FileCode,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsDevelopers = () => {
  const { t, language } = useLanguage();

  const builderOpportunities = [
    {
      title: t(
        "pages.benefitsDevelopers.builderOpportunities.smartContract.title"
      ),
      description: t(
        "pages.benefitsDevelopers.builderOpportunities.smartContract.description"
      ),
      icon: Code,
      features: [
        t(
          "pages.benefitsDevelopers.builderOpportunities.smartContract.features.crossChainDefi"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.smartContract.features.gamingTokenUtilities"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.smartContract.features.yieldFarming"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.smartContract.features.paymentSolutions"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.smartContract.features.nftIntegration"
        ),
      ],
    },
    {
      title: t(
        "pages.benefitsDevelopers.builderOpportunities.dappDevelopment.title"
      ),
      description: t(
        "pages.benefitsDevelopers.builderOpportunities.dappDevelopment.description"
      ),
      icon: Globe,
      features: [
        t(
          "pages.benefitsDevelopers.builderOpportunities.dappDevelopment.features.vietnameseFirst"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.dappDevelopment.features.gamingApplications"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.dappDevelopment.features.portfolioManagers"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.dappDevelopment.features.remittancePlatforms"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.dappDevelopment.features.tokenCommunities"
        ),
      ],
    },
    {
      title: t(
        "pages.benefitsDevelopers.builderOpportunities.defiInnovation.title"
      ),
      description: t(
        "pages.benefitsDevelopers.builderOpportunities.defiInnovation.description"
      ),
      icon: Layers,
      features: [
        t(
          "pages.benefitsDevelopers.builderOpportunities.defiInnovation.features.stablecoinProtocols"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.defiInnovation.features.lendingPlatforms"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.defiInnovation.features.gamingDerivatives"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.defiInnovation.features.assetTokenization"
        ),
        t(
          "pages.benefitsDevelopers.builderOpportunities.defiInnovation.features.yieldOptimization"
        ),
      ],
    },
  ];

  const startupOpportunities = [
    {
      title: t(
        "pages.benefitsDevelopers.startupOpportunities.gamingStudios.title"
      ),
      category: t(
        "pages.benefitsDevelopers.startupOpportunities.gamingStudios.category"
      ),
      description: t(
        "pages.benefitsDevelopers.startupOpportunities.gamingStudios.description"
      ),
      marketSize: t(
        "pages.benefitsDevelopers.startupOpportunities.gamingStudios.marketSize"
      ),
      examples: [
        t(
          "pages.benefitsDevelopers.startupOpportunities.gamingStudios.examples.playToEarn"
        ),
        t(
          "pages.benefitsDevelopers.startupOpportunities.gamingStudios.examples.crossChainNft"
        ),
        t(
          "pages.benefitsDevelopers.startupOpportunities.gamingStudios.examples.gamingBridges"
        ),
      ],
      icon: Target,
    },
    {
      title: t(
        "pages.benefitsDevelopers.startupOpportunities.defiProtocols.title"
      ),
      category: t(
        "pages.benefitsDevelopers.startupOpportunities.defiProtocols.category"
      ),
      description: t(
        "pages.benefitsDevelopers.startupOpportunities.defiProtocols.description"
      ),
      marketSize: t(
        "pages.benefitsDevelopers.startupOpportunities.defiProtocols.marketSize"
      ),
      examples: [
        t(
          "pages.benefitsDevelopers.startupOpportunities.defiProtocols.examples.yieldFarming"
        ),
        t(
          "pages.benefitsDevelopers.startupOpportunities.defiProtocols.examples.lendingProtocols"
        ),
        t(
          "pages.benefitsDevelopers.startupOpportunities.defiProtocols.examples.crossChainRemittance"
        ),
      ],
      icon: Building,
    },
    {
      title: t(
        "pages.benefitsDevelopers.startupOpportunities.enterprise.title"
      ),
      category: t(
        "pages.benefitsDevelopers.startupOpportunities.enterprise.category"
      ),
      description: t(
        "pages.benefitsDevelopers.startupOpportunities.enterprise.description"
      ),
      marketSize: t(
        "pages.benefitsDevelopers.startupOpportunities.enterprise.marketSize"
      ),
      examples: [
        t(
          "pages.benefitsDevelopers.startupOpportunities.enterprise.examples.supplyChain"
        ),
        t(
          "pages.benefitsDevelopers.startupOpportunities.enterprise.examples.crossBorderPayments"
        ),
        t(
          "pages.benefitsDevelopers.startupOpportunities.enterprise.examples.digitalIdentity"
        ),
      ],
      icon: Wrench,
    },
  ];

  const builderResources = [
    {
      title: t("pages.benefitsDevelopers.technicalResources.sdkTools.title"),
      description: t(
        "pages.benefitsDevelopers.technicalResources.sdkTools.description"
      ),
      features: [
        t(
          "pages.benefitsDevelopers.technicalResources.sdkTools.features.typescript"
        ),
        t(
          "pages.benefitsDevelopers.technicalResources.sdkTools.features.python"
        ),
        t(
          "pages.benefitsDevelopers.technicalResources.sdkTools.features.smartContract"
        ),
      ],
      icon: Code,
    },
    {
      title: t(
        "pages.benefitsDevelopers.vietnameseDeveloperProgram.features.grants.title"
      ),
      description: t(
        "pages.benefitsDevelopers.vietnameseDeveloperProgram.features.grants.description"
      ),
      features: [
        t(
          "pages.benefitsDevelopers.vietnameseDeveloperProgram.features.grants.features.funding"
        ),
        t(
          "pages.benefitsDevelopers.vietnameseDeveloperProgram.features.mentorship.title"
        ),
        t(
          "pages.benefitsDevelopers.vietnameseDeveloperProgram.features.incubation.title"
        ),
      ],
      icon: Rocket,
    },
    {
      title: t("pages.benefitsDevelopers.community.title"),
      description: t("pages.benefitsDevelopers.community.description"),
      features: [
        t("pages.benefitsDevelopers.community.features.discordChannels"),
        t("pages.benefitsDevelopers.community.features.localMeetups"),
        t("pages.benefitsDevelopers.community.features.hackathonEvents"),
      ],
      icon: Terminal,
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />

            {/* Hero Section */}
            <section className="py-12 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    {t("pages.benefitsDevelopers.hero.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.benefitsDevelopers.hero.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.benefitsDevelopers.hero.description")}
                  </p>
                </div>
              </div>
            </section>

            {/* Builder Opportunities */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.benefitsDevelopers.builderOpportunities.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t(
                      "pages.benefitsDevelopers.builderOpportunities.description"
                    )}
                  </p>
                </div>

                <div className="grid gap-8">
                  {builderOpportunities.map((opportunity, index) => {
                    const IconComponent = opportunity.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${
                            index % 2 === 0
                              ? "from-primary to-accent"
                              : "from-accent to-primary"
                          }`}
                        />
                        <CardHeader className="pl-8">
                          <div className="flex items-center gap-4 mb-2">
                            <div
                              className={`p-3 rounded-lg ${
                                index % 2 === 0
                                  ? "bg-primary/10"
                                  : "bg-accent/10"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${
                                  index % 2 === 0
                                    ? "text-primary"
                                    : "text-accent"
                                }`}
                              />
                            </div>
                            <CardTitle className="text-2xl">
                              {opportunity.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {opportunity.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {opportunity.features.map(
                              (feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full" />
                                  <span className="text-sm font-medium">
                                    {feature}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Startup Opportunities */}
            <section className="py-10 px-6 bg-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.benefitsDevelopers.startupOpportunities.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t(
                      "pages.benefitsDevelopers.startupOpportunities.description"
                    )}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {startupOpportunities.map((startup, index) => {
                    const IconComponent = startup.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-3">
                            <IconComponent className="h-6 w-6 text-primary" />
                            <Badge variant="outline" className="text-xs">
                              {startup.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">
                            {startup.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {startup.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-green-600 mb-2">
                                {t(
                                  "pages.benefitsDevelopers.startupOpportunities.marketOpportunityLabel"
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {startup.marketSize}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">
                                {t(
                                  "pages.benefitsDevelopers.startupOpportunities.exampleApplicationsLabel"
                                )}
                              </h4>
                              <ul className="text-sm space-y-1">
                                {startup.examples.map(
                                  (example, exampleIndex) => (
                                    <li key={exampleIndex}>• {example}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Builder Resources */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.benefitsDevelopers.technicalResources.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t(
                      "pages.benefitsDevelopers.technicalResources.description"
                    )}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {builderResources.map((resource, index) => {
                    const IconComponent = resource.icon;
                    return (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="h-6 w-6 text-primary" />
                            <CardTitle>{resource.title}</CardTitle>
                          </div>
                          <CardDescription>
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {resource.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full mt-4" variant="outline">
                            {t("common.learnMore")}
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Vietnamese Builder Community */}
            <section className="py-10 px-6 bg-gradient-to-r from-red-50 to-yellow-50 border-t border-red-200">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.benefitsDevelopers.community.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.benefitsDevelopers.community.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center">
                    <CardHeader>
                      <Terminal className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t("pages.benefitsDevelopers.community.forums.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(
                          "pages.benefitsDevelopers.community.forums.description"
                        )}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Layers className="h-8 w-8 text-accent mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t(
                          "pages.benefitsDevelopers.community.hackathons.title"
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(
                          "pages.benefitsDevelopers.community.hackathons.description"
                        )}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t(
                          "pages.benefitsDevelopers.vietnameseDeveloperProgram.features.mentorship.title"
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(
                          "pages.benefitsDevelopers.vietnameseDeveloperProgram.features.mentorship.description"
                        )}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <FileCode className="h-8 w-8 text-accent mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t(
                          "pages.benefitsDevelopers.community.openSource.title"
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(
                          "pages.benefitsDevelopers.community.openSource.description"
                        )}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="py-10 px-6">
              <div className="container mx-auto max-w-5xl">
                <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">
                      {t("pages.benefitsDevelopers.gettingStarted.title")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.benefitsDevelopers.gettingStarted.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.builderDocumentation.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.builderDocumentation.description"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.grantOpportunities.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.grantOpportunities.description"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.partnershipProgram.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.partnershipProgram.description"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.marketAccess.title"
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.benefitsDevelopers.gettingStarted.marketAccess.description"
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center">
                  <Link to="/benefits-users">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {t("pages.benefitsDevelopers.navigation.backToUsers")}
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">
                      {t("pages.benefitsDevelopers.navigation.backToOverview")}
                    </Button>
                  </Link>
                  <Link to="/benefits-liquidity">
                    <Button className="flex items-center gap-2">
                      {t(
                        "pages.benefitsDevelopers.navigation.continueToLiquidity"
                      )}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BenefitsDevelopers;
