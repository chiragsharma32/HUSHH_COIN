"use client";

import { Moon, Sun, User, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/vault", label: "Vault" },
  { href: "/offers", label: "Offers" },
  { href: "/wallet", label: "Wallet" },
  { href: "/score", label: "Score" },
  { href: "/settings", label: "Settings" },
];

export default function TopBar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Don't show topbar on landing, onboarding, admin, or brand pages
  if (
    pathname?.startsWith("/landing") ||
    pathname?.startsWith("/onboarding") ||
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/brand") ||
    pathname === "/"
  ) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 h-16 border-b border-border bg-white dark:bg-[#111827] z-30">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left side - app name on mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="text-sm font-semibold">Hushh</span>
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          {/* Navigation menu (top-right) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href || pathname?.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>

          {/* User avatar */}
          <Avatar>
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
