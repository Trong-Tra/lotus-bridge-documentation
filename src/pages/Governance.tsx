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
  Vote,
  Users,
  Clock,
  Shield,
  ArrowRight,
  ArrowLeft,
  Building,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Governance = () => {
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
                    {t("pages.governance.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.governance.lotusGovernance")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.governance.governanceDescription")}
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
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      {t("pages.governance.underDevelopment")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.governance.underDevelopmentDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {t("pages.governance.innovativeGovernance")}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Vote className="h-5 w-5 text-primary" />
                          {t("pages.governance.decentralizedGovernanceTitle")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.governance.decentralizedGovernanceDescription"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-accent" />
                          {t("pages.governance.efficientDecisionMaking")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("pages.governance.efficientDecisionDescription")}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          {t("pages.governance.transparentProcesses")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "pages.governance.transparentProcessesDescription"
                          )}
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-accent" />
                          {t("pages.governance.vietnameseCommunityFocus")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("pages.governance.vietnameseCommunityDescription")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Timeline Preview */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.governance.developmentTimeline")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.governance.timelineDescription")}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <Clock className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{t("pages.governance.q3_2025")}</CardTitle>
                      <CardDescription>
                        {t("pages.governance.researchDesign")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {t("pages.governance.researchDescription")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Building className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>{t("pages.governance.q4_2025")}</CardTitle>
                      <CardDescription>
                        {t("pages.governance.developmentTesting")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {t("pages.governance.developmentDescription")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Zap className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{t("pages.governance.q1_2026")}</CardTitle>
                      <CardDescription>
                        {t("pages.governance.mainnetLaunch")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {t("pages.governance.mainnetDescription")}
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
                      {t("pages.governance.joinDevelopment")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.governance.joinDevelopmentDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {t("pages.governance.vietnameseDevelopers")}
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent text-white"
                    >
                      {t("pages.governance.contactTeam")}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/architecture">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Architecture
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">
                      {t("pages.governance.backToCoreConcept")}
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button className="flex items-center gap-2">
                      Ecosystem Benefits
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

export default Governance;
