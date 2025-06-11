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
import {
  Wallet,
  ArrowRightLeft,
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const UserGuides = () => {
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
                    User Documentation
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    User Guides
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Step-by-step guides to help you navigate and use Lotus
                    Bridge effectively. From wallet connection to advanced
                    bridging strategies.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Tabs defaultValue="getting-started" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="getting-started">
                      Getting Started
                    </TabsTrigger>
                    <TabsTrigger value="bridging">Token Bridging</TabsTrigger>
                    <TabsTrigger value="security">
                      Security Best Practices
                    </TabsTrigger>
                    <TabsTrigger value="troubleshooting">
                      Troubleshooting
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="getting-started" className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-primary/20">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Wallet className="h-5 w-5 text-primary" />
                            <CardTitle>Wallet Connection</CardTitle>
                          </div>
                          <CardDescription>
                            Connect your wallet to start using Lotus Bridge
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                1
                              </div>
                              <div>
                                <p className="font-medium">
                                  Install MetaMask or Compatible Wallet
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Download and set up a Web3 wallet extension
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                2
                              </div>
                              <div>
                                <p className="font-medium">
                                  Click "Connect Wallet"
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Find the connect button in the top right
                                  corner
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                3
                              </div>
                              <div>
                                <p className="font-medium">
                                  Approve Connection
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Authorize Lotus Bridge to view your wallet
                                  address
                                </p>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full">
                            View Detailed Guide
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-accent/20">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-5 w-5 text-accent" />
                            <CardTitle>Account Setup</CardTitle>
                          </div>
                          <CardDescription>
                            Complete your profile and security settings
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center mt-0.5">
                                1
                              </div>
                              <div>
                                <p className="font-medium">
                                  Verify Email (Optional)
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Get notifications about your transactions
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center mt-0.5">
                                2
                              </div>
                              <div>
                                <p className="font-medium">
                                  Enable Two-Factor Authentication
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Add an extra layer of security
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center mt-0.5">
                                3
                              </div>
                              <div>
                                <p className="font-medium">
                                  Set Transaction Limits
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Configure daily/weekly bridging limits
                                </p>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Setup Account
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="bridging" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <ArrowRightLeft className="h-5 w-5 text-primary" />
                          <CardTitle>How to Bridge Tokens</CardTitle>
                        </div>
                        <CardDescription>
                          Complete walkthrough of the token bridging process
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                              <span className="text-primary font-bold">1</span>
                            </div>
                            <h3 className="font-semibold mb-2">
                              Select Networks
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Choose source and destination blockchain networks
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                              <span className="text-primary font-bold">2</span>
                            </div>
                            <h3 className="font-semibold mb-2">Enter Amount</h3>
                            <p className="text-sm text-muted-foreground">
                              Specify the token amount and review fees
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                              <span className="text-primary font-bold">3</span>
                            </div>
                            <h3 className="font-semibold mb-2">
                              Confirm Transfer
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Review details and approve the transaction
                            </p>
                          </div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-6">
                          <h4 className="font-semibold mb-3">
                            Supported Networks
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <Badge variant="secondary">Ethereum</Badge>
                            <Badge variant="secondary">
                              Binance Smart Chain
                            </Badge>
                            <Badge variant="secondary">Polygon</Badge>
                            <Badge variant="secondary">Avalanche</Badge>
                            <Badge variant="secondary">Arbitrum</Badge>
                            <Badge variant="secondary">Optimism</Badge>
                            <Badge variant="secondary">Fantom</Badge>
                            <Badge variant="secondary">Solana</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-8">
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-amber-600" />
                          <CardTitle>Security Best Practices</CardTitle>
                        </div>
                        <CardDescription>
                          Protect your assets while using cross-chain bridges
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Always verify the bridge URL
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Bookmark the official URL and avoid clicking
                                links from unknown sources
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Double-check transaction details
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Verify recipient address, amount, and network
                                before confirming
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Start with small amounts
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Test with smaller transfers before bridging
                                large amounts
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Keep transaction records
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Save transaction hashes and timestamps for
                                reference
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="troubleshooting" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-5 w-5 text-orange-500" />
                          <CardTitle>Common Issues & Solutions</CardTitle>
                        </div>
                        <CardDescription>
                          Quick fixes for the most common problems
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Transaction Stuck or Pending
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Your transaction has been confirmed on the source
                              chain but hasn't appeared on the destination
                              chain.
                            </p>
                            <div className="space-y-2 text-sm">
                              <p>
                                • Check the transaction status in our bridge
                                explorer
                              </p>
                              <p>
                                • Allow up to 30 minutes for completion during
                                high network congestion
                              </p>
                              <p>
                                • Contact support if stuck for more than 1 hour
                              </p>
                            </div>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Insufficient Gas Fees
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Transaction failed due to low gas fees or
                              insufficient native tokens.
                            </p>
                            <div className="space-y-2 text-sm">
                              <p>
                                • Ensure you have enough native tokens (ETH,
                                BNB, etc.) for gas
                              </p>
                              <p>
                                • Increase gas limit if transaction keeps
                                failing
                              </p>
                              <p>• Try during off-peak hours for lower fees</p>
                            </div>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Wallet Connection Issues
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Unable to connect wallet or wallet not detected.
                            </p>
                            <div className="space-y-2 text-sm">
                              <p>• Refresh the page and try reconnecting</p>
                              <p>• Check if wallet extension is enabled</p>
                              <p>
                                • Switch to the correct network in your wallet
                              </p>
                              <p>• Clear browser cache and cookies</p>
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

export default UserGuides;
