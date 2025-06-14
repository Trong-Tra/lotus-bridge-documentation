
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
  ArrowRight,
  ArrowLeft,
  Users,
  Book,
  DollarSign,
  Headphones,
  Network,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsDevelopers = () => {
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
                    👨‍💻 {t("navigation.benefitsDevs")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("benefits.developers.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("benefits.developers.subtitle")}
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
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.developers.easyIntegration")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.developers.easyDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <span className="text-2xl">🇻🇳</span>
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.developers.vietnamese")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.developers.vietnameseDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Network className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.developers.crossChain")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.developers.crossChainDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <DollarSign className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.developers.grants")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.developers.grantsDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Book className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.developers.documentation")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.developers.documentationDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Headphones className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.developers.support")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.developers.supportDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/benefits-users">
                      <ArrowLeft className="h-4 w-4" />
                      {t("navigation.benefitsUsers")}
                    </Link>
                  </Button>

                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      {t("common.continue")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("benefits.liquidity.title")}
                    </p>
                  </div>

                  <Button className="gap-2" asChild>
                    <Link to="/benefits-liquidity">
                      {t("navigation.benefitsLiquidity")}
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

export default BenefitsDevelopers;
