
import { Calendar, Code, FileText, Home, BookOpen, Lightbulb, MessageCircle, GitBranch } from "lucide-react";
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

const navigationItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Introduction",
    url: "#introduction",
    icon: BookOpen,
  },
  {
    title: "How It Works",
    url: "#how-it-works",
    icon: GitBranch,
  },
  {
    title: "User Guides",
    url: "#user-guides",
    icon: FileText,
  },
  {
    title: "Developer Docs",
    url: "#developer-docs",
    icon: Code,
  },
  {
    title: "Whitepaper",
    url: "#whitepaper",
    icon: Lightbulb,
  },
  {
    title: "FAQs",
    url: "#faqs",
    icon: MessageCircle,
  },
  {
    title: "Changelog",
    url: "#changelog",
    icon: Calendar,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 lotus-gradient rounded-lg flex items-center justify-center lotus-bloom">
            <span className="text-white font-bold text-lg">蓮</span>
          </div>
          <div>
            <h2 className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lotus Bridge
            </h2>
            <p className="text-sm text-muted-foreground vietnamese-text">
              Cầu nối đa chuỗi
            </p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-3">
            Documentation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="bridge-transition">
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/20 transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-6">
        <div className="text-center">
          <div className="text-xs text-muted-foreground mb-2">
            Built with 💚 in Vietnam
          </div>
          <div className="flex justify-center gap-2">
            <button className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
              🇻🇳 VI
            </button>
            <button className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full hover:bg-muted transition-colors">
              EN
            </button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
