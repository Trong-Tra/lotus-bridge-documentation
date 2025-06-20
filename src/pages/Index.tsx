import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  FileText,
  Code,
  Lightbulb,
  MessageCircle,
  Calendar,
  ArrowRight,
  Users,
  Target,
  Shield,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />
            <HeroSection />
            <IntroductionSection />

            {/* Documentation Overview Section */}
            <section id="documentation" className="py-20 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    {t("documentationHub.badge")}
                  </Badge>
                  <h2 className="text-4xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("documentationHub.title")}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("documentationHub.subtitle")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle>{t("navigation.userGuides")}</CardTitle>
                      </div>
                      <CardDescription>
                        {t("userGuides.subtitle")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/user-guides">
                        <Button className="w-full gap-2 group-hover:gap-3 transition-all">
                          {t("hero.getStarted")}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="h-5 w-5 text-accent" />
                        <CardTitle>{t("navigation.developerDocs")}</CardTitle>
                      </div>
                      <CardDescription>
                        {t("developerDocs.subtitle")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/developer-docs">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          {t("documentationHub.buttons.buildWithUs")}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-orange-600" />
                        <CardTitle>{t("navigation.whitepaper")}</CardTitle>
                      </div>
                      <CardDescription>
                        {t("documentationHub.whitepaper.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/abstract">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          {t("documentationHub.buttons.readWhitepaper")}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        <CardTitle>{t("navigation.faqs")}</CardTitle>
                      </div>
                      <CardDescription>
                        {t("documentationHub.faqs.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/faqs">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          {t("documentationHub.buttons.findAnswers")}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <CardTitle>{t("navigation.changelog")}</CardTitle>
                      </div>
                      <CardDescription>
                        {t("changelog.subtitle")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/changelog">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          {t("documentationHub.buttons.viewUpdates")}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <CardTitle>{t("quickStart.community.title")}</CardTitle>
                      </div>
                      <CardDescription>
                        {t("quickStart.community.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full gap-2 group-hover:gap-3 transition-all"
                      >
                        {t("documentationHub.buttons.joinCommunity")}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold leading-tight mb-6">
                    {t("features.title")}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("features.subtitle")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 lotus-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("features.lightningFast.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("features.lightningFast.description")}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("features.ultraSecure.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("features.ultraSecure.description")}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("features.lowCosts.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("features.lowCosts.description")}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("features.userFriendly.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("features.userFriendly.description")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-card border-t border-border/50 py-12 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center">
                  <img
                    src="/lotus-logo.png"
                    alt="Lotus Bridge Logo"
                    className="w-80 h-80 mx-auto object-contain mb-1"
                  />
                  <p className="text-muted-foreground mb-4 vietnamese-text">
                    {t("footer.tagline")}
                  </p>

                  {/* Contact Information from docs.txt */}
                  <div className="mb-6 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {t("footer.contact.inquiries")}
                    </p>
                    <a
                      href="mailto:team@lotusbridge.io"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      {t("footer.contact.email")}
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
