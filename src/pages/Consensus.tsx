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
  Vote,
  Users,
  Clock,
  Shield,
  ArrowRight,
  ArrowLeft,
  Building,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Consensus = () => {
  const { t, language } = useLanguage();

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
                    🔮 Future Development
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Lotus Bridge Consensus
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Advanced consensus mechanisms designed for Vietnamese market
                    needs and global blockchain interoperability.
                  </p>
                </div>
              </div>
            </section>

            {/* Development Notice */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      🚧 Under Development
                    </CardTitle>
                    <CardDescription className="text-lg">
                      The Lotus Bridge consensus mechanism is currently in
                      active development. This section will be completed in a
                      future update.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Our team is working on innovative consensus solutions that
                      will provide:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Vote className="h-5 w-5 text-primary" />
                          Decentralized Validation
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Community-driven validation mechanisms with Vietnamese
                          stakeholder participation
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-accent" />
                          High Performance
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Optimized for fast transaction processing across
                          multiple chains
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Enhanced Security
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced cryptographic techniques for cross-chain
                          transaction security
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-accent" />
                          Vietnamese Governance
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Local community governance with global
                          interoperability standards
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Timeline Preview */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 Development Timeline
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Stay tuned for updates on our consensus mechanism
                    development as we build the future of Vietnamese blockchain
                    interoperability.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <Clock className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Q3 2025</CardTitle>
                      <CardDescription>Research & Design</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Consensus mechanism research and Vietnamese market
                        requirements analysis
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Building className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Q4 2025</CardTitle>
                      <CardDescription>Development & Testing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Implementation of consensus protocols with Vietnamese
                        stakeholder feedback
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Zap className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Q1 2026</CardTitle>
                      <CardDescription>Mainnet Launch</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Full consensus mechanism deployment with Vietnamese
                        token integration
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                      🇻🇳 Join the Development
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Interested in contributing to Lotus Bridge consensus
                      development?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      We welcome Vietnamese developers, researchers, and
                      blockchain enthusiasts to participate in shaping our
                      consensus mechanism.
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent text-white"
                    >
                      Contact Development Team
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/architecture">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Architecture
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">Back to Core Concept</Button>
                  </Link>
                  <Link to="/use-cases">
                    <Button className="flex items-center gap-2">
                      Use Cases
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

export default Consensus;
