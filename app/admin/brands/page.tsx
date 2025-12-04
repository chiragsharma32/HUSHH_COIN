"use client";

import { Building2, CheckCircle2, XCircle, Clock, DollarSign, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const brands = [
  {
    id: "1",
    name: "Beauty Brand Co.",
    email: "contact@beautybrand.com",
    status: "approved",
    kycStatus: "verified",
    balance: 50000,
    campaigns: 12,
    totalSpent: 125000,
  },
  {
    id: "2",
    name: "Fitness App Inc.",
    email: "hello@fitnessapp.com",
    status: "pending",
    kycStatus: "pending",
    balance: 0,
    campaigns: 0,
    totalSpent: 0,
  },
  {
    id: "3",
    name: "Loyalty Program Ltd.",
    email: "info@loyalty.com",
    status: "approved",
    kycStatus: "verified",
    balance: 25000,
    campaigns: 8,
    totalSpent: 75000,
  },
  {
    id: "4",
    name: "E-commerce Platform",
    email: "admin@ecommerce.com",
    status: "rejected",
    kycStatus: "failed",
    balance: 0,
    campaigns: 0,
    totalSpent: 0,
  },
];

export default function AdminBrandsPage() {
  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
              Brand Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Approve, verify, and manage brand accounts
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Brands</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white">
                342
              </div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Approved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-green-600 dark:text-green-400">298</div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Pending Review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400">32</div>
            </CardContent>
          </Card>
          <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
            <CardHeader className="pb-3">
              <CardDescription>Total Balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
                2.4M HUSHH
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search brands..."
                className="pl-10 bg-white dark:bg-gray-800"
              />
            </div>
          </CardContent>
        </Card>

        {/* Brands Table */}
        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>All Brands</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stripe-cool-grey-DEFAULT">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Brand Name
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      KYC Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Balance
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Campaigns
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Total Spent
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand) => (
                    <tr
                      key={brand.id}
                      className="border-b border-stripe-cool-grey-DEFAULT hover:bg-stripe-cool-grey-light dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                            {brand.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {brand.email}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="secondary"
                          className={
                            brand.status === "approved"
                              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                              : brand.status === "pending"
                              ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                              : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                          }
                        >
                          {brand.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        {brand.kycStatus === "verified" ? (
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm">Verified</span>
                          </div>
                        ) : brand.kycStatus === "pending" ? (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                            <span className="text-sm">Pending</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                            <span className="text-sm">Failed</span>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                          {brand.balance.toLocaleString()} HUSHH
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-600 dark:text-gray-400">{brand.campaigns}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                          {brand.totalSpent.toLocaleString()} HUSHH
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {brand.status === "pending" && (
                            <>
                              <Button size="sm" variant="outline" className="text-green-600">
                                Approve
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                Reject
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="ghost">
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

