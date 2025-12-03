"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Lock, Gift, Wallet, User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/vault", label: "Vault", icon: Lock },
  { href: "/offers", label: "Offers", icon: Gift },
  { href: "/wallet", label: "Wallet", icon: Wallet },
  { href: "/settings", label: "Profile", icon: User },
];

export default function NavBar() {
  const pathname = usePathname();

  // Don't show nav on landing or onboarding pages
  if (pathname?.startsWith("/landing") || pathname?.startsWith("/onboarding")) {
    return null;
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pt-4">
        <div className="glass-strong rounded-full px-6 py-3 flex gap-2 items-center shadow-neon">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-neon-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="glass-strong border-t border-purple-500/30">
          <div className="flex justify-around items-center py-2 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
                    isActive
                      ? "text-primary"
                      : "text-gray-400"
                  )}
                >
                  <Icon size={22} />
                  <span className="text-xs font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

