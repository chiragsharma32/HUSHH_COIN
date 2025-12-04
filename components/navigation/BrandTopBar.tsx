"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/brand/dashboard", label: "Dashboard" },
  { href: "/brand/campaigns", label: "Campaigns" },
  { href: "/brand/audience", label: "Audience" },
  { href: "/brand/signals", label: "Signals" },
  { href: "/brand/wallet", label: "Wallet" },
  { href: "/brand/transactions", label: "Transactions" },
  { href: "/brand/analytics", label: "Analytics" },
  { href: "/brand/settings", label: "Settings" },
];

export default function BrandTopBar() {
  const pathname = usePathname();

  // Only show on brand pages (but hide on brand marketing landing page)
  if (!pathname?.startsWith("/brand") || pathname === "/brand") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 h-16 border-b border-stripe-cool-grey-DEFAULT bg-white dark:bg-stripe-charcoal-DEFAULT z-30">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
            Hushh for Brands
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0"
                aria-label="Open brand navigation menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4">
              <SheetHeader>
                <SheetTitle>Brand Navigation</SheetTitle>
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
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-stripe-charcoal-light dark:text-gray-400 hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 hover:text-stripe-charcoal-DEFAULT dark:hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


