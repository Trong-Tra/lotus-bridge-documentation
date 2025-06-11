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
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  MessageCircle,
  Book,
  AlertCircle,
  CheckCircle,
  Clock,
  Lightbulb,
} from "lucide-react";

const FAQs = () => {
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
                    Help & Support
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    FAQs & Glossary
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Find answers to frequently asked questions and learn about
                    cross-chain terminology. Get the help you need to use Lotus
                    Bridge effectively.
                  </p>
                  <div className="max-w-md mx-auto relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search for answers..."
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="fees">Fees & Limits</TabsTrigger>
                    <TabsTrigger value="glossary">Glossary</TabsTrigger>
                  </TabsList>

                  <TabsContent value="general" className="space-y-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <MessageCircle className="h-5 w-5" />
                              General Questions
                            </CardTitle>
                            <CardDescription>
                              Common questions about Lotus Bridge and how it
                              works
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Accordion
                              type="single"
                              collapsible
                              className="w-full"
                            >
                              <AccordionItem value="what-is-lotus-bridge">
                                <AccordionTrigger>
                                  What is Lotus Bridge?
                                </AccordionTrigger>
                                <AccordionContent className="space-y-3">
                                  <p>
                                    Lotus Bridge is a decentralized cross-chain
                                    protocol that enables seamless transfer of
                                    digital assets between different blockchain
                                    networks. Built with Vietnamese innovation
                                    at its core, it provides secure, fast, and
                                    cost-effective bridging solutions for users
                                    and developers.
                                  </p>
                                  <p>
                                    Our protocol supports major blockchains
                                    including Ethereum, Polygon, Binance Smart
                                    Chain, Avalanche, and more, allowing users
                                    to move their assets freely across the
                                    multi-chain ecosystem.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="how-does-it-work">
                                <AccordionTrigger>
                                  How does Lotus Bridge work?
                                </AccordionTrigger>
                                <AccordionContent className="space-y-3">
                                  <p>
                                    Lotus Bridge uses a lock-and-mint mechanism
                                    combined with advanced cryptographic proofs
                                    to ensure secure cross-chain transfers:
                                  </p>
                                  <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>
                                      Your tokens are locked in a smart contract
                                      on the source blockchain
                                    </li>
                                    <li>
                                      Our validator network verifies the lock
                                      transaction
                                    </li>
                                    <li>
                                      Equivalent tokens are minted on the
                                      destination blockchain
                                    </li>
                                    <li>
                                      You receive your tokens on the target
                                      network
                                    </li>
                                  </ol>
                                  <p>
                                    The entire process is trustless and
                                    typically completes within 15-30 seconds.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="supported-networks">
                                <AccordionTrigger>
                                  Which blockchain networks are supported?
                                </AccordionTrigger>
                                <AccordionContent>
                                  <p className="mb-3">
                                    Lotus Bridge currently supports the
                                    following networks:
                                  </p>
                                  <div className="grid grid-cols-2 gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span>Ethereum</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span>Polygon</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span>Binance Smart Chain</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span>Avalanche</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span>Arbitrum</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span>Optimism</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock className="h-4 w-4 text-orange-500" />
                                      <span>Solana (Coming Soon)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock className="h-4 w-4 text-orange-500" />
                                      <span>Fantom (Coming Soon)</span>
                                    </div>
                                  </div>
                                  <p>
                                    We're continuously expanding our network
                                    support based on community demand.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="getting-started">
                                <AccordionTrigger>
                                  How do I get started with Lotus Bridge?
                                </AccordionTrigger>
                                <AccordionContent className="space-y-3">
                                  <p>
                                    Getting started is simple and only takes a
                                    few minutes:
                                  </p>
                                  <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>
                                      Install a Web3 wallet (MetaMask,
                                      WalletConnect, etc.)
                                    </li>
                                    <li>
                                      Visit lotusbridge.io and connect your
                                      wallet
                                    </li>
                                    <li>
                                      Select source and destination networks
                                    </li>
                                    <li>
                                      Choose the token and amount you want to
                                      bridge
                                    </li>
                                    <li>
                                      Review the transaction details and confirm
                                    </li>
                                  </ol>
                                  <p>
                                    No registration or KYC is required. The
                                    process is completely decentralized and
                                    permissionless.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="transaction-time">
                                <AccordionTrigger>
                                  How long do transactions take?
                                </AccordionTrigger>
                                <AccordionContent>
                                  <p className="mb-3">
                                    Transaction times vary by network congestion
                                    but typically:
                                  </p>
                                  <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Normal conditions: 15-30 seconds</li>
                                    <li>High congestion: 2-5 minutes</li>
                                    <li>
                                      Extreme congestion: Up to 30 minutes
                                    </li>
                                  </ul>
                                  <p className="mt-3">
                                    You can track your transaction status in
                                    real-time using our bridge explorer.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">
                              Need More Help?
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <Button className="w-full gap-2">
                              <MessageCircle className="h-4 w-4" />
                              Join Discord Community
                            </Button>
                            <Button variant="outline" className="w-full gap-2">
                              <Book className="h-4 w-4" />
                              Read Documentation
                            </Button>
                            <Button variant="outline" className="w-full gap-2">
                              <AlertCircle className="h-4 w-4" />
                              Submit Support Ticket
                            </Button>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">
                              Quick Stats
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Total Bridges:
                              </span>
                              <span className="font-medium">1.2M+</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Volume Bridged:
                              </span>
                              <span className="font-medium">$2.8B</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Average Time:
                              </span>
                              <span className="font-medium">22 seconds</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Success Rate:
                              </span>
                              <span className="font-medium">99.98%</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="technical" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Technical Questions</CardTitle>
                        <CardDescription>
                          In-depth technical information about Lotus Bridge
                          protocol
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="consensus-mechanism">
                            <AccordionTrigger>
                              What consensus mechanism does Lotus Bridge use?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                              <p>
                                Lotus Bridge employs the Lotus Consensus
                                Algorithm (LCA), a novel Byzantine Fault
                                Tolerant consensus mechanism specifically
                                designed for cross-chain operations. LCA
                                provides:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>
                                  Sub-15-second finality across all supported
                                  networks
                                </li>
                                <li>
                                  Resistance to up to 33% malicious validators
                                </li>
                                <li>
                                  Optimized throughput for cross-chain
                                  transactions
                                </li>
                                <li>Energy-efficient validation process</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="smart-contracts">
                            <AccordionTrigger>
                              Are the smart contracts audited?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                              <p>
                                Yes, all Lotus Bridge smart contracts have
                                undergone comprehensive security audits:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>
                                  Trail of Bits - Core protocol audit
                                  (Completed)
                                </li>
                                <li>
                                  Quantstamp - Smart contract security review
                                  (Completed)
                                </li>
                                <li>
                                  CertiK - Formal verification (In Progress)
                                </li>
                                <li>
                                  Ongoing bug bounty program with $500K+ rewards
                                </li>
                              </ul>
                              <p>
                                All audit reports are publicly available on our
                                documentation site.
                              </p>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="gas-optimization">
                            <AccordionTrigger>
                              How does Lotus Bridge optimize gas costs?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                              <p>
                                Lotus Bridge implements several gas optimization
                                techniques:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>
                                  Batch transaction processing to reduce
                                  per-transaction costs
                                </li>
                                <li>
                                  Efficient merkle proof verification algorithms
                                </li>
                                <li>
                                  Dynamic gas price optimization based on
                                  network conditions
                                </li>
                                <li>
                                  Layer 2 integration for ultra-low cost
                                  transactions
                                </li>
                              </ul>
                              <p>
                                These optimizations typically result in 40-60%
                                lower gas costs compared to traditional bridge
                                solutions.
                              </p>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="api-rate-limits">
                            <AccordionTrigger>
                              What are the API rate limits?
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="mb-3">
                                API rate limits depend on your usage tier:
                              </p>
                              <div className="space-y-2">
                                <div className="flex justify-between border rounded p-2">
                                  <span>Free Tier:</span>
                                  <span>100 requests/minute</span>
                                </div>
                                <div className="flex justify-between border rounded p-2">
                                  <span>Developer Tier:</span>
                                  <span>1,000 requests/minute</span>
                                </div>
                                <div className="flex justify-between border rounded p-2">
                                  <span>Enterprise Tier:</span>
                                  <span>10,000 requests/minute</span>
                                </div>
                              </div>
                              <p className="mt-3">
                                Contact our team for custom rate limits if you
                                need higher throughput.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Security Questions</CardTitle>
                        <CardDescription>
                          Security measures and best practices for using Lotus
                          Bridge
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="fund-safety">
                            <AccordionTrigger>
                              How safe are my funds?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                              <p>
                                Lotus Bridge prioritizes security through
                                multiple layers of protection:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>
                                  Multi-signature validation requiring consensus
                                  from multiple validators
                                </li>
                                <li>
                                  Time-locked transactions with emergency pause
                                  mechanisms
                                </li>
                                <li>
                                  Regular security audits by top-tier firms
                                </li>
                                <li>
                                  $10M security fund to protect users against
                                  potential exploits
                                </li>
                                <li>
                                  Real-time monitoring and anomaly detection
                                </li>
                              </ul>
                              <p>
                                Our protocol has maintained 99.98% uptime with
                                zero security incidents since launch.
                              </p>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="private-keys">
                            <AccordionTrigger>
                              Does Lotus Bridge have access to my private keys?
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="mb-3">
                                No, Lotus Bridge never has access to your
                                private keys or funds. The protocol is:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>
                                  Non-custodial - You maintain full control of
                                  your assets
                                </li>
                                <li>
                                  Trustless - No need to trust any central
                                  authority
                                </li>
                                <li>
                                  Decentralized - Operated by a network of
                                  independent validators
                                </li>
                                <li>
                                  Transparent - All transactions are publicly
                                  verifiable on-chain
                                </li>
                              </ul>
                              <p className="mt-3">
                                Always ensure you're using the official Lotus
                                Bridge interface and verify transaction details
                                before signing.
                              </p>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="validator-security">
                            <AccordionTrigger>
                              How are validators secured?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                              <p>
                                Lotus Bridge validators are secured through
                                multiple mechanisms:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>
                                  Economic staking requirements (minimum 100,000
                                  LOTUS tokens)
                                </li>
                                <li>
                                  Slashing conditions for malicious or incorrect
                                  behavior
                                </li>
                                <li>
                                  Regular performance monitoring and automated
                                  rotation
                                </li>
                                <li>
                                  Geographic distribution to prevent
                                  centralization
                                </li>
                                <li>
                                  Multi-signature schemes requiring majority
                                  consensus
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="fees" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Fees & Limits</CardTitle>
                        <CardDescription>
                          Information about bridge fees, limits, and cost
                          optimization
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="bridge-fees">
                            <AccordionTrigger>
                              What are the bridge fees?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                              <p>
                                Lotus Bridge fees are competitive and
                                transparent:
                              </p>
                              <div className="space-y-2">
                                <div className="flex justify-between border rounded p-2">
                                  <span>Stablecoins (USDC, USDT, DAI):</span>
                                  <span>0.05%</span>
                                </div>
                                <div className="flex justify-between border rounded p-2">
                                  <span>Major tokens (ETH, WBTC):</span>
                                  <span>0.1%</span>
                                </div>
                                <div className="flex justify-between border rounded p-2">
                                  <span>Other tokens:</span>
                                  <span>0.15-0.25%</span>
                                </div>
                              </div>
                              <p>
                                Plus network gas fees on both source and
                                destination chains. LOTUS token holders receive
                                up to 50% fee discounts.
                              </p>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="transaction-limits">
                            <AccordionTrigger>
                              Are there transaction limits?
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="mb-3">
                                Transaction limits vary by token and user
                                verification level:
                              </p>
                              <div className="space-y-3">
                                <div>
                                  <h4 className="font-medium mb-2">
                                    Unverified Users:
                                  </h4>
                                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                                    <li>Minimum: $10 per transaction</li>
                                    <li>Maximum: $50,000 per transaction</li>
                                    <li>Daily limit: $100,000</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">
                                    Verified Users:
                                  </h4>
                                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                                    <li>Minimum: $10 per transaction</li>
                                    <li>Maximum: $1,000,000 per transaction</li>
                                    <li>Daily limit: $5,000,000</li>
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="fee-optimization">
                            <AccordionTrigger>
                              How can I reduce bridge fees?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                              <p>
                                Several strategies can help reduce your bridge
                                costs:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>
                                  Hold LOTUS tokens for up to 50% fee discounts
                                </li>
                                <li>
                                  Bridge during off-peak hours when gas costs
                                  are lower
                                </li>
                                <li>
                                  Use Layer 2 networks (Polygon, Arbitrum) for
                                  cheaper transactions
                                </li>
                                <li>
                                  Batch multiple small transactions into larger
                                  ones
                                </li>
                                <li>
                                  Monitor gas prices and bridge when costs are
                                  optimal
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="glossary" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Book className="h-5 w-5" />
                          Cross-Chain Glossary
                        </CardTitle>
                        <CardDescription>
                          Essential terminology for understanding cross-chain
                          bridges and DeFi
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Bridge</h4>
                                <p className="text-sm text-muted-foreground">
                                  A protocol that enables the transfer of tokens
                                  or data between different blockchain networks.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">
                                  Cross-Chain
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Interactions between different blockchain
                                  networks, allowing assets and data to move
                                  across chains.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">
                                  Lock & Mint
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  A bridge mechanism where tokens are locked on
                                  the source chain and equivalent tokens are
                                  minted on the destination chain.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">
                                  Validator
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Network participants who verify and validate
                                  cross-chain transactions to ensure security
                                  and consensus.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Slashing</h4>
                                <p className="text-sm text-muted-foreground">
                                  Economic penalty imposed on validators for
                                  malicious behavior or protocol violations.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Finality</h4>
                                <p className="text-sm text-muted-foreground">
                                  The point at which a transaction is considered
                                  irreversible and permanently recorded on the
                                  blockchain.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">
                                  Atomic Transaction
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  A transaction that either completes entirely
                                  or fails completely, ensuring no partial
                                  execution.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">
                                  Liquidity Pool
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  A collection of tokens locked in a smart
                                  contract that facilitates trading and provides
                                  liquidity.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Gas Fees</h4>
                                <p className="text-sm text-muted-foreground">
                                  Transaction costs paid to network validators
                                  for processing and confirming blockchain
                                  transactions.
                                </p>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="font-semibold mb-2">
                                  TVL (Total Value Locked)
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  The total amount of assets deposited and
                                  locked in a DeFi protocol or bridge.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border-l-4 border-primary">
                            <div className="flex items-center gap-2 mb-3">
                              <Lightbulb className="h-5 w-5 text-primary" />
                              <h4 className="font-semibold">Did You Know?</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              The term "bridge" in blockchain comes from the
                              concept of connecting two separate landmasses
                              (blockchains) to enable travel (asset transfer)
                              between them. Lotus Bridge represents the
                              evolution of this concept with Vietnamese
                              engineering excellence.
                            </p>
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

export default FAQs;
