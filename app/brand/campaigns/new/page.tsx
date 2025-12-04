"use client";

import { useState } from "react";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function NewCampaignPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [campaignData, setCampaignData] = useState({
    name: "",
    ageMin: "",
    ageMax: "",
    beautySpend: "",
    fitnessInterest: false,
    loyaltyLevel: "",
    activeShopper: false,
  });
  const [estimatedUsers, setEstimatedUsers] = useState<number | null>(null);

  const handleFilterChange = () => {
    const mockEstimate = Math.floor(Math.random() * 100000) + 50000;
    setEstimatedUsers(mockEstimate);
  };

  return (
    <div className="mt-16 md:ml-64 md:mt-16 p-4 md:p-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/brand/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
          <CardHeader>
            <div className="mb-4">
              <div className="flex justify-between mb-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Step {step} of 3</span>
                <span>{Math.round((step / 3) * 100)}%</span>
              </div>
              <Progress value={(step / 3) * 100} className="h-2" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <CardTitle className="text-2xl mb-2">Campaign Details</CardTitle>
                  <CardDescription>Enter a name for your campaign</CardDescription>
                </div>
                <div>
                  <Label htmlFor="name">Campaign Name</Label>
                  <Input
                    id="name"
                    value={campaignData.name}
                    onChange={(e) => setCampaignData({ ...campaignData, name: e.target.value })}
                    placeholder="e.g., Beauty Campaign Q1"
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!campaignData.name}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Continue
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Set Target Filters
                  </CardTitle>
                  <CardDescription>
                    Define your target audience. We'll match using Zero-Knowledge Proofs - no raw data access.
                  </CardDescription>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Age Range</Label>
                    <div className="flex gap-4 mt-2">
                      <Input
                        type="number"
                        value={campaignData.ageMin}
                        onChange={(e) => {
                          setCampaignData({ ...campaignData, ageMin: e.target.value });
                          handleFilterChange();
                        }}
                        placeholder="Min"
                      />
                      <Input
                        type="number"
                        value={campaignData.ageMax}
                        onChange={(e) => {
                          setCampaignData({ ...campaignData, ageMax: e.target.value });
                          handleFilterChange();
                        }}
                        placeholder="Max"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Beauty Spend (₹)</Label>
                    <Input
                      type="number"
                      value={campaignData.beautySpend}
                      onChange={(e) => {
                        setCampaignData({ ...campaignData, beautySpend: e.target.value });
                        handleFilterChange();
                      }}
                      placeholder="e.g., 4000"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Loyalty Level</Label>
                    <Select
                      value={campaignData.loyaltyLevel}
                      onValueChange={(value) => {
                        setCampaignData({ ...campaignData, loyaltyLevel: value });
                        handleFilterChange();
                      }}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1+">1+ programs</SelectItem>
                        <SelectItem value="3+">3+ programs</SelectItem>
                        <SelectItem value="5+">5+ programs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {estimatedUsers && (
                  <Card className="border border-green-200 dark:border-green-900/20 bg-green-50 dark:bg-green-900/10">
                    <CardContent className="p-4">
                      <div className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-1">
                        {estimatedUsers.toLocaleString()} users
                      </div>
                      <CardDescription>Estimated matches based on current signal distribution</CardDescription>
                    </CardContent>
                  </Card>
                )}

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!estimatedUsers}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Continue
                  </Button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <CardTitle className="text-2xl mb-2">Campaign Cost</CardTitle>
                  <CardDescription>Review your campaign details and cost</CardDescription>
                </div>

                {estimatedUsers && (
                  <Card className="border-stripe-cool-grey-DEFAULT shadow-stripe">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {estimatedUsers.toLocaleString()} HUSHH
                        </div>
                        <CardDescription>≈ ${estimatedUsers.toLocaleString()} USD</CardDescription>
                        <CardDescription className="text-sm mt-2">Cost: 1 HUSHH per matched user</CardDescription>
                      </div>
                      <div className="space-y-2 text-sm border-t border-stripe-cool-grey-DEFAULT pt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Estimated matched users:</span>
                          <span className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">{estimatedUsers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Cost per user:</span>
                          <span className="font-medium text-stripe-charcoal-DEFAULT dark:text-white">1 HUSHH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Total campaign cost:</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{estimatedUsers.toLocaleString()} HUSHH</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="border border-blue-200 dark:border-blue-900/20 bg-blue-50 dark:bg-blue-900/10">
                  <CardContent className="p-4">
                    <CardDescription className="text-sm">
                      <strong>Privacy Guarantee:</strong> We use Zero-Knowledge Proofs to match your filters. No raw user data is accessed. Only anonymous signal matches are returned.
                    </CardDescription>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => router.push("/brand/dashboard")}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Create Campaign
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
