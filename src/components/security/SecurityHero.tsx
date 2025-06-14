
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

export const SecurityHero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            🛡️ {t("navigation.security")}
          </Badge>
          <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("security.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("security.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};
