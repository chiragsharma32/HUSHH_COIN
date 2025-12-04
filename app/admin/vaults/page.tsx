"use client";

import { Database, AlertTriangle, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const vaultStats = {
  total: 98234,
  active: 89456,
  pending: 5678,
  errors: 3100,
  dataSources: {
    spending: 78234,
    loyalty: 65432,
    fitness: 43210,
    social: 32100,
    interests: 54321,
    identity: 45678,
  },
};

const qualityDistribution = [
  { label: "Excellent", count: 45678, percentage: 46.5, color: "bg-green-500" },
  { label: "Good", count: 32100, percentage: 32.7, color: "bg-blue-500" },
  { label: "Fair", count: 12345, percentage: 12.6, color: "bg-yellow-500" },
  { label: "Poor", count: 8111, percentage: 8.2, color: "bg-red-500" },
];

const recentErrors = [
  {
    id: "1",
    vaultId: "45678",
    error: "Data source connection timeout",
    timestamp: "2 minutes ago",
    severity: "high",
  },
  {
    id: "2",
    vaultId: "12345",
    error: "Signal generation failed",
    timestamp: "15 minutes ago",
    severity: "medium",
  },
  {
    id: "3",
    vaultId: "78901",
    error: "ZK proof verification failed",
    timestamp: "1 hour ago",
    severity: "high",
  },
];

export default function AdminVaultsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Vault Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor vault health and data connections</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Vaults</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                {vaultStats.total.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Active Vaults</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
                {vaultStats.active.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {((vaultStats.active / vaultStats.total) * 100).toFixed(1)}% of total
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Pending Setup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400">
                {vaultStats.pending.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Errors/Warnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-red-600 dark:text-red-400">
                {vaultStats.errors.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Source Connections */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Data Source Connection Stats</CardTitle>
            <CardDescription>Number of vaults connected to each data source</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(vaultStats.dataSources).map(([source, count]) => (
                <div key={source}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium capitalize">{source}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {count.toLocaleString()} vaults
                    </span>
                  </div>
                  <Progress
                    value={(count / vaultStats.total) * 100}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Signal Quality Distribution */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Signal Quality Distribution</CardTitle>
            <CardDescription>Quality metrics across all vaults</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {qualityDistribution.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm font-medium">{item.label}</span>
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

        {/* Recent Errors */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Recent Errors & Warnings</CardTitle>
            <CardDescription>Latest vault issues requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentErrors.map((error) => (
                <div
                  key={error.id}
                  className="flex items-start gap-4 p-4 rounded-md border border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                >
                  <div
                    className={`mt-1 p-2 rounded-full ${
                      error.severity === "high"
                        ? "bg-red-100 dark:bg-red-900/20"
                        : "bg-yellow-100 dark:bg-yellow-900/20"
                    }`}
                  >
                    <AlertTriangle
                      className={`h-4 w-4 ${
                        error.severity === "high"
                          ? "text-red-600 dark:text-red-400"
                          : "text-yellow-600 dark:text-yellow-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                        Vault #{error.vaultId}
                      </span>
                      <Badge
                        variant="secondary"
                        className={
                          error.severity === "high"
                            ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                            : "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                        }
                      >
                        {error.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{error.error}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {error.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




