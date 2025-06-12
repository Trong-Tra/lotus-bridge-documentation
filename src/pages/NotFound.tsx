import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-6">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="mx-auto mb-4">
            <AlertTriangle className="h-16 w-16 text-amber-500" />
          </div>
          <CardTitle className="text-4xl font-bold mb-2">
            {t("notFound.title")}
          </CardTitle>
          <p className="text-xl text-muted-foreground mb-2">
            {t("notFound.subtitle")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("notFound.description")}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full gap-2">
            <a href="/">
              <Home className="h-4 w-4" />
              {t("notFound.returnHome")}
            </a>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 gap-2">
              <Search className="h-4 w-4" />
              {t("notFound.browsePages")}
            </Button>
            <Button variant="outline" size="sm" className="flex-1 gap-2">
              {t("notFound.reportIssue")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
