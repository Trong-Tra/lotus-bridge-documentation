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
import { ArrowRight, ArrowLeft, Star, Globe, Lightbulb } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const BenefitsVietnam = () => {
  const { t, language } = useLanguage();

  const industryBenefits = [
    {
      title: "Position Vietnam as a Web3 Innovation Hub",
      description:
        "Establish Vietnam as a leading force in blockchain interoperability and cross-chain innovation on the global stage.",
      icon: Star,
      features: [
        "Global recognition for Vietnamese tech innovation",
        "Attraction of international blockchain investments",
        "Development of local Web3 talent and expertise",
        "Vietnam-first approach to blockchain solutions",
        "Cultural values integrated into technology",
      ],
    },
    {
      title: "Showcase Local Tokens on the Global Stage",
      description:
        "Bring Vietnamese tokens and projects into the global DeFi ecosystem, increasing their visibility and adoption worldwide.",
      icon: Globe,
      features: [
        "AXS and SLP global market expansion",
        "VNDC and VNST international recognition",
        "KardiaChain ecosystem globalization",
        "Vietnamese gaming tokens worldwide access",
        "Local project international funding",
      ],
    },
    {
      title: "Empower Local Developers and Entrepreneurs",
      description:
        "Create opportunities for Vietnamese talent to build world-class blockchain applications and businesses.",
      icon: Lightbulb,
      features: [
        "Vietnamese developer job opportunities",
        "Startup ecosystem growth",
        "Local blockchain education initiatives",
        "Mentorship and incubation programs",
        "Technical documentation in Vietnamese",
      ],
    },
  ];

  const initiatives = [
    {
      title: "🎓 Vietnamese Blockchain Education Program",
      description:
        "Comprehensive educational initiatives to build local blockchain expertise",
      features: [
        "University partnerships for blockchain courses",
        "Vietnamese-language certification programs",
        "Developer bootcamps and workshops",
        "Research collaborations with local institutions",
      ],
    },
    {
      title: "🚀 Vietnam Web3 Startup Incubator",
      description:
        "Supporting Vietnamese entrepreneurs in building blockchain businesses",
      features: [
        "Seed funding for Vietnamese blockchain startups",
        "Mentorship from global Web3 experts",
        "Access to international investor networks",
        "Vietnamese market-focused business development",
      ],
    },
    {
      title: "🌐 Global Vietnam Blockchain Conference",
      description:
        "Annual conference showcasing Vietnamese blockchain innovation",
      features: [
        "International speaker lineup",
        "Vietnamese project showcases",
        "Global investment partnerships",
        "Cultural exchange and networking",
      ],
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
            <section className="py-12 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    🇻🇳 Vietnam's Crypto Industry
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Benefits for Vietnam's Crypto Industry
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Positioning Vietnam as a global leader in blockchain
                    innovation while empowering local talent and showcasing
                    Vietnamese excellence to the world.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Benefits */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="grid gap-8">
                  {industryBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${
                            index % 2 === 0
                              ? "from-red-500 to-yellow-500"
                              : "from-yellow-500 to-red-500"
                          }`}
                        />
                        <CardHeader className="pl-8">
                          <div className="flex items-center gap-4 mb-2">
                            <div
                              className={`p-3 rounded-lg ${
                                index % 2 === 0
                                  ? "bg-red-50 border border-red-200"
                                  : "bg-yellow-50 border border-yellow-200"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${
                                  index % 2 === 0
                                    ? "text-red-600"
                                    : "text-yellow-600"
                                }`}
                              />
                            </div>
                            <CardTitle className="text-2xl">
                              {benefit.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {benefit.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {benefit.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-red-600 rounded-full" />
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

            {/* Strategic Initiatives */}
            <section className="py-10 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 Strategic Initiatives
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive programs to support Vietnam's blockchain
                    ecosystem development.
                  </p>
                </div>

                <div className="grid gap-8">
                  {initiatives.map((initiative, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-2xl">
                          {initiative.title}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {initiative.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {initiative.features.map((feature, featureIndex) => (
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
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-10 px-6">
              <div className="container mx-auto max-w-5xl">
                <Card className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 border-red-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">
                      🚀 Join Vietnam's Blockchain Revolution
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Be part of positioning Vietnam as a global Web3 leader
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Whether you're a developer, entrepreneur, investor, or
                      blockchain enthusiast, there's a place for you in
                      Vietnam's blockchain future. Together, we can showcase
                      Vietnamese innovation to the world while building
                      sustainable value for our local ecosystem.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center">
                  <Link to="/benefits-liquidity">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      For Liquidity Providers
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">Back to Overview</Button>
                  </Link>
                  <Link to="/security">
                    <Button className="flex items-center gap-2">
                      Security
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

export default BenefitsVietnam;
