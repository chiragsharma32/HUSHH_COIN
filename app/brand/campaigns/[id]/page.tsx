"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Users, TrendingUp, Coins, Target, Shield } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const campaignData: Record<string, any> = {
  "1": {
    name: "Beauty Campaign Q1",
    status: "active",
    matched: 89300,
    approved: 12450,
    spent: 12450,
    budget: 50000,
    filters: ["Age: 22-27", "Beauty spend: >₹4000", "Active shopper"],
    conversionRate: 13.9,
    avgCostPerUser: 1.0,
  },
  "2": {
    name: "Fitness App Launch",
    status: "active",
    matched: 45600,
    approved: 8900,
    spent: 8900,
    budget: 30000,
    filters: ["Age: 25-35", "Fitness interest: High", "Loyalty: 3+"],
    conversionRate: 19.5,
    avgCostPerUser: 1.0,
  },
  "3": {
    name: "Loyalty Program Push",
    status: "completed",
    matched: 23400,
    approved: 15600,
    spent: 15600,
    budget: 20000,
    filters: ["Loyalty programs: 3+", "Shopping frequency: High"],
    conversionRate: 66.7,
    avgCostPerUser: 1.0,
  },
};

export default function CampaignDetailPage() {
  const params = useParams();
  const campaignId = params.id as string;
  const campaign = campaignData[campaignId] || campaignData["1"];

  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/brand/campaigns"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Campaigns
        </Link>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-semibold text-foreground">{campaign.name}</h1>
            <Badge
              variant={campaign.status === "active" ? "default" : "secondary"}
              className={
                campaign.status === "active"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : ""
              }
            >
              {campaign.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">Campaign performance and analytics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">Matched Users</CardDescription>
              <div className="text-3xl font-semibold">{campaign.matched.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">Approved</CardDescription>
              <div className="text-3xl font-semibold">{campaign.approved.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">Conversion Rate</CardDescription>
              <div className="text-3xl font-semibold">{campaign.conversionRate}%</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">HUSHH Spent</CardDescription>
              <div className="text-3xl font-semibold">{campaign.spent.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8 border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Target Filters (ZK Matched)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mb-4">
              {campaign.filters.map((filter: string, i: number) => (
                <Badge key={i} variant="outline">
                  {filter}
                </Badge>
              ))}
            </div>
            <Card className="border border-blue-200 dark:border-blue-900">
              <CardContent className="p-4">
                <CardDescription className="text-sm">
                  <strong>Privacy Note:</strong> These filters were matched using Zero-Knowledge Proofs. No raw user data was accessed. Only anonymous signal matches were returned.
                </CardDescription>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Performance Chart */}
        <Card className="mb-8 border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Performance Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {[20, 35, 45, 60, 55, 70, 65, 80, 75, 85, 90, 95].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-muted-foreground">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
              <span>Week 5</span>
              <span>Week 6</span>
              <span>Week 7</span>
              <span>Week 8</span>
              <span>Week 9</span>
              <span>Week 10</span>
              <span>Week 11</span>
              <span>Week 12</span>
            </div>
          </CardContent>
        </Card>

        {/* Budget Progress */}
        <Card className="border">
          <CardHeader>
            <CardTitle>Budget Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Spent</span>
                <span className="font-medium">
                  {campaign.spent.toLocaleString()} / {campaign.budget.toLocaleString()} HUSHH
                </span>
              </div>
              <Progress value={(campaign.spent / campaign.budget) * 100} className="h-4" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Remaining: {(campaign.budget - campaign.spent).toLocaleString()} HUSHH</span>
                <span>{Math.round((campaign.spent / campaign.budget) * 100)}% used</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
