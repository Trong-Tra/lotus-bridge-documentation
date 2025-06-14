
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Lock,
  CheckCircle,
  AlertTriangle,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const SecurityContent = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          {/* Wireframe Placeholder */}
          <Card className="border-2 border-dashed border-muted-foreground/30">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="h-8 w-8 text-muted-foreground" />
                <div className="text-4xl">🏗️</div>
              </div>
              <CardTitle className="text-2xl text-muted-foreground">
                {t("security.documentation")}
              </CardTitle>
              <CardDescription className="text-lg">
                {t("security.comingSoonDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <div className="text-muted-foreground">
                  <div className="text-6xl mb-4">📋</div>
                  <h3 className="font-semibold text-xl mb-3">
                    Security Architecture Diagrams
                  </h3>
                  <p className="text-sm mb-4">
                    Detailed security infrastructure and protocol
                    implementations
                  </p>
                  <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs">
                    Incoming Documentation
                  </div>
                </div>
              </div>

              {/* Wireframe Content Preview */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-dashed border-muted-foreground/20">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                      <Lock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-muted-foreground">
                      {t("security.cryptographicSecurity")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted/30 rounded"></div>
                      <div className="h-3 bg-muted/30 rounded w-3/4"></div>
                      <div className="h-3 bg-muted/30 rounded w-1/2"></div>
                    </div>
                    <div className="mt-3 inline-block px-2 py-1 bg-muted/50 rounded text-xs">
                      Future Diagram
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-dashed border-muted-foreground/20">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                      <Shield className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-muted-foreground">
                      {t("security.multiLayerDefense")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted/30 rounded"></div>
                      <div className="h-3 bg-muted/30 rounded w-5/6"></div>
                      <div className="h-3 bg-muted/30 rounded w-2/3"></div>
                    </div>
                    <div className="mt-3 inline-block px-2 py-1 bg-muted/50 rounded text-xs">
                      Future Diagram
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-dashed border-muted-foreground/20">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                      <CheckCircle className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-muted-foreground">
                      {t("security.auditCompliance")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted/30 rounded"></div>
                      <div className="h-3 bg-muted/30 rounded w-4/5"></div>
                      <div className="h-3 bg-muted/30 rounded w-3/5"></div>
                    </div>
                    <div className="mt-3 inline-block px-2 py-1 bg-muted/50 rounded text-xs">
                      Future Diagram
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center py-6">
                <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">
                  {t("security.developmentInProgress")}
                </h4>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  {t("security.progressDescription")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
