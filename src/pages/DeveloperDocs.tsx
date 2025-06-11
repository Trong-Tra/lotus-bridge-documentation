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
import { Code, Terminal, Book, Zap, Globe, Shield } from "lucide-react";

const DeveloperDocs = () => {
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
                    Developer Resources
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Developer Documentation
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Comprehensive guides, APIs, and SDKs to integrate Lotus
                    Bridge into your applications. Build the future of
                    cross-chain DeFi.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick Start */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <Zap className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Quick Start</CardTitle>
                      <CardDescription>
                        Get up and running in minutes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">View Quick Start Guide</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20">
                    <CardHeader>
                      <Book className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>API Reference</CardTitle>
                      <CardDescription>
                        Complete API documentation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Browse API Docs
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                      <Terminal className="h-8 w-8 text-green-600 mb-2" />
                      <CardTitle>SDK Downloads</CardTitle>
                      <CardDescription>
                        Official SDKs and libraries
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Download SDKs
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="rest-api" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="rest-api">REST API</TabsTrigger>
                    <TabsTrigger value="sdk">JavaScript SDK</TabsTrigger>
                    <TabsTrigger value="smart-contracts">
                      Smart Contracts
                    </TabsTrigger>
                    <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                  </TabsList>

                  <TabsContent value="rest-api" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>REST API Overview</CardTitle>
                        <CardDescription>
                          RESTful API for querying bridge status, transaction
                          history, and supported networks
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Base URL</h4>
                            <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                              https://api.lotusbridge.io/v1
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">
                              Authentication
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Most endpoints are public. For private endpoints,
                              include your API key in the header:
                            </p>
                            <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                              Authorization: Bearer YOUR_API_KEY
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h4 className="font-semibold">Core Endpoints</h4>

                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary">GET</Badge>
                                <code className="font-mono">/networks</code>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">
                                Get list of supported networks and their
                                configurations
                              </p>
                              <div className="bg-muted/50 rounded p-3 text-sm">
                                <pre>{`{
  "networks": [
    {
      "id": "ethereum",
      "name": "Ethereum",
      "chainId": 1,
      "nativeToken": "ETH",
      "rpcUrl": "...",
      "bridgeContract": "0x..."
    }
  ]
}`}</pre>
                              </div>
                            </div>

                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary">GET</Badge>
                                <code className="font-mono">
                                  /transaction/{txHash}
                                </code>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">
                                Get transaction status and details
                              </p>
                              <div className="bg-muted/50 rounded p-3 text-sm">
                                <pre>{`{
  "status": "completed",
  "sourceChain": "ethereum",
  "destinationChain": "polygon",
  "amount": "1000000000000000000",
  "token": "USDC",
  "fees": "0.5"
}`}</pre>
                              </div>
                            </div>

                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="destructive">POST</Badge>
                                <code className="font-mono">/bridge/quote</code>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">
                                Get a quote for bridging tokens
                              </p>
                              <div className="bg-muted/50 rounded p-3 text-sm">
                                <pre>{`{
  "sourceChain": "ethereum",
  "destinationChain": "polygon",
  "token": "USDC",
  "amount": "1000000000000000000"
}`}</pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="sdk" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>JavaScript SDK</CardTitle>
                        <CardDescription>
                          Official TypeScript/JavaScript SDK for seamless
                          integration
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Installation</h4>
                          <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                            npm install @lotus-bridge/sdk
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Basic Usage</h4>
                          <div className="bg-muted rounded-lg p-4 text-sm">
                            <pre>{`import { LotusBridge } from '@lotus-bridge/sdk';

// Initialize the bridge
const bridge = new LotusBridge({
  apiKey: 'your-api-key', // Optional for read operations
  network: 'mainnet' // or 'testnet'
});

// Get supported networks
const networks = await bridge.getNetworks();

// Get a quote for bridging
const quote = await bridge.getQuote({
  sourceChain: 'ethereum',
  destinationChain: 'polygon',
  token: 'USDC',
  amount: '1000'
});

// Execute a bridge transaction
const transaction = await bridge.bridge({
  sourceChain: 'ethereum',
  destinationChain: 'polygon',
  token: 'USDC',
  amount: '1000',
  recipient: '0x...'
});`}</pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            Configuration Options
                          </h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-3">
                              <code className="font-mono text-sm">apiKey</code>
                              <p className="text-sm text-muted-foreground mt-1">
                                Your Lotus Bridge API key (optional for read
                                operations)
                              </p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <code className="font-mono text-sm">network</code>
                              <p className="text-sm text-muted-foreground mt-1">
                                Network environment: 'mainnet' or 'testnet'
                              </p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <code className="font-mono text-sm">timeout</code>
                              <p className="text-sm text-muted-foreground mt-1">
                                Request timeout in milliseconds (default: 30000)
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="smart-contracts" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Smart Contract Integration</CardTitle>
                        <CardDescription>
                          Direct smart contract interaction for advanced use
                          cases
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">
                              Bridge Contract Addresses
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Ethereum:</span>
                                <code className="font-mono">0x1234...5678</code>
                              </div>
                              <div className="flex justify-between">
                                <span>Polygon:</span>
                                <code className="font-mono">0x2345...6789</code>
                              </div>
                              <div className="flex justify-between">
                                <span>BSC:</span>
                                <code className="font-mono">0x3456...7890</code>
                              </div>
                              <div className="flex justify-between">
                                <span>Avalanche:</span>
                                <code className="font-mono">0x4567...8901</code>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">
                              Key Functions
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="border rounded p-2">
                                <code className="font-mono">
                                  bridge(token, amount, destinationChain)
                                </code>
                              </div>
                              <div className="border rounded p-2">
                                <code className="font-mono">
                                  getQuote(token, amount, destChain)
                                </code>
                              </div>
                              <div className="border rounded p-2">
                                <code className="font-mono">
                                  claimTokens(proof, txHash)
                                </code>
                              </div>
                              <div className="border rounded p-2">
                                <code className="font-mono">
                                  getSupportedTokens()
                                </code>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            Example Contract Integration
                          </h4>
                          <div className="bg-muted rounded-lg p-4 text-sm">
                            <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@lotus-bridge/contracts/interfaces/ILotusBridge.sol";

contract YourContract {
    ILotusBridge public bridge;
    
    constructor(address _bridgeAddress) {
        bridge = ILotusBridge(_bridgeAddress);
    }
    
    function bridgeTokens(
        address token,
        uint256 amount,
        uint256 destinationChain
    ) external {
        // Approve tokens first
        IERC20(token).approve(address(bridge), amount);
        
        // Execute bridge
        bridge.bridge(token, amount, destinationChain);
    }
}`}</pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="webhooks" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Webhooks</CardTitle>
                        <CardDescription>
                          Real-time notifications for transaction events
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Event Types</h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary">
                                  bridge.initiated
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Triggered when a bridge transaction is initiated
                              </p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary">
                                  bridge.completed
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Triggered when tokens are successfully bridged
                              </p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="destructive">
                                  bridge.failed
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Triggered when a bridge transaction fails
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            Webhook Payload Example
                          </h4>
                          <div className="bg-muted rounded-lg p-4 text-sm">
                            <pre>{`{
  "event": "bridge.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "transactionId": "tx_1234567890",
    "sourceChain": "ethereum",
    "destinationChain": "polygon",
    "token": "USDC",
    "amount": "1000000000000000000",
    "sender": "0x...",
    "recipient": "0x...",
    "fees": "0.5",
    "status": "completed"
  }
}`}</pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            Setup Instructions
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                1
                              </div>
                              <div>
                                <p className="font-medium">
                                  Configure webhook endpoint
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Set up a POST endpoint to receive webhook
                                  events
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                2
                              </div>
                              <div>
                                <p className="font-medium">
                                  Register webhook URL
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Add your endpoint URL in the developer
                                  dashboard
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                3
                              </div>
                              <div>
                                <p className="font-medium">
                                  Verify webhook signature
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Validate incoming webhooks using the provided
                                  signature
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

export default DeveloperDocs;
