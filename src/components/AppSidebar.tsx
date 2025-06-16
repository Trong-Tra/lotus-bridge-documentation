import {
  Calendar,
  Code,
  FileText,
  Home,
  BookOpen,
  Lightbulb,
  MessageCircle,
  GitBranch,
  Target,
  Users,
  Layers,
  Zap,
  TrendingUp,
  Globe,
  ChevronDown,
  ChevronRight,
  Shield,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { useLanguage } from "@/hooks/useLanguage";

export function AppSidebar() {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  // Load initial state from localStorage or use default collapsed state
  const loadExpandedState = (): Record<string, boolean> => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lotus-bridge-sidebar-expanded-v1");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // If parsing fails, return default state
        }
      }
    }
    // Default state: all subsections collapsed
    return {
      introduction: false,
      "core-concept": false,
      "ecosystem-benefits": false,
    };
  };

  // State to track which sections are expanded with localStorage persistence
  const [expandedSections, setExpandedSections] =
    useState<Record<string, boolean>>(loadExpandedState);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "lotus-bridge-sidebar-expanded-v1",
        JSON.stringify(expandedSections)
      );
    }
  }, [expandedSections]);

  // Auto-expand sections when user is on a subsection page
  useEffect(() => {
    const currentPath = location.pathname;

    // Check if current path is a subsection and auto-expand its parent
    const subsectionMappings = {
      "/what-is-lotus": "introduction",
      "/why-lotus": "introduction",
      "/core-overview": "core-concept",
      "/architecture": "core-concept",
      "/governance": "core-concept",
      "/benefits-users": "ecosystem-benefits",
      "/benefits-developers": "ecosystem-benefits",
      "/benefits-liquidity": "ecosystem-benefits",
      "/benefits-vietnam": "ecosystem-benefits",
    };

    const parentSection =
      subsectionMappings[currentPath as keyof typeof subsectionMappings];
    if (parentSection && !expandedSections[parentSection]) {
      setExpandedSections((prev) => ({
        ...prev,
        [parentSection]: true,
      }));
    }
  }, [location.pathname, expandedSections]);

  // Toggle function for expanding/collapsing sections
  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const navigationItems = [
    {
      title: t("navigation.home"),
      url: "/",
      icon: Home,
    },
    {
      title: t("navigation.userGuides"),
      url: "/user-guides",
      icon: FileText,
    },
    {
      title: t("navigation.developerDocs"),
      url: "/developer-docs",
      icon: Code,
    },
  ];

  const whitepaperSections = [
    {
      title: t("whitepaper.abstract"),
      url: "/abstract",
      icon: Target,
    },
    {
      title: t("whitepaper.introduction"),
      url: "/introduction",
      icon: Users,
      subsections: [
        {
          title: "What is Lotus?",
          url: "/what-is-lotus",
        },
        {
          title: "Why Lotus?",
          url: "/why-lotus",
        },
      ],
    },
    {
      title: t("navigation.background"),
      url: "/background",
      icon: GitBranch,
    },
    {
      title: t("navigation.coreConcept"),
      url: "/core-concept",
      icon: Layers,
      subsections: [
        {
          title: t("navigation.overview"),
          url: "/core-overview",
        },
        {
          title: t("navigation.architecture"),
          url: "/architecture",
        },
        {
          title: t("navigation.governance"),
          url: "/governance",
        },
      ],
    },
    {
      title: t("navigation.ecosystemBenefits"),
      url: "/ecosystem-benefits",
      icon: Globe,
      subsections: [
        {
          title: t("navigation.forUsers"),
          url: "/benefits-users",
        },
        {
          title: t("navigation.forBuilders"),
          url: "/benefits-developers",
        },
        {
          title: t("navigation.forLiquidityProviders"),
          url: "/benefits-liquidity",
        },
        {
          title: t("navigation.forVietnamIndustry"),
          url: "/benefits-vietnam",
        },
      ],
    },
    {
      title: t("navigation.security"),
      url: "/security",
      icon: Shield,
    },
    {
      title: t("navigation.tokenomics"),
      url: "/tokenomics",
      icon: TrendingUp,
    },
    {
      title: t("navigation.roadmap"),
      url: "/roadmap",
      icon: Calendar,
    },
  ];

  const supportSections = [
    {
      title: t("navigation.faqs"),
      url: "/faqs",
      icon: MessageCircle,
    },
    {
      title: t("navigation.changelog"),
      url: "/changelog",
      icon: Calendar,
    },
  ];

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-1">
        <Link
          to="/"
          className="flex justify-center hover:opacity-90 transition-opacity"
        >
          <img
            src="/lotus-logo.png"
            alt="Lotus Bridge Logo"
            className="w-32 h-32 object-contain"
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-3">
            {t("navigation.documentation")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`bridge-transition ${
                      location.pathname === item.url
                        ? "bg-primary/10 text-primary"
                        : ""
                    }`}
                  >
                    <Link
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/20 transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-3">
            🌸 Whitepaper
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {whitepaperSections.map((item, index) => {
                const hasSubsections =
                  item.subsections && item.subsections.length > 0;
                const sectionKey = item.url.replace("/", "");
                const isExpanded = expandedSections[sectionKey];

                // Check if any subsection is currently active
                const hasActiveSubsection =
                  hasSubsections &&
                  item.subsections?.some(
                    (subsection) => location.pathname === subsection.url
                  );

                // Determine if this section should be highlighted
                const isCurrentSection = location.pathname === item.url;
                const shouldHighlight = isCurrentSection || hasActiveSubsection;

                return (
                  <div key={index}>
                    <SidebarMenuItem>
                      <div className="flex items-center w-full">
                        <SidebarMenuButton
                          asChild
                          className={`bridge-transition flex-1 ${
                            shouldHighlight ? "bg-primary/10 text-primary" : ""
                          }`}
                        >
                          <Link
                            to={item.url}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/20 transition-all duration-300 ${
                              hasActiveSubsection
                                ? "border-l-2 border-primary/30"
                                : ""
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>

                        {/* Collapsible button for sections with subsections */}
                        {hasSubsections && (
                          <button
                            onClick={() => toggleSection(sectionKey)}
                            className={`p-1 hover:bg-accent/20 rounded transition-colors duration-200 mr-2 ${
                              isExpanded ? "bg-accent/10" : ""
                            }`}
                            aria-label={
                              isExpanded ? "Collapse section" : "Expand section"
                            }
                          >
                            {isExpanded ? (
                              <ChevronDown
                                className={`w-4 h-4 ${
                                  hasActiveSubsection
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ) : (
                              <ChevronRight
                                className={`w-4 h-4 ${
                                  hasActiveSubsection
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                              />
                            )}
                          </button>
                        )}
                      </div>
                    </SidebarMenuItem>

                    {/* Subsections with collapsible animation */}
                    {hasSubsections && (
                      <div
                        className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded
                            ? "max-h-96 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-1 pb-1">
                          {item.subsections.map((subsection, subIndex) => (
                            <SidebarMenuItem key={subIndex}>
                              <SidebarMenuButton
                                asChild
                                size="sm"
                                className={`bridge-transition ${
                                  location.pathname === subsection.url
                                    ? "bg-accent/10 text-accent"
                                    : ""
                                }`}
                              >
                                <Link
                                  to={subsection.url}
                                  className="flex items-center gap-2 px-2 py-1 rounded text-sm hover:bg-accent/10 transition-all duration-300"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
                                  <span>{subsection.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-3">
            Support
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportSections.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`bridge-transition ${
                      location.pathname === item.url
                        ? "bg-primary/10 text-primary"
                        : ""
                    }`}
                  >
                    <Link
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/20 transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <div className="text-center space-y-3">
          {/* Built with heart attribution */}
          <div className="text-xs text-muted-foreground">
            {t("sidebar.footer.content")}
          </div>
          <div className="text-xs text-muted-foreground font-medium">
            {t("sidebar.footer.attribution")}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
