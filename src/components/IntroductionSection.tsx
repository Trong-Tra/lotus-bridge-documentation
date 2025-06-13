import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function IntroductionSection() {
  const { t } = useLanguage();

  return (
    <section id="introduction" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            🌸 Vietnamese Innovation
          </Badge>
          <h2 className="text-4xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🌍 The Problem: A Fragmented World of Chains
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto vietnamese-text">
            Today's blockchain landscape is vast, vibrant, and… fractured. For
            users in emerging markets like Vietnam, navigating this complexity
            feels like crossing rivers with no bridges.
          </p>
        </div>

        {/* Problem Statement & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-destructive">
                <Shield className="w-6 h-6" />
                Current Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  • Multiple steps, tools, wallets needed for cross-chain swaps
                </p>
                <p>
                  • Vietnamese tokens like VNDC, VNST, KNC, C98 often excluded
                </p>
                <p>
                  • Clunky, risky, or impossible transactions between different
                  architectures
                </p>
                <p>
                  • Global adoption stunted by exclusion, liquidity siloed,
                  users confused
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <Zap className="w-6 h-6" />
                🌸 Lotus Bridge Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A trustless, multi-chain, architecture-agnostic super-bridge
                that blooms unity from diversity.
              </p>
              <div className="space-y-2 text-sm">
                <p>• Universal bridge layer adapting to any network</p>
                <p>• Cross-architecture connector (Ethereum ↔ Solana)</p>
                <p>• Multi-wallet portal for seamless asset bridging</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vietnamese Roots & Global Impact */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                🇻🇳 Built for Vietnam. Bridging the World.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Lotus Bridge is the first bridge built by Vietnamese for
                Vietnamese, designed with cultural, economic, and technological
                sensitivity. Supports local tokens often neglected by other
                platforms — including SLP, VNST, SIPHER, KNC, KAI, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-accent" />
                💡 Infrastructure of Tomorrow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Lotus Bridge is not a temporary product. It's an infrastructure
                layer. Its architecture-agnostic model means it's future-proof —
                adaptable to whatever blockchain innovations emerge. It's
                functional, essential, and deeply integrated into user habits
                and DeFi flows.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vietnamese Roots Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            🌱 The Symbolism of the Lotus
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">🌸</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">
                Universal Bridge Layer
              </h4>
              <p className="text-sm text-muted-foreground">
                Able to adapt to any exchange method used in any network it
                connects to
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">
                Cross-Architecture Connector
              </h4>
              <p className="text-sm text-muted-foreground">
                Swap and send across chains that don't even share address
                formats or VM compatibilities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">
                Multi-Wallet Portal
              </h4>
              <p className="text-sm text-muted-foreground">
                Bridging and swapping across tokens, user identities, Vietnamese
                and global assets
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              "In Vietnamese culture, the lotus rises pure from murky waters. It
              represents resilience, rebirth, and peace. In blockchain, that
              water is fragmentation, isolation, and complexity. Lotus Bridge
              blooms as the answer — creating order from chaos, clarity from
              confusion."
            </p>
          </div>
        </div>

        {/* Why Lotus Matters */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            {t("introduction.whyLotusMatters.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">
                  {t("introduction.whyLotusMatters.securityFirst.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("introduction.whyLotusMatters.securityFirst.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">
                  {t("features.lightningFast.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("features.lightningFast.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">
                  {t("introduction.whyLotusMatters.globalReach.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("introduction.whyLotusMatters.globalReach.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">
                  {t("introduction.vietnameseRoots.communityFirst.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("introduction.whyLotusMatters.userFriendly.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
