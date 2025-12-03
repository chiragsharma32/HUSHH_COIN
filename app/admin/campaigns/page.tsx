"use client";

import { Target, TrendingUp, Users, DollarSign, CheckCircle2, Clock, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const campaigns = [
  {
    id: "1",
    brandName: "Beauty Brand Co.",
    name: "Beauty Q1 Campaign",
    status: "active",
    matchedUsers: 89300,
    approvedUsers: 12450,
    estimatedPool: 100000,
    costPerMatch: 1.0,
    totalSpent: 12450,
    budget: 50000,
    deliveryRate: 96.5,
  },
  {
    id: "2",
    brandName: "Fitness App Inc.",
    name: "Fitness Launch",
    status: "active",
    matchedUsers: 45600,
    approvedUsers: 8900,
    estimatedPool: 50000,
    costPerMatch: 1.0,
    totalSpent: 8900,
    budget: 30000,
    deliveryRate: 94.2,
  },
  {
    id: "3",
    brandName: "Loyalty Program Ltd.",
    name: "Loyalty Push",
    status: "completed",
    matchedUsers: 23400,
    approvedUsers: 15600,
    estimatedPool: 20000,
    costPerMatch: 1.0,
    totalSpent: 15600,
    budget: 20000,
    deliveryRate: 98.1,
  },
];

const filtersUsed = [
  { filter: "Age: 22-27", usage: 234, percentage: 45.2 },
  { filter: "Beauty spend: High", usage: 189, percentage: 36.5 },
  { filter: "Fitness activity: Active", usage: 156, percentage: 30.1 },
  { filter: "Loyalty memberships: Yes", usage: 143, percentage: 27.6 },
];

export default function AdminCampaignsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Campaign Oversight
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor all brand campaigns and delivery performance
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Active Campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                1,247
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Matched Users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
                2.4M
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Estimated Match Pool</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
                5.2M HUSHH
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Avg Delivery Rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-purple-600 dark:text-purple-400">
                96.2%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Filters */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Most Used Filters</CardTitle>
            <CardDescription>Top targeting filters across all campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filtersUsed.map((item) => (
                <div key={item.filter}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{item.filter}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.usage} campaigns
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

        {/* Campaigns List */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>All Campaigns</CardTitle>
            <CardDescription>Active and completed campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-6 rounded-md border border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                          {campaign.name}
                        </h3>
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
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {campaign.brandName}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                        {campaign.totalSpent.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">HUSHH Spent</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Matched Users
                      </div>
                      <div className="font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                        {campaign.matchedUsers.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Approved Users
                      </div>
                      <div className="font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                        {campaign.approvedUsers.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Budget</div>
                      <div className="font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                        {campaign.budget.toLocaleString()} HUSHH
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Delivery Rate
                      </div>
                      <div className="font-semibold text-green-600 dark:text-green-400">
                        {campaign.deliveryRate}%
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Budget Usage</span>
                      <span className="text-sm font-medium">
                        {((campaign.totalSpent / campaign.budget) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={(campaign.totalSpent / campaign.budget) * 100} className="h-2" />
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


