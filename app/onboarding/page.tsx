"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Wallet, Database, Lock, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const steps = [
  {
    id: 1,
    title: "Welcome to Hushh",
    content: (
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <Lock className="w-16 h-16 text-primary" />
        </motion.div>
        <h2 className="text-4xl font-bold mb-4 text-foreground">
          Your Privacy-Preserving Data Vault
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Earn money by sharing anonymous signals while your raw data stays encrypted and private forever.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "What Hushh Does",
    content: (
      <div className="space-y-6">
        <Card className="border">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🔒 Encrypted Vault</h3>
            <p className="text-muted-foreground">Your data is stored securely. Raw data never leaves your control.</p>
          </CardContent>
        </Card>
        <Card className="border">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-foreground">📊 Anonymous Signals</h3>
            <p className="text-muted-foreground">Only signals like "Beauty spend: high" are generated for matching.</p>
          </CardContent>
        </Card>
        <Card className="border">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-foreground">💰 Earn Rewards</h3>
            <p className="text-muted-foreground">Get paid in HUSHH coin when brands match and you approve access.</p>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: 3,
    title: "Create Your Profile",
    content: (
      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="mt-2"
          />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Connect Your Wallet",
    content: (
      <div className="text-center space-y-6">
        <Wallet className="w-24 h-24 mx-auto text-primary" />
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Connect your crypto wallet to receive HUSHH coin rewards
        </p>
        <Button size="lg" className="text-lg">
          Connect Wallet
        </Button>
        <p className="text-sm text-muted-foreground">Or skip for now</p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Connect Data Sources",
    content: (
      <div className="space-y-4 max-w-md mx-auto">
        {["Bank Account", "Credit Cards", "Loyalty Programs", "Fitness Apps", "Social Media"].map((source, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 flex items-center justify-between">
                <span className="font-medium text-foreground">{source}</span>
                <Database className="w-5 h-5 text-primary" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 6,
    title: "Creating Your Vault",
    content: (
      <div className="text-center space-y-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
        >
          <Lock className="w-16 h-16 text-primary" />
        </motion.div>
        <h3 className="text-3xl font-bold text-foreground">Encrypting Your Data...</h3>
        <p className="text-muted-foreground">Your vault is being created securely</p>
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "You're All Set!",
    content: (
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
        >
          <Check className="w-16 h-16 text-primary" />
        </motion.div>
        <h3 className="text-3xl font-bold text-foreground">Welcome to Hushh!</h3>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Your vault is ready. Start exploring and earning!
        </p>
      </div>
    ),
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-2xl w-full relative">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm text-muted-foreground">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
        </div>

        {/* Content */}
        <Card className="border shadow-sm">
          <CardContent className="p-8 md:p-12 min-h-[500px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-center"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                  {steps[currentStep].title}
                </h1>
                {steps[currentStep].content}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Previous
              </Button>
              <Button
                onClick={nextStep}
                className="flex items-center gap-2"
              >
                {currentStep === steps.length - 1 ? "Start Exploring" : "Next"}
                <ArrowRight size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
