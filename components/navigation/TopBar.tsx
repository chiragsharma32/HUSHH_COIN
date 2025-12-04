"use client";

import { Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
      <div className="flex items-center justify-end h-full px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
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
