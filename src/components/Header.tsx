
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Moon, Sun } from "lucide-react";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 lotus-gradient rounded-lg flex items-center justify-center lotus-bloom">
            <span className="text-white font-bold">蓮</span>
          </div>
          <div>
            <h1 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lotus Bridge Documentation
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="pl-10 pr-4 py-2 w-64 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="w-10 h-10 p-0"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
