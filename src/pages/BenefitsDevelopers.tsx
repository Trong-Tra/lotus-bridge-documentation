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
import { Separator } from "@/components/ui/separator";
import {
  Code,
  Book,
  Wrench,
  Globe,
  ArrowRight,
  ArrowLeft,
  Terminal,
  Layers,
  FileCode,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsDevelopers = () => {
  const { t, language } = useLanguage();

  const developerTools = [
    {
      title: "SDKs and APIs for Cross-Chain dApps",
      description:
        "Comprehensive development kits that make building cross-chain applications as simple as single-chain development.",
      icon: Code,
      features: [
        "TypeScript/JavaScript SDK",
        "Python integration library",
        "RESTful API endpoints",
        "WebSocket real-time updates",
        "GraphQL query interface",
      ],
    },
    {
      title: "Developer-Friendly Documentation",
      description:
        "Extensive documentation localized for Vietnamese developers, with examples using popular local tokens and use cases.",
      icon: Book,
      features: [
        "Vietnamese language documentation",
        "Interactive code examples",
        "Video tutorials with Vietnamese subtitles",
        "Local token integration guides",
        "Community-driven content",
      ],
    },
    {
      title: "Vietnamese Ecosystem Integration",
      description:
        "Pre-built integrations and tools specifically designed for the Vietnamese blockchain ecosystem and market needs.",
      icon: Globe,
      features: [
        "Ronin network integration",
        "KardiaChain compatibility",
        "Vietnamese gaming dApp templates",
        "Local payment gateway APIs",
        "Cultural UX component library",
      ],
    },
  ];

  const codeExamples = [
    {
      title: "Bridge AXS from Ronin to Ethereum",
      language: "JavaScript",
      code: `// Bridge AXS tokens from Ronin to Ethereum
import { LotusBridge } from '@lotus/sdk';

const bridge = new LotusBridge({
  apiKey: 'your-api-key'
});

const result = await bridge.transfer({
  from: 'ronin',
  to: 'ethereum',
  token: 'AXS',
  amount: '100',
  fromAddress: '0x...',
  toAddress: '0x...'
});`,
    },
    {
      title: "Multi-Wallet Connection",
      language: "TypeScript",
      code: `// Connect multiple wallets across chains
interface MultiWalletConfig {
  ethereum: string;
  ronin: string;
  solana: string;
}

const wallets = await bridge.connectMultiWallet({
  chains: ['ethereum', 'ronin', 'solana'],
  autoConnect: true
});`,
    },
    {
      title: "Vietnamese Token Query",
      language: "Python",
      code: `# Query Vietnamese token balances
from lotus_bridge import LotusBridge

bridge = LotusBridge(api_key='your-key')

# Get balances for popular Vietnamese tokens
tokens = ['AXS', 'SLP', 'VNDC', 'VNST', 'KAI']
balances = bridge.get_multi_chain_balances(
    address='0x...',
    tokens=tokens
)`,
    },
  ];

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
                    👨‍💻 Developer Benefits
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Benefits for Developers
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Build the future of Vietnamese blockchain applications with
                    comprehensive tools, localized documentation, and native
                    ecosystem integration.
                  </p>
                </div>
              </div>
            </section>

            {/* Developer Tools */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="grid gap-8">
                  {developerTools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${
                            index % 2 === 0
                              ? "from-primary to-accent"
                              : "from-accent to-primary"
                          }`}
                        />
                        <CardHeader className="pl-8">
                          <div className="flex items-center gap-4 mb-2">
                            <div
                              className={`p-3 rounded-lg ${
                                index % 2 === 0
                                  ? "bg-primary/10"
                                  : "bg-accent/10"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${
                                  index % 2 === 0
                                    ? "text-primary"
                                    : "text-accent"
                                }`}
                              />
                            </div>
                          </div>
                          <CardTitle className="text-2xl">
                            {tool.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {tool.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {tool.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm font-medium">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Code Examples */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">🇻🇳 Code Examples</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Get started quickly with practical examples using popular
                    Vietnamese tokens and chains.
                  </p>
                </div>

                <div className="grid gap-8">
                  {codeExamples.map((example, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-xl">
                              {example.title}
                            </CardTitle>
                            <CardDescription>
                              Example implementation in {example.language}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">{example.language}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{example.code}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Vietnamese Developer Community */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 Vietnamese Developer Community
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join a thriving community of Vietnamese blockchain
                    developers building the future of Web3.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <Terminal className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Developer Forum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Vietnamese-language developer forum with technical
                        discussions, Q&A, and project showcases.
                      </p>
                      <Button size="sm" variant="outline">
                        Join Forum
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Layers className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Hackathons & Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Regular hackathons and meetups focused on Vietnamese
                        blockchain innovation and Lotus Bridge integration.
                      </p>
                      <Button size="sm" variant="outline">
                        View Events
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <FileCode className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Open Source</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Contribute to Lotus Bridge development and Vietnamese
                        blockchain tooling through our open source initiatives.
                      </p>
                      <Button size="sm" variant="outline">
                        View GitHub
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="container mx-auto max-w-6xl">
                <Card className="border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">
                      🚀 Start Building Today
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Ready to build the next generation of Vietnamese
                      blockchain applications?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">📚 Documentation</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive guides in Vietnamese and English
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          🔧 Developer Tools
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          SDKs, APIs, and testing environments
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          💬 Community Support
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Active Vietnamese developer community
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2">
                          🎯 Use Case Examples
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Real-world Vietnamese market applications
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-accent text-white"
                      >
                        Access Developer Portal
                      </Button>
                      <Button size="lg" variant="outline">
                        View Documentation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/benefits-users">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      For Users
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">Back to Overview</Button>
                  </Link>
                  <Link to="/benefits-liquidity">
                    <Button className="flex items-center gap-2">
                      For Liquidity Providers
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BenefitsDevelopers;
