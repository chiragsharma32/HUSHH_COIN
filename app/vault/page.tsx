"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, TrendingUp, Shield, Database, Heart, User } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "spending", name: "Spending", icon: TrendingUp, color: "bg-blue-500", count: 1247 },
  { id: "loyalty", name: "Loyalty", icon: Shield, color: "bg-purple-500", count: 8 },
  { id: "fitness", name: "Fitness", icon: Heart, color: "bg-green-500", count: 342 },
  { id: "social", name: "Social", icon: Database, color: "bg-orange-500", count: 156 },
  { id: "interests", name: "Interests", icon: Heart, color: "bg-pink-500", count: 12 },
  { id: "identity", name: "Identity", icon: User, color: "bg-indigo-500", count: 5 },
];

export default function VaultPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Your Data Vault</h1>
          <p className="text-muted-foreground">All your data is encrypted and stored securely</p>
        </div>

        {/* Vault Status Banner */}
        {isOpen && (
          <Card className="border border-green-200 dark:border-green-900 mb-8">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                <p className="text-sm font-medium text-foreground">Your data is secure</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Vault Door */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="border w-64 h-64 md:w-80 md:h-80 p-0 overflow-hidden shadow-sm">
              <CardContent className="h-full p-0 relative bg-card">
                <AnimatePresence>
                  {!isOpen ? (
                    <motion.div
                      key="closed"
                      initial={{ rotateY: 0 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 rounded-lg border-2 border-border flex items-center justify-center bg-card"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="text-center">
                        <Lock className="w-20 h-20 mx-auto mb-4 text-primary" />
                        <div className="text-2xl font-semibold text-foreground mb-2">Vault Locked</div>
                        <div className="text-muted-foreground">Click to unlock</div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 rounded-lg border-2 border-green-500/50 flex items-center justify-center bg-card"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Shield className="w-20 h-20 mx-auto mb-4 text-green-600" />
                        </motion.div>
                        <div className="text-2xl font-semibold text-foreground mb-2">Vault Open</div>
                        <div className="text-muted-foreground">Your data is secure</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, i) => {
                  const Icon = category.icon;
                  return (
                    <Link key={category.id} href={`/vault/${category.id}`}>
                      <Card className="border hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl font-semibold text-foreground mb-2">{category.name}</CardTitle>
                          <CardDescription className="mb-4">{category.count} items</CardDescription>
                          <Button variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80">
                            View Details →
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-8"
          >
            Unlock the vault to view your data categories
          </motion.div>
        )}
      </div>
    </div>
  );
}
