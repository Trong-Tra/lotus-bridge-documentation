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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  Rocket,
  Building2,
  Globe,
  Shield,
  Zap,
  Users,
  Code,
  Coins,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Gift,
  FlaskConical,
  PlayCircle,
  Compass,
  Info,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Roadmap = () => {
  const { t } = useLanguage();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "active":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "upcoming":
        return <Target className="h-5 w-5 text-orange-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50";
      case "active":
        return "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50";
      case "upcoming":
        return "border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/50";
      default:
        return "border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/50";
    }
  };

  const getPhaseIcon = (id: string) => {
    switch (id) {
      case "planningPhase":
        return <Compass className="h-6 w-6" />;
      case "mvpLaunch":
        return <Rocket className="h-6 w-6" />;
      case "testnetExpansion":
        return <FlaskConical className="h-6 w-6" />;
      case "communityPrograms":
        return <Gift className="h-6 w-6" />;
      case "mainnetLaunch":
        return <Building2 className="h-6 w-6" />;
      case "ecosystemGrowth":
        return <Globe className="h-6 w-6" />;
      case "layer2Scale":
        return <Zap className="h-6 w-6" />;
      default:
        return <Target className="h-6 w-6" />;
    }
  };

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
                    {t("pages.roadmap.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.roadmap.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.roadmap.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl space-y-8">
                {/* Phase 0: Planning & Research */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t("pages.roadmap.timeline.0.title")}
                    </CardTitle>
                    <CardDescription>{t("pages.roadmap.timeline.0.description")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.0.highlights.researchScope")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.0.highlights.communityNeeds")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.0.highlights.technicalFeasibility")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phase 1: MVP Deployment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t("pages.roadmap.timeline.1.title")}
                    </CardTitle>
                    <CardDescription>{t("pages.roadmap.timeline.1.description")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.1.highlights.coreProtocol")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.1.highlights.guardianCouncil")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.1.highlights.initialAudit")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phase 2: Testnet Expansion */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t("pages.roadmap.timeline.2.title")}
                    </CardTitle>
                    <CardDescription>{t("pages.roadmap.timeline.2.description")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.2.highlights.multiChainSupport")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.2.highlights.uiImprovements")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.2.highlights.publicBugBounty")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                {/* Phase 3: Community Programs */} 
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t("pages.roadmap.timeline.3.title")}
                    </CardTitle>
                    <CardDescription>
                      {t("pages.roadmap.timeline.3.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Philosophy Section */}
                    <div className="space-y-2">
                      <h4 className="font-semibold">
                        {t("pages.roadmap.timeline.3.popupContent.philosophy.title")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.3.popupContent.philosophy.description")}
                      </p>
                    </div>

                    {/* Phase 1 */}
                    <div className="space-y-3">
                      <h5 className="font-semibold">
                        {t("pages.roadmap.timeline.3.popupContent.phases.0.phase")}
                      </h5>
                      <Badge variant="outline">
                        {t("pages.roadmap.timeline.3.popupContent.phases.0.allocation")}
                      </Badge>
                      <ul className="space-y-2 text-sm mt-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.0.eligibility.earlyUsers")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.0.eligibility.bugReporters")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.0.eligibility.openSource")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.0.eligibility.onChainReputation")}
                        </li>
                      </ul>
                    </div>

                    {/* Phase 2 */}
                    <div className="space-y-3">
                      <h5 className="font-semibold">
                        {t("pages.roadmap.timeline.3.popupContent.phases.1.phase")}
                      </h5>
                      <Badge variant="outline">
                        {t("pages.roadmap.timeline.3.popupContent.phases.1.allocation")}
                      </Badge>
                      <ul className="space-y-2 text-sm mt-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.1.eligibility.activeBridgeUsers")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.1.eligibility.diverseAssets")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.1.eligibility.voterParticipation")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.1.eligibility.guardianVotes")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.1.eligibility.proposalEngagement")}
                        </li>
                      </ul>
                    </div>

                    {/* Phase 3 */}
                    <div className="space-y-3">
                      <h5 className="font-semibold">
                        {t("pages.roadmap.timeline.3.popupContent.phases.2.phase")}
                      </h5>
                      <Badge variant="outline">
                        {t("pages.roadmap.timeline.3.popupContent.phases.2.allocation")}
                      </Badge>
                      <ul className="space-y-2 text-sm mt-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.2.eligibility.sdkIntegration")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.2.eligibility.hackathonWinners")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.2.eligibility.contentCreators")}
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          {t("pages.roadmap.timeline.3.popupContent.phases.2.eligibility.communityBuilders")}
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                {/* Phase 5: Ecosystem Growth & Localization */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t("pages.roadmap.timeline.5.title")}
                    </CardTitle>
                    <CardDescription>{t("pages.roadmap.timeline.5.description")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.5.highlights.sdkLaunch")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.5.highlights.fiatOnboarding")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.5.highlights.grantsDeployed")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phase 6: L2 Expansion & ZK Security */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t("pages.roadmap.timeline.6.title")}
                    </CardTitle>
                    <CardDescription>{t("pages.roadmap.timeline.6.description")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.6.highlights.l2Support")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.6.highlights.modularArchitecture")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {t("pages.roadmap.timeline.6.highlights.zkSecurity")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Status Overview */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Development Progress
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Track our journey from concept to reality
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">
                        {t("pages.roadmap.status.complete")}
                      </h3>
                      <p className="text-3xl font-bold text-green-600 mb-2">2</p>
                      <p className="text-sm text-muted-foreground">
                        Milestones achieved
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Clock className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">
                        {t("pages.roadmap.status.active")}
                      </h3>
                      <p className="text-3xl font-bold text-blue-600 mb-2">1</p>
                      <p className="text-sm text-muted-foreground">
                        Currently in development
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Target className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">
                        {t("pages.roadmap.status.upcoming")}
                      </h3>
                      <p className="text-3xl font-bold text-orange-600 mb-2">4</p>
                      <p className="text-sm text-muted-foreground">
                        Future phases planned
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="bg-gradient-to-r from-primary to-accent text-white">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                      Join Our Development Journey
                    </CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      Be part of the future of cross-chain innovation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" variant="secondary">
                        <Users className="h-4 w-4 mr-2" />
                        Join Community
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-primary"
                      >
                        <Code className="h-4 w-4 mr-2" />
                        Contribute
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/tokenomics">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {t("pages.roadmap.navigation.backToTokenomics")}
                    </Button>
                  </Link>
                  <Link to="/governance">
                    <Button variant="outline">Back to Governance</Button>
                  </Link>
                  <Link to="/faqs">
                    <Button className="flex items-center gap-2">
                      {t("pages.roadmap.navigation.continueToFaqs")}
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

export default Roadmap;
