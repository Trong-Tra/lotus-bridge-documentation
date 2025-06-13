
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
  Coins,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  PieChart,
  Users,
  Building,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Tokenomics = () => {
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
                    💰 Economic Model
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Tokenomics
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Sustainable token economics designed to incentivize network
                    participation and drive Vietnamese blockchain adoption.
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
                      <Coins className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      🚧 Under Development
                    </CardTitle>
                    <CardDescription className="text-lg">
                      The Lotus Bridge tokenomics model is currently being
                      finalized. This section will be completed in a future
                      update.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Our economics team is designing a sustainable model that
                      will provide:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Validator Incentives
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Sustainable rewards for network validators and
                          Vietnamese node operators
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-accent" />
                          Community Rewards
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Liquidity mining and governance participation
                          incentives
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Building className="h-5 w-5 text-primary" />
                          Development Fund
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Treasury allocation for continuous protocol
                          development
                        </p>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-accent" />
                          Fee Structure
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Transparent and competitive fee model for
                          cross-chain transactions
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Token Distribution Preview */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 Distribution Preview
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Preliminary token allocation focused on Vietnamese
                    community development and long-term sustainability.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-dashed border-2">
                    <CardHeader className="text-center">
                      <PieChart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle>Community (40%)</CardTitle>
                      <CardDescription>Vietnamese Users & Liquidity</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        Allocated for Vietnamese community development,
                        liquidity incentives, and early adopter rewards
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed border-2">
                    <CardHeader className="text-center">
                      <Building className="h-8 w-8 text-accent mx-auto mb-2" />
                      <CardTitle>Development (25%)</CardTitle>
                      <CardDescription>Team & Future Development</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        Reserved for core team, advisors, and continued
                        protocol development with vesting schedules
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed border-2">
                    <CardHeader className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle>Ecosystem (35%)</CardTitle>
                      <CardDescription>Validators & Partnerships</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        For validator rewards, strategic partnerships, and
                        ecosystem growth initiatives
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
                      🇻🇳 Vietnamese-First Economics
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Interested in our tokenomics model development?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      We're designing a tokenomics model that prioritizes
                      Vietnamese community growth while ensuring global
                      competitiveness and sustainability.
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent text-white"
                    >
                      Join Tokenomics Discussion
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/security">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Security
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">Back to Core Concept</Button>
                  </Link>
                  <Link to="/roadmap">
                    <Button className="flex items-center gap-2">
                      Roadmap
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

export default Tokenomics;
