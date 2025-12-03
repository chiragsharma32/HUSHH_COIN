"use client";

import { Activity, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const signalStats = {
  totalAvailable: 2400000,
  matched: 89300,
  pendingRefresh: 1234,
  qualityScore: 94.5,
};

const signalCategories = [
  {
    category: "Spending Signals",
    total: 892345,
    matched: 45678,
    examples: ["Beauty spend: High", "Fitness spend: Medium", "Food spend: Low"],
  },
  {
    category: "Loyalty Signals",
    total: 654321,
    matched: 32100,
    examples: ["Has 3+ loyalty programs", "Frequent shopper", "Premium member"],
  },
  {
    category: "Fitness Signals",
    total: 432109,
    matched: 23456,
    examples: ["Active fitness tracking", "Gym membership", "High step count"],
  },
  {
    category: "Social Signals",
    total: 234567,
    matched: 12345,
    examples: ["Social influencer", "High engagement", "Content creator"],
  },
];

const recentMatches = [
  {
    id: "1",
    signal: "Beauty spend: High",
    matchedUsers: 12450,
    campaign: "Beauty Q1 Campaign",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    signal: "Fitness activity: Active",
    matchedUsers: 8900,
    campaign: "Fitness Launch",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    signal: "Loyalty programs: 3+",
    matchedUsers: 15600,
    campaign: "Loyalty Push",
    timestamp: "1 day ago",
  },
];

export default function BrandSignalsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Signal Insights
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            View available signals for targeting (anonymous, privacy-preserved)
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Signals Available</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                {signalStats.totalAvailable.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Matched in Campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
                {signalStats.matched.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Signal Quality Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
                {signalStats.qualityScore}%
              </div>
              <Progress value={signalStats.qualityScore} className="h-2 mt-2" />
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Pending Refresh</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400">
                {signalStats.pendingRefresh.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Signal Categories */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Signal Categories</CardTitle>
            <CardDescription>Available signal types for campaign targeting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {signalCategories.map((cat) => (
                <div key={cat.category} className="border-b border-stripe-cool-grey-DEFAULT pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-1">
                        {cat.category}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{cat.total.toLocaleString()} total signals</span>
                        <span>•</span>
                        <span>{cat.matched.toLocaleString()} matched in campaigns</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                      {((cat.matched / cat.total) * 100).toFixed(1)}% used
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((example, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-stripe-cool-grey-light dark:bg-gray-800"
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Matches */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Recent Signal Matches</CardTitle>
            <CardDescription>Latest signal matches from your campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center justify-between p-4 rounded-md border border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/20">
                      <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                        {match.signal}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {match.campaign} • {match.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {match.matchedUsers.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">matched users</div>
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


