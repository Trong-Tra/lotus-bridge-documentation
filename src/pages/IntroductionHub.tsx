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

const IntroductionHub = () => {
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
                    🌸 Vietnamese Innovation
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Introduction
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Understanding Lotus Bridge - A revolutionary cross-chain
                    protocol rooted in Vietnamese culture and innovation.
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
                        Discover Lotus Bridge
                      </CardTitle>
                      <CardDescription>
                        Explore the fundamental concepts and mission behind our
                        revolutionary cross-chain protocol
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
                        <p className="text-lg leading-relaxed">
                          Lotus Bridge represents more than just technical
                          innovation—it's a bridge between cultures, economies,
                          and futures. Built by Vietnamese developers with a
                          vision to connect the vibrant Vietnamese crypto
                          ecosystem with global opportunities.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section Navigation */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          What is Lotus Bridge?
                        </CardTitle>
                        <CardDescription>
                          Understanding the technology and capabilities
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Discover how Lotus Bridge functions as a dynamic,
                          universal adapter between blockchains, enabling
                          seamless cross-chain interactions regardless of
                          architecture differences.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Cross-architecture bridging capabilities</li>
                          <li>• Multi-wallet support and management</li>
                          <li>• Adaptive protocol technology</li>
                          <li>• Vietnamese token integration</li>
                        </ul>
                        <Button className="w-full mt-4" asChild>
                          <Link to="/what-is-lotus">
                            Learn About the Technology
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5" />
                          Why Lotus?
                        </CardTitle>
                        <CardDescription>
                          The cultural significance and mission
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Learn about the cultural heritage and values that
                          inspired Lotus Bridge, and how we're bringing
                          Vietnamese innovation to the global stage.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Vietnamese cultural symbolism</li>
                          <li>• Regional empowerment mission</li>
                          <li>• Global bridge building vision</li>
                          <li>• Community-driven innovation</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/why-lotus">
                            Discover Our Mission
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
                        🌸 The Lotus Symbol
                      </CardTitle>
                      <CardDescription>
                        Cultural heritage meets technological innovation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🌸</span>
                          </div>
                          <h4 className="font-semibold mb-2">Resilience</h4>
                          <p className="text-sm text-muted-foreground">
                            Growing strong in challenging environments, just
                            like Vietnam's crypto ecosystem
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">💎</span>
                          </div>
                          <h4 className="font-semibold mb-2">Purity</h4>
                          <p className="text-sm text-muted-foreground">
                            Clean, elegant solutions that cut through blockchain
                            complexity
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🌱</span>
                          </div>
                          <h4 className="font-semibold mb-2">Growth</h4>
                          <p className="text-sm text-muted-foreground">
                            Blooming from regional roots to global impact and
                            innovation
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
                        Back to Abstract
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Ready to explore deeper?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Continue with industry background or jump to core
                        concepts
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/background">
                        Continue to Background
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

export default IntroductionHub;
