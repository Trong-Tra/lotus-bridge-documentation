import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
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

const Index = () => {
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
            <HowItWorksSection />

            {/* Documentation Overview Section */}
            <section id="documentation" className="py-20 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    Documentation Hub
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Comprehensive Documentation
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Everything you need to understand, use, and build with Lotus
                    Bridge. From basic user guides to advanced technical
                    documentation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle>User Guides</CardTitle>
                      </div>
                      <CardDescription>
                        Step-by-step guides for connecting wallets, bridging
                        tokens, and troubleshooting
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/user-guides">
                        <Button className="w-full gap-2 group-hover:gap-3 transition-all">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="h-5 w-5 text-accent" />
                        <CardTitle>Developer Docs</CardTitle>
                      </div>
                      <CardDescription>
                        APIs, SDKs, smart contracts, and integration guides for
                        developers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/developer-docs">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          Build with Us
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-orange-600" />
                        <CardTitle>Whitepaper</CardTitle>
                      </div>
                      <CardDescription>
                        Technical vision, protocol architecture, tokenomics, and
                        security analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/whitepaper">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          Read Whitepaper
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        <CardTitle>FAQs & Glossary</CardTitle>
                      </div>
                      <CardDescription>
                        Frequently asked questions and comprehensive terminology
                        guide
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/faqs">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          Find Answers
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <CardTitle>Changelog</CardTitle>
                      </div>
                      <CardDescription>
                        Version history, release notes, and upcoming features
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/changelog">
                        <Button
                          variant="outline"
                          className="w-full gap-2 group-hover:gap-3 transition-all"
                        >
                          View Updates
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <CardTitle>Community</CardTitle>
                      </div>
                      <CardDescription>
                        Join our Discord, follow on Twitter, and connect with
                        the Lotus community
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full gap-2 group-hover:gap-3 transition-all"
                      >
                        Join Community
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
                  <h2 className="text-4xl font-bold mb-6">
                    Why Choose Lotus Bridge?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Built with Vietnamese innovation and cutting-edge technology
                    to provide the best cross-chain experience.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 lotus-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Lightning Fast
                    </h3>
                    <p className="text-muted-foreground">
                      Sub-15 second finality with our innovative Lotus Consensus
                      Algorithm
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ultra Secure</h3>
                    <p className="text-muted-foreground">
                      Multi-layered security with formal verification and $10M
                      security fund
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Low Costs</h3>
                    <p className="text-muted-foreground">
                      Optimized gas consumption with fees starting from just
                      0.05%
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      User Friendly
                    </h3>
                    <p className="text-muted-foreground">
                      Intuitive interface designed for both beginners and
                      advanced users
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-card border-t border-border/50 py-12 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center">
                  <div className="w-16 h-16 lotus-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 lotus-bloom">
                    <span className="text-2xl text-white font-bold">蓮</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Lotus Bridge
                  </h3>
                  <p className="text-muted-foreground mb-6 vietnamese-text">
                    Bridging blockchain networks with Vietnamese innovation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Built with 💚 in Vietnam • © 2024 Lotus Bridge Team
                  </p>
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
