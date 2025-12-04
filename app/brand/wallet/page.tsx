"use client";

import { Coins, ArrowUpRight, ArrowDownRight, TrendingUp, Plus } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const transactions = [
  { id: "1", type: "purchase", amount: "5000 HUSHH", method: "Bank Transfer", date: "2 days ago", status: "completed" },
  { id: "2", type: "purchase", amount: "10000 HUSHH", method: "UPI", date: "1 week ago", status: "completed" },
  { id: "3", type: "spent", amount: "12450 HUSHH", campaign: "Beauty Campaign Q1", date: "3 days ago", status: "completed" },
  { id: "4", type: "purchase", amount: "3000 HUSHH", method: "Stripe", date: "2 weeks ago", status: "completed" },
];

export default function BrandWalletPage() {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const balance = 37550;

  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">Brand Wallet</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your HUSHH coin balance for campaigns</p>
        </div>

        {/* Balance Card */}
        <Card className="mb-8 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <CardDescription className="mb-2">Available Balance</CardDescription>
                <CardTitle className="text-5xl font-semibold mb-2 text-stripe-charcoal-DEFAULT dark:text-white">{balance.toLocaleString()} HUSHH</CardTitle>
                <CardDescription className="text-lg">≈ ${balance.toLocaleString()} USD</CardDescription>
              </div>
              <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Coins className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <Dialog open={showBuyModal} onOpenChange={setShowBuyModal}>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="mr-2 h-5 w-5" />
                  Buy HUSHH Coins
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Buy HUSHH Coins</DialogTitle>
                  <DialogDescription>
                    Enter the amount and select your payment method
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Amount (USD)</Label>
                    <Input type="number" placeholder="Enter amount" className="mt-2" />
                  </div>
                  <div>
                    <Label>Payment Method</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="stripe">Stripe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Card className="border">
                    <CardContent className="p-4">
                      <CardDescription className="text-sm">
                        <strong>Note:</strong> HUSHH coin = $1 always. Smart contract will mint coins equal to your USD payment.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setShowBuyModal(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button onClick={() => setShowBuyModal(false)} className="flex-1">
                      Purchase
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
                <CardDescription>Total Purchased</CardDescription>
              </div>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">18,000 HUSHH</div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <ArrowDownRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <CardDescription>Total Spent</CardDescription>
              </div>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">14,250 HUSHH</div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <CardDescription>Available</CardDescription>
              </div>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">{balance.toLocaleString()} HUSHH</div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <Card key={tx.id} className="border-stripe-cool-grey-DEFAULT">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          tx.type === "purchase"
                            ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        }`}
                      >
                        {tx.type === "purchase" ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                      </div>
                      <div>
                        <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                          {tx.type === "purchase" ? `Purchased via ${tx.method}` : `Spent on ${tx.campaign}`}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-lg font-semibold ${
                          tx.type === "purchase" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        {tx.type === "purchase" ? "+" : "-"}
                        {tx.amount}
                      </div>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs">{tx.status}</Badge>
                    </div>
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
