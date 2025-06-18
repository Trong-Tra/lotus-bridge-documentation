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
  Shield,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Eye,
  Users,
  FileText,
  Zap,
  Globe,
  UserCheck,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Security = () => {
  const { t, language } = useLanguage();

  const securityFeatures = [
    {
      icon: Lock,
      title: t("pages.security.coreModel.lockAndRelease.title"),
      description: t("pages.security.coreModel.lockAndRelease.description"),
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: Zap,
      title: t("pages.security.coreModel.mintAndBurn.title"),
      description: t("pages.security.coreModel.mintAndBurn.description"),
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: ShieldCheck,
      title: t("pages.security.coreModel.tokenListing.title"),
      description: t("pages.security.coreModel.tokenListing.description"),
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
  ];

  const smartContractProtections = [
    {
      title: t("pages.security.smartContractSecurity.reentrancy.title"),
      description: t("pages.security.smartContractSecurity.reentrancy.description"),
      icon: Shield,
    },
    {
      title: t("pages.security.smartContractSecurity.overflow.title"),
      description: t("pages.security.smartContractSecurity.overflow.description"),
      icon: CheckCircle,
    },
    {
      title: t("pages.security.smartContractSecurity.permissionControl.title"),
      description: t("pages.security.smartContractSecurity.permissionControl.description"),
      icon: UserCheck,
    },
    {
      title: t("pages.security.smartContractSecurity.upgradeSafety.title"),
      description: t("pages.security.smartContractSecurity.upgradeSafety.description"),
      icon: Zap,
    },
    {
      title: t("pages.security.smartContractSecurity.flashLoanProtection.title"),
      description: t("pages.security.smartContractSecurity.flashLoanProtection.description"),
      icon: AlertTriangle,
    },
    {
      title: t("pages.security.smartContractSecurity.gasDos.title"),
      description: t("pages.security.smartContractSecurity.gasDos.description"),
      icon: Globe,
    },
  ];

  const governanceFeatures = [
    {
      title: t("pages.security.governanceAccountability.identityRequirement.title"),
      description: t("pages.security.governanceAccountability.identityRequirement.description"),
      icon: Eye,
    },
    {
      title: t("pages.security.governanceAccountability.legalLiability.title"),
      description: t("pages.security.governanceAccountability.legalLiability.description"),
      icon: FileText,
    },
    {
      title: t("pages.security.governanceAccountability.auditTrail.title"),
      description: t("pages.security.governanceAccountability.auditTrail.description"),
      icon: CheckCircle,
    },
    {
      title: t("pages.security.governanceAccountability.reputationModel.title"),
      description: t("pages.security.governanceAccountability.reputationModel.description"),
      icon: Users,
    },
  ];

  const userBestPractices = [
    {
      title: t("pages.security.userAwareness.verifyAddress.title"),
      description: t("pages.security.userAwareness.verifyAddress.description"),
      icon: Eye,
      severity: "high",
    },
    {
      title: t("pages.security.userAwareness.protectKeys.title"),
      description: t("pages.security.userAwareness.protectKeys.description"),
      icon: Lock,
      severity: "critical",
    },
    {
      title: t("pages.security.userAwareness.officialSources.title"),
      description: t("pages.security.userAwareness.officialSources.description"),
      icon: Shield,
      severity: "high",
    },
    {
      title: t("pages.security.userAwareness.socialEngineering.title"),
      description: t("pages.security.userAwareness.socialEngineering.description"),
      icon: AlertTriangle,
      severity: "critical",
    },
    {
      title: t("pages.security.userAwareness.tokenRisk.title"),
      description: t("pages.security.userAwareness.tokenRisk.description"),
      icon: CheckCircle,
      severity: "medium",
    },
    {
      title: t("pages.security.userAwareness.gasExploits.title"),
      description: t("pages.security.userAwareness.gasExploits.description"),
      icon: Zap,
      severity: "medium",
    },
    {
      title: t("pages.security.userAwareness.blockExplorerUse.title"),
      description: t("pages.security.userAwareness.blockExplorerUse.description"),
      icon: ExternalLink,
      severity: "medium",
    },
    {
      title: t("pages.security.userAwareness.reporting.title"),
      description: t("pages.security.userAwareness.reporting.description"),
      icon: AlertCircle,
      severity: "high",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20";
      case "high":
        return "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20";
      case "medium":
        return "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20";
      default:
        return "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/20";
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
                    {t("pages.security.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.security.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.security.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Core Security Model */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{t("pages.security.coreModel.title")}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Lotus Bridge's security architecture is built on multiple complementary models that work together to ensure maximum protection for user assets.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {securityFeatures.map((feature, index) => (
                    <Card key={index} className={`border-2 ${feature.bgColor}`}>
                      <CardHeader className="text-center pb-4">
                        <div className={`w-16 h-16 rounded-full ${feature.bgColor} flex items-center justify-center mx-auto mb-4`}>
                          <feature.icon className={`h-8 w-8 ${feature.color}`} />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Guardian Council */}
            <section className="py-16 px-6 bg-muted/30">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{t("pages.security.guardianCouncil.title")}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    A specialized emergency response layer designed to protect the protocol and users during critical situations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <AlertTriangle className="h-6 w-6 text-orange-500" />
                        <CardTitle className="text-xl">{t("pages.security.guardianCouncil.emergencyPowers.title")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t("pages.security.guardianCouncil.emergencyPowers.description")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="h-6 w-6 text-blue-500" />
                        <CardTitle className="text-xl">{t("pages.security.guardianCouncil.attackResponse.title")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t("pages.security.guardianCouncil.attackResponse.description")}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Smart Contract Security */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{t("pages.security.smartContractSecurity.title")}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Comprehensive smart contract security measures implementing industry best practices and cutting-edge protection mechanisms.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {smartContractProtections.map((protection, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-2">
                          <protection.icon className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">{protection.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {protection.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Accountable Governance */}
            <section className="py-16 px-6 bg-muted/30">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{t("pages.security.governanceAccountability.title")}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.security.governanceAccountability.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {governanceFeatures.map((feature, index) => (
                    <Card key={index} className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <feature.icon className="h-6 w-6 text-green-500" />
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* User Awareness & Best Practices */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{t("pages.security.userAwareness.title")}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Essential security practices and awareness guidelines to help users protect their assets when using cross-chain bridges.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {userBestPractices.map((practice, index) => (
                    <Card key={index} className={`border-2 ${getSeverityColor(practice.severity)} hover:shadow-lg transition-all duration-300`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <practice.icon className="h-5 w-5 text-primary" />
                          <Badge 
                            variant={practice.severity === "critical" ? "destructive" : practice.severity === "high" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {practice.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <CardTitle className="text-sm font-semibold">{practice.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {practice.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Security Audits */}
            <section className="py-16 px-6 bg-muted/30">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{t("pages.security.securityAudits.title")}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.security.securityAudits.auditFirms")}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <CardTitle className="text-lg">Trail of Bits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.security.securityAudits.trailOfBits")}
                      </p>
                      <Badge variant="outline" className="mt-3">Completed</Badge>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <CardTitle className="text-lg">Quantstamp</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.security.securityAudits.quantstamp")}
                      </p>
                      <Badge variant="outline" className="mt-3">Completed</Badge>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-8 w-8 text-yellow-500" />
                      </div>
                      <CardTitle className="text-lg">CertiK</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {t("pages.security.securityAudits.certik")}
                      </p>
                      <Badge variant="secondary" className="mt-3">In Progress</Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Bug Bounty */}
                <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-10 w-10 text-purple-500" />
                    </div>
                    <CardTitle className="text-2xl">{t("pages.security.securityAudits.bugBounty.title")}</CardTitle>
                    <CardDescription className="text-lg">
                      {t("pages.security.securityAudits.bugBounty.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("pages.security.securityAudits.bugBounty.scope")}
                    </p>
                    <Button className="gap-2">
                      Submit Vulnerability
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Navigation */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/benefits-vietnam">
                      <ArrowLeft className="h-4 w-4" />
                      {t("pages.security.navigation.backToBenefits")}
                    </Link>
                  </Button>

                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      {t("pages.security.navigation.continueExploring")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("pages.security.navigation.learnAboutRoadmap")}
                    </p>
                  </div>

                  <Button className="gap-2" asChild>
                    <Link to="/roadmap">
                      {t("pages.security.navigation.continueToRoadmap")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Security;
