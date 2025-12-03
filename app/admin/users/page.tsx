"use client";

import { Search, Filter, MoreVertical, Eye, Ban, CheckCircle2 } from "lucide-react";
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

const users = [
  {
    id: "1",
    email: "user@example.com",
    vaultStatus: "active",
    earnings: 1250,
    signals: 45,
    lastActive: "2 hours ago",
    verified: true,
  },
  {
    id: "2",
    email: "john.doe@example.com",
    vaultStatus: "active",
    earnings: 890,
    signals: 32,
    lastActive: "5 hours ago",
    verified: true,
  },
  {
    id: "3",
    email: "jane.smith@example.com",
    vaultStatus: "pending",
    earnings: 0,
    signals: 0,
    lastActive: "1 day ago",
    verified: false,
  },
  {
    id: "4",
    email: "test@example.com",
    vaultStatus: "active",
    earnings: 2340,
    signals: 67,
    lastActive: "30 minutes ago",
    verified: true,
  },
  {
    id: "5",
    email: "demo@example.com",
    vaultStatus: "inactive",
    earnings: 450,
    signals: 12,
    lastActive: "3 days ago",
    verified: true,
  },
];

export default function AdminUsersPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
              Users
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Manage all platform users</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Export Data
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
                    placeholder="Search by email..."
                    className="pl-10 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Vault Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Verification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="unverified">Unverified</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>All Users ({users.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stripe-cool-grey-DEFAULT">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Vault Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Earnings
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Signals
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Last Active
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Verified
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                          {user.email}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="secondary"
                          className={
                            user.vaultStatus === "active"
                              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                              : user.vaultStatus === "pending"
                              ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                              : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                          }
                        >
                          {user.vaultStatus}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                          {user.earnings.toLocaleString()} HUSHH
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-600 dark:text-gray-400">{user.signals}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {user.lastActive}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {user.verified ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <Ban className="h-5 w-5 text-gray-400" />
                        )}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing 1-{users.length} of 124,583 users
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


