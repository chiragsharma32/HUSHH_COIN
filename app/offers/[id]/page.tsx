"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Check, X, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const offerDetails: Record<string, any> = {
  "1": {
    brand: "Beauty Brand X",
    reward: "50 HUSHH",
    matchReason: "Beauty spend: high",
    description: "Share your beauty spending signals for targeted offers",
    signals: ["Beauty spend: high", "Shopping frequency: high", "Age bucket: 22-27"],
    status: "pending",
  },
  "2": {
    brand: "Fitness App Y",
    reward: "75 HUSHH",
    matchReason: "Fitness activity: active",
    description: "Share your fitness activity signals for personalized programs",
    signals: ["Fitness activity: active", "Workout frequency: high", "Health interest: high"],
    status: "pending",
  },
  "3": {
    brand: "Loyalty Program Z",
    reward: "30 HUSHH",
    matchReason: "Loyalty memberships: 3+",
    description: "Share your loyalty program signals for exclusive rewards",
    signals: ["Loyalty memberships: 3+", "Program engagement: active"],
    status: "pending",
  },
};

export default function OfferDetailPage() {
  const params = useParams();
  const offerId = params.id as string;
  const offer = offerDetails[offerId] || offerDetails["1"];
  const [showPermission, setShowPermission] = useState(false);

  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/offers"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Offers
        </Link>

        <Card className="border mb-6">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <CardTitle className="text-4xl font-semibold text-foreground">{offer.brand}</CardTitle>
              <div className="text-right">
                <div className="text-4xl font-semibold text-primary mb-1">{offer.reward}</div>
                <CardDescription>≈ ${offer.reward.split(" ")[0]} USD</CardDescription>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-6">{offer.description}</p>
            <Card className="border">
              <CardContent className="p-4">
                <CardDescription className="mb-2">Why you matched:</CardDescription>
                <div className="text-lg text-primary font-semibold">{offer.matchReason}</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="border mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Signals They Want
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="border border-blue-200 dark:border-blue-900 mb-4">
              <CardContent className="p-4">
                <CardDescription className="text-sm">
                  <strong>Privacy Note:</strong> Brands will only receive anonymous signal matches. No raw data is accessed.
                </CardDescription>
              </CardContent>
            </Card>
            <div className="space-y-2">
              {offer.signals.map((signal: string, i: number) => (
                <div key={i} className="flex items-center gap-2 p-3 border rounded-lg">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-foreground">{signal}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button
            onClick={() => setShowPermission(true)}
            size="lg"
            className="flex-1"
          >
            <Check className="mr-2 h-5 w-5" />
            Accept Offer
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
          >
            <X className="mr-2 h-5 w-5" />
            Decline
          </Button>
        </div>

        <Dialog open={showPermission} onOpenChange={setShowPermission}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Permission Request
              </DialogTitle>
              <DialogDescription>
                Review what {offer.brand} wants access to
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Card className="border">
                <CardContent className="p-4">
                  <CardDescription className="text-sm mb-2">
                    <strong>What they'll see:</strong> Only anonymous signal matches (yes/no).
                  </CardDescription>
                  <CardDescription className="text-sm">
                    <strong>What they won't see:</strong> Your identity, raw data, purchases, or personal information.
                  </CardDescription>
                </CardContent>
              </Card>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowPermission(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setShowPermission(false);
                    // Handle approval
                  }}
                  className="flex-1"
                >
                  Approve Access
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
