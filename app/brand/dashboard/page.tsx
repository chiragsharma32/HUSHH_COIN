"use client";

import { Plus, TrendingUp, Users, Coins, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const campaigns = [
  {
    id: "1",
    name: "Beauty Campaign Q1",
    status: "active",
    matched: 89300,
    approved: 12450,
    spent: 12450,
    budget: 50000,
  },
  {
    id: "2",
    name: "Fitness App Launch",
    status: "active",
    matched: 45600,
    approved: 8900,
    spent: 8900,
    budget: 30000,
  },
  {
    id: "3",
    name: "Loyalty Program Push",
    status: "completed",
    matched: 23400,
    approved: 15600,
    spent: 15600,
    budget: 20000,
  },
];

export default function BrandDashboardPage() {
  const totalSpent = 36950;
  const totalBudget = 100000;
  const activeCampaigns = 2;
  const totalMatched = 134900;

  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">Brand Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your campaigns and reach your target audience</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Total Campaigns</CardDescription>
                <Badge variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  {activeCampaigns} Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">{campaigns.length}</div>
            </CardContent>
          </Card>

          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Matched</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">{totalMatched.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>HUSHH Spent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">{totalSpent.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Budget Used</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-2 text-stripe-charcoal-DEFAULT dark:text-white">{Math.round((totalSpent / totalBudget) * 100)}%</div>
              <Progress value={(totalSpent / totalBudget) * 100} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/brand/campaigns/new">
                <Card className="hover:shadow-stripe-md transition-shadow cursor-pointer border-stripe-cool-grey-DEFAULT">
                  <CardContent className="p-6">
                    <Plus className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                    <CardTitle className="text-xl mb-2">Create Campaign</CardTitle>
                    <CardDescription>Start a new targeting campaign</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/brand/wallet">
                <Card className="hover:shadow-stripe-md transition-shadow cursor-pointer border-stripe-cool-grey-DEFAULT">
                  <CardContent className="p-6">
                    <Coins className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                    <CardTitle className="text-xl mb-2">Buy HUSHH</CardTitle>
                    <CardDescription>Add funds to your wallet</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/brand/analytics">
                <Card className="hover:shadow-stripe-md transition-shadow cursor-pointer border-stripe-cool-grey-DEFAULT">
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                    <CardTitle className="text-xl mb-2">View Analytics</CardTitle>
                    <CardDescription>See campaign performance</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Active Campaigns */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Campaigns</CardTitle>
              <Link href="/brand/campaigns">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Link key={campaign.id} href={`/brand/campaigns/${campaign.id}`}>
                  <Card className="hover:shadow-stripe-md transition-shadow cursor-pointer border-stripe-cool-grey-DEFAULT">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <CardTitle className="text-xl mb-1">{campaign.name}</CardTitle>
                          <Badge
                            variant="secondary"
                            className={
                              campaign.status === "active"
                                ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                            }
                          >
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{campaign.spent.toLocaleString()}</div>
                          <CardDescription className="text-xs">HUSHH Spent</CardDescription>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                        <div>
                          <CardDescription>Matched</CardDescription>
                          <div className="font-semibold text-stripe-charcoal-DEFAULT dark:text-white">{campaign.matched.toLocaleString()}</div>
                        </div>
                        <div>
                          <CardDescription>Approved</CardDescription>
                          <div className="font-semibold text-stripe-charcoal-DEFAULT dark:text-white">{campaign.approved.toLocaleString()}</div>
                        </div>
                        <div>
                          <CardDescription>Budget</CardDescription>
                          <div className="font-semibold text-stripe-charcoal-DEFAULT dark:text-white">{campaign.budget.toLocaleString()}</div>
                        </div>
                      </div>
                      <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
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
