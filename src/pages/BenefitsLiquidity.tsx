
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
  Droplets,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Award,
  Settings,
  Shield,
  BarChart3,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsLiquidity = () => {
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
                    💧 {t("navigation.benefitsLiquidity")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("benefits.liquidity.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("benefits.liquidity.subtitle")}
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
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.liquidity.yields")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.liquidity.yieldsDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <span className="text-2xl">🇻🇳</span>
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.liquidity.vietnamese")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.liquidity.vietnameseDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 bg-muted/30 rounded text-center text-xs font-medium">
                          AXS/ETH
                        </div>
                        <div className="p-2 bg-muted/30 rounded text-center text-xs font-medium">
                          VNDC/USDT
                        </div>
                        <div className="p-2 bg-muted/30 rounded text-center text-xs font-medium">
                          C98/BNB
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.liquidity.rewards")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.liquidity.rewardsDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Settings className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.liquidity.flexible")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.liquidity.flexibleDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.liquidity.impermanent")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.liquidity.impermanentDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <BarChart3 className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.liquidity.analytics")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.liquidity.analyticsDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/benefits-developers">
                      <ArrowLeft className="h-4 w-4" />
                      {t("navigation.benefitsDevs")}
                    </Link>
                  </Button>

                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      {t("common.continue")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("benefits.vietnam.title")}
                    </p>
                  </div>

                  <Button className="gap-2" asChild>
                    <Link to="/benefits-vietnam">
                      {t("navigation.benefitsVietnam")}
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

export default BenefitsLiquidity;
