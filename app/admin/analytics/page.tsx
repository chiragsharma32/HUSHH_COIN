"use client";

import { TrendingUp, Users, DollarSign, Activity, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const metrics = [
  {
    label: "Daily Active Users",
    value: "45,678",
    change: "+12.5%",
    period: "vs last week",
    icon: Users,
    color: "text-blue-600",
  },
  {
    label: "Monthly Active Users",
    value: "124,583",
    change: "+8.2%",
    period: "vs last month",
    icon: Users,
    color: "text-green-600",
  },
  {
    label: "Platform Revenue",
    value: "$234,567",
    change: "+15.3%",
    period: "vs last month",
    icon: DollarSign,
    color: "text-purple-600",
  },
  {
    label: "Campaign Performance",
    value: "96.2%",
    change: "+2.1%",
    period: "delivery rate",
    icon: Target,
    color: "text-orange-600",
  },
  {
    label: "Vault Connections",
    value: "98.2%",
    change: "+0.5%",
    period: "uptime",
    icon: Activity,
    color: "text-red-600",
  },
  {
    label: "User Growth",
    value: "+12.5%",
    change: "+3.2%",
    period: "monthly growth",
    icon: TrendingUp,
    color: "text-yellow-600",
  },
];

const campaignPerformance = [
  {
    brand: "Beauty Brand Co.",
    campaign: "Beauty Q1",
    impressions: 89300,
    approvals: 12450,
    ctr: 13.9,
    revenue: 12450,
  },
  {
    brand: "Fitness App Inc.",
    campaign: "Fitness Launch",
    impressions: 45600,
    approvals: 8900,
    ctr: 19.5,
    revenue: 8900,
  },
  {
    brand: "Loyalty Program Ltd.",
    campaign: "Loyalty Push",
    impressions: 23400,
    approvals: 15600,
    ctr: 66.7,
    revenue: 15600,
  },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Platform Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive metrics and performance insights
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="border-stripe-cool-grey-DEFAULT shadow-stripe">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-sm font-medium">{metric.label}</CardDescription>
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                      {metric.value}
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">{metric.period}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Campaign Performance */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Top Campaign Performance</CardTitle>
            <CardDescription>Best performing campaigns by approval rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stripe-cool-grey-DEFAULT">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Brand
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Campaign
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Impressions
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Approvals
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      CTR
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {campaignPerformance.map((campaign, index) => (
                    <tr
                      key={index}
                      className="border-b border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                          {campaign.brand}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-600 dark:text-gray-400">{campaign.campaign}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-stripe-charcoal-DEFAULT dark:text-white">
                          {campaign.impressions.toLocaleString()}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-stripe-charcoal-DEFAULT dark:text-white">
                          {campaign.approvals.toLocaleString()}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="secondary"
                          className={
                            campaign.ctr > 50
                              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                              : campaign.ctr > 15
                              ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                              : "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                          }
                        >
                          {campaign.ctr}%
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                          {campaign.revenue.toLocaleString()} HUSHH
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* User Growth Chart Placeholder */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>User Growth Trend</CardTitle>
            <CardDescription>Monthly active users over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-stripe-cool-grey-DEFAULT rounded-md">
              <p className="text-gray-500 dark:text-gray-400">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




