"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Info, Target } from "lucide-react";

const scoreFactors = [
  {
    category: "Data Completeness",
    score: 95,
    impact: "high",
    description: "You have comprehensive data across all categories",
    trend: "up",
  },
  {
    category: "Signal Quality",
    score: 88,
    impact: "high",
    description: "Your signals are well-defined and valuable to brands",
    trend: "up",
  },
  {
    category: "Data Freshness",
    score: 82,
    impact: "medium",
    description: "Most data is recent and up-to-date",
    trend: "up",
  },
  {
    category: "Engagement Rate",
    score: 75,
    impact: "medium",
    description: "You accept offers at a good rate",
    trend: "down",
  },
  {
    category: "Category Diversity",
    score: 90,
    impact: "high",
    description: "You have data across multiple valuable categories",
    trend: "up",
  },
];

const tips = [
  "Connect more data sources to increase your score",
  "Accept more offers to show brands you&apos;re engaged",
  "Keep your data updated for better signal quality",
  "Diversify your data across different categories",
];

export default function ScorePage() {
  const overallScore = 87;

  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Brand Value Score
          </h1>
          <p className="text-muted-foreground">
            Your data&apos;s value to brands based on signal quality
          </p>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 rounded-full border-8 border-border" />
              <div className="absolute inset-0 rounded-full flex items-center justify-center bg-card">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-6xl md:text-7xl font-semibold text-foreground mb-2">
                    {overallScore}
                  </div>
                  <div className="text-xl text-muted-foreground">/ 100</div>
                  <div className="mt-4 flex items-center gap-2 text-green-400">
                    <TrendingUp size={20} />
                    <span className="text-sm">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Score Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Score Breakdown
          </h2>
          <div className="space-y-4">
            {scoreFactors.map((factor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="border rounded-2xl p-6 bg-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {factor.category}
                    </h3>
                    {factor.trend === "up" ? (
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-semibold text-primary">
                      {factor.score}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {factor.impact === "high"
                        ? "High Impact"
                        : "Medium Impact"}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.score}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Impacts Your Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            What Impacts Your Score
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-xl p-4 bg-card">
              <div className="font-semibold text-foreground mb-2">
                Data Completeness
              </div>
              <div className="text-sm text-muted-foreground">
                More complete data across categories increases your value to
                brands
              </div>
            </div>

            <div className="border rounded-xl p-4 bg-card">
              <div className="font-semibold text-foreground mb-2">
                Signal Quality
              </div>
              <div className="text-sm text-muted-foreground">
                Well-defined, accurate signals are more valuable for brand
                matching
              </div>
            </div>

            <div className="border rounded-xl p-4 bg-card">
              <div className="font-semibold text-foreground mb-2">
                Data Freshness
              </div>
              <div className="text-sm text-muted-foreground">
                Recent, up-to-date data is more valuable than stale information
              </div>
            </div>

            <div className="border rounded-xl p-4 bg-card">
              <div className="font-semibold text-foreground mb-2">
                Engagement
              </div>
              <div className="text-sm text-muted-foreground">
                Accepting offers shows brands you&apos;re an engaged user
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-primary" />
            Tips to Improve Your Score
          </h2>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="border rounded-xl p-4 bg-card flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <div className="text-sm text-muted-foreground">{tip}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
