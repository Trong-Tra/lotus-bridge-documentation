import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, Code } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vietnamese pattern background */}
      <div className="absolute inset-0 dong-son-pattern opacity-30"></div>

      {/* Floating lotus petals */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-8 h-8 lotus-gradient rounded-full opacity-20 silk-flow"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full silk-flow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-10 h-10 bg-primary/10 rounded-full silk-flow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-4 h-4 bg-secondary/30 rounded-full silk-flow"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Logo with lotus symbol */}
        <div className="mb-2">
          <img
            src="/lotus-logo.png"
            alt="Lotus Bridge Logo"
            className="w-96 h-96 mx-auto object-contain mb-1"
          />
          <p className="text-xl text-muted-foreground vietnamese-text mb-2">
            {t("hero.subtitleVietnamese")}
          </p>
          <p className="text-lg text-muted-foreground">
            {t("hero.decentralizedBridge")}
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {t("hero.bridgingBlockchains")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed vietnamese-text">
            {t("hero.mission")}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg bridge-transition"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            {t("hero.viewDocs")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg bridge-transition"
          >
            <Code className="w-5 h-5 mr-2" />
            {t("hero.developerGuide")}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
