"use client";

import { motion } from "framer-motion";
import { Gift, Sparkles, Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const offers = [
  {
    id: "1",
    brand: "Beauty Brand X",
    reward: "50 HUSHH",
    matchReason: "Beauty spend: high",
    description: "Share your beauty spending signals for targeted offers",
    status: "pending",
  },
  {
    id: "2",
    brand: "Fitness App Y",
    reward: "75 HUSHH",
    matchReason: "Fitness activity: active",
    description: "Share your fitness activity signals for personalized programs",
    status: "pending",
  },
  {
    id: "3",
    brand: "Loyalty Program Z",
    reward: "30 HUSHH",
    matchReason: "Loyalty memberships: 3+",
    description: "Share your loyalty program signals for exclusive rewards",
    status: "pending",
  },
  {
    id: "4",
    brand: "Fashion Retailer A",
    reward: "60 HUSHH",
    matchReason: "Shopping frequency: high",
    description: "Share your shopping signals for style recommendations",
    status: "accepted",
  },
  {
    id: "5",
    brand: "Wellness Brand B",
    reward: "40 HUSHH",
    matchReason: "Wellness interest: high",
    description: "Share your wellness signals for product recommendations",
    status: "rejected",
  },
];

export default function OffersPage() {
  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Offers</h1>
          <p className="text-muted-foreground">Brands want to match with you based on your signals</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Pending</span>
              </div>
              <div className="text-3xl font-semibold text-foreground">3</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-muted-foreground">Accepted</span>
              </div>
              <div className="text-3xl font-semibold text-foreground">1</div>
            </CardContent>
          </Card>
          <Card className="border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span className="text-muted-foreground">Total Earned</span>
              </div>
              <div className="text-3xl font-semibold text-foreground">60 HUSHH</div>
            </CardContent>
          </Card>
        </div>

        {/* Offers List */}
        <div className="space-y-4">
          {offers.map((offer, i) => (
            <Link key={offer.id} href={`/offers/${offer.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="border hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{offer.brand}</CardTitle>
                          {offer.status === "pending" && (
                            <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">
                              Pending
                            </Badge>
                          )}
                          {offer.status === "accepted" && (
                            <Badge variant="outline" className="border-green-400/50 text-green-400">
                              Accepted
                            </Badge>
                          )}
                          {offer.status === "rejected" && (
                            <Badge variant="outline" className="border-red-400/50 text-red-400">
                              Rejected
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="mb-2">{offer.description}</CardDescription>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Why you matched:</span>
                          <Badge variant="secondary">{offer.matchReason}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">{offer.reward}</div>
                          <div className="text-xs text-muted-foreground">≈ ${offer.reward.split(" ")[0]} USD</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
