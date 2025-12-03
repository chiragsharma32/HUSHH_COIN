"use client";

import { Building2, Bell, Shield, LogOut } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BrandSettingsPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Brand Settings</h1>
          <p className="text-muted-foreground">Manage your brand account and preferences</p>
        </div>

        {/* Company Info */}
        <Card className="mb-6 border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" defaultValue="Beauty Brand X" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" defaultValue="Beauty & Cosmetics" className="mt-2" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="mb-6 border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Campaign Updates</div>
                <CardDescription>Get notified about campaign performance</CardDescription>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Budget Alerts</div>
                <CardDescription>Notifications when budget is running low</CardDescription>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card className="mb-6 border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Privacy & Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="border mb-4">
              <CardContent className="p-4">
                <CardDescription className="text-sm">
                  <strong>Data Access:</strong> You only receive anonymous signal matches. No raw user data is ever accessed or shared.
                </CardDescription>
              </CardContent>
            </Card>
            <Button variant="outline" className="w-full">View Privacy Policy</Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border">
          <CardContent className="p-6">
            <Button variant="outline" className="w-full" size="lg">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
