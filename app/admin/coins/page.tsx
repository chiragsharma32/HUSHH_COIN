"use client";

import { Coins, TrendingUp, TrendingDown, DollarSign, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const coinStats = {
  totalSupply: 12400000,
  inCirculation: 9800000,
  inReserve: 2600000,
  reserveRequirement: 3000000,
  mintedToday: 50000,
  burnedToday: 12000,
};

const recentMints = [
  { id: "1", amount: 50000, reason: "Brand deposit", brand: "Beauty Brand Co.", timestamp: "2 hours ago" },
  { id: "2", amount: 25000, reason: "Brand deposit", brand: "Fitness App Inc.", timestamp: "5 hours ago" },
  { id: "3", amount: 100000, reason: "Brand deposit", brand: "E-commerce Platform", timestamp: "1 day ago" },
];

const recentBurns = [
  { id: "1", amount: 5000, reason: "User withdrawal", user: "User #12,345", timestamp: "1 hour ago" },
  { id: "2", amount: 3000, reason: "User withdrawal", user: "User #8,901", timestamp: "3 hours ago" },
  { id: "3", amount: 4000, reason: "User withdrawal", user: "User #23,456", timestamp: "6 hours ago" },
];

export default function AdminCoinsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
              HUSHH Coin Controls
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage coin minting, burning, and reserve requirements
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Supply</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                {coinStats.totalSupply.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">HUSHH Coins</div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>In Circulation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
                {coinStats.inCirculation.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {((coinStats.inCirculation / coinStats.totalSupply) * 100).toFixed(1)}% of supply
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Reserve Balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
                {coinStats.inReserve.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Required: {coinStats.reserveRequirement.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mint/Burn Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader>
              <CardTitle>Mint Coins</CardTitle>
              <CardDescription>Mint new HUSHH coins (only when brand deposits)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="mint-amount">Amount</Label>
                <Input id="mint-amount" type="number" placeholder="Enter amount" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="mint-reason">Reason</Label>
                <Input id="mint-reason" placeholder="Brand deposit, etc." className="mt-1" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <TrendingUp className="mr-2 h-4 w-4" />
                Mint Coins
              </Button>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader>
              <CardTitle>Burn Coins</CardTitle>
              <CardDescription>Burn HUSHH coins (when users redeem)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="burn-amount">Amount</Label>
                <Input id="burn-amount" type="number" placeholder="Enter amount" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="burn-reason">Reason</Label>
                <Input id="burn-reason" placeholder="User withdrawal, etc." className="mt-1" />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <TrendingDown className="mr-2 h-4 w-4" />
                Burn Coins
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader>
              <CardTitle>Recent Mints</CardTitle>
              <CardDescription>Latest coin minting operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMints.map((mint) => (
                  <div
                    key={mint.id}
                    className="flex items-center justify-between p-4 rounded-md border border-stripe-cool-grey-DEFAULT"
                  >
                    <div>
                      <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                        +{mint.amount.toLocaleString()} HUSHH
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {mint.brand} • {mint.timestamp}
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                      Mint
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader>
              <CardTitle>Recent Burns</CardTitle>
              <CardDescription>Latest coin burning operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBurns.map((burn) => (
                  <div
                    key={burn.id}
                    className="flex items-center justify-between p-4 rounded-md border border-stripe-cool-grey-DEFAULT"
                  >
                    <div>
                      <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                        -{burn.amount.toLocaleString()} HUSHH
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {burn.user} • {burn.timestamp}
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                      Burn
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}




