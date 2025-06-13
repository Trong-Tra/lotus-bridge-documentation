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
import { Separator } from "@/components/ui/separator";
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
            <section className="py-16 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-8">
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

            {/* Smart Contract Integration */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card>
                  <CardHeader>
                    <CardTitle>Smart Contract Integration</CardTitle>
                    <CardDescription>
                      Integrate Lotus Bridge directly into your smart contracts
                      for seamless cross-chain functionality
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Bridge Contracts Section */}
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">
                        Bridge Contracts
                      </h4>
                      <div className="grid gap-3">
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Ethereum</span>
                          <code className="font-mono text-sm">
                            0x742d35Cc6634C0532925a3b8D1f2A5eC9B4d8A9B
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Goerli</span>
                          <code className="font-mono text-sm">
                            0x8a2F18C4dE4aB9C6dF432E7D5f6G8eH1i2J3K4L5
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">BSC</span>
                          <code className="font-mono text-sm">
                            0x853f43B7C8346C9B4d8A9Bb3E2c4D5e6F7g8H9i0
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">BSC Testnet</span>
                          <code className="font-mono text-sm">
                            0x9b3G29D5eF5bC7eG543F8E6F6h7I8j9K0l1M2n3O
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Polygon</span>
                          <code className="font-mono text-sm">
                            0x964A2F17B8D6C1dD832E7B45C3f4G5h6I7j8K9l0
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Mumbai</span>
                          <code className="font-mono text-sm">
                            0xac4H30E6fG6cD8fH654G9F7G7m8N9o0P1q2R3s4T
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Avalanche</span>
                          <code className="font-mono text-sm">
                            0x075c48CC92bD4eB7F29D4fcF8g9H0i1J2k3L4m5N
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Fuji</span>
                          <code className="font-mono text-sm">
                            0xbd5I41F7gH7dE9gI765H0G8H8n9O0p1Q2r3S4t5U
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Solana</span>
                          <code className="font-mono text-sm">
                            DLotusBridgeProgram1111111111111111111111111
                          </code>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">Solana Devnet</span>
                          <code className="font-mono text-sm">
                            DLotusTestProgram11111111111111111111111111
                          </code>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Key Functions Section */}
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">
                        Key Functions
                      </h4>

                      {/* Bridge Function */}
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">function</Badge>
                            <code className="font-mono font-semibold">
                              bridge
                            </code>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Initiates a cross-chain bridge transaction
                          </p>
                          <div className="bg-muted/50 rounded-lg p-4 text-sm font-mono">
                            <pre>{`function bridge(
    address token,
    uint256 amount,
    uint256 destinationChainId,
    address recipient
) external payable returns (bytes32 txId)`}</pre>
                          </div>
                          <div className="mt-3 space-y-2">
                            <p className="text-sm">
                              <strong>Parameters:</strong>
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                              <li>
                                • <code>token</code> - Address of the token to
                                bridge
                              </li>
                              <li>
                                • <code>amount</code> - Amount of tokens to
                                bridge
                              </li>
                              <li>
                                • <code>destinationChainId</code> - Target chain
                                ID
                              </li>
                              <li>
                                • <code>recipient</code> - Recipient address on
                                destination chain
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Get Quote Function */}
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">view</Badge>
                            <code className="font-mono font-semibold">
                              getQuote
                            </code>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Get bridging fee estimation before transaction
                          </p>
                          <div className="bg-muted/50 rounded-lg p-4 text-sm font-mono">
                            <pre>{`function getQuote(
    address token,
    uint256 amount,
    uint256 destinationChainId
) external view returns (uint256 fee, uint256 estimatedTime)`}</pre>
                          </div>
                        </div>

                        {/* Check Status Function */}
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">view</Badge>
                            <code className="font-mono font-semibold">
                              getTransactionStatus
                            </code>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Check the status of a bridge transaction
                          </p>
                          <div className="bg-muted/50 rounded-lg p-4 text-sm font-mono">
                            <pre>{`function getTransactionStatus(
    bytes32 txId
) external view returns (
    uint8 status,
    uint256 timestamp,
    uint256 confirmations
)`}</pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Example Integration */}
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">
                        Example Integration
                      </h4>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h5 className="font-semibold mb-3">
                          Basic Bridge Integration
                        </h5>
                        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                          <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@lotus-bridge/contracts/interfaces/ILotusBridge.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyDApp {
    ILotusBridge public immutable lotusBridge;
    
    constructor(address _bridgeAddress) {
        lotusBridge = ILotusBridge(_bridgeAddress);
    }
    
    function bridgeTokensToPolygon(
        address token,
        uint256 amount
    ) external {
        // Get quote first
        (uint256 fee,) = lotusBridge.getQuote(
            token, 
            amount, 
            137 // Polygon chain ID
        );
        
        // Approve tokens to bridge contract
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        IERC20(token).approve(address(lotusBridge), amount);
        
        // Execute bridge transaction
        bytes32 txId = lotusBridge.bridge{value: fee}(
            token,
            amount,
            137, // Polygon
            msg.sender // Same recipient on destination
        );
        
        emit BridgeInitiated(txId, msg.sender, amount);
    }
    
    event BridgeInitiated(
        bytes32 indexed txId, 
        address indexed user, 
        uint256 amount
    );
}`}</pre>
                        </div>
                      </div>
                    </div>

                    {/* Coming Soon Notice */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">🚧</div>
                        <div>
                          <h5 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">
                            More Documentation Coming Soon
                          </h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Additional developer resources including SDK
                            documentation, REST API guides, and webhook
                            integration examples are currently being prepared by
                            our development team.
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

export default DeveloperDocs;
