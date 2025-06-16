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
import {
  Network,
  Shield,
  Globe,
  ArrowRight,
  ArrowLeft,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Architecture = () => {
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
                    {t("pages.architecture.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.architecture.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.architecture.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                      <Layers className="h-16 w-16 text-primary" />
                    </div>
                    <CardTitle className="text-3xl mb-4">
                      {t("pages.architecture.documentationTitle")}
                    </CardTitle>
                    <CardDescription className="text-lg max-w-2xl mx-auto">
                      {t("pages.architecture.documentationDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-12 border-2 border-dashed border-muted-foreground/30">
                      <div className="text-muted-foreground">
                        <div className="text-6xl mb-6">📊</div>
                        <h3 className="font-semibold text-2xl mb-4">
                          Architecture Diagrams Coming Soon
                        </h3>
                        <p className="text-lg mb-4">
                          Detailed technical diagrams and system flow charts
                          will be available here.
                        </p>
                        <p className="text-sm text-muted-foreground/70">
                          Including modular layer architecture, cross-chain
                          protocols, and Vietnamese ecosystem integration
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="p-6 border rounded-lg">
                        <Network className="h-8 w-8 text-primary mb-3 mx-auto" />
                        <h4 className="font-semibold mb-2">Network Layer</h4>
                        <p className="text-sm text-muted-foreground">
                          Multi-chain protocol adaptation
                        </p>
                      </div>
                      <div className="p-6 border rounded-lg">
                        <Shield className="h-8 w-8 text-accent mb-3 mx-auto" />
                        <h4 className="font-semibold mb-2">Security Layer</h4>
                        <p className="text-sm text-muted-foreground">
                          Enterprise-grade validation
                        </p>
                      </div>
                      <div className="p-6 border rounded-lg">
                        <Globe className="h-8 w-8 text-primary mb-3 mx-auto" />
                        <h4 className="font-semibold mb-2">
                          Localization Layer
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Vietnamese ecosystem integration
                        </p>
                      </div>
                    </div>

                    <Badge variant="secondary" className="text-lg py-2 px-4">
                      🚧 Under Development - Stay Tuned!
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/core-overview">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Core Overview
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">Back to Core Concept</Button>
                  </Link>
                  <Link to="/governance">
                    <Button className="flex items-center gap-2">
                      Governance Framework
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

export default Architecture;
