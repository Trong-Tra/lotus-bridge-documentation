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
import { useLanguage } from "@/hooks/useLanguage";

const DeveloperDocs = () => {
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
                    {t("developerDocs.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Developer Documentation
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Build cross-chain dApps with our comprehensive SDK, APIs,
                    and localized documentation. Vietnamese developers get
                    first-class support and Vietnamese-first documentation.
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
                      <CardTitle>
                        {t("developerDocs.quickStart.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("developerDocs.quickStart.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        {t("developerDocs.quickStart.button")}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20">
                    <CardHeader>
                      <Book className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>
                        {t("developerDocs.apiReference.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("developerDocs.apiReference.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        {t("developerDocs.apiReference.button")}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                      <Terminal className="h-8 w-8 text-green-600 mb-2" />
                      <CardTitle>
                        {t("developerDocs.sdkDownloads.title")}
                      </CardTitle>
                      <CardDescription>
                        {t("developerDocs.sdkDownloads.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        {t("developerDocs.sdkDownloads.button")}
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="rest-api" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="rest-api">
                      {t("developerDocs.restApi.title")}
                    </TabsTrigger>
                    <TabsTrigger value="sdk">
                      {t("developerDocs.javascriptSdk.title")}
                    </TabsTrigger>
                    <TabsTrigger value="smart-contracts">
                      {t("developerDocs.smartContracts.title")}
                    </TabsTrigger>
                    <TabsTrigger value="webhooks">
                      {t("developerDocs.webhooks.title")}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="rest-api" className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          {t("developerDocs.restApi.overview.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("developerDocs.restApi.overview.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              {t("developerDocs.restApi.baseUrl")}
                            </h4>
                            <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                              https://api.lotusbridge.io/v1
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">
                              {t("developerDocs.restApi.authentication")}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {t("developerDocs.restApi.authDescription")}
                            </p>
                            <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                              Authorization: Bearer YOUR_API_KEY
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h4 className="font-semibold">
                              {t("developerDocs.restApi.coreEndpoints")}
                            </h4>

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
                                  /transaction/&#123;txHash&#125;
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
                        <CardTitle>
                          {t("developerDocs.javascriptSdk.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("developerDocs.javascriptSdk.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            {t("developerDocs.javascriptSdk.installation")}
                          </h4>
                          <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                            npm install @lotus-bridge/sdk
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            {t("developerDocs.javascriptSdk.basicUsage")}
                          </h4>
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
                            {t(
                              "developerDocs.javascriptSdk.configurationOptions"
                            )}
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
                        <CardTitle>
                          {t("developerDocs.smartContracts.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("developerDocs.smartContracts.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">
                              {t(
                                "developerDocs.smartContracts.bridgeContracts"
                              )}
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
                              {t("developerDocs.smartContracts.keyFunctions")}
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
                            {t(
                              "developerDocs.smartContracts.exampleIntegration"
                            )}
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
                        <CardTitle>
                          {t("developerDocs.webhooks.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("developerDocs.webhooks.description")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            {t("developerDocs.webhooks.eventTypes")}
                          </h4>
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
                            {t("developerDocs.webhooks.payloadExample")}
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
                            {t("developerDocs.webhooks.setupInstructions")}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                1
                              </div>
                              <div>
                                <p className="font-medium">
                                  {t(
                                    "developerDocs.webhooks.configureEndpoint"
                                  )}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {t("developerDocs.webhooks.setupDescription")}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                2
                              </div>
                              <div>
                                <p className="font-medium">
                                  {t("developerDocs.webhooks.registerUrl")}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {t(
                                    "developerDocs.webhooks.registerDescription"
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                                3
                              </div>
                              <div>
                                <p className="font-medium">
                                  {t("developerDocs.webhooks.verifySignature")}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {t(
                                    "developerDocs.webhooks.signatureDescription"
                                  )}
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
