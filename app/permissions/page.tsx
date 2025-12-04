"use client";

import { motion } from "framer-motion";
import { Shield, Check, X, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const permissions = [
  {
    id: "1",
    brand: "Beauty Brand X",
    reward: "50 HUSHH",
    signals: ["Beauty spend: high", "Shopping frequency: high"],
    status: "pending",
  },
  {
    id: "2",
    brand: "Fitness App Y",
    reward: "75 HUSHH",
    signals: ["Fitness activity: active", "Workout frequency: high"],
    status: "pending",
  },
];

export default function PermissionsPage() {
  const [permissionList, setPermissionList] = useState(permissions);

  const handleApprove = (id: string) => {
    setPermissionList(permissionList.map((p) => (p.id === id ? { ...p, status: "approved" } : p)));
  };

  const handleReject = (id: string) => {
    setPermissionList(permissionList.map((p) => (p.id === id ? { ...p, status: "rejected" } : p)));
  };

  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-foreground">
            Permission Requests
          </h1>
          <p className="text-muted-foreground text-lg">Review and approve access to your signals</p>
        </div>

        <div className="space-y-6">
          {permissionList.map((permission, i) => (
            <motion.div
              key={permission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="border">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <CardTitle className="text-2xl font-semibold text-foreground mb-2">{permission.brand}</CardTitle>
                      <div className="text-3xl font-semibold text-primary">{permission.reward}</div>
                    </div>
                    {permission.status === "approved" && (
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        Approved
                      </Badge>
                    )}
                    {permission.status === "rejected" && (
                      <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                        Rejected
                      </Badge>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Signals They Want Access To:
                    </h4>
                    <div className="space-y-2">
                      {permission.signals.map((signal, j) => (
                        <div key={j} className="flex items-center gap-2 p-3 border rounded-lg">
                          <Check className="w-5 h-5 text-green-600" />
                          <span className="text-foreground">{signal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="border border-blue-200 dark:border-blue-900 mb-6">
                    <CardContent className="p-4">
                      <CardDescription className="text-sm">
                        <strong>What they'll see:</strong> Only anonymous signal matches (yes/no).
                      </CardDescription>
                      <CardDescription className="text-sm mt-2">
                        <strong>What they won't see:</strong> Your identity, raw data, purchases, or personal information.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  {permission.status === "pending" && (
                    <div className="flex gap-4">
                      <Button
                        onClick={() => handleApprove(permission.id)}
                        className="flex-1"
                      >
                        <Check className="mr-2 h-5 w-5" />
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleReject(permission.id)}
                        className="flex-1"
                      >
                        <X className="mr-2 h-5 w-5" />
                        Reject
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
