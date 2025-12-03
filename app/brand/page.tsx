"use client";

import { ArrowRight, Target, Shield, Coins, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BrandLandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111827]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">
            Hushh for Brands
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reach your target audience privately. Target users based on anonymous signals. No raw data. Complete privacy. Maximum ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/brand/dashboard">
              <Button size="lg" className="text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-stripe-off-white dark:bg-[#1d1f21]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: Target,
                title: "Create Campaign",
                description: "Set your target filters: age, spend, interests, loyalty level",
              },
              {
                step: "2",
                icon: Shield,
                title: "ZK Matching",
                description: "We match your filters with user signals using Zero-Knowledge Proofs",
              },
              {
                step: "3",
                icon: Coins,
                title: "Buy HUSHH",
                description: "Purchase HUSHH coins to fund your campaign rewards",
              },
              {
                step: "4",
                icon: Target,
                title: "Reach Users",
                description: "Users approve access and receive your offers. You get results.",
              },
            ].map((item, i) => (
              <Card key={i} className="border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Step {item.step}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="text-xl">You CAN See</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Estimated matched users count</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Yes/no signal match results</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Offer acceptance rates</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Aggregated analytics</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Campaign performance metrics</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-red-200 dark:border-red-900">
              <CardHeader>
                <CardTitle className="text-xl">You CANNOT See</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> User identities</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Raw purchase data</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Bank statements</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> GPS locations</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Personal contacts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-stripe-off-white dark:bg-[#1d1f21]">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Ready to Reach Your Audience?</CardTitle>
              <CardDescription className="text-lg">
                Start your first campaign and see the power of privacy-preserving targeting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/brand/dashboard">
                <Button size="lg" className="text-base">
                  Create Your First Campaign
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 Hushh. All rights reserved.</p>
          <p className="text-sm">Privacy-Preserving Data Marketplace for Brands</p>
        </div>
      </footer>
    </div>
  );
}
