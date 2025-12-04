"use client";

import { BarChart3, TrendingUp, Users, Coins, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function AnalyticsPage() {
  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights across all your campaigns</p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">Total Matched</CardDescription>
              <div className="text-3xl font-semibold">158,300</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">Total Approved</CardDescription>
              <div className="text-3xl font-semibold">36,950</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">Total Spent</CardDescription>
              <div className="text-3xl font-semibold">36,950 HUSHH</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <CardDescription className="mb-2">Avg Conversion</CardDescription>
              <div className="text-3xl font-semibold">23.3%</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Campaign Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2">
                {[60, 75, 55, 85, 70, 90, 80, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Spend Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: "Beauty Campaign", value: 12450, total: 36950 },
                  { label: "Fitness App", value: 8900, total: 36950 },
                  { label: "Loyalty Program", value: 15600, total: 36950 },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium">{item.value.toLocaleString()} HUSHH</span>
                    </div>
                    <Progress value={(item.value / item.total) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        <Card className="border">
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Best Performing Campaign",
                  content: "Loyalty Program Push achieved 66.7% conversion rate",
                },
                {
                  title: "Top Target Segment",
                  content: "Age 22-27 with high beauty spend shows highest engagement",
                },
                {
                  title: "Cost Efficiency",
                  content: "Average cost per approved user: 1 HUSHH ($1)",
                },
                {
                  title: "Recommendation",
                  content: "Consider expanding fitness campaigns based on strong performance",
                },
              ].map((insight, i) => (
                <Card key={i} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
