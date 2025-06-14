
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
  ArrowRight,
  ArrowLeft,
  Globe,
  Star,
  Users,
  TrendingUp,
  Shield,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsVietnam = () => {
  const { t } = useLanguage();

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
                    🇻🇳 {t("navigation.benefitsVietnam")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("benefits.vietnam.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("benefits.vietnam.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.vietnam.global")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.vietnam.globalDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Star className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.vietnam.showcase")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.vietnam.showcaseDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.vietnam.talent")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.vietnam.talentDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.vietnam.ecosystem")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.vietnam.ecosystemDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.vietnam.compliance")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.vietnam.complianceDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Handshake className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.vietnam.partnerships")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.vietnam.partnershipsDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <Separator className="my-12" />

                {/* Call to Action */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl flex items-center justify-center gap-2">
                      <span className="text-3xl">🌸</span>
                      {t("benefits.vietnam.showcase")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("benefits.vietnam.globalDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
                      {t("common.joinDiscussion")}
                    </Button>
                  </CardContent>
                </Card>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/benefits-liquidity">
                      <ArrowLeft className="h-4 w-4" />
                      {t("navigation.benefitsLiquidity")}
                    </Link>
                  </Button>

                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      {t("common.continue")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("navigation.security")}
                    </p>
                  </div>

                  <Button className="gap-2" asChild>
                    <Link to="/security">
                      {t("navigation.security")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
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
