"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Shield, Database, Heart, User, Lock } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categoryData: Record<string, { name: string; icon: any; color: string; data: any[] }> = {
  spending: {
    name: "Spending",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    data: [
      { label: "Total Spent", value: "$12,450", period: "Last 30 days" },
      { label: "Beauty & Cosmetics", value: "$2,340", period: "High spender" },
      { label: "Fitness & Health", value: "$890", period: "Medium spender" },
      { label: "Food & Dining", value: "$1,560", period: "Active" },
      { label: "Shopping", value: "$3,200", period: "Frequent" },
    ],
  },
  loyalty: {
    name: "Loyalty",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    data: [
      { label: "Active Memberships", value: "8", period: "Programs" },
      { label: "Beauty Brands", value: "3", period: "Premium tier" },
      { label: "Retail Stores", value: "2", period: "Gold member" },
      { label: "Fitness Centers", value: "1", period: "VIP" },
      { label: "Dining Programs", value: "2", period: "Active" },
    ],
  },
  fitness: {
    name: "Fitness",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
    data: [
      { label: "Workouts This Month", value: "342", period: "Sessions" },
      { label: "Average Steps", value: "8,450", period: "Daily" },
      { label: "Calories Burned", value: "12,340", period: "This week" },
      { label: "Active Minutes", value: "1,245", period: "This month" },
      { label: "Fitness Level", value: "Active", period: "High activity" },
    ],
  },
  social: {
    name: "Social",
    icon: Database,
    color: "from-orange-500 to-red-500",
    data: [
      { label: "Social Influence Score", value: "156", period: "Points" },
      { label: "Followers", value: "2.4K", period: "Across platforms" },
      { label: "Engagement Rate", value: "8.5%", period: "Above average" },
      { label: "Content Posts", value: "45", period: "This month" },
      { label: "Platforms", value: "3", period: "Active" },
    ],
  },
  interests: {
    name: "Interests",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    data: [
      { label: "Primary Interests", value: "12", period: "Categories" },
      { label: "Beauty & Skincare", value: "High", period: "Interest level" },
      { label: "Fitness & Wellness", value: "High", period: "Interest level" },
      { label: "Technology", value: "Medium", period: "Interest level" },
      { label: "Travel", value: "Medium", period: "Interest level" },
    ],
  },
  identity: {
    name: "Identity",
    icon: User,
    color: "from-indigo-500 to-purple-500",
    data: [
      { label: "Age Bucket", value: "22-27", period: "Demographic" },
      { label: "Location", value: "Urban", period: "Area type" },
      { label: "Gender", value: "Private", period: "Encrypted" },
      { label: "Education", value: "Private", period: "Encrypted" },
      { label: "Income Range", value: "Private", period: "Encrypted" },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = categoryData[categoryId] || categoryData.spending;
  const Icon = category.icon;

  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/vault"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Vault
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-foreground">{category.name}</h1>
              <p className="text-muted-foreground">Your encrypted {category.name.toLowerCase()} data</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {category.data.map((item, i) => (
            <Card key={i} className="border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardDescription className="mb-1">{item.label}</CardDescription>
                    <CardTitle className="text-3xl font-semibold text-foreground">{item.value}</CardTitle>
                  </div>
                  <Badge variant="outline">{item.period}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Generated Signals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Based on your {category.name.toLowerCase()} data, the following signals are available for brand matching:
            </CardDescription>
            <div className="mt-4 space-y-2">
              {category.data.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item.label}: {item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
