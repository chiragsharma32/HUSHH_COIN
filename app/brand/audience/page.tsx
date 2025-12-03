"use client";

import { Users, TrendingUp, Target, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const audienceInsights = {
  totalReachable: 124583,
  activeVaults: 98234,
  avgSignalsPerUser: 45,
};

const signalDistribution = [
  { category: "Spending", percentage: 37.2, count: 46344, color: "bg-blue-500" },
  { category: "Loyalty", percentage: 27.3, count: 33970, color: "bg-green-500" },
  { category: "Fitness", percentage: 18.0, count: 22425, color: "bg-purple-500" },
  { category: "Social", percentage: 9.8, count: 12209, color: "bg-pink-500" },
  { category: "Interests", percentage: 5.1, count: 6354, color: "bg-orange-500" },
  { category: "Demographics", percentage: 2.6, count: 3239, color: "bg-yellow-500" },
];

const demographicBreakdown = [
  { segment: "Age 18-25", percentage: 28.5, count: 35505 },
  { segment: "Age 26-35", percentage: 35.2, count: 43853 },
  { segment: "Age 36-45", percentage: 22.1, count: 27532 },
  { segment: "Age 46+", percentage: 14.2, count: 17691 },
];

const topSegments = [
  {
    name: "High Beauty Spenders",
    description: "Users with high beauty category spending",
    matchRate: 89.2,
    size: 12450,
  },
  {
    name: "Fitness Enthusiasts",
    description: "Active fitness tracking and gym memberships",
    matchRate: 76.5,
    size: 8900,
  },
  {
    name: "Loyalty Program Members",
    description: "Users with 3+ loyalty program memberships",
    matchRate: 82.3,
    size: 15600,
  },
];

export default function BrandAudiencePage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Audience Insights
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Anonymous signal distribution and audience analytics (no raw user data shown)
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Reachable Users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                {audienceInsights.totalReachable.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Active vaults</div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Active Vaults</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
                {audienceInsights.activeVaults.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {((audienceInsights.activeVaults / audienceInsights.totalReachable) * 100).toFixed(1)}% of total
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Avg Signals per User</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
                {audienceInsights.avgSignalsPerUser}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Signal Distribution */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Signal Category Distribution</CardTitle>
            <CardDescription>Anonymous signal breakdown across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {signalDistribution.map((item) => (
                <div key={item.category}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm font-medium">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.count.toLocaleString()} users
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

        {/* Demographic Breakdown */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Demographic Breakdown</CardTitle>
            <CardDescription>Age segment distribution (anonymous buckets only)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demographicBreakdown.map((segment) => (
                <div key={segment.segment}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{segment.segment}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {segment.count.toLocaleString()} users
                      </span>
                      <span className="text-sm font-medium">{segment.percentage}%</span>
                    </div>
                  </div>
                  <Progress value={segment.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Segments */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Why This Audience Works</CardTitle>
            <CardDescription>Top performing audience segments for targeting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSegments.map((segment, index) => (
                <div
                  key={index}
                  className="p-6 rounded-md border border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-1">
                        {segment.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{segment.description}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    >
                      {segment.matchRate}% match
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Segment Size</div>
                      <div className="text-xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                        {segment.size.toLocaleString()} users
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Match Rate</div>
                      <div className="text-xl font-semibold text-green-600 dark:text-green-400">
                        {segment.matchRate}%
                      </div>
                    </div>
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


