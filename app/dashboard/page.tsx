"use client";

import { motion } from "framer-motion";
import { TrendingUp, Gift, Lock, Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your data vault and earnings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Brand Value Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-2">87</div>
              <Progress value={87} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Wallet Balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-1">1,247</div>
              <p className="text-sm text-muted-foreground">HUSHH</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pending Offers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-1">3</div>
              <p className="text-sm text-muted-foreground">New offers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Data Categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-1">6</div>
              <p className="text-sm text-muted-foreground">Active</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Brand Value Score - Large */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Brand Value Score</CardTitle>
                <Link href="/score">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-8">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${87 * 3.51} 352`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-semibold">87</div>
                      <div className="text-sm text-muted-foreground">/ 100</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Your data's value to brands based on signal quality and completeness.
                  </p>
                  <Link href="/score">
                    <Button variant="outline">View Breakdown</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/vault">
                <Button variant="outline" className="w-full justify-start">
                  <Lock className="mr-2 h-4 w-4" />
                  Open Vault
                </Button>
              </Link>
              <Link href="/offers">
                <Button variant="outline" className="w-full justify-start">
                  <Gift className="mr-2 h-4 w-4" />
                  View Offers
                </Button>
              </Link>
              <Link href="/wallet">
                <Button variant="outline" className="w-full justify-start">
                  <Wallet className="mr-2 h-4 w-4" />
                  Manage Wallet
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Vault Preview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Vault</CardTitle>
              <Link href="/vault">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Spending", "Loyalty", "Fitness", "Social", "Interests", "Identity"].map((category) => (
                <Link key={category} href={`/vault/${category.toLowerCase()}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium">{category}</div>
                      <Badge variant="secondary" className="mt-2 text-xs">Active</Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suggested Offers */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Suggested Offers</CardTitle>
              <Link href="/offers">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { brand: "Beauty Brand X", reward: "50 HUSHH", match: "Beauty spend: high" },
                { brand: "Fitness App Y", reward: "75 HUSHH", match: "Fitness activity: active" },
                { brand: "Loyalty Program Z", reward: "30 HUSHH", match: "Loyalty memberships: 3+" },
              ].map((offer, i) => (
                <Link key={i} href="/offers">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium mb-1">{offer.brand}</div>
                        <div className="text-sm text-muted-foreground">{offer.match}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{offer.reward}</div>
                        <div className="text-xs text-muted-foreground">View →</div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
