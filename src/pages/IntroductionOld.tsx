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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Target,
  Globe,
  ArrowRight,
  Zap,
  Users,
  Shield,
  Lightbulb,
  Heart,
  Flower,
  ArrowLeft,
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
                    🌸 Vietnamese Innovation
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Introduction
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Understanding Lotus Bridge - A revolutionary cross-chain protocol rooted in Vietnamese culture and innovation.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Tabs defaultValue="what-is-lotus" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="what-is-lotus">What is Lotus?</TabsTrigger>
                    <TabsTrigger value="why-lotus">Why Lotus?</TabsTrigger>
                    <TabsTrigger value="background">Background</TabsTrigger>
                    <TabsTrigger value="symbolism">Symbolism</TabsTrigger>
                  </TabsList>

                  {/* What is Lotus? */}
                  <TabsContent value="what-is-lotus" className="space-y-8">
                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          What is Lotus Bridge?
                        </CardTitle>
                        <CardDescription>
                          A dynamic, universal adapter between blockchains
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                          <p className="text-lg leading-relaxed">
                            Lotus Bridge is a <strong>decentralized application (dApp) and infrastructure protocol</strong> that allows users to connect wallets and bridge assets across multiple blockchain networks—regardless of their architecture, consensus mechanisms, or token standards.
                          </p>
                          
                          <p className="text-lg leading-relaxed">
                            With the ability to adapt to any exchange method supported by the connected networks, <strong>Lotus is more than a bridge: it is a dynamic, universal adapter between blockchains.</strong>
                          </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border">
                            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">Universal Protocol</h3>
                            <p className="text-sm text-muted-foreground">
                              Connects any blockchain network regardless of architecture or consensus mechanism
                            </p>
                          </div>
                          
                          <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border">
                            <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">Dynamic Adapter</h3>
                            <p className="text-sm text-muted-foreground">
                              Adapts to any exchange method supported by connected networks
                            </p>
                          </div>
                          
                          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border">
                            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">Multi-Wallet Support</h3>
                            <p className="text-sm text-muted-foreground">
                              Connect and manage multiple wallets across different ecosystems
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Core Capabilities */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Core Capabilities</CardTitle>
                        <CardDescription>
                          What makes Lotus Bridge unique in the cross-chain ecosystem
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold">Cross-Chain Features</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <span className="text-sm">Token bridging between heterogeneous blockchains (e.g., Ethereum ↔ Solana)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <span className="text-sm">Asset swaps within the same chain or across different chains</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <span className="text-sm">Transactions between same or different user addresses</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold">Vietnamese Focus</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                                <span className="text-sm">Multi-wallet connection and management</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                                <span className="text-sm">Localization and native support for Vietnamese tokens</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                                <span className="text-sm">Support for AXS, SLP, VNDC, VNST, KAI, SIPHER, A8, C98, and KNC</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Why Lotus? */}
                  <TabsContent value="why-lotus" className="space-y-8">
                    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5" />
                          Why Lotus Bridge?
                        </CardTitle>
                        <CardDescription>
                          The philosophy and mission behind our Vietnamese innovation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                          <p className="text-lg leading-relaxed">
                            Named after the <strong>national flower of Vietnam</strong>, the Lotus symbolizes resilience, purity, and growth from murky environments—perfectly reflecting the mission of Lotus Bridge.
                          </p>
                          
                          <p className="text-lg leading-relaxed">
                            In a fragmented blockchain ecosystem, Lotus Bridge offers a <strong>unified, elegant, and powerful solution</strong> tailored to the needs of both Vietnamese users and the global crypto community.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-background/50 p-6 rounded-lg border">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Globe className="h-5 w-5 text-primary" />
                              Global Impact
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Bringing regional tokens into the global liquidity flow while offering:
                            </p>
                            <ul className="space-y-1 text-sm">
                              <li>• Seamless user experience (UX)</li>
                              <li>• Robust security framework</li>
                              <li>• Future-proof scalability</li>
                              <li>• Cross-cultural bridge building</li>
                            </ul>
                          </div>
                          
                          <div className="bg-background/50 p-6 rounded-lg border">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Shield className="h-5 w-5 text-accent" />
                              Vietnamese Innovation
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Built with deep understanding of Vietnamese market needs:
                            </p>
                            <ul className="space-y-1 text-sm">
                              <li>• Local token prioritization</li>
                              <li>• Cultural sensitivity in design</li>
                              <li>• Vietnamese developer empowerment</li>
                              <li>• Regional economic growth focus</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Mission Statement */}
                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="text-center">🇻🇳 Our Mission</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="text-center text-lg italic border-l-4 border-primary pl-6 py-4 bg-gradient-to-r from-primary/5 to-transparent">
                          "To position Vietnam as a Web3 innovation hub while creating bridges—not just between blockchains, but between cultures, economies, and futures."
                        </blockquote>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Background */}
                  <TabsContent value="background" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          Industry Background
                        </CardTitle>
                        <CardDescription>
                          The current state of blockchain interoperability and Vietnam's position
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="prose max-w-none dark:prose-invert">
                          <h4>The Blockchain Landscape</h4>
                          <p>
                            The blockchain industry is expanding rapidly with <strong>hundreds of layer-1 and layer-2 networks</strong>, each optimized for different use cases. However, the lack of interoperability across these networks hinders composability, user adoption, and liquidity flow.
                          </p>
                          
                          <h4>Current Limitations</h4>
                          <p>
                            Existing bridges are typically limited to EVM-compatible chains or require complex, risk-prone interactions. This creates significant barriers for users, especially in emerging markets.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="border-destructive/20">
                            <CardHeader>
                              <CardTitle className="text-destructive">Current Challenges</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm">
                                <li>• Limited to EVM-compatible chains</li>
                                <li>• Complex, multi-step processes</li>
                                <li>• High risk of failed transactions</li>
                                <li>• Poor support for regional tokens</li>
                                <li>• Fragmented user experience</li>
                                <li>• Limited cross-architecture support</li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border-primary/20">
                            <CardHeader>
                              <CardTitle className="text-primary">Vietnam's Opportunity</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm">
                                <li>• One of the most crypto-savvy nations</li>
                                <li>• Strong local token ecosystem</li>
                                <li>• Talented developer community</li>
                                <li>• Growing DeFi adoption</li>
                                <li>• Strategic geographic position</li>
                                <li>• Government support for innovation</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Vietnam's Position */}
                    <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
                      <CardHeader>
                        <CardTitle>🇻🇳 Vietnam's Crypto Leadership</CardTitle>
                        <CardDescription>
                          Why Vietnam is perfectly positioned to lead cross-chain innovation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>
                          <strong>Vietnam has emerged as one of the most crypto-savvy nations</strong>, yet local users face barriers in accessing global liquidity with Vietnamese-origin tokens. Lotus Bridge addresses this critical gap by offering a highly adaptable, regionally-conscious, and technologically advanced bridge.
                        </p>
                        
                        <div className="bg-background/50 p-4 rounded-lg border">
                          <h4 className="font-semibold mb-2">Our Solution</h4>
                          <p className="text-sm text-muted-foreground">
                            By combining Vietnamese innovation with global technical excellence, we're creating infrastructure that serves both local needs and international standards—positioning Vietnam as a leader in Web3 interoperability.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Symbolism */}
                  <TabsContent value="symbolism" className="space-y-8">
                    <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Flower className="h-5 w-5" />
                          🌸 The Symbolism of the Lotus
                        </CardTitle>
                        <CardDescription>
                          Deep cultural meaning behind our Vietnamese innovation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="prose max-w-none dark:prose-invert">
                          <p className="text-lg leading-relaxed">
                            In Vietnamese culture, the <strong>lotus rises pure from murky waters</strong>. It represents resilience, rebirth, and peace. In blockchain, that water is fragmentation, isolation, and complexity.
                          </p>
                          
                          <p className="text-lg leading-relaxed">
                            <strong>Lotus Bridge blooms as the answer</strong> — creating order from chaos, clarity from confusion.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center p-6 bg-background/50 rounded-lg border">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-white text-2xl">🌱</span>
                            </div>
                            <h3 className="font-semibold mb-2">Resilience</h3>
                            <p className="text-sm text-muted-foreground">
                              Rising strong through challenges, adapting to any blockchain environment
                            </p>
                          </div>
                          
                          <div className="text-center p-6 bg-background/50 rounded-lg border">
                            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-white text-2xl">🌸</span>
                            </div>
                            <h3 className="font-semibold mb-2">Purity</h3>
                            <p className="text-sm text-muted-foreground">
                              Clean, elegant solutions that cut through complexity with simplicity
                            </p>
                          </div>
                          
                          <div className="text-center p-6 bg-background/50 rounded-lg border">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-white text-2xl">🌺</span>
                            </div>
                            <h3 className="font-semibold mb-2">Growth</h3>
                            <p className="text-sm text-muted-foreground">
                              Continuous evolution and expansion into new blockchain territories
                            </p>
                          </div>
                        </div>

                        <Card className="border-accent/20">
                          <CardContent className="pt-6">
                            <blockquote className="text-center text-lg italic">
                              "From the heart of Vietnam blooms the Lotus — bridging blockchains, cultures, and futures."
                            </blockquote>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    {/* Cultural Bridge */}
                    <Card>
                      <CardHeader>
                        <CardTitle>🌏 Beyond Technology: A Cultural Bridge</CardTitle>
                        <CardDescription>
                          How Lotus Bridge connects more than just blockchains
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Connecting Cultures</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Vietnamese innovation meets global standards</li>
                              <li>• East-West technological collaboration</li>
                              <li>• Cultural sensitivity in product design</li>
                              <li>• Multilingual and multicultural approach</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Bridging Economies</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Local tokens access global markets</li>
                              <li>• Vietnamese DeFi meets international liquidity</li>
                              <li>• Economic empowerment through technology</li>
                              <li>• Regional growth through global connection</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/abstract">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Abstract
                    </Link>
                  </Button>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Ready for the technical details?</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore our comprehensive whitepaper and architecture
                    </p>
                  </div>
                  
                  <Button className="gap-2" asChild>
                    <Link to="/whitepaper">
                      Continue to Whitepaper
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
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
