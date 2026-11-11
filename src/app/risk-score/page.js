"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, ShieldAlert, ShieldX, ArrowRight } from "lucide-react";
import { getRecommendations } from "../lib/recommendations";

const LEVEL_STYLES = {
  "Low Risk": {
    icon: ShieldCheck,
    ring: "border-green-500",
    text: "text-green-400",
    glow: "shadow-[0_0_60px_-15px_rgba(34,197,94,0.5)]",
    summary: "You're following most cyber safety basics. Keep it up.",
  },
  "Medium Risk": {
    icon: ShieldAlert,
    ring: "border-amber-500",
    text: "text-amber-400",
    glow: "shadow-[0_0_60px_-15px_rgba(245,158,11,0.5)]",
    summary: "You have some real gaps that are worth closing soon.",
  },
  "High Risk": {
    icon: ShieldX,
    ring: "border-red-500",
    text: "text-red-400",
    glow: "shadow-[0_0_60px_-15px_rgba(239,68,68,0.5)]",
    summary: "Several answers put you at meaningful risk right now.",
  },
};

const SEVERITY_STYLES = {
  High: "bg-red-950/60 text-red-300 border-red-800",
  Medium: "bg-amber-950/60 text-amber-300 border-amber-800",
};

const LEVELS = Object.keys(LEVEL_STYLES);

// sessionStorage can be edited by the user, so only accept the exact shape the checklist saves.
function parseResult(raw) {
  try {
    const data = JSON.parse(raw);
    if (
      data &&
      Number.isInteger(data.score) &&
      Number.isInteger(data.totalQuestions) &&
      data.totalQuestions > 0 &&
      data.score >= 0 &&
      data.score <= data.totalQuestions &&
      LEVELS.includes(data.level) &&
      Array.isArray(data.triggeredCategories)
    ) {
      return data;
    }
  } catch {}
  return null;
}

export default function RiskScore() {
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const parsed = parseResult(sessionStorage.getItem("riskResult"));
    if (parsed) setResult(parsed);
    else setNotFound(true);
  }, []);

  if (notFound) {
    return (
      <main className="min-h-screen text-white px-6 py-24 flex items-center justify-center">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-3xl font-bold mb-3">No results yet</h1>
          <p className="text-slate-400 mb-8">
            Take the checklist first to see your personal cyber risk score.
          </p>
          <Link
            href="/checklist"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500 transition-colors"
          >
            Take the Checklist
          </Link>
        </div>
      </main>
    );
  }

  if (!result) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center">
        <p className="text-slate-400">Loading your results...</p>
      </main>
    );
  }

  const style = LEVEL_STYLES[result.level];
  const Icon = style.icon;
  const recommendations = getRecommendations(result.triggeredCategories ?? []);

  return (
    <main className="min-h-screen text-white px-6 py-16">
      <div className="mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-6">
            Your Cyber Risk Score
          </p>

          <div
            className={`mx-auto mb-6 flex h-44 w-44 flex-col items-center justify-center rounded-full border-4 bg-slate-900 ${style.ring} ${style.glow}`}
          >
            <Icon className={`h-9 w-9 mb-1 ${style.text}`} />
            <span className="text-4xl font-bold">
              {result.score}
              <span className="text-lg text-slate-500">/{result.totalQuestions}</span>
            </span>
          </div>

          <h1 className={`text-3xl font-bold mb-3 ${style.text}`}>{result.level}</h1>
          <p className="text-slate-400 mb-10">{style.summary}</p>
        </motion.div>

        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left mb-10"
          >
            <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-4 text-center">
              What to Fix First
            </h2>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.category}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-semibold">{rec.label}</h3>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-0.5 text-xs font-semibold ${
                        SEVERITY_STYLES[rec.severity] ?? SEVERITY_STYLES.Medium
                      }`}
                    >
                      {rec.severity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">{rec.whyItMatters}</p>
                  <p className="text-sm text-slate-200 mb-3">{rec.action}</p>
                  <Link
                    href={`/threat-library#${rec.category}`}
                    className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn more<span className="sr-only"> about {rec.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/checklist"
            className="rounded-full border border-slate-700 px-8 py-3 font-semibold hover:border-blue-600 transition-colors"
          >
            Retake the Checklist
          </Link>
          <Link
            href="/"
            className="rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
