"use client";

import { Receipt, Search, Filter, Download, ArrowUpRight, ArrowDownRight, Coins } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const transactions = [
  {
    id: "tx_001",
    type: "mint",
    amount: 50000,
    description: "Brand deposit - Bank Transfer",
    status: "completed",
    timestamp: "2 days ago",
  },
  {
    id: "tx_002",
    type: "spend",
    amount: 12450,
    description: "Campaign spend - Beauty Q1 Campaign",
    status: "completed",
    timestamp: "3 days ago",
  },
  {
    id: "tx_003",
    type: "mint",
    amount: 10000,
    description: "Brand deposit - UPI",
    status: "completed",
    timestamp: "1 week ago",
  },
  {
    id: "tx_004",
    type: "spend",
    amount: 8900,
    description: "Campaign spend - Fitness Launch",
    status: "completed",
    timestamp: "1 week ago",
  },
  {
    id: "tx_005",
    type: "reward",
    amount: 5000,
    description: "Offer reward distribution - Beauty Q1",
    status: "completed",
    timestamp: "2 weeks ago",
  },
];

export default function BrandTransactionsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
              Transactions
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              View all your HUSHH coin transactions and history
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search transactions..."
                    className="pl-10 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="mint">Mints (Deposits)</SelectItem>
                  <SelectItem value="spend">Campaign Spending</SelectItem>
                  <SelectItem value="reward">Reward Distribution</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 rounded-md border border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-md ${
                        tx.type === "mint"
                          ? "bg-green-50 dark:bg-green-900/20"
                          : tx.type === "spend"
                          ? "bg-blue-50 dark:bg-blue-900/20"
                          : "bg-purple-50 dark:bg-purple-900/20"
                      }`}
                    >
                      {tx.type === "mint" ? (
                        <ArrowUpRight
                          className={`h-5 w-5 ${
                            tx.type === "mint"
                              ? "text-green-600 dark:text-green-400"
                              : "text-blue-600 dark:text-blue-400"
                          }`}
                        />
                      ) : tx.type === "spend" ? (
                        <ArrowDownRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <Coins className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                        {tx.description}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{tx.timestamp}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div
                        className={`text-lg font-semibold ${
                          tx.type === "mint"
                            ? "text-green-600 dark:text-green-400"
                            : "text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        {tx.type === "mint" ? "+" : "-"}
                        {tx.amount.toLocaleString()} HUSHH
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    >
                      {tx.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing 1-{transactions.length} of 45 transactions
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


