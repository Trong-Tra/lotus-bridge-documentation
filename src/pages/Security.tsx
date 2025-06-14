
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { SecurityHero } from "@/components/security/SecurityHero";
import { SecurityContent } from "@/components/security/SecurityContent";
import { SecurityNavigation } from "@/components/security/SecurityNavigation";

const Security = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />

            <SecurityHero />
            <SecurityContent />
            <Separator />
            <SecurityNavigation />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Security;
