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
  TrendingUp,
  Coins,
  Users,
  Shield,
  PieChart,
  Target,
  Clock,
  DollarSign,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Tokenomics = () => {
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
                    Tokenomics
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    💰 LOTUS Token Economics
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    A sustainable economic model designed to incentivize network
                    participation, secure cross-chain operations, and drive
                    long-term ecosystem growth.
                  </p>
                </div>
              </div>
            </section>

            {/* Token Overview */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Coins className="h-5 w-5" />
                        Token Overview
                      </CardTitle>
                      <CardDescription>
                        Core specifications and utility of the LOTUS token
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold mb-2">
                            1,000,000,000 LOTUS
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Total Fixed Supply
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="text-center">
                            <div className="font-semibold">Token Standard</div>
                            <div className="text-muted-foreground">
                              Multi-Chain
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">Deflationary</div>
                            <div className="text-muted-foreground">
                              Fee Burns
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Token Utility</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Shield className="h-4 w-4 text-green-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Network Security
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Staking for validator operations and network
                                consensus
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="h-4 w-4 text-blue-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Governance Rights
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Protocol governance and fee parameter decisions
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <DollarSign className="h-4 w-4 text-yellow-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Fee Payments
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Discounted bridge fees when paying with LOTUS
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <TrendingUp className="h-4 w-4 text-purple-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Revenue Sharing
                              </p>
                              <p className="text-xs text-muted-foreground">
                                50% of protocol fees distributed to token
                                holders
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5" />
                        Token Distribution
                      </CardTitle>
                      <CardDescription>
                        Allocation breakdown and vesting schedules
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Community & Ecosystem</span>
                          <div className="text-right">
                            <div className="font-medium">35%</div>
                            <div className="text-xs text-muted-foreground">
                              No lock-up
                            </div>
                          </div>
                        </div>
                        <Progress value={35} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-sm">Protocol Development</span>
                          <div className="text-right">
                            <div className="font-medium">25%</div>
                            <div className="text-xs text-muted-foreground">
                              36 month vesting
                            </div>
                          </div>
                        </div>
                        <Progress value={25} className="h-2" />

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
                          <span className="text-sm">Strategic Partners</span>
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
                </div>

                {/* Economic Model */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Economic Model & Revenue Streams
                    </CardTitle>
                    <CardDescription>
                      Sustainable revenue generation and value accrual
                      mechanisms
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          Bridge Fees
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Transaction fees ranging from 0.05% to 0.25% based on
                          asset type and network
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Standard Assets:</span>
                            <span className="font-medium">0.05%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Premium Assets:</span>
                            <span className="font-medium">0.15%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Complex Routes:</span>
                            <span className="font-medium">0.25%</span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <div className="text-xs text-muted-foreground">
                            Projected Annual Revenue:{" "}
                            <span className="font-semibold text-primary">
                              ~$50M
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-500" />
                          Validator Rewards
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Staking rewards for network security and cross-chain
                          operation validation
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Base APY:</span>
                            <span className="font-medium">8-12%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Performance Bonus:</span>
                            <span className="font-medium">+2%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Min. Stake:</span>
                            <span className="font-medium">10,000 LOTUS</span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <div className="text-xs text-muted-foreground">
                            Total Staked Target:{" "}
                            <span className="font-semibold text-primary">
                              40%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-purple-500" />
                          Governance Token
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Protocol governance rights and revenue sharing for
                          token holders
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Fee Share:</span>
                            <span className="font-medium">50%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Min. Gov. Stake:</span>
                            <span className="font-medium">1,000 LOTUS</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Proposal Threshold:</span>
                            <span className="font-medium">100,000 LOTUS</span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <div className="text-xs text-muted-foreground">
                            Quarterly Distributions:{" "}
                            <span className="font-semibold text-primary">
                              Auto-compound
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Vesting Schedule */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Vesting Schedule & Release Timeline
                    </CardTitle>
                    <CardDescription>
                      Token release schedule ensuring long-term alignment and
                      ecosystem stability
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">
                                Community & Ecosystem (35%)
                              </h4>
                              <Badge variant="secondary">No Vesting</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              350M LOTUS available immediately for liquidity
                              provision, airdrops, community incentives, and
                              ecosystem development grants.
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">
                                Protocol Development (25%)
                              </h4>
                              <Badge variant="outline">36 Month Linear</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              250M LOTUS vested over 36 months (6.94M per month)
                              to fund ongoing development, security audits, and
                              infrastructure improvements.
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">
                                Team & Advisors (20%)
                              </h4>
                              <Badge variant="outline">
                                24 Month + 6 Month Cliff
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              200M LOTUS with 6-month cliff, then linear vesting
                              over 24 months to ensure long-term commitment from
                              core team members.
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">
                                Strategic Partners (15%)
                              </h4>
                              <Badge variant="outline">12 Month Linear</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              150M LOTUS vested over 12 months (12.5M per month)
                              for strategic partnerships, exchange listings, and
                              market maker relationships.
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-border"></div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">
                              Treasury Reserve (5%)
                            </h4>
                            <Badge variant="outline">
                              Governance Controlled
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            50M LOTUS held in protocol treasury, managed by DAO
                            governance for emergency funds, future partnerships,
                            and unexpected opportunities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Deflationary Mechanisms */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Deflationary Mechanisms & Value Accrual
                    </CardTitle>
                    <CardDescription>
                      Built-in mechanisms to reduce supply and increase token
                      value over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Fee Burn Mechanism</h4>
                        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-destructive"></div>
                            <span className="font-medium text-sm">
                              Burn Rate: 25% of Bridge Fees
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">
                            25% of all bridge fees are permanently burned,
                            reducing total supply over time.
                          </p>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                              <span>Estimated Annual Burn:</span>
                              <span className="font-semibold">
                                ~12.5M LOTUS
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>10-Year Burn Projection:</span>
                              <span className="font-semibold">~125M LOTUS</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Staking Incentives</h4>
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="font-medium text-sm">
                              Target Staking Ratio: 40%
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">
                            High staking participation reduces circulating
                            supply and strengthens network security.
                          </p>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                              <span>Staked Supply Target:</span>
                              <span className="font-semibold">400M LOTUS</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Effective Circulating:</span>
                              <span className="font-semibold">475M LOTUS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
                      <h4 className="font-semibold mb-3 text-center">
                        🌱 Long-Term Value Proposition
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-primary mb-1">
                            Decreasing Supply
                          </div>
                          <p className="text-muted-foreground text-xs">
                            Continuous fee burns reduce total supply, creating
                            scarcity
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-accent mb-1">
                            Increasing Demand
                          </div>
                          <p className="text-muted-foreground text-xs">
                            Growing bridge volume drives higher token utility
                            and demand
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600 mb-1">
                            Value Accrual
                          </div>
                          <p className="text-muted-foreground text-xs">
                            Revenue sharing rewards long-term holders and
                            stakers
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Tokenomics;
