
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GitBranch, Lock, Zap, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            ⚙️ Technical Architecture
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How Lotus Bridge Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A sophisticated multi-chain architecture that ensures security, speed, and reliability
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Cross-Chain Architecture Overview</h3>
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">ETH</span>
                  </div>
                  <p className="text-sm font-medium">Ethereum</p>
                </CardContent>
              </Card>
              
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              
              <Card className="text-center border-primary/50 bg-primary/5">
                <CardContent className="pt-4">
                  <div className="w-12 h-12 lotus-gradient rounded-lg mx-auto mb-2 flex items-center justify-center lotus-bloom">
                    <span className="text-white font-bold">蓮</span>
                  </div>
                  <p className="text-sm font-medium">Lotus Bridge</p>
                </CardContent>
              </Card>
              
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">BSC</span>
                  </div>
                  <p className="text-sm font-medium">Binance Smart Chain</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bridging Process Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Bridging Process Flow</h3>
          <div className="grid gap-6">
            {[
              {
                step: 1,
                title: "Lock & Verify",
                description: "User locks tokens on source chain, smart contract validates transaction",
                icon: Lock,
                color: "bg-red-500"
              },
              {
                step: 2,
                title: "Cross-Chain Communication",
                description: "Validators confirm lock event and generate proof for destination chain",
                icon: GitBranch,
                color: "bg-blue-500"
              },
              {
                step: 3,
                title: "Mint & Transfer",
                description: "Equivalent tokens are minted on destination chain and transferred to user",
                icon: Zap,
                color: "bg-green-500"
              },
              {
                step: 4,
                title: "Confirmation",
                description: "Transaction completed with full transparency and audit trail",
                icon: CheckCircle,
                color: "bg-purple-500"
              }
            ].map((item) => (
              <Card key={item.step} className="hover:shadow-md transition-all duration-300 bridge-transition">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">Step {item.step}</Badge>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {item.step < 4 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Security Model</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-signature validation</li>
                <li>• Time-locked transactions</li>
                <li>• Decentralized validator network</li>
                <li>• Smart contract audits</li>
                <li>• Emergency pause mechanisms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg">Supported Networks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ethereum (ETH)</li>
                <li>• Binance Smart Chain (BSC)</li>
                <li>• Polygon (MATIC)</li>
                <li>• Avalanche (AVAX)</li>
                <li>• Fantom (FTM)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 2-5 minute transfer time</li>
                <li>• 99.9% uptime guarantee</li>
                <li>• Low gas optimization</li>
                <li>• $100M+ TVL capacity</li>
                <li>• 24/7 monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
