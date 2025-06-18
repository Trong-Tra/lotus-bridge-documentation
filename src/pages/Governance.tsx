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
import { Progress } from "@/components/ui/progress";
import {
  Vote,
  Users,
  Shield,
  ArrowRight,
  ArrowLeft,
  Gift,
  Zap,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Heart,
  Layers,
  Coins,
  PauseCircle,
  ListChecks,
  Unlock,
  Wrench,
  Hammer,
  Gavel
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Governance = () => {
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
                    {t("pages.governance.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.governance.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.governance.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Guardian Council Section */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    {t("pages.governance.guardianCouncil.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.governance.guardianCouncil.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <CheckCircle className="h-5 w-5" />
                        {t("pages.governance.guardianCouncil.powers.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.guardianCouncil.powers.pauseChannels")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.guardianCouncil.powers.triggerEmergencyVotes")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Wrench className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.guardianCouncil.powers.proposeUpgrades")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                  </Card>

                  <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <XCircle className="h-5 w-5" />
                        {t("pages.governance.guardianCouncil.limitations.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.guardianCouncil.limitations.noUserFundTransfer")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.guardianCouncil.limitations.noUnilateralChanges")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.guardianCouncil.limitations.multisigRequired")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-blue-700 dark:text-blue-300">
                        {t("pages.governance.guardianCouncil.transparency")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* DAO Participation Section */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                    <Vote className="h-8 w-8 text-accent" />
                    {t("pages.governance.daoParticipation.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.governance.daoParticipation.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-accent" />
                        {t("pages.governance.daoParticipation.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Users className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.daoParticipation.votePowers.electGuardians")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <ListChecks className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.daoParticipation.votePowers.whitelistAssets")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Coins className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.daoParticipation.votePowers.fundingApproval")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Hammer className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {t("pages.governance.daoParticipation.votePowers.protocolUpgrade")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        {t("pages.governance.governableActions.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Users className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.governance.governableActions.list.pauseMalicious")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <ListChecks className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.governance.governableActions.list.manageAssets")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Coins className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.governance.governableActions.list.issueGrants")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Hammer className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.governance.governableActions.list.overrideGuardians")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Unlock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          {t("pages.governance.daoParticipation.inclusiveDesign")}
                        </h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            {/* Cultural Values Section */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl flex items-center justify-center gap-2">
                      <Heart className="h-6 w-6 text-red-500" />
                      {t("pages.governance.securityEthics.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      {t("pages.governance.securityEthics.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/architecture">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {t("pages.governance.navigation.readyToParticipate")}
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">
                      {t("pages.governance.navigation.exploreProposals")}
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button className="flex items-center gap-2">
                      {t("pages.governance.navigation.continueToTokenomics")}
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

export default Governance;
