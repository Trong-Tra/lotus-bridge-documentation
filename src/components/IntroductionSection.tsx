
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Shield, Zap } from "lucide-react";

export function IntroductionSection() {
  return (
    <section id="introduction" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            🌸 Vietnamese Innovation
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Introduction to Lotus Bridge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto vietnamese-text">
            Rooted in Vietnamese innovation and built for global adoption, 
            Lotus Bridge represents the next generation of cross-chain infrastructure.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bridge-transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Mission - Sứ mệnh
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground vietnamese-text leading-relaxed">
                To democratize cross-chain transactions by building secure, efficient, and 
                culturally-inspired infrastructure that connects global blockchain networks 
                while honoring Vietnamese values of community, resilience, and innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 bridge-transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-accent" />
                Vision - Tầm nhìn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground vietnamese-text leading-relaxed">
                To establish Vietnam as a leading force in blockchain interoperability, 
                creating a world where value flows seamlessly across networks like the 
                Mekong River flows through our homeland.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vietnamese Roots Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            🇻🇳 Vietnamese Roots & Global Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">🏮</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">Cultural Heritage</h4>
              <p className="text-sm text-muted-foreground">
                Drawing inspiration from traditional Vietnamese craftsmanship and values
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">🌾</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">Community First</h4>
              <p className="text-sm text-muted-foreground">
                Built by the community, for the community, with transparency at its core
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">Innovation Spirit</h4>
              <p className="text-sm text-muted-foreground">
                Pushing technological boundaries while staying true to our values
              </p>
            </div>
          </div>
        </div>

        {/* Why Lotus Matters */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Lotus Bridge Matters
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Security First</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-signature validation and rigorous security audits
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Lightning Fast</h4>
                <p className="text-sm text-muted-foreground">
                  Optimized algorithms for near-instant cross-chain transfers
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Multi-Chain</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting major blockchain networks and emerging ecosystems
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Community Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Governed by the community with transparent decision-making
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
