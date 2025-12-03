"use client";

import { Receipt, Search, Filter, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";
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
    type: "user_reward",
    amount: 1250,
    from: "Campaign #123",
    to: "User #12,345",
    status: "completed",
    timestamp: "2 minutes ago",
  },
  {
    id: "tx_002",
    type: "brand_deposit",
    amount: 50000,
    from: "Beauty Brand Co.",
    to: "Hushh Reserve",
    status: "completed",
    timestamp: "15 minutes ago",
  },
  {
    id: "tx_003",
    type: "withdrawal",
    amount: 5000,
    from: "User #8,901",
    to: "Bank Account",
    status: "pending",
    timestamp: "1 hour ago",
  },
  {
    id: "tx_004",
    type: "campaign_spend",
    amount: 8900,
    from: "Fitness App Inc.",
    to: "Campaign #456",
    status: "completed",
    timestamp: "2 hours ago",
  },
  {
    id: "tx_005",
    type: "user_reward",
    amount: 2340,
    from: "Campaign #789",
    to: "User #23,456",
    status: "completed",
    timestamp: "3 hours ago",
  },
];

export default function AdminTransactionsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
              Transactions Ledger
            </h1>
            <p className="text-gray-600 dark:text-gray-400">All platform transactions and transfers</p>
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
                    placeholder="Search by transaction ID, user, brand..."
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
                  <SelectItem value="user_reward">User Rewards</SelectItem>
                  <SelectItem value="brand_deposit">Brand Deposits</SelectItem>
                  <SelectItem value="withdrawal">Withdrawals</SelectItem>
                  <SelectItem value="campaign_spend">Campaign Spending</SelectItem>
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
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stripe-cool-grey-DEFAULT">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Transaction ID
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      From
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      To
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Timestamp
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-b border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="font-mono text-sm text-stripe-charcoal-DEFAULT dark:text-white">
                          {tx.id}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        >
                          {tx.type.replace("_", " ")}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {tx.type === "withdrawal" || tx.type === "campaign_spend" ? (
                            <ArrowDownRight className="h-4 w-4 text-red-600 dark:text-red-400" />
                          ) : (
                            <ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                          )}
                          <span className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                            {tx.amount.toLocaleString()} HUSHH
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{tx.from}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{tx.to}</div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="secondary"
                          className={
                            tx.status === "completed"
                              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                              : "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                          }
                        >
                          {tx.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{tx.timestamp}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing 1-{transactions.length} of 45,678 transactions
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


