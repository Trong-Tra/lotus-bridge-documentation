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
            🌸 {t("introductionSection.badge")}
          </Badge>
          <h2 className="text-4xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("introductionSection.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto vietnamese-text">
            {t("introductionSection.description")}
          </p>
        </div>

        {/* Problem Statement & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-destructive">
                <Shield className="w-6 h-6" />
                {t("introductionSection.currentChallenges.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  • {t("introductionSection.currentChallenges.challenges.0")}
                </p>
                <p>
                  • {t("introductionSection.currentChallenges.challenges.1")}
                </p>
                <p>
                  • {t("introductionSection.currentChallenges.challenges.2")}
                </p>
                <p>
                  • {t("introductionSection.currentChallenges.challenges.3")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <Zap className="w-6 h-6" />
                {t("introductionSection.lotusSolution.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("introductionSection.lotusSolution.description")}
              </p>
              <div className="space-y-2 text-sm">
                <p>• {t("introductionSection.lotusSolution.features.0")}</p>
                <p>• {t("introductionSection.lotusSolution.features.1")}</p>
                <p>• {t("introductionSection.lotusSolution.features.2")}</p>
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
                {t("introductionSection.builtForVietnam.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t("introductionSection.builtForVietnam.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-accent" />
                {t("introductionSection.infrastructureTomorrow.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t("introductionSection.infrastructureTomorrow.description")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vietnamese Roots Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t("introductionSection.symbolismLotus.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">🌸</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">
                {t("introductionSection.symbolismLotus.universalBridge.title")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t(
                  "introductionSection.symbolismLotus.universalBridge.description"
                )}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">
                {t(
                  "introductionSection.symbolismLotus.crossArchitecture.title"
                )}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t(
                  "introductionSection.symbolismLotus.crossArchitecture.description"
                )}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lotus-gradient rounded-full flex items-center justify-center mx-auto mb-4 lotus-bloom">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h4 className="font-semibold mb-2 vietnamese-text">
                {t("introductionSection.symbolismLotus.multiWallet.title")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t(
                  "introductionSection.symbolismLotus.multiWallet.description"
                )}
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              "{t("introductionSection.symbolismLotus.quote")}"
            </p>
          </div>
        </div>

        {/* Why Lotus Matters */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            {t("introductionSection.whyLotusMatters.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">
                  {t("introductionSection.whyLotusMatters.securityFirst.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "introductionSection.whyLotusMatters.securityFirst.description"
                  )}
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
                  {t("introductionSection.whyLotusMatters.globalReach.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "introductionSection.whyLotusMatters.globalReach.description"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">
                  {t(
                    "introductionSection.whyLotusMatters.vietnameseRoots.title"
                  )}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "introductionSection.whyLotusMatters.vietnameseRoots.description"
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
