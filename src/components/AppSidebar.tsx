
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  ChevronRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";

export function AppSidebar() {
  const location = useLocation();
  const { t } = useLanguage();

  // State for collapsible sections with persistence
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("sidebar-sections-state");
    return saved ? JSON.parse(saved) : {
      documentation: true,
      introduction: false,
      coreConcept: false,
      ecosystem: false,
      technical: false,
      support: false,
    };
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebar-sections-state", JSON.stringify(openSections));
  }, [openSections]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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

  const renderMenuSection = (
    sectionKey: string,
    label: string,
    items: any[],
    parentUrl?: string
  ) => {
    const isOpen = openSections[sectionKey];
    const hasParentUrl = !!parentUrl;
    
    return (
      <SidebarGroup key={sectionKey}>
        <Collapsible open={isOpen} onOpenChange={() => toggleSection(sectionKey)}>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger className="flex w-full items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors group">
              <div className="flex items-center gap-2">
                {hasParentUrl ? (
                  <Link 
                    to={parentUrl} 
                    className="hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
              </div>
              <ChevronRight 
                className={`h-4 w-4 transition-transform duration-200 ${
                  isOpen ? 'rotate-90' : ''
                }`}
              />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
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
          </CollapsibleContent>
        </Collapsible>
      </SidebarGroup>
    );
  };

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-6">
        <Logo />
      </SidebarHeader>

      <SidebarContent className="px-4">
        {renderMenuSection("documentation", t("common.documentation"), menuItems)}
        {renderMenuSection("introduction", t("navigation.introduction"), introductionItems, "/introduction")}
        {renderMenuSection("coreConcept", t("navigation.coreConcept"), coreConceptItems, "/core-concept")}
        {renderMenuSection("ecosystem", t("navigation.ecosystemBenefits"), ecosystemItems, "/ecosystem-benefits")}
        {renderMenuSection("technical", "Technical", technicalItems)}
        {renderMenuSection("support", "Support", supportItems)}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground text-center">
          <p>🌸 {t("common.builtWithVietnamesePride")}</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
