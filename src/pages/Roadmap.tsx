
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
import { Progress } from "@/components/ui/progress";
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
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

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
                    🚀 Lotus Bridge Roadmap
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Strategic milestones and feature releases planned for Lotus
                    Bridge. From foundation to maturity, building the future of
                    cross-chain infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* Progress Overview */}
            <section className="py-12 px-6 border-b">
              <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      2
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Completed Phases
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      1
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Current Phase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">2</div>
                    <div className="text-sm text-muted-foreground">
                      Upcoming Phases
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-muted-foreground mb-1">
                      75%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Overall Progress
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Roadmap */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-8">
                  {/* Phase 1: Foundation - Completed */}
                  <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                          Phase 1: Foundation
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800"
                          >
                            Q1 2024
                          </Badge>
                          <Badge className="bg-green-500 text-white">
                            Completed
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>
                        Core protocol development and initial infrastructure
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={100} className="h-2" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-green-800 dark:text-green-400">
                            Technical Achievements
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Core protocol development and testing
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Ethereum ↔ Polygon bridge launch
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Smart contract architecture finalization
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Initial validator network setup
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-green-800 dark:text-green-400">
                            Security & Community
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Initial security audits completed
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Bug bounty program launched
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Community building initiatives
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Early adopter program
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 2: Expansion - Completed */}
                  <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                          Phase 2: Expansion
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800"
                          >
                            Q2-Q3 2024
                          </Badge>
                          <Badge className="bg-green-500 text-white">
                            Completed
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>
                        Multi-chain support and advanced features
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={100} className="h-2" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-green-800 dark:text-green-400">
                            Network Expansion
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              BSC, Avalanche, Arbitrum integration
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Advanced trading features
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              MEV protection implementation
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Cross-chain swap optimization
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-green-800 dark:text-green-400">
                            Governance & Partnerships
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Governance token launch
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              DAO formation and initial proposals
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Strategic DeFi protocol partnerships
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Vietnamese market partnerships
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 3: Innovation - Current */}
                  <Card className="border-primary/50 bg-primary/5">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary border-4 border-primary/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                          </div>
                          Phase 3: Innovation
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Q4 2024 - Q2 2025</Badge>
                          <Badge className="bg-primary text-white">
                            In Progress
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>
                        Advanced consensus algorithm and zero-knowledge
                        integration
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={65} className="h-2" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">
                            Technical Innovation
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Lotus Consensus Algorithm implementation
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-primary mt-0.5" />
                              Zero-knowledge proof integration
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-primary mt-0.5" />
                              Advanced state verification protocol
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-primary mt-0.5" />
                              Cross-architecture compatibility layer
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">
                            User Experience
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              Mobile app beta release
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-primary mt-0.5" />
                              Enhanced user interface
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-primary mt-0.5" />
                              Enterprise partnership features
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-primary mt-0.5" />
                              Institutional trading tools
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 4: Ecosystem - Planned */}
                  <Card className="border-accent/50 bg-accent/5">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <Target className="h-6 w-6 text-accent" />
                          Phase 4: Ecosystem
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Q3 2025 - Q2 2026</Badge>
                          <Badge variant="outline">Planned</Badge>
                        </div>
                      </div>
                      <CardDescription>
                        Layer 2 solutions and comprehensive ecosystem
                        development
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={0} className="h-2" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-accent">
                            Infrastructure Scaling
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              Layer 2 solutions and rollup integrations
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              Cross-chain smart contract execution
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              Advanced validator network expansion
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              High-throughput transaction processing
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-accent">
                            Developer Ecosystem
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              Comprehensive developer SDK
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              Integration tools and APIs
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              Global expansion initiatives
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-accent mt-0.5"></div>
                              Regulatory compliance framework
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 5: Maturity - Future */}
                  <Card className="border-muted-foreground/30 bg-muted/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <Rocket className="h-6 w-6 text-muted-foreground" />
                          Phase 5: Maturity
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Q3+ 2026</Badge>
                          <Badge variant="outline">Future</Badge>
                        </div>
                      </div>
                      <CardDescription>
                        Advanced DeFi primitives and autonomous governance
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={0} className="h-2" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-muted-foreground">
                            Advanced Features
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              Advanced DeFi primitives and yield farming
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              Cross-chain NFT and gaming integrations
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              AI-powered routing optimization
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              Quantum-resistant security upgrades
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-muted-foreground">
                            Autonomous Operations
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              Fully autonomous protocol governance
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              Self-upgrading smart contracts
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              Research into next-generation technologies
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5"></div>
                              Global Web3 infrastructure leadership
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Updated Genesis Launch Roadmap */}
                <div className="mt-16">
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-center text-xl">
                        🌸 Updated Roadmap: Genesis Launch (v1.0.0)
                      </CardTitle>
                      <CardDescription className="text-center">
                        Refined timeline focusing on core Vietnamese market
                        needs and global expansion
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Current: Beta Launch */}
                        <Card className="border-primary/50 bg-primary/5">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <Badge className="bg-primary text-white">
                                Current
                              </Badge>
                              <Calendar className="h-4 w-4 text-primary" />
                            </div>
                            <CardTitle className="text-sm">
                              Q3 2025: Beta Launch
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <Zap className="h-3 w-3 text-primary" />
                              <span>EVM + Solana support</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Shield className="h-3 w-3 text-primary" />
                              <span>Core security audits</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Users className="h-3 w-3 text-primary" />
                              <span>Vietnamese early adopters</span>
                            </div>
                            <Progress value={85} className="h-1 mt-2" />
                          </CardContent>
                        </Card>

                        {/* Upcoming: Tokenomics */}
                        <Card className="border-accent/50 bg-accent/5">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <Badge
                                variant="outline"
                                className="border-accent text-accent"
                              >
                                Upcoming
                              </Badge>
                              <Calendar className="h-4 w-4 text-accent" />
                            </div>
                            <CardTitle className="text-sm">
                              Q4 2025: Tokenomics
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <TrendingUp className="h-3 w-3 text-accent" />
                              <span>LP incentive programs</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Coins className="h-3 w-3 text-accent" />
                              <span>LOTUS token launch</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Target className="h-3 w-3 text-accent" />
                              <span>Revenue sharing model</span>
                            </div>
                            <Progress value={25} className="h-1 mt-2" />
                          </CardContent>
                        </Card>

                        {/* Planned: Mobile Integration */}
                        <Card className="border-muted-foreground/30 bg-muted/10">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">Planned</Badge>
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-sm">
                              Q1 2026: Mobile Integration
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Building2 className="h-3 w-3" />
                              <span>Mobile wallet integration</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Users className="h-3 w-3" />
                              <span>Mobile-first experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Globe className="h-3 w-3" />
                              <span>Regional expansion</span>
                            </div>
                            <Progress value={0} className="h-1 mt-2" />
                          </CardContent>
                        </Card>

                        {/* Future: DAO Launch */}
                        <Card className="border-muted-foreground/30 bg-muted/10">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">Future</Badge>
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-sm">
                              Q2 2026: DAO Launch
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Users className="h-3 w-3" />
                              <span>DAO governance model</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Code className="h-3 w-3" />
                              <span>Community voting</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Target className="h-3 w-3" />
                              <span>Protocol autonomy</span>
                            </div>
                            <Progress value={0} className="h-1 mt-2" />
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-gradient-to-r from-background to-muted/20 rounded-lg p-6 border">
                        <h4 className="font-semibold mb-3 text-center">
                          🇻🇳 Vietnam-First, Global-Ready Strategy
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <div className="font-semibold text-primary mb-1">
                              Local Foundation
                            </div>
                            <p className="text-muted-foreground text-xs">
                              Build strong Vietnamese user base and partnerships
                              first
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-accent mb-1">
                              Regional Expansion
                            </div>
                            <p className="text-muted-foreground text-xs">
                              Expand to Southeast Asia with cultural sensitivity
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-purple-600 mb-1">
                              Global Leadership
                            </div>
                            <p className="text-muted-foreground text-xs">
                              Position Vietnam as Web3 infrastructure leader
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
