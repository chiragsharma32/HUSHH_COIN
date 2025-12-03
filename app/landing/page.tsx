"use client";

import { ArrowRight, Lock, Shield, Coins, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111827]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">
            Your Privacy-Preserving
            <br />
            Data Vault
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Earn money by sharing anonymous signals while your raw data stays encrypted and private forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding">
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

      {/* Features */}
      <section className="py-20 px-4 bg-stripe-off-white dark:bg-[#1d1f21]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Encrypted Vault",
                description: "Your data is stored in an encrypted vault. Raw data never leaves your control.",
              },
              {
                icon: Shield,
                title: "Anonymous Signals",
                description: "Only anonymous signals like 'Beauty spend: high' are generated for matching.",
              },
              {
                icon: Coins,
                title: "Earn Rewards",
                description: "Get paid in HUSHH coin when brands match with you and you approve access.",
              },
            ].map((feature, i) => (
              <Card key={i} className="border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">How Your Data Vault Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Store Your Data", desc: "Connect your spending, loyalty, fitness, and social data to your encrypted vault." },
              { step: "2", title: "Generate Signals", desc: "Anonymous signals are created inside your vault (e.g., 'Fitness spend: medium', 'Age: 22-27')." },
              { step: "3", title: "Private Matching", desc: "Brands search for users using Zero-Knowledge Proofs. They never see your identity or raw data." },
              { step: "4", title: "Approve & Earn", desc: "When matched, you approve access. Brand pays in HUSHH coin. You receive the reward instantly." },
            ].map((item, i) => (
              <Card key={i} className="border">
                <CardContent className="p-6 flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HUSHH Coin */}
      <section className="py-20 px-4 bg-stripe-off-white dark:bg-[#1d1f21]">
        <div className="max-w-4xl mx-auto">
          <Card className="border">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-4">HUSHH Coin</CardTitle>
              <CardDescription className="text-xl">A Stablecoin = $1 Always</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                HUSHH coin is backed by real USD reserves. It's the programmable dollar of our ecosystem, 
                enabling smart contract automation, reward distribution, and seamless redemption to INR, USDT, or USD.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border">
                  <CardHeader>
                    <CardTitle className="text-lg">Why HUSHH Coin?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Smart contract automation</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Internal accounting system</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> ZK compatibility</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Automated reward distribution</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardHeader>
                    <CardTitle className="text-lg">Redeem Anytime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Convert to INR via UPI</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Convert to USDT</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Convert to USD</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Instant withdrawals</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Brands See */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">What Brands See (And Don't See)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="text-xl">Brands CAN See</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Anonymous user ID</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Yes/no signal match result</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Ability to send offer</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Acceptance results</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Aggregated analytics</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-red-200 dark:border-red-900">
              <CardHeader>
                <CardTitle className="text-xl">Brands CANNOT See</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Your identity</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Your purchases</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Bank statements</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> GPS location</li>
                  <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Contacts, emails, phone</li>
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
              <CardTitle className="text-3xl mb-4">Ready to Take Control?</CardTitle>
              <CardDescription className="text-lg">
                Start earning from your data while keeping it completely private.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/onboarding">
                <Button size="lg" className="text-base">
                  Create Your Vault
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
          <p className="text-sm">Privacy-Preserving User Data Vault Platform</p>
        </div>
      </footer>
    </div>
  );
}
