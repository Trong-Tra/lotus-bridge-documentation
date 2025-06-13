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
      title: "Background",
      url: "/background",
      icon: GitBranch,
    },
    {
      title: "Core Concept",
      url: "/core-concept",
      icon: Layers,
      subsections: [
        {
          title: "Overview",
          url: "/core-overview",
        },
        {
          title: "Architecture",
          url: "/architecture",
        },
        {
          title: "Governance",
          url: "/governance",
        },
      ],
    },
    {
      title: "Ecosystem Benefits",
      url: "/ecosystem-benefits",
      icon: Globe,
      subsections: [
        {
          title: "For Users",
          url: "/benefits-users",
        },
        {
          title: "For Developers",
          url: "/benefits-developers",
        },
        {
          title: "For Liquidity Providers",
          url: "/benefits-liquidity",
        },
        {
          title: "For Vietnam's Industry",
          url: "/benefits-vietnam",
        },
      ],
    },
    {
      title: "Security",
      url: "/security",
      icon: Shield,
    },
    {
      title: "Tokenomics",
      url: "/tokenomics",
      icon: TrendingUp,
    },
    {
      title: "Roadmap",
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
      <SidebarHeader className="p-6">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 lotus-gradient rounded-lg flex items-center justify-center lotus-bloom">
            <span className="text-white font-bold text-lg">蓮</span>
          </div>
          <div>
            <h2 className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("hero.title")}
            </h2>
            <p className="text-sm text-muted-foreground vietnamese-text">
              {language === "vi"
                ? t("hero.subtitle")
                : t("hero.subtitleVietnamese")}
            </p>
          </div>
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
            Built with <span className="text-red-500 text-sm">❤️</span> in
            Vietnam 2025
          </div>
          <div className="text-xs text-muted-foreground font-medium">
            VNUHCM-UIT The Blockchainists
          </div>

          {/* Language switcher */}
          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={() => setLanguage("vi")}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                language === "vi"
                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              🇻🇳 VI
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                language === "en"
                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              🇺🇸 EN
            </button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
