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
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Download,
  Eye,
  Share,
  Bookmark,
  Users,
  Target,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Whitepaper = () => {
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
                    {t("whitepaper.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    🌸 Lotus Bridge Whitepaper
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    A Gateway of Infinite Possibility, Rooted in Vietnam - "From
                    the heart of Vietnam blooms the Lotus — bridging
                    blockchains, cultures, and futures."
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2">
                      <Share className="h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      Bookmark
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Document Stats */}
            <section className="py-12 px-6 border-b">
              <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      47
                    </div>
                    <div className="text-sm text-muted-foreground">Pages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      12
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Sections
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      8.5k
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Downloads
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      v2.1
                    </div>
                    <div className="text-sm text-muted-foreground">Version</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                    <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-8">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Target className="h-5 w-5" />
                              Executive Summary
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                              🌸 Lotus Bridge – A Gateway of Infinite
                              Possibility, Rooted in Vietnam
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                              "From the heart of Vietnam blooms the Lotus —
                              bridging blockchains, cultures, and futures."
                              Inspired by the Lotus — a sacred symbol of purity,
                              resilience, and rebirth in Vietnamese culture —
                              Lotus Bridge rises as a trustless, multi-chain,
                              architecture-agnostic super-bridge.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                              This is not just another bridge. This is a
                              universal bridge layer, able to adapt to any
                              exchange method used in any network it connects
                              to. A true cross-architecture connector — swap and
                              send across chains that don't even share address
                              formats or VM compatibilities (e.g., from Ethereum
                              to Solana).
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border-l-4 border-primary">
                              <p className="font-medium mb-2">
                                🇻🇳 Built for Vietnam. Bridging the World.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Lotus Bridge is the first bridge built by
                                Vietnamese for Vietnamese, designed with
                                cultural, economic, and technological
                                sensitivity. But it doesn't stop there — it's a
                                gateway for Vietnamese users and developers to
                                access the world, and for the world to access
                                the vibrant Vietnamese Web3 ecosystem.
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Globe className="h-5 w-5" />
                              Market Opportunity
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-2">
                                  Total Addressable Market
                                </h4>
                                <div className="text-3xl font-bold text-primary mb-1">
                                  $847B
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Cross-chain DeFi Total Value Locked (TVL) by
                                  2025
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">
                                  Daily Volume Potential
                                </h4>
                                <div className="text-3xl font-bold text-accent mb-1">
                                  $12.3B
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Projected daily cross-chain transaction volume
                                </p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">
                                  Bridge Market Share Target
                                </span>
                                <span className="text-sm font-medium">15%</span>
                              </div>
                              <Progress value={15} className="h-2" />
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">
                              Quick Navigation
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2"
                            >
                              <FileText className="h-4 w-4" />
                              Abstract & Introduction
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2"
                            >
                              <Zap className="h-4 w-4" />
                              Protocol Architecture
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2"
                            >
                              <Shield className="h-4 w-4" />
                              Security Analysis
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2"
                            >
                              <TrendingUp className="h-4 w-4" />
                              Economic Model
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2"
                            >
                              <Users className="h-4 w-4" />
                              Governance Framework
                            </Button>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">
                              Document Info
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Version:
                              </span>
                              <span className="font-medium">2.1.0</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Last Updated:
                              </span>
                              <span className="font-medium">Dec 15, 2024</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Authors:
                              </span>
                              <span className="font-medium">Lotus Team</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Pages:
                              </span>
                              <span className="font-medium">47</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                License:
                              </span>
                              <span className="font-medium">MIT</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Problem Statement Card */}
                    <Card className="border-destructive/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-destructive">
                          <Globe className="h-5 w-5" />
                          🌍 The Problem: A Fragmented World of Chains
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Today's blockchain landscape is vast, vibrant, and…
                          fractured. Ethereum. Solana. BNB Chain. Polygon.
                          Cosmos. Each network speaks its own language, runs on
                          its own logic, and is home to unique communities and
                          ecosystems.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          But for the average user — especially those in
                          emerging markets like Vietnam — navigating this
                          complexity feels like crossing rivers with no bridges.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                            <h4 className="font-semibold text-destructive mb-2">
                              Current Challenges
                            </h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>
                                • You want to swap an asset from Solana to
                                Ethereum? You'll need multiple steps, tools,
                                wallets, bridges
                              </li>
                              <li>
                                • Often clunky, risky, or downright impossible
                                if networks have fundamentally different
                                architectures
                              </li>
                              <li>
                                • Vietnamese tokens like VNDC, VNST, KNC, and
                                C98? Often excluded from global bridging
                                conversations
                              </li>
                              <li>
                                • Global adoption? Stunted by exclusion.
                                Liquidity? Siloed. Users? Confused.
                              </li>
                            </ul>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">The Result</h4>
                            <p className="text-sm text-muted-foreground">
                              The dream of a unified Web3 world remains out of
                              reach. Each blockchain becomes an island, and
                              users are left to navigate treacherous waters
                              between them.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Solution Card */}
                    <Card className="border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                          <Zap className="h-5 w-5" />
                          🌸 Enter Lotus Bridge – Blooming Unity From Diversity
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          Inspired by the Lotus — a sacred symbol of purity,
                          resilience, and rebirth in Vietnamese culture — Lotus
                          Bridge rises as a trustless, multi-chain,
                          architecture-agnostic super-bridge.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-background/50 rounded-lg border">
                            <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold mb-2">
                              Universal Bridge Layer
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Able to adapt to any exchange method used in any
                              network it connects to.
                            </p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-lg border">
                            <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold mb-2">
                              Cross-Architecture Connector
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Swap and send across chains that don't even share
                              address formats or VM compatibilities.
                            </p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-lg border">
                            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold mb-2">
                              Multi-Wallet Portal
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Bridging and swapping across tokens, user
                              identities, Vietnamese and global assets.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Vision and Impact Card */}
                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          💡 The Vision: A Resilient Future, Rooted in
                          Innovation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Lotus Bridge is not a temporary product. It's an
                          infrastructure layer.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold">
                              🌐 Why This Matters for Vietnam — and Beyond
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                  <strong>For Vietnamese users:</strong> One
                                  interface to rule them all. Access global
                                  liquidity with local tokens.
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                  <strong>For developers:</strong> Build
                                  cross-chain dApps faster with local-first
                                  focus.
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                  <strong>For the world:</strong> Vietnam
                                  becomes a key player in Web3 infrastructure.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">
                              🌱 The Symbolism of the Lotus
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              In Vietnamese culture, the lotus rises pure from
                              murky waters. It represents resilience, rebirth,
                              and peace. In blockchain, that water is
                              fragmentation, isolation, and complexity. Lotus
                              Bridge blooms as the answer — creating order from
                              chaos, clarity from confusion.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="technical" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Technical Architecture</CardTitle>
                        <CardDescription>
                          Deep dive into the technical foundations of Lotus
                          Bridge
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold">Core Components</h4>
                            <div className="space-y-3">
                              <div className="border rounded-lg p-3">
                                <div className="font-medium mb-1">
                                  Lotus Consensus Algorithm (LCA)
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Novel Byzantine Fault Tolerant consensus
                                  optimized for cross-chain operations
                                </p>
                              </div>
                              <div className="border rounded-lg p-3">
                                <div className="font-medium mb-1">
                                  State Verification Protocol
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Cryptographic proofs ensuring atomic
                                  cross-chain state transitions
                                </p>
                              </div>
                              <div className="border rounded-lg p-3">
                                <div className="font-medium mb-1">
                                  Relay Network
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Decentralized network of validators
                                  maintaining cross-chain communication
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-semibold">
                              Performance Metrics
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">
                                  Transaction Finality
                                </span>
                                <Badge variant="secondary">12-15 seconds</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">
                                  Throughput (TPS)
                                </span>
                                <Badge variant="secondary">10,000+</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Network Uptime</span>
                                <Badge variant="secondary">99.9%</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">
                                  Security Guarantees
                                </span>
                                <Badge variant="secondary">
                                  Byzantine Safe
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h4 className="font-semibold mb-4">Protocol Flow</h4>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="text-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                                <span className="text-primary font-bold">
                                  1
                                </span>
                              </div>
                              <h5 className="font-medium text-sm mb-1">
                                Lock Assets
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                Assets locked on source chain
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                                <span className="text-primary font-bold">
                                  2
                                </span>
                              </div>
                              <h5 className="font-medium text-sm mb-1">
                                Generate Proof
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                Cryptographic proof created
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                                <span className="text-primary font-bold">
                                  3
                                </span>
                              </div>
                              <h5 className="font-medium text-sm mb-1">
                                Relay & Verify
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                Validators verify and relay
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                                <span className="text-primary font-bold">
                                  4
                                </span>
                              </div>
                              <h5 className="font-medium text-sm mb-1">
                                Mint Assets
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                Assets minted on destination
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="tokenomics" className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>Token Distribution</CardTitle>
                          <CardDescription>
                            LOTUS token allocation and vesting schedule
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Team & Advisors</span>
                              <div className="text-right">
                                <div className="font-medium">20%</div>
                                <div className="text-xs text-muted-foreground">
                                  24 month vesting
                                </div>
                              </div>
                            </div>
                            <Progress value={20} className="h-2" />

                            <div className="flex justify-between items-center">
                              <span className="text-sm">
                                Community & Ecosystem
                              </span>
                              <div className="text-right">
                                <div className="font-medium">35%</div>
                                <div className="text-xs text-muted-foreground">
                                  No lock-up
                                </div>
                              </div>
                            </div>
                            <Progress value={35} className="h-2" />

                            <div className="flex justify-between items-center">
                              <span className="text-sm">
                                Protocol Development
                              </span>
                              <div className="text-right">
                                <div className="font-medium">25%</div>
                                <div className="text-xs text-muted-foreground">
                                  36 month vesting
                                </div>
                              </div>
                            </div>
                            <Progress value={25} className="h-2" />

                            <div className="flex justify-between items-center">
                              <span className="text-sm">
                                Strategic Partners
                              </span>
                              <div className="text-right">
                                <div className="font-medium">15%</div>
                                <div className="text-xs text-muted-foreground">
                                  12 month vesting
                                </div>
                              </div>
                            </div>
                            <Progress value={15} className="h-2" />

                            <div className="flex justify-between items-center">
                              <span className="text-sm">Treasury Reserve</span>
                              <div className="text-right">
                                <div className="font-medium">5%</div>
                                <div className="text-xs text-muted-foreground">
                                  Governance controlled
                                </div>
                              </div>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Economic Model</CardTitle>
                          <CardDescription>
                            Revenue streams and value accrual mechanisms
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <h4 className="font-medium mb-2">Bridge Fees</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                0.05% - 0.25% per transaction based on asset and
                                network
                              </p>
                              <div className="text-xs text-muted-foreground">
                                Revenue: ~$50M annually at target volume
                              </div>
                            </div>

                            <div className="border rounded-lg p-4">
                              <h4 className="font-medium mb-2">
                                Validator Rewards
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Staking rewards for network security and
                                operation
                              </p>
                              <div className="text-xs text-muted-foreground">
                                APY: 8-12% for LOTUS stakers
                              </div>
                            </div>

                            <div className="border rounded-lg p-4">
                              <h4 className="font-medium mb-2">
                                Governance Token
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Protocol governance and fee sharing rights
                              </p>
                              <div className="text-xs text-muted-foreground">
                                50% of fees distributed to token holders
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Total Supply</span>
                              <span className="font-bold">
                                1,000,000,000 LOTUS
                              </span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Fixed supply with deflationary mechanisms through
                              fee burns
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Security Framework
                        </CardTitle>
                        <CardDescription>
                          Multi-layered security approach protecting user assets
                          and network integrity
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold">
                              Cryptographic Security
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <Lock className="h-4 w-4 text-green-500 mt-1" />
                                <div>
                                  <p className="font-medium text-sm">
                                    Zero-Knowledge Proofs
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    State transitions verified without revealing
                                    sensitive data
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Lock className="h-4 w-4 text-green-500 mt-1" />
                                <div>
                                  <p className="font-medium text-sm">
                                    Multi-Signature Validation
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Requires consensus from multiple validators
                                    for asset transfers
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Lock className="h-4 w-4 text-green-500 mt-1" />
                                <div>
                                  <p className="font-medium text-sm">
                                    Time-Locked Transactions
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Emergency pause mechanisms for suspicious
                                    activities
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-semibold">Network Security</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-blue-500 mt-1" />
                                <div>
                                  <p className="font-medium text-sm">
                                    Byzantine Fault Tolerance
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Resistant to up to 33% of validators acting
                                    maliciously
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-blue-500 mt-1" />
                                <div>
                                  <p className="font-medium text-sm">
                                    Slashing Conditions
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Economic penalties for validator misbehavior
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-blue-500 mt-1" />
                                <div>
                                  <p className="font-medium text-sm">
                                    Decentralized Monitoring
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Real-time network health and threat
                                    detection
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h4 className="font-semibold mb-4">
                            Security Audits
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="border rounded-lg p-4 text-center">
                              <div className="font-medium mb-1">
                                Trail of Bits
                              </div>
                              <div className="text-sm text-muted-foreground mb-2">
                                Smart Contract Audit
                              </div>
                              <Badge variant="secondary">Completed</Badge>
                            </div>
                            <div className="border rounded-lg p-4 text-center">
                              <div className="font-medium mb-1">Quantstamp</div>
                              <div className="text-sm text-muted-foreground mb-2">
                                Protocol Security Review
                              </div>
                              <Badge variant="secondary">Completed</Badge>
                            </div>
                            <div className="border rounded-lg p-4 text-center">
                              <div className="font-medium mb-1">CertiK</div>
                              <div className="text-sm text-muted-foreground mb-2">
                                Formal Verification
                              </div>
                              <Badge variant="outline">In Progress</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="font-medium text-green-800 dark:text-green-400">
                              Security Guarantee
                            </span>
                          </div>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Lotus Bridge maintains a $10M security fund to
                            protect users against potential exploits. Our
                            protocol has been audited by top-tier security firms
                            and maintains a bug bounty program.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="roadmap" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Development Roadmap</CardTitle>
                        <CardDescription>
                          Strategic milestones and feature releases planned for
                          Lotus Bridge
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        <div className="space-y-6">
                          <div className="relative">
                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">
                                    Phase 1: Foundation (Q1 2024)
                                  </h4>
                                  <Badge variant="secondary">Completed</Badge>
                                </div>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>
                                    • Core protocol development and testing
                                  </li>
                                  <li>
                                    • Initial security audits and bug bounty
                                    program
                                  </li>
                                  <li>• Ethereum ↔ Polygon bridge launch</li>
                                  <li>
                                    • Community building and early adopter
                                    program
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                          </div>

                          <div className="relative">
                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">
                                    Phase 2: Expansion (Q2-Q3 2024)
                                  </h4>
                                  <Badge variant="secondary">Completed</Badge>
                                </div>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>
                                    • Multi-chain support (BSC, Avalanche,
                                    Arbitrum)
                                  </li>
                                  <li>
                                    • Advanced trading features and MEV
                                    protection
                                  </li>
                                  <li>
                                    • Governance token launch and DAO formation
                                  </li>
                                  <li>
                                    • Strategic partnerships with major DeFi
                                    protocols
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                          </div>

                          <div className="relative">
                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-primary border-4 border-primary/20"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">
                                    Phase 3: Innovation (Q4 2024)
                                  </h4>
                                  <Badge>In Progress</Badge>
                                </div>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>
                                    • Lotus Consensus Algorithm implementation
                                  </li>
                                  <li>• Zero-knowledge proof integration</li>
                                  <li>
                                    • Mobile app and enhanced user experience
                                  </li>
                                  <li>
                                    • Enterprise partnerships and institutional
                                    features
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                          </div>

                          <div className="relative">
                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">
                                    Phase 4: Ecosystem (Q1-Q2 2025)
                                  </h4>
                                  <Badge variant="outline">Planned</Badge>
                                </div>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>
                                    • Layer 2 solutions and rollup integrations
                                  </li>
                                  <li>
                                    • Cross-chain smart contract execution
                                  </li>
                                  <li>• Developer SDK and integration tools</li>
                                  <li>
                                    • Global expansion and regulatory compliance
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">
                                  Phase 5: Maturity (Q3+ 2025)
                                </h4>
                                <Badge variant="outline">Future</Badge>
                              </div>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>
                                  • Advanced DeFi primitives and yield farming
                                </li>
                                <li>
                                  • Cross-chain NFT and gaming integrations
                                </li>
                                <li>• Autonomous protocol governance</li>
                                <li>
                                  • Research into next-generation technologies
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <Separator className="my-6" />

                        {/* Updated Roadmap from docs.txt */}
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                          <h4 className="font-semibold mb-4 text-center">
                            🚀 Updated Roadmap (v1.0.0 "Genesis Launch")
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-primary"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h5 className="font-semibold text-primary">
                                    Q3 2025: Beta Launch
                                  </h5>
                                  <Badge>Current</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Beta launch with EVM + Solana support
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-accent"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h5 className="font-semibold text-accent">
                                    Q4 2025: Tokenomics
                                  </h5>
                                  <Badge variant="outline">Upcoming</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Liquidity provider incentives and tokenomics
                                  launch
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h5 className="font-semibold">
                                    Q1 2026: Mobile Integration
                                  </h5>
                                  <Badge variant="outline">Planned</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Mobile wallet integration and mobile-first
                                  experience
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h5 className="font-semibold">
                                    Q2 2026: DAO Launch
                                  </h5>
                                  <Badge variant="outline">Future</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  DAO governance model launch with community
                                  voting
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Whitepaper;
