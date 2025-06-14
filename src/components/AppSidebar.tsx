
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  FileText,
  Info,
  BookOpen,
  Layers,
  Building2,
  Shield,
  Coins,
  Map,
  MessageSquare,
  FileEdit,
  Flower,
  Heart,
  Globe,
  Users,
  Code,
  Droplets,
  Star,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

export function AppSidebar() {
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    {
      title: t("navigation.abstract"),
      url: "/abstract",
      icon: FileText,
    },
    {
      title: t("navigation.introduction"),
      url: "/introduction",
      icon: Info,
    },
    {
      title: t("navigation.background"), 
      url: "/background",
      icon: BookOpen,
    },
  ];

  const coreConceptItems = [
    {
      title: t("navigation.coreConcept"),
      url: "/core-concept",
      icon: Layers,
    },
    {
      title: t("navigation.coreOverview"),
      url: "/core-overview", 
      icon: Globe,
    },
    {
      title: t("navigation.architecture"),
      url: "/architecture",
      icon: Building2,
    },
    {
      title: t("navigation.governance"),
      url: "/governance",
      icon: Shield,
    },
  ];

  const ecosystemItems = [
    {
      title: t("navigation.ecosystemBenefits"),
      url: "/ecosystem-benefits",
      icon: Star,
    },
    {
      title: t("navigation.benefitsUsers"),
      url: "/benefits-users",
      icon: Users,
    },
    {
      title: t("navigation.benefitsDevs"),
      url: "/benefits-developers",
      icon: Code,
    },
    {
      title: t("navigation.benefitsLiquidity"),
      url: "/benefits-liquidity",
      icon: Droplets,
    },
    {
      title: t("navigation.benefitsVietnam"),
      url: "/benefits-vietnam",
      icon: Heart,
    },
  ];

  const technicalItems = [
    {
      title: t("navigation.security"),
      url: "/security",
      icon: Shield,
    },
    {
      title: t("navigation.tokenomics"),
      url: "/tokenomics",
      icon: Coins,
    },
    {
      title: t("navigation.roadmap"),
      url: "/roadmap",
      icon: Map,
    },
  ];

  const supportItems = [
    {
      title: t("navigation.faqs"),
      url: "/faqs",
      icon: MessageSquare,
    },
    {
      title: t("navigation.changelog"),
      url: "/changelog",
      icon: FileEdit,
    },
  ];

  const introductionItems = [
    {
      title: t("navigation.whatIsLotus"),
      url: "/what-is-lotus",
      icon: Flower,
    },
    {
      title: t("navigation.whyLotus"),
      url: "/why-lotus",
      icon: Heart,
    },
  ];

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full lotus-gradient flex items-center justify-center">
            <Flower className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Lotus Bridge
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {t("common.documentation")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {t("navigation.introduction")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {introductionItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {t("navigation.coreConcept")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {coreConceptItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {t("navigation.ecosystemBenefits")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {ecosystemItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Technical
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {technicalItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Support
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground text-center">
          <p>🌸 Built with Vietnamese pride</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
