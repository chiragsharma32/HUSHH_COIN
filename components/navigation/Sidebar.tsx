"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Lock, Gift, Wallet, TrendingUp, Settings, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/vault", label: "Vault", icon: Lock },
  { href: "/offers", label: "Offers", icon: Gift },
  { href: "/wallet", label: "Wallet", icon: Wallet },
  { href: "/score", label: "Score", icon: TrendingUp },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Don't show sidebar on landing or onboarding
  if (pathname?.startsWith("/landing") || pathname?.startsWith("/onboarding") || pathname === "/") {
    return null;
  }

  const widthClass = collapsed ? "w-16" : "w-64";

  return (
    <aside className={cn("fixed left-0 top-0 h-screen border-r border-border bg-white dark:bg-[#111827] z-40", widthClass)}>
      <div className="flex flex-col h-full">
        {/* Logo + collapse toggle */}
        <div className="h-16 border-b border-border flex items-center justify-between px-3">
          {!collapsed && (
            <Link href="/dashboard" className="text-xl font-semibold text-foreground truncate">
              Hushh
            </Link>
          )}
          <button
            type="button"
            onClick={() => setCollapsed((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
