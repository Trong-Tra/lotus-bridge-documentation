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
import {
  Network,
  Shield,
  Globe,
  ArrowRight,
  ArrowLeft,
  Users,
  Vote,
  Coins,
  Server,
  Zap,
  CheckCircle,
  Settings,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Architecture = () => {
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
                    {t("pages.architecture.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.architecture.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.architecture.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* Governance Decision Making Layer Section */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">
                    {t("pages.architecture.governanceDecisionMaking.title")}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-2">
                    {t("pages.architecture.governanceDecisionMaking.subtitle")}
                  </p>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    {t("pages.architecture.governanceDecisionMaking.description")}
                  </p>
                </div>

                {/* Validator Selection */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Vote className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">
                        {t("pages.architecture.consensusMechanism.validatorSelection.title")}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {t("pages.architecture.consensusMechanism.validatorSelection.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Selection Criteria */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          {t("pages.architecture.consensusMechanism.validatorSelection.criteria.title")}
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Coins className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.architecture.consensusMechanism.validatorSelection.criteria.items.stakeRequirement")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Server className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.architecture.consensusMechanism.validatorSelection.criteria.items.technicalCompetency")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Globe className="h-5 w-5 text-accent mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.architecture.consensusMechanism.validatorSelection.criteria.items.vietnameseConnection")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.architecture.consensusMechanism.validatorSelection.criteria.items.uptimeRecord")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {t("pages.architecture.consensusMechanism.validatorSelection.criteria.items.securityAudit")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Selection Process */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <Settings className="h-5 w-5 text-accent" />
                          {t("pages.architecture.consensusMechanism.validatorSelection.process.title")}
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.validatorSelection.process.steps.application")}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.validatorSelection.process.steps.assessment")}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.validatorSelection.process.steps.voting")}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                            <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.validatorSelection.process.steps.activation")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* User Participation */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">
                        {t("pages.architecture.consensusMechanism.userParticipation.title")}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {t("pages.architecture.consensusMechanism.userParticipation.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-6 border rounded-lg">
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Coins className="h-5 w-5 text-primary" />
                          {t("pages.architecture.consensusMechanism.userParticipation.stakingRewards.title")}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {t("pages.architecture.consensusMechanism.userParticipation.stakingRewards.description")}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.stakingRewards.features.minimumStake")}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.stakingRewards.features.rewardSharing")}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.stakingRewards.features.vietnameseValidators")}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.stakingRewards.features.liquidStaking")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 border rounded-lg">
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Vote className="h-5 w-5 text-accent" />
                          {t("pages.architecture.consensusMechanism.userParticipation.governance.title")}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {t("pages.architecture.consensusMechanism.userParticipation.governance.description")}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.governance.features.proposalVoting")}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.governance.features.validatorSelection")}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.governance.features.emergencyActions")}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">
                              {t("pages.architecture.consensusMechanism.userParticipation.governance.features.parameterChanges")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Validator Rewards */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="h-8 w-8 text-green-500" />
                      <CardTitle className="text-2xl">
                        {t("pages.architecture.consensusMechanism.validatorRewards.title")}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {t("pages.architecture.consensusMechanism.validatorRewards.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border">
                        <h4 className="font-semibold text-lg mb-4 text-primary">
                          {t("pages.architecture.consensusMechanism.validatorRewards.baseRewards.title")}
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Coins className="h-5 w-5 text-primary mt-0.5" />
                            <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.baseRewards.items.blockRewards")}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Coins className="h-5 w-5 text-primary mt-0.5" />
                            <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.baseRewards.items.transactionFees")}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Coins className="h-5 w-5 text-primary mt-0.5" />
                            <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.baseRewards.items.uptimeBonus")}</p>
                          </div>
                          <div className="flex items-start gap-3">
                              <Coins className="h-5 w-5 text-primary mt-0.5" />
                              <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.baseRewards.items.stakingRewards")}</p>
                            </div>
                        </div>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border">
                        <h4 className="font-semibold text-lg mb-4 text-accent flex items-center gap-2">
                          🇻🇳 {t("pages.architecture.consensusMechanism.validatorRewards.bonusRewards.title")}
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Globe className="h-5 w-5 text-accent mt-0.5" />
                            <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.bonusRewards.items.localSupport")}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Globe className="h-5 w-5 text-accent mt-0.5" />
                            <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.bonusRewards.items.communityEngagement")}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Globe className="h-5 w-5 text-accent mt-0.5" />
                            <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.bonusRewards.items.tokenIntegration")}</p>
                          </div>
                          <div className="flex items-start gap-3">
                              <Globe className="h-5 w-5 text-accent mt-0.5" />
                        <p className="text-sm">{t("pages.architecture.consensusMechanism.validatorRewards.bonusRewards.items.culturalContribution")}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* System Entities Section */}
            <section className="py-20 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">
                    {t("pages.architecture.systemEntities.title")}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.architecture.systemEntities.description")}
                  </p>
                </div>

                <div className="grid gap-8">
                  {/* Users */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="h-8 w-8 text-blue-500" />
                        <CardTitle className="text-2xl">
                          {t("pages.architecture.systemEntities.users.title")}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {t("pages.architecture.systemEntities.users.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-3">
                            {t("pages.architecture.systemEntities.users.types.retailUsers.name")}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {t("pages.architecture.systemEntities.users.types.retailUsers.description")}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">      
                              <CheckCircle className="h-4 w-4 text-green-500" />      
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.retailUsers.capabilities.bridgeAssets")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">      
                              <CheckCircle className="h-4 w-4 text-green-500" />      
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.retailUsers.capabilities.swapTokens")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">      
                              <CheckCircle className="h-4 w-4 text-green-500" />      
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.retailUsers.capabilities.manageWallets")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">      
                              <CheckCircle className="h-4 w-4 text-green-500" />      
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.retailUsers.capabilities.participateGovernance")}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-3">
                            {t("pages.architecture.systemEntities.users.types.institutionalUsers.name")}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {t("pages.architecture.systemEntities.users.types.institutionalUsers.description")}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.institutionalUsers.capabilities.bulkTransactions")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.institutionalUsers.capabilities.apiIntegration")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.institutionalUsers.capabilities.customizedSolutions")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.users.types.institutionalUsers.capabilities.prioritySupport")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Bridge Operators */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Network className="h-8 w-8 text-purple-500" />
                        <CardTitle className="text-2xl">
                          {t("pages.architecture.systemEntities.bridges.title")}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {t("pages.architecture.systemEntities.bridges.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-600">Responsibilities</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-purple-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.responsibilities.networkConnections")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-purple-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.responsibilities.liquidityManagement")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-purple-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.responsibilities.securityMonitoring")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-purple-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.responsibilities.upgradeCoordination")}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-600">Requirements</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.requirements.technicalExpertise")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.requirements.securityInfrastructure")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.requirements.liquidityProvision")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.bridges.requirements.multiChainExperience")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Liquidity Providers */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="h-8 w-8 text-green-500" />
                        <CardTitle className="text-2xl">
                          {t("pages.architecture.systemEntities.liquidityProviders.title")}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {t("pages.architecture.systemEntities.liquidityProviders.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Roles</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.roles.poolManagement")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.roles.arbitrageActivity")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.roles.riskManagement")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.roles.yieldOptimization")}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Incentives</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Coins className="h-4 w-4 text-yellow-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.incentives.tradingFees")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Coins className="h-4 w-4 text-yellow-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.incentives.yieldFarming")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Coins className="h-4 w-4 text-yellow-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.incentives.governanceTokens")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Coins className="h-4 w-4 text-yellow-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.liquidityProviders.incentives.vietnameseBonus")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Consensus Validators */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-red-500" />
                        <CardTitle className="text-2xl">
                          {t("pages.architecture.systemEntities.consensusValidators.title")}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {t("pages.architecture.systemEntities.consensusValidators.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-red-600">Responsibilities</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-red-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.responsibilities.blockProduction")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-red-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.responsibilities.transactionValidation")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-red-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.responsibilities.networkSecurity")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-red-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.responsibilities.emergencyResponse")}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-red-600">Requirements</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.requirements.stakeRequirement")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.requirements.technicalInfrastructure")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.requirements.communityStanding")}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.consensusValidators.requirements.securityCompliance")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Relayers */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="h-8 w-8 text-orange-500" />
                        <CardTitle className="text-2xl">
                          {t("pages.architecture.systemEntities.relayers.title")}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {t("pages.architecture.systemEntities.relayers.description")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-orange-600">Functions</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-orange-500 mt-0.5" />
                            <p className="text-sm">
                              {t("pages.architecture.systemEntities.relayers.functions.messageRelay")}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-orange-500 mt-0.5" />
                            <p className="text-sm">
                              {t("pages.architecture.systemEntities.relayers.functions.stateSync")}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-orange-500 mt-0.5" />
                            <p className="text-sm">
                              {t("pages.architecture.systemEntities.relayers.functions.eventMonitoring")}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-orange-500 mt-0.5" />
                            <p className="text-sm">
                              {t("pages.architecture.systemEntities.relayers.functions.dataOracle")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-3">
                            {t("pages.architecture.systemEntities.relayers.types.primaryRelayers.name")}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {t("pages.architecture.systemEntities.relayers.types.primaryRelayers.description")}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.primaryRelayers.features.highAvailability")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.primaryRelayers.features.multiChainSupport")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.primaryRelayers.features.securityFocus")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.primaryRelayers.features.vietnameseOperators")}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-3">
                            {t("pages.architecture.systemEntities.relayers.types.communityRelayers.name")}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {t("pages.architecture.systemEntities.relayers.types.communityRelayers.description")}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.communityRelayers.features.decentralizedOperation")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.communityRelayers.features.incentiveRewards")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.communityRelayers.features.redundancyBackup")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <p className="text-sm">
                                {t("pages.architecture.systemEntities.relayers.types.communityRelayers.features.lowBarrierEntry")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Entity Interactions */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">
                    {t("pages.architecture.entityInteractions.title")}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.architecture.entityInteractions.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Transaction Flow */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {t("pages.architecture.entityInteractions.transactionFlow.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          1
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.transactionFlow.steps.userInitiation")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          2
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.transactionFlow.steps.validatorVerification")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          3
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.transactionFlow.steps.bridgeExecution")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          4
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.transactionFlow.steps.relayerProcessing")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          5
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.transactionFlow.steps.lpLiquidity")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          6
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.transactionFlow.steps.finalConfirmation")}
                        </p>
                      </div>
                    </div>
                    </CardContent>
                  </Card>

                  {/* Governance Flow */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {t("pages.architecture.entityInteractions.governanceFlow.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          1
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.governanceFlow.steps.proposalSubmission")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          2
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.governanceFlow.steps.validatorReview")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          3
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.governanceFlow.steps.communityDiscussion")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          4
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.governanceFlow.steps.stakeholderVoting")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          5
                        </div>
                        <p className="text-sm">
                          {t("pages.architecture.entityInteractions.governanceFlow.steps.implementation")}
                        </p>
                      </div>
                    </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/core-overview">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Core Overview
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">Back to Core Concept</Button>
                  </Link>
                  <Link to="/governance">
                    <Button className="flex items-center gap-2">
                      Governance Framework
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

export default Architecture;
