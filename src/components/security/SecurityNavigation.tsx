
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

export const SecurityNavigation = () => {
  const { t } = useLanguage();

  return (
    <section className="py-8 px-6 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <Button variant="outline" className="gap-2" asChild>
            <Link to="/benefits-vietnam">
              <ArrowLeft className="h-4 w-4" />
              {t("common.back")} {t("navigation.benefitsVietnam")}
            </Link>
          </Button>

          <div className="text-center">
            <h3 className="text-lg font-semibold">{t("common.continue")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("navigation.tokenomics")}
            </p>
          </div>

          <Button className="gap-2" asChild>
            <Link to="/tokenomics">
              {t("navigation.tokenomics")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
