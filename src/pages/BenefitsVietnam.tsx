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
import { ArrowRight, ArrowLeft, Star, Globe, Lightbulb } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsVietnam = () => {
  const { t, language } = useLanguage();

  const industryBenefits = [
    {
      title: t("pages.benefitsVietnam.industryBenefits.innovationHub.title"),
      description: t(
        "pages.benefitsVietnam.industryBenefits.innovationHub.description"
      ),
      icon: Star,
      features: [
        t(
          "pages.benefitsVietnam.industryBenefits.innovationHub.features.globalRecognition"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.innovationHub.features.internationalInvestment"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.innovationHub.features.localTalent"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.innovationHub.features.vietnameseApproach"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.innovationHub.features.culturalValues"
        ),  
      ],
    },
    {
      title: t("pages.benefitsVietnam.industryBenefits.globalShowcase.title"),
      description: t(
        "pages.benefitsVietnam.industryBenefits.globalShowcase.description"
      ),
      icon: Globe,
      features: [
        t(
          "pages.benefitsVietnam.industryBenefits.globalShowcase.features.axsSlpExpansion"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.globalShowcase.features.stablecoinRecognition"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.globalShowcase.features.kardiachainGlobalization"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.globalShowcase.features.gamingTokensAccess"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.globalShowcase.features.projectFunding"
        ),
      ],
    },
    {
      title: t(
        "pages.benefitsVietnam.industryBenefits.talentEmpowerment.title"
      ),
      description: t(
        "pages.benefitsVietnam.industryBenefits.talentEmpowerment.description"
      ),
      icon: Lightbulb,
      features: [
        t(
          "pages.benefitsVietnam.industryBenefits.talentEmpowerment.features.jobOpportunities"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.talentEmpowerment.features.startupGrowth"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.talentEmpowerment.features.blockchainEducation"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.talentEmpowerment.features.mentorshipPrograms"
        ),
        t(
          "pages.benefitsVietnam.industryBenefits.talentEmpowerment.features.vietnameseDocumentation"
        ),
      ],
    },
  ];

  const initiatives = [
    {
      title: t("pages.benefitsVietnam.initiatives.education.title"),
      description: t("pages.benefitsVietnam.initiatives.education.description"),
      features: [
        t(
          "pages.benefitsVietnam.initiatives.education.features.universityPartnerships"
        ),
        t(
          "pages.benefitsVietnam.initiatives.education.features.certificationPrograms"
        ),
        t("pages.benefitsVietnam.initiatives.education.features.bootcamps"),
        t(
          "pages.benefitsVietnam.initiatives.education.features.researchCollaborations"
        ),
      ],
    },
    {
      title: t("pages.benefitsVietnam.initiatives.incubator.title"),
      description: t("pages.benefitsVietnam.initiatives.incubator.description"),
      features: [
        t("pages.benefitsVietnam.initiatives.incubator.features.seedFunding"),
        t(
          "pages.benefitsVietnam.initiatives.incubator.features.expertMentorship"
        ),
        t(
          "pages.benefitsVietnam.initiatives.incubator.features.investorNetworks"
        ),
        t(
          "pages.benefitsVietnam.initiatives.incubator.features.businessDevelopment"
        ),
      ],
    },
    {
      title: t("pages.benefitsVietnam.initiatives.conference.title"),
      description: t(
        "pages.benefitsVietnam.initiatives.conference.description"
      ),
      features: [
        t(
          "pages.benefitsVietnam.initiatives.conference.features.internationalSpeakers"
        ),
        t(
          "pages.benefitsVietnam.initiatives.conference.features.projectShowcases"
        ),
        t(
          "pages.benefitsVietnam.initiatives.conference.features.investmentPartnerships"
        ),
        t(
          "pages.benefitsVietnam.initiatives.conference.features.culturalExchange"
        ),
      ],
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
                    {t("pages.benefitsVietnam.hero.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.benefitsVietnam.hero.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.benefitsVietnam.hero.description")}
                  </p>
                </div>
              </div>
            </section>

            {/* Core Benefits */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="grid gap-8">
                  {industryBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${index % 2 === 0
                              ? "from-red-500 to-yellow-500"
                              : "from-yellow-500 to-red-500"
                            }`}
                        />
                        <CardHeader className="pl-8">
                          <div className="flex items-center gap-4 mb-2">
                            <div
                              className={`p-3 rounded-lg ${index % 2 === 0
                                  ? "bg-red-50 border border-red-200"
                                  : "bg-yellow-50 border border-yellow-200"
                                }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${index % 2 === 0
                                    ? "text-red-600"
                                    : "text-yellow-600"
                                  }`}
                              />
                            </div>
                            <CardTitle className="text-2xl">
                              {benefit.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {benefit.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {benefit.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-red-600 rounded-full" />
                                <span className="text-sm font-medium">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Strategic Initiatives */}
            <section className="py-10 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.benefitsVietnam.initiatives.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.benefitsVietnam.initiatives.description")}
                  </p>
                </div>

                <div className="grid gap-8">
                  {initiatives.map((initiative, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-2xl">
                          {initiative.title}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {initiative.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {initiative.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-10 px-6">
              <div className="container mx-auto max-w-5xl">
                <Card className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 border-red-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">
                      {t("pages.benefitsVietnam.callToAction.title")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.benefitsVietnam.callToAction.subtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {t("pages.benefitsVietnam.callToAction.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center">
                  <Link to="/benefits-liquidity">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {t("pages.benefitsVietnam.navigation.backToLiquidity")}
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">
                      {t("pages.benefitsVietnam.navigation.backToOverview")}
                    </Button>
                  </Link>
                  <Link to="/security">
                    <Button className="flex items-center gap-2">
                      {t("pages.benefitsVietnam.navigation.continueToSecurity")}
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

export default BenefitsVietnam;
