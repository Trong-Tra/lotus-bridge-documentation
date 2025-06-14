
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
  Calendar,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Changelog = () => {
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
                    📋 Version History
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("changelog.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("changelog.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Version History */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Version 1.0.0 */}
                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent"></div>
                    <CardHeader className="pl-8">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">Version 1.0.0</CardTitle>
                            <CardDescription className="text-lg">
                              June 14, 2025
                            </CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {t("changelog.initialRelease")}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pl-8">
                      <p className="text-muted-foreground mb-6">
                        {t("changelog.initialDescription")}
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {t("changelog.features")}
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {(t("changelog.initialFeatures") as unknown as string[]).map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-accent" />
                            {t("changelog.improvements")}
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {(t("changelog.initialImprovements") as unknown as string[]).map((improvement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                                <span>{improvement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            {t("changelog.documentation")}
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {(t("changelog.initialDocumentation") as unknown as string[]).map((doc, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary/70 rounded-full mt-2"></div>
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Coming Soon Section */}
                  <Card className="border-2 border-dashed border-muted-foreground/30">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-muted-foreground">
                        🚧 Future Updates
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Stay tuned for upcoming releases and improvements
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">
                        We're continuously working on improvements and new
                        features. Future changelog entries will appear here as
                        we release updates to Lotus Bridge.
                      </p>
                      <Badge variant="outline" className="text-sm">
                        🌸 Vietnamese Innovation Never Stops
                      </Badge>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/faqs">
                        <ArrowLeft className="h-4 w-4" />
                        Back to FAQs
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Ready to explore?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Discover how Lotus Bridge works
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/abstract">
                        Start with Abstract
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

export default Changelog;
