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
  Code,
  DollarSign,
  Flag,
  ArrowRight,
  ArrowLeft,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const EcosystemBenefits = () => {
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
                    🌍 Ecosystem Impact
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ecosystem Benefits
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover how Lotus Bridge creates value for every
                    stakeholder in the blockchain ecosystem.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Overview */}
                  <Card className="border-primary/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">
                        Building Value for Everyone
                      </CardTitle>
                      <CardDescription>
                        Lotus Bridge creates a comprehensive ecosystem where all
                        participants benefit
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
                        <p className="text-lg leading-relaxed">
                          From individual users to large institutions, from
                          developers to entire nations, Lotus Bridge is designed
                          to create value at every level of the blockchain
                          ecosystem.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Stakeholder Categories */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          For Users
                        </CardTitle>
                        <CardDescription>
                          Simplified access and enhanced capabilities
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Lotus Bridge transforms the user experience by
                          providing simplified access to global DeFi with
                          local-first design and Vietnamese token support.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Simplified access to global DeFi</li>
                          <li>• Local-first design with Vietnamese tokens</li>
                          <li>• Flexible transaction routing</li>
                          <li>• Multi-wallet management</li>
                        </ul>
                        <Button className="w-full mt-4" asChild>
                          <Link to="/benefits-users">
                            Explore User Benefits
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          For Developers
                        </CardTitle>
                        <CardDescription>
                          Tools and resources for innovation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Comprehensive SDKs, APIs, and documentation empower
                          developers to build the next generation of cross-chain
                          applications.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• SDKs and APIs for cross-chain dApps</li>
                          <li>• Vietnamese-localized documentation</li>
                          <li>• Developer community support</li>
                          <li>• Integration examples and tutorials</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/benefits-developers">
                            Discover Developer Tools
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-green-500/20 hover:border-green-500/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5" />
                          For Liquidity Providers
                        </CardTitle>
                        <CardDescription>
                          New opportunities and yield generation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Access new liquidity pools tied to real usage patterns
                          with exposure to multiple ecosystems through a single
                          bridge.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• New liquidity pools tied to real usage</li>
                          <li>• Multi-ecosystem exposure</li>
                          <li>• Dynamic fee structures</li>
                          <li>• Yield incentives and rewards</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/benefits-liquidity">
                            Learn About LP Benefits
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Flag className="h-5 w-5" />
                          🇻🇳 For Vietnam's Crypto Industry
                        </CardTitle>
                        <CardDescription>
                          National innovation and global recognition
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Position Vietnam as a Web3 innovation hub while
                          showcasing local tokens on the global stage and
                          empowering local developers.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Vietnam as Web3 innovation hub</li>
                          <li>• Global showcase of local tokens</li>
                          <li>• Developer and entrepreneur empowerment</li>
                          <li>• Economic growth through technology</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          asChild
                        >
                          <Link to="/benefits-vietnam">
                            Vietnam's Web3 Future
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Network Effect */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        🌐 Network Effect
                      </CardTitle>
                      <CardDescription>
                        How benefits compound across the ecosystem
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                          The beauty of Lotus Bridge lies in how benefits for
                          one group amplify benefits for others, creating a
                          powerful network effect that strengthens the entire
                          ecosystem.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">
                            Positive Feedback Loops
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                More users → More liquidity → Better rates for
                                everyone
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                More developers → More applications → More user
                                adoption
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>
                                More LPs → Deeper liquidity → More stable
                                operations
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-accent">
                            Global Impact
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                Vietnamese innovation inspires global adoption
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                Cultural bridge building through technology
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span>
                                Regional empowerment meets global standards
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to="/governance">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Governance
                      </Link>
                    </Button>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Have questions?</h3>
                      <p className="text-sm text-muted-foreground">
                        Check our comprehensive FAQ section
                      </p>
                    </div>

                    <Button className="gap-2" asChild>
                      <Link to="/faqs">
                        Continue to FAQs
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

export default EcosystemBenefits;
