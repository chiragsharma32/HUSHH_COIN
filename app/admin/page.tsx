"use client";

import { Users, Database, Activity, Building2, Target, Coins, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    label: "Total Users",
    value: "124,583",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    label: "Active Vaults",
    value: "98,234",
    change: "+8.2%",
    icon: Database,
    color: "text-green-600",
  },
  {
    label: "Signals Generated",
    value: "2.4M",
    change: "+15.3%",
    icon: Activity,
    color: "text-purple-600",
  },
  {
    label: "Brand Accounts",
    value: "342",
    change: "+5.1%",
    icon: Building2,
    color: "text-orange-600",
  },
  {
    label: "Active Campaigns",
    value: "1,247",
    change: "+22.4%",
    icon: Target,
    color: "text-red-600",
  },
  {
    label: "HUSHH Supply",
    value: "12.4M",
    change: "+3.2%",
    icon: Coins,
    color: "text-yellow-600",
  },
];

const recentActivity = [
  {
    type: "campaign",
    message: "New campaign 'Beauty Q1' launched by Brand #234",
    time: "2 minutes ago",
    status: "success",
  },
  {
    type: "user",
    message: "User #12,345 completed vault setup",
    time: "5 minutes ago",
    status: "success",
  },
  {
    type: "withdrawal",
    message: "Withdrawal request for 5,000 HUSHH from User #8,901",
    time: "12 minutes ago",
    status: "pending",
  },
  {
    type: "brand",
    message: "Brand #156 deposited 50,000 HUSHH",
    time: "18 minutes ago",
    status: "success",
  },
  {
    type: "error",
    message: "Signal generation failed for Vault #45,678",
    time: "25 minutes ago",
    status: "error",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Overview of the Hushh ecosystem</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="border-stripe-cool-grey-DEFAULT shadow-stripe">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-sm font-medium">{stat.label}</CardDescription>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                      {stat.value}
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* System Health */}
          <Card className="lg:col-span-2 border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>Platform status and performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Vault Data Connections</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">98.2%</span>
                </div>
                <Progress value={98.2} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Signal Quality Score</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">94.5%</span>
                </div>
                <Progress value={94.5} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">ZK Proof Success Rate</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">99.8%</span>
                </div>
                <Progress value={99.8} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Campaign Delivery Rate</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">96.7%</span>
                </div>
                <Progress value={96.7} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-md hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                Approve Pending Brands
              </button>
              <button className="w-full text-left px-4 py-3 rounded-md hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                Review Withdrawals
              </button>
              <button className="w-full text-left px-4 py-3 rounded-md hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                Mint HUSHH Coins
              </button>
              <button className="w-full text-left px-4 py-3 rounded-md hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                View Error Logs
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-md border border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                >
                  <div
                    className={`mt-1 p-2 rounded-full ${
                      activity.status === "error"
                        ? "bg-red-100 dark:bg-red-900/20"
                        : activity.status === "pending"
                        ? "bg-yellow-100 dark:bg-yellow-900/20"
                        : "bg-green-100 dark:bg-green-900/20"
                    }`}
                  >
                    {activity.status === "error" ? (
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    ) : (
                      <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      activity.status === "error"
                        ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                        : activity.status === "pending"
                        ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                        : "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


