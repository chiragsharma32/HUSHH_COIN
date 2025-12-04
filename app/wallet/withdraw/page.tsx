"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, Wallet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export default function WithdrawPage() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/wallet"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Wallet
        </Link>

        <Card className="border">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Step {step} of 3</span>
                <span className="text-sm text-muted-foreground">{Math.round((step / 3) * 100)}%</span>
              </div>
              <Progress value={(step / 3) * 100} className="h-2" />
            </div>

            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <CardTitle className="text-3xl font-semibold text-foreground mb-6">Enter Amount</CardTitle>
                <div className="mb-6">
                  <Label htmlFor="amount">Amount (HUSHH)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-2 text-2xl"
                    placeholder="0"
                  />
                  <CardDescription className="mt-2">
                    Available: 1,247 HUSHH (≈ $1,247 USD)
                  </CardDescription>
                </div>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!amount || parseFloat(amount) <= 0}
                  size="lg"
                  className="w-full"
                >
                  Continue
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <CardTitle className="text-3xl font-semibold text-foreground mb-6">Choose Method</CardTitle>
                <div className="space-y-4 mb-6">
                  {["Bank Transfer", "UPI", "USDT"].map((m) => (
                    <Card
                      key={m}
                      className={`border cursor-pointer hover:border-primary transition-colors ${
                        method === m ? "border-primary" : ""
                      }`}
                      onClick={() => setMethod(m)}
                    >
                      <CardContent className="p-4">
                        <div className="font-semibold text-foreground">{m}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!method}
                    className="flex-1"
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Check className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-3xl font-semibold text-foreground mb-4">Withdrawal Initiated</CardTitle>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-semibold text-foreground">{amount} HUSHH</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Method:</span>
                      <span className="font-semibold text-foreground">{method}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>USD Equivalent:</span>
                      <span className="font-semibold text-foreground">≈ ${amount} USD</span>
                    </div>
                  </div>
                </div>
                <Card className="border border-blue-200 dark:border-blue-900 mb-6">
                  <CardContent className="p-4">
                    <CardDescription className="text-sm">
                      <strong>Process:</strong> HUSHH coin will be burned, $1 per coin released from reserves. Conversion to your chosen method will happen automatically.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Link href="/wallet" className="block">
                  <Button size="lg" className="w-full">
                    Done
                  </Button>
                </Link>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
