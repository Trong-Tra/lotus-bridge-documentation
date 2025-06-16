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
  Target,
  Globe,
  ArrowRight,
  ArrowLeft,
  Heart,
  Flower,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Introduction = () => {
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
                    {t("introduction.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("navigation.introduction")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("introduction.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Introduction Overview */}
                  <Card className="border-primary/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">
                        {t("introduction.overview.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("introduction.overview.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
                        <p className="text-lg leading-relaxed">
                          {t("introduction.overview.content")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Introduction Cards */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          {t("introduction.whatIsLotus.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("introduction.whatIsLotus.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t("introduction.whatIsLotus.content")}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "introduction.whatIsLotus.features.crossArchitecture"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t("introduction.whatIsLotus.features.multiWallet")}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "introduction.whatIsLotus.features.adaptiveProtocol"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "introduction.whatIsLotus.features.vietnameseTokens"
                            )}
                          </li>
                        </ul>
                        <Button className="w-full mt-4" asChild>
                          <Link to="/what-is-lotus">
                            {t("introduction.whatIsLotus.learnMore")}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5" />
                          {t("introduction.whyLotus.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("introduction.whyLotus.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {t("introduction.whyLotus.content")}
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>
                            •{" "}
                            {t(
                              "introduction.whyLotus.features.culturalSymbolism"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "introduction.whyLotus.features.regionalEmpowerment"
                            )}
                          </li>
                          <li>
                            • {t("introduction.whyLotus.features.globalVision")}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "introduction.whyLotus.features.communityDriven"
                            )}
                          </li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/why-lotus">
                            {t("introduction.whyLotus.discoverMission")}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Cultural Elements */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Flower className="h-5 w-5" />
                        {t("introduction.lotusSymbol.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("introduction.lotusSymbol.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🌸</span>
                          </div>
                          <h4 className="font-semibold mb-2">
                            {t("introduction.lotusSymbol.resilience.title")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t(
                              "introduction.lotusSymbol.resilience.description"
                            )}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">💎</span>
                          </div>
                          <h4 className="font-semibold mb-2">
                            {t("introduction.lotusSymbol.purity.title")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("introduction.lotusSymbol.purity.description")}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🌱</span>
                          </div>
                          <h4 className="font-semibold mb-2">
                            {t("introduction.lotusSymbol.growth.title")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("introduction.lotusSymbol.growth.description")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/abstract">
                        <ArrowLeft className="h-4 w-4" />
                        {t("introduction.navigation.backToAbstract")}
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {t("introduction.navigation.readyExplore")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("introduction.navigation.continueDescription")}
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/background">
                        {t("introduction.navigation.continueToBackground")}
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

export default Introduction;
