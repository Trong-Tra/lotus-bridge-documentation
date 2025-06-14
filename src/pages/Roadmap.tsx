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
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  Rocket,
  Building2,
  Globe,
  Shield,
  Zap,
  Users,
  Code,
  Coins,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Roadmap = () => {
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
                    Development Roadmap
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Roadmap
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our journey to revolutionize cross-chain interactions with
                    Vietnamese innovation at the forefront.
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
                        <MapPin className="h-8 w-8 text-muted-foreground" />
                        <div className="text-4xl">🏗️</div>
                      </div>
                      <CardTitle className="text-2xl text-muted-foreground">
                        Development Roadmap
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Comprehensive development timeline and milestones coming
                        soon
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-muted/30 rounded-lg p-8 text-center">
                        <div className="text-muted-foreground">
                          <div className="text-6xl mb-4">🗺️</div>
                          <h3 className="font-semibold text-xl mb-3">
                            Roadmap Timeline Diagrams
                          </h3>
                          <p className="text-sm mb-4">
                            Detailed development phases, milestones, and feature
                            rollouts
                          </p>
                          <Badge variant="outline" className="text-xs">
                            Incoming Documentation
                          </Badge>
                        </div>
                      </div>

                      {/* Wireframe Content Preview */}
                      <div className="grid md:grid-cols-4 gap-6">
                        <Card className="border-dashed border-muted-foreground/20">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                              <Rocket className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-lg text-muted-foreground">
                              Phase 1: Foundation
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted/30 rounded"></div>
                              <div className="h-3 bg-muted/30 rounded w-3/4"></div>
                              <div className="h-3 bg-muted/30 rounded w-1/2"></div>
                            </div>
                            <Badge variant="outline" className="mt-3 text-xs">
                              Future Timeline
                            </Badge>
                          </CardContent>
                        </Card>

                        <Card className="border-dashed border-muted-foreground/20">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                              <Building2 className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-lg text-muted-foreground">
                              Phase 2: Infrastructure
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted/30 rounded"></div>
                              <div className="h-3 bg-muted/30 rounded w-5/6"></div>
                              <div className="h-3 bg-muted/30 rounded w-2/3"></div>
                            </div>
                            <Badge variant="outline" className="mt-3 text-xs">
                              Future Timeline
                            </Badge>
                          </CardContent>
                        </Card>

                        <Card className="border-dashed border-muted-foreground/20">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                              <Globe className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-lg text-muted-foreground">
                              Phase 3: Expansion
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted/30 rounded"></div>
                              <div className="h-3 bg-muted/30 rounded w-4/5"></div>
                              <div className="h-3 bg-muted/30 rounded w-3/5"></div>
                            </div>
                            <Badge variant="outline" className="mt-3 text-xs">
                              Future Timeline
                            </Badge>
                          </CardContent>
                        </Card>

                        <Card className="border-dashed border-muted-foreground/20">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                              <TrendingUp className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-lg text-muted-foreground">
                              Phase 4: Optimization
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted/30 rounded"></div>
                              <div className="h-3 bg-muted/30 rounded w-2/3"></div>
                              <div className="h-3 bg-muted/30 rounded w-1/3"></div>
                            </div>
                            <Badge variant="outline" className="mt-3 text-xs">
                              Future Timeline
                            </Badge>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Vietnamese Focus Section */}
                      <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">🇻🇳</span>
                            <CardTitle className="text-green-800 dark:text-green-400">
                              Vietnamese Innovation Priority
                            </CardTitle>
                          </div>
                          <CardDescription>
                            Dedicated timeline for Vietnamese market features
                            and ecosystem integration
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="h-3 bg-green-200/50 dark:bg-green-800/50 rounded"></div>
                              <div className="h-3 bg-green-200/50 dark:bg-green-800/50 rounded w-4/5"></div>
                              <div className="h-3 bg-green-200/50 dark:bg-green-800/50 rounded w-3/5"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-green-200/50 dark:bg-green-800/50 rounded w-5/6"></div>
                              <div className="h-3 bg-green-200/50 dark:bg-green-800/50 rounded w-2/3"></div>
                              <div className="h-3 bg-green-200/50 dark:bg-green-800/50 rounded w-1/2"></div>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="mt-3 text-xs text-green-700 dark:text-green-300"
                          >
                            Future Vietnamese Features
                          </Badge>
                        </CardContent>
                      </Card>

                      <div className="text-center py-6">
                        <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                        <h4 className="font-semibold text-lg mb-2">
                          Development in Progress
                        </h4>
                        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                          Our comprehensive roadmap and timeline diagrams are
                          currently being developed. This section will include
                          detailed development phases, feature rollouts,
                          Vietnamese market priorities, and community governance
                          milestones.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/security">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Security
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Continue exploring
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Learn about our tokenomics
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/tokenomics">
                        Continue to Tokenomics
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

export default Roadmap;
