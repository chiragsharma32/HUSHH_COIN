"use client";

import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const transactions = [
  { id: "1", type: "earned", amount: "50 HUSHH", label: "Beauty Brand X", date: "2 days ago", status: "completed" },
  { id: "2", type: "earned", amount: "75 HUSHH", label: "Fitness App Y", date: "5 days ago", status: "completed" },
  { id: "3", type: "withdrawn", amount: "100 HUSHH", label: "UPI", date: "1 week ago", status: "completed" },
  { id: "4", type: "earned", amount: "30 HUSHH", label: "Loyalty Program Z", date: "2 weeks ago", status: "completed" },
];

export default function WalletPage() {
  const [open, setOpen] = useState(false);
  const balance = 1247;

  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Wallet</h1>
          <p className="text-muted-foreground">Manage your HUSHH coin balance and withdrawals</p>
        </div>

        {/* Balance & actions */}
        <Card className="mb-8 border">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <CardDescription className="mb-2">Total Balance</CardDescription>
                <CardTitle className="text-5xl font-semibold mb-1">{balance.toLocaleString()} HUSHH</CardTitle>
                <CardDescription className="text-lg">≈ ${balance.toLocaleString()} USD</CardDescription>
              </div>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full">
                  Withdraw Funds
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Withdraw Funds</DialogTitle>
                  <DialogDescription>Enter the amount and choose a withdrawal method.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Amount (HUSHH)</Label>
                    <Input id="amount" type="number" placeholder="Enter amount" className="mt-2" />
                  </div>
                  <div>
                    <Label>Withdrawal Method</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="usdt">USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Card className="border">
                    <CardContent className="p-4">
                      <CardDescription className="text-sm">
                        <strong>Note:</strong> HUSHH coin will be burned and $1 per coin will be released from reserves.
                        Conversion to your chosen method will happen automatically.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button className="flex-1" onClick={() => setOpen(false)}>
                      Continue
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <CardDescription>Total Earned</CardDescription>
              </div>
              <div className="text-3xl font-semibold">1,555 HUSHH</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <ArrowDownRight className="h-5 w-5 text-blue-600" />
                <CardDescription>Total Withdrawn</CardDescription>
              </div>
              <div className="text-3xl font-semibold">308 HUSHH</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardDescription>Pending</CardDescription>
              </div>
              <div className="text-3xl font-semibold">0 HUSHH</div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions */}
        <Card className="border">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <Card key={tx.id} className="border">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          tx.type === "earned"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        }`}
                      >
                        {tx.type === "earned" ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                      </div>
                      <div>
                        <div className="font-medium">
                          {tx.type === "earned" ? `Earned from ${tx.label}` : `Withdrawn via ${tx.label}`}
                        </div>
                        <div className="text-sm text-muted-foreground">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-lg font-semibold ${
                          tx.type === "earned" ? "text-green-600" : "text-blue-600"
                        }`}
                      >
                        {tx.type === "earned" ? "+" : "-"}
                        {tx.amount}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {tx.status}
                      </Badge>
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
