"use client";

import { Plus, ArrowRight } from "lucide-react";
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
    filters: ["Age: 22-27", "Beauty spend: >₹4000", "Active shopper"],
  },
  {
    id: "2",
    name: "Fitness App Launch",
    status: "active",
    matched: 45600,
    approved: 8900,
    spent: 8900,
    budget: 30000,
    filters: ["Age: 25-35", "Fitness interest: High", "Loyalty: 3+"],
  },
  {
    id: "3",
    name: "Loyalty Program Push",
    status: "completed",
    matched: 23400,
    approved: 15600,
    spent: 15600,
    budget: 20000,
    filters: ["Loyalty programs: 3+", "Shopping frequency: High"],
  },
];

export default function CampaignsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-foreground mb-2">Your Campaigns</h1>
            <p className="text-muted-foreground">Manage and track all your campaigns</p>
          </div>
          <Link href="/brand/campaigns/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Link key={campaign.id} href={`/brand/campaigns/${campaign.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl mb-1">{campaign.name}</CardTitle>
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
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <CardDescription className="text-xs mb-1">Matched Users</CardDescription>
                      <div className="text-xl font-semibold">{campaign.matched.toLocaleString()}</div>
                    </div>
                    <div>
                      <CardDescription className="text-xs mb-1">Approved</CardDescription>
                      <div className="text-xl font-semibold text-primary">{campaign.approved.toLocaleString()}</div>
                    </div>
                    <div>
                      <CardDescription className="text-xs mb-1">Spent</CardDescription>
                      <div className="text-xl font-semibold">{campaign.spent.toLocaleString()} HUSHH</div>
                    </div>
                    <div>
                      <CardDescription className="text-xs mb-1">Budget</CardDescription>
                      <div className="text-xl font-semibold">{campaign.budget.toLocaleString()} HUSHH</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <CardDescription className="text-xs mb-2">Target Filters:</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {campaign.filters.map((filter, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
