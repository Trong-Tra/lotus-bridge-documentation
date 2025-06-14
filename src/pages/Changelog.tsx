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
  GitBranch,
  CheckCircle,
  Clock,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ArrowLeft,
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
                    Version History
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Changelog
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Track the development journey of Lotus Bridge from inception
                    to the revolutionary cross-chain platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Release Timeline */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Current Development Version */}
                  <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                          <CardTitle className="text-2xl">
                            v0.1.0-alpha - "Lotus Foundation"
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="border-green-500 text-green-600"
                          >
                            Completed
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          May 2025 - June 2025
                        </div>
                      </div>
                      <CardDescription>
                        First alpha version of Lotus Bridge - foundational
                        architecture and core features
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <h4 className="font-semibold text-green-800 dark:text-green-400">
                            Development Completed
                          </h4>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          The first alpha version of Lotus Bridge has been
                          successfully completed. All core architecture,
                          documentation, and initial bridge capabilities have
                          been fully implemented and tested.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <h4 className="font-semibold text-green-700 dark:text-green-400">
                              Completed Features
                            </h4>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Documentation website and user interface
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Vietnamese token integration catalog</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Core concept and architecture design</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Bilingual support (English/Vietnamese)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Core bridge protocol development</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Smart contract architecture</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Security framework implementation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Cross-chain validation system</span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <h4 className="font-semibold text-green-700 dark:text-green-400">
                              Additional Achievements
                            </h4>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                AXS, SLP, VNDC, VNST token support
                                implementation
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>
                                Vietnamese gaming ecosystem integration
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Local DeFi protocol partnerships</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                              <span>Vietnamese community governance</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-4 w-4 text-blue-600" />
                          <h4 className="font-semibold text-blue-800 dark:text-blue-400">
                            Supported Networks (Planned)
                          </h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          <Badge variant="outline">Ethereum</Badge>
                          <Badge variant="outline">BSC</Badge>
                          <Badge variant="outline">Polygon</Badge>
                          <Badge variant="outline">Solana</Badge>
                          <Badge variant="outline">Ronin</Badge>
                          <Badge variant="outline">Sui</Badge>
                          <Badge variant="outline">Base</Badge>
                          <Badge variant="outline">+ More</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Development Milestones */}
                  <Card className="border-muted/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GitBranch className="h-5 w-5" />
                        Development Milestones
                      </CardTitle>
                      <CardDescription>
                        Key achievements and upcoming targets for the first
                        version
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-green-800 dark:text-green-400">
                              Project Inception & Documentation
                            </p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Completed foundation documentation, UI/UX design,
                              and Vietnamese localization
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              May 2025
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-green-800 dark:text-green-400">
                              Core Protocol Development
                            </p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Completed the foundational bridge architecture and
                              smart contracts
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              May 2025
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-green-800 dark:text-green-400">
                              Vietnamese Token Integration
                            </p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Completed native support for AXS, SLP, VNDC, VNST
                              and other Vietnamese ecosystem tokens
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              June 2025
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technical Improvements */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Recent Updates
                      </CardTitle>
                      <CardDescription>
                        Latest improvements and fixes to the documentation and
                        architecture
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">
                              Enhanced Vietnamese Token Integration UI
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              June 2025
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Added hover animations and improved token card
                            layouts for better user experience. Organized tokens
                            into Gaming, Stablecoins, and DeFi Infrastructure
                            categories.
                          </p>
                        </div>

                        <div className="border-l-4 border-accent pl-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">
                              Documentation Structure Improvements
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              May 2025
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Streamlined navigation, removed duplicate content,
                            and improved page transitions. Security and Roadmap
                            pages converted to wireframe designs for clarity.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">
                              Bilingual Support Implementation
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              May 2025
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Full Vietnamese and English language support with
                            context-aware translations and cultural adaptations
                            for the Vietnamese market.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Building with Vietnamese Innovation
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                      Lotus Bridge is in active development with a focus on
                      serving the Vietnamese blockchain community while
                      providing world-class cross-chain infrastructure. Stay
                      tuned for regular updates as we build towards our first
                      major release.
                    </p>
                  </div>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/tokenomics">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Tokenomics
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Ready to explore?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Start with our user guides
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/user-guides">
                        User Guides
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
