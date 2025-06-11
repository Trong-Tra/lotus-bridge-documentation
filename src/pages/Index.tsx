
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />
            <HeroSection />
            <IntroductionSection />
            <HowItWorksSection />
            
            {/* Placeholder sections for future implementation */}
            <section id="user-guides" className="py-20 px-6">
              <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  User Guides
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Step-by-step guides for using Lotus Bridge
                </p>
                <div className="bg-muted/30 rounded-2xl p-12">
                  <p className="text-muted-foreground">
                    Detailed user guides coming soon... 
                    Including wallet connection, token bridging, and troubleshooting.
                  </p>
                </div>
              </div>
            </section>

            <section id="developer-docs" className="py-20 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Developer Documentation
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  APIs, SDKs, and integration guides
                </p>
                <div className="bg-card rounded-2xl p-12 border border-border/50">
                  <p className="text-muted-foreground">
                    Comprehensive developer documentation coming soon...
                    Including API references, SDK documentation, and integration examples.
                  </p>
                </div>
              </div>
            </section>

            <section id="whitepaper" className="py-20 px-6">
              <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Whitepaper
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Technical vision and protocol design
                </p>
                <div className="bg-muted/30 rounded-2xl p-12">
                  <p className="text-muted-foreground">
                    Detailed whitepaper coming soon...
                    Including protocol design, tokenomics, and security analysis.
                  </p>
                </div>
              </div>
            </section>

            <section id="faqs" className="py-20 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  FAQs & Glossary
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Frequently asked questions and terminology
                </p>
                <div className="bg-card rounded-2xl p-12 border border-border/50">
                  <p className="text-muted-foreground">
                    FAQ section coming soon...
                    Including common questions, troubleshooting, and technical glossary.
                  </p>
                </div>
              </div>
            </section>

            <section id="changelog" className="py-20 px-6">
              <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Changelog
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Version history and updates
                </p>
                <div className="bg-muted/30 rounded-2xl p-12">
                  <p className="text-muted-foreground">
                    Version history coming soon...
                    Including release notes, breaking changes, and upgrade guides.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-card border-t border-border/50 py-12 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center">
                  <div className="w-16 h-16 lotus-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 lotus-bloom">
                    <span className="text-2xl text-white font-bold">蓮</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Lotus Bridge
                  </h3>
                  <p className="text-muted-foreground mb-6 vietnamese-text">
                    Bridging blockchain networks with Vietnamese innovation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Built with 💚 in Vietnam • © 2024 Lotus Bridge Team
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
