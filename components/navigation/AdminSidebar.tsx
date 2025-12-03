"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Database,
  Activity,
  Building2,
  Target,
  Coins,
  Receipt,
  BarChart3,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/vaults", label: "Vaults", icon: Database },
  { href: "/admin/signals", label: "Signals", icon: Activity },
  { href: "/admin/brands", label: "Brands", icon: Building2 },
  { href: "/admin/campaigns", label: "Campaigns", icon: Target },
  { href: "/admin/coins", label: "Coin System", icon: Coins },
  { href: "/admin/transactions", label: "Transactions", icon: Receipt },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  // Only show on admin pages
  if (!pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-stripe-cool-grey-DEFAULT bg-white dark:bg-stripe-charcoal-DEFAULT z-40">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 border-b border-stripe-cool-grey-DEFAULT flex items-center px-6">
          <Link href="/admin" className="text-lg font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
            Hushh Admin
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
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
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-stripe-charcoal-light dark:text-gray-400 hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 hover:text-stripe-charcoal-DEFAULT dark:hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}


