"use client";

import { Activity, TrendingUp, RefreshCw, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const signalStats = {
  totalGenerated: 2400000,
  today: 45678,
  zkSuccessRate: 99.8,
  refreshQueue: 1234,
};

const categoryBreakdown = [
  { category: "Spending", count: 892345, percentage: 37.2, color: "bg-blue-500" },
  { category: "Loyalty", count: 654321, percentage: 27.3, color: "bg-green-500" },
  { category: "Fitness", count: 432109, percentage: 18.0, color: "bg-purple-500" },
  { category: "Social", count: 234567, percentage: 9.8, color: "bg-pink-500" },
  { category: "Interests", count: 123456, percentage: 5.1, color: "bg-orange-500" },
  { category: "Demographics", count: 63202, percentage: 2.6, color: "bg-yellow-500" },
];

const refreshQueue = [
  { vaultId: "12345", category: "Spending", priority: "high", queuedAt: "2 minutes ago" },
  { vaultId: "23456", category: "Loyalty", priority: "medium", queuedAt: "5 minutes ago" },
  { vaultId: "34567", category: "Fitness", priority: "high", queuedAt: "8 minutes ago" },
  { vaultId: "45678", category: "Social", priority: "low", queuedAt: "12 minutes ago" },
  { vaultId: "56789", category: "Interests", priority: "medium", queuedAt: "15 minutes ago" },
];

export default function AdminSignalsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Signal Engine Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor signal generation and ZK proof processing
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Signals Generated</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                {signalStats.totalGenerated.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                All time
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Signals Today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
                {signalStats.today.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>ZK Proof Success Rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
                {signalStats.zkSuccessRate}%
              </div>
              <Progress value={signalStats.zkSuccessRate} className="h-2 mt-2" />
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Refresh Queue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400">
                {signalStats.refreshQueue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Pending
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>Signal distribution across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((item) => (
                <div key={item.category}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm font-medium">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.count.toLocaleString()}
                      </span>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Refresh Queue */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Signal Refresh Queue</CardTitle>
            <CardDescription>Vaults pending signal refresh</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {refreshQueue.map((item) => (
                <div
                  key={item.vaultId}
                  className="flex items-center justify-between p-4 rounded-md border border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/20">
                      <RefreshCw className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                        Vault #{item.vaultId}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.category} • {item.queuedAt}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      item.priority === "high"
                        ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                        : item.priority === "medium"
                        ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                        : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    }
                  >
                    {item.priority}
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




