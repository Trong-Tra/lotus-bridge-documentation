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
  Shield,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Security = () => {
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
                    {t("pages.security.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("navigation.security")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.security.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Wireframe Placeholder */}
                  <Card className="border-2 border-dashed border-muted-foreground/30">
                    <CardHeader className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Shield className="h-8 w-8 text-muted-foreground" />
                        <div className="text-4xl">🏗️</div>
                      </div>
                      <CardTitle className="text-2xl text-muted-foreground">
                        {t("pages.security.documentationTitle")}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {t("pages.security.documentationDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-muted/30 rounded-lg p-8 text-center">
                        <div className="text-muted-foreground">
                          <div className="text-6xl mb-4">📋</div>
                          <h3 className="font-semibold text-xl mb-3">
                            {t("pages.security.architectureDiagramsTitle")}
                          </h3>
                          <p className="text-sm mb-4">
                            {t(
                              "pages.security.architectureDiagramsDescription"
                            )}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {t("pages.security.incomingDocumentation")}
                          </Badge>
                        </div>
                      </div>

                      {/* Wireframe Content Preview */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-dashed border-muted-foreground/20">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                              <Lock className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-lg text-muted-foreground">
                              {t("pages.security.cryptographicSecurity")}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted/30 rounded"></div>
                              <div className="h-3 bg-muted/30 rounded w-3/4"></div>
                              <div className="h-3 bg-muted/30 rounded w-1/2"></div>
                            </div>
                            <Badge variant="outline" className="mt-3 text-xs">
                              {t("pages.security.futureDiagram")}
                            </Badge>
                          </CardContent>
                        </Card>

                        <Card className="border-dashed border-muted-foreground/20">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                              <Shield className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-lg text-muted-foreground">
                              {t("pages.security.multiLayerDefense")}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted/30 rounded"></div>
                              <div className="h-3 bg-muted/30 rounded w-5/6"></div>
                              <div className="h-3 bg-muted/30 rounded w-2/3"></div>
                            </div>
                            <Badge variant="outline" className="mt-3 text-xs">
                              {t("pages.security.futureDiagram")}
                            </Badge>
                          </CardContent>
                        </Card>

                        <Card className="border-dashed border-muted-foreground/20">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                              <CheckCircle className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-lg text-muted-foreground">
                              {t("pages.security.auditCompliance")}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted/30 rounded"></div>
                              <div className="h-3 bg-muted/30 rounded w-4/5"></div>
                              <div className="h-3 bg-muted/30 rounded w-3/5"></div>
                            </div>
                            <Badge variant="outline" className="mt-3 text-xs">
                              {t("pages.security.futureDiagram")}
                            </Badge>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="text-center py-6">
                        <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                        <h4 className="font-semibold text-lg mb-2">
                          {t("pages.security.developmentInProgressTitle")}
                        </h4>
                        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                          {t("pages.security.developmentInProgressDescription")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/benefits-vietnam">
                        <ArrowLeft className="h-4 w-4" />
                        {t("pages.security.backToBenefits")}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t("pages.security.continueExploring")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.security.learnAboutRoadmap")}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/roadmap">
                        {t("pages.security.continueToRoadmap")}
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

export default Security;
