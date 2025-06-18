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
import { Progress } from "@/components/ui/progress";
import {
  Coins,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  PieChart,
  Users,
  Building,
  Zap,
  CheckCircle,
  Target,
  Shield,
  DollarSign,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Tokenomics = () => {
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
                    {t("pages.tokenomics.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.tokenomics.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.tokenomics.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Total Supply Section */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2 text-3xl">
                      <Coins className="h-8 w-8" />
                      {t("pages.tokenomics.supply.title")}
                    </CardTitle>
                    <div className="text-5xl font-bold text-primary mt-4">
                      {t("pages.tokenomics.supply.total")}
                    </div>
                    <CardDescription className="text-lg mt-4">
                      {t("pages.tokenomics.supply.burnPolicy")}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* Token Allocation Section */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.tokenomics.allocation.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.tokenomics.allocation.description")}
                  </p>
                </div>

                {/* <div className="grid gap-6">
                  {t("pages.tokenomics.allocation.categories").map(
                    (item, index) => {
                      const colors = [
                        "bg-primary",
                        "bg-accent",
                        "bg-blue-500",
                        "bg-green-500",
                        "bg-purple-500",
                      ],
                        textColors = [
                          "text-primary",
                          "text-accent",
                          "text-blue-600",
                          "text-green-600",
                          "text-purple-600",
                        ],
                        icons = [Users, Building, Shield, DollarSign, Target],
                        Icon = icons[index];

                      return (
                        <Card
                          key={index}
                          className="overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-12 h-12 rounded-full ${colors[index]} flex items-center justify-center`}
                                >
                                  <Icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-xl">
                                    {item.name}
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className={`${textColors[index]} text-lg font-bold mt-1`}
                                  >
                                    {item.percentage}%
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-3xl font-bold text-muted-foreground">
                                {(item.percentage * 1000000).toLocaleString()}K
                              </div>
                            </div>

                            <Progress value={item.percentage} className="mb-6 h-3" />

                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <h5 className="font-medium text-primary flex items-center gap-2">
                                  <Target className="h-4 w-4" />
                                  Purpose
                                </h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {item.purpose}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <h5 className="font-medium text-accent flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4" />
                                  Rationale
                                </h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {item.rationale}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    }
                  )}
                </div> */}
              </div>
            </section>

            {/* Design Philosophy Section */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/50 dark:to-blue-950/50 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <TrendingUp className="h-6 w-6" />
                      {t("pages.tokenomics.philosophy.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {t("pages.tokenomics.philosophy.statements.noVcAllocation")}
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {t("pages.tokenomics.philosophy.statements.longTermVesting")}
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {t("pages.tokenomics.philosophy.statements.noSpeculativeYield")}
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {t("pages.tokenomics.philosophy.statements.activeControl")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Token Distribution Visual */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.tokenomics.allocation.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("pages.tokenomics.allocation.description")}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {t("pages.tokenomics.allocation.distribution.communityPrograms.category")} — 40%
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("pages.tokenomics.allocation.distribution.communityPrograms.purpose")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {t("pages.tokenomics.allocation.distribution.coreTeam.category")} — 15%
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("pages.tokenomics.allocation.distribution.coreTeam.purpose")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {t("pages.tokenomics.allocation.distribution.guardianCouncilPartners.category")} — 10%
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("pages.tokenomics.allocation.distribution.guardianCouncilPartners.purpose")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {t("pages.tokenomics.allocation.distribution.daoTreasury.category")} — 25%
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("pages.tokenomics.allocation.distribution.daoTreasury.purpose")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {t("pages.tokenomics.allocation.distribution.ecosystemDevelopmentFund.category")} — 10%
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("pages.tokenomics.allocation.distribution.ecosystemDevelopmentFund.purpose")}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="bg-gradient-to-r from-primary to-accent text-white">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                      Ready to participate in $LOTUS ecosystem?
                    </CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      Join our community and contribute to the future of cross-chain
                      DeFi
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" variant="secondary">
                        <Users className="h-4 w-4 mr-2" />
                        Join Community
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-primary"
                      >
                        <PieChart className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/security">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Security
                    </Button>
                  </Link>
                  <Link to="/governance">
                    <Button variant="outline">Back to Governance</Button>
                  </Link>
                  <Link to="/roadmap">
                    <Button className="flex items-center gap-2">
                      Roadmap
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

export default Tokenomics;
