"use client";

import { Settings, Users, Shield, Flag, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const adminRoles = [
  { id: "1", email: "admin@hushh.ai", role: "Super Admin", permissions: "Full access" },
  { id: "2", email: "support@hushh.ai", role: "Support", permissions: "User management" },
  { id: "3", email: "analytics@hushh.ai", role: "Analyst", permissions: "Read-only analytics" },
];

const systemFlags = [
  { flag: "Maintenance Mode", enabled: false, description: "Pause all platform operations" },
  { flag: "New User Registration", enabled: true, description: "Allow new users to sign up" },
  { flag: "Brand Registration", enabled: true, description: "Allow new brands to register" },
  { flag: "Withdrawals", enabled: true, description: "Allow user withdrawals" },
  { flag: "Campaign Creation", enabled: true, description: "Allow brands to create campaigns" },
];

export default function AdminSettingsPage() {
  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-stripe-charcoal-DEFAULT dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">System configuration and admin management</p>
        </div>

        {/* Admin Roles */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>Admin Roles & Permissions</CardTitle>
            <CardDescription>Manage admin accounts and their access levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adminRoles.map((admin) => (
                <div
                  key={admin.id}
                  className="flex items-center justify-between p-4 rounded-md border border-stripe-cool-grey-DEFAULT"
                >
                  <div>
                    <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                      {admin.email}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {admin.role} • {admin.permissions}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Add New Admin
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Flags */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>System Flags</CardTitle>
            <CardDescription>Control platform-wide features and operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemFlags.map((flag) => (
                <div
                  key={flag.flag}
                  className="flex items-center justify-between p-4 rounded-md border border-stripe-cool-grey-DEFAULT"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                        {flag.flag}
                      </span>
                      <Badge
                        variant="secondary"
                        className={
                          flag.enabled
                            ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        }
                      >
                        {flag.enabled ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{flag.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    {flag.enabled ? "Disable" : "Enable"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card className="mb-6 border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage API keys for system integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="api-key">Generate New API Key</Label>
              <div className="flex gap-2 mt-2">
                <Input id="api-key" placeholder="Enter key name" />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Key className="mr-2 h-4 w-4" />
                  Generate
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-md border border-stripe-cool-grey-DEFAULT">
                <div>
                  <div className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">
                    Production API Key
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                    sk_live_••••••••••••••••••••••••
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200 dark:border-red-900/20 shadow-stripe">
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
            <CardDescription>Irreversible and destructive actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-md border border-red-200 dark:border-red-900/20 bg-red-50 dark:bg-red-900/10">
              <div className="font-medium text-red-900 dark:text-red-400 mb-2">
                Reset Platform Data
              </div>
              <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                This will delete all user data, campaigns, and transactions. This action cannot be
                undone.
              </p>
              <Button variant="destructive" size="sm">
                Reset Platform
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




