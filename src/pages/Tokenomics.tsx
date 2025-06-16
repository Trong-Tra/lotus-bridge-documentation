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
  Coins,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  PieChart,
  Users,
  Building,
  Zap,
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
                    {t("navigation.tokenomics")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.tokenomics.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Development Notice */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Coins className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      {t("pages.tokenomics.underDevelopment")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.tokenomics.underDevelopmentDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {t("pages.tokenomics.economicsTeam")}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          {t("pages.tokenomics.validatorIncentives")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("pages.tokenomics.validatorDescription")}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-accent" />
                          {t("pages.tokenomics.communityRewards")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("pages.tokenomics.communityDescription")}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Building className="h-5 w-5 text-primary" />
                          {t("pages.tokenomics.developmentFund")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("pages.tokenomics.developmentDescription")}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-accent" />
                          {t("pages.tokenomics.feeStructure")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("pages.tokenomics.feeDescription")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Token Distribution Preview */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.tokenomics.distributionPreview")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.tokenomics.distributionDescription")}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-dashed border-2">
                    <CardHeader className="text-center">
                      <PieChart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle>{t("pages.tokenomics.community40")}</CardTitle>
                      <CardDescription>
                        {t("pages.tokenomics.communityLiquidity")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        {t("pages.tokenomics.communityAllocation")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed border-2">
                    <CardHeader className="text-center">
                      <Building className="h-8 w-8 text-accent mx-auto mb-2" />
                      <CardTitle>
                        {t("pages.tokenomics.development25")}
                      </CardTitle>
                      <CardDescription>
                        {t("pages.tokenomics.teamDevelopment")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        {t("pages.tokenomics.developmentAllocation")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed border-2">
                    <CardHeader className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle>{t("pages.tokenomics.ecosystem35")}</CardTitle>
                      <CardDescription>
                        {t("pages.tokenomics.validatorsPartnerships")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        {t("pages.tokenomics.ecosystemAllocation")}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                      {t("pages.tokenomics.vietnameseFirstEconomics")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.tokenomics.interestedTokenomics")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {t("pages.tokenomics.tokenomicsDesign")}
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent text-white"
                    >
                      {t("pages.tokenomics.joinTokenomicsDiscussion")}
                    </Button>
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
                  <Link to="/core-concept">
                    <Button variant="outline">
                      {t("pages.tokenomics.backToCoreConcept")}
                    </Button>
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
