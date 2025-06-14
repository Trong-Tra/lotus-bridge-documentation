
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
  ArrowRight,
  ArrowLeft,
  Zap,
  Shield,
  Wallet,
  DollarSign,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsUsers = () => {
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
                    👥 {t("navigation.benefitsUsers")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("benefits.users.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("benefits.users.subtitle")}
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
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.users.seamlessExperience")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.users.seamlessDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {t("benefits.users.crossArchitecture")}</li>
                        <li>• {t("benefits.users.multiWalletSupport")}</li>
                        <li>• {t("benefits.users.adaptiveProtocol")}</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <span className="text-2xl">🇻🇳</span>
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.users.vietnameseTokens")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.users.vietnameseDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="p-2 bg-muted/30 rounded text-center text-xs font-medium">
                          AXS
                        </div>
                        <div className="p-2 bg-muted/30 rounded text-center text-xs font-medium">
                          VNDC
                        </div>
                        <div className="p-2 bg-muted/30 rounded text-center text-xs font-medium">
                          C98
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Wallet className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.users.multiWallet")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.users.multiWalletDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <DollarSign className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.users.lowFees")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.users.lowFeesDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.users.security")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.users.securityDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Globe className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {t("benefits.users.localization")}
                      </CardTitle>
                      <CardDescription>
                        {t("benefits.users.localizationDescription")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/ecosystem-benefits">
                      <ArrowLeft className="h-4 w-4" />
                      {t("navigation.ecosystemBenefits")}
                    </Link>
                  </Button>

                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      {t("common.continue")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("benefits.developers.title")}
                    </p>
                  </div>

                  <Button className="gap-2" asChild>
                    <Link to="/benefits-developers">
                      {t("navigation.benefitsDevs")}
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

export default BenefitsUsers;
