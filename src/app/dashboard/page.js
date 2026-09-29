"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, ShieldCheck, ShieldAlert, ShieldX, Info } from "lucide-react";
import { SUMMARY_STATS, CATEGORY_TRENDS, RISK_LEVEL_BREAKDOWN } from "../lib/dashboardStats";

const LEVEL_META = {
  "Low Risk": { icon: ShieldCheck, bar: "bg-green-500", text: "text-green-400" },
  "Medium Risk": { icon: ShieldAlert, bar: "bg-amber-500", text: "text-amber-400" },
  "High Risk": { icon: ShieldX, bar: "bg-red-500", text: "text-red-400" },
};

function StatTile({ label, value, suffix }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
      <p className="text-3xl font-semibold">
        {value}
        {suffix && <span className="text-base text-slate-500">{suffix}</span>}
      </p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="mb-4 flex justify-center">
            <BarChart3 className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Community Dashboard</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Anonymous trends in the most common cyber risks people report through the checklist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-10 flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-400"
        >
          <Info className="h-4 w-4 mt-0.5 shrink-0 text-blue-400" />
          <p>
            Sample data for now — this will reflect real, anonymized results once checklist
            submissions are connected to a backend.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          <StatTile label="Checklists Completed" value={SUMMARY_STATS.checklistsCompleted} />
          <StatTile
            label="Average Risk Score"
            value={SUMMARY_STATS.averageScore}
            suffix={`/${SUMMARY_STATS.totalQuestions}`}
          />
          <StatTile label="Most Common Gap" value={SUMMARY_STATS.mostCommonGap} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 mb-8"
        >
          <h2 className="font-semibold mb-1">Most Common Risk Areas</h2>
          <p className="text-sm text-slate-500 mb-6">
            Share of respondents who answered at-risk on each category
          </p>

          <div className="space-y-4">
            {CATEGORY_TRENDS.map((item) => (
              <div key={item.category} title={`${item.label}: ${item.percent}%`}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-sm text-slate-200">{item.label}</span>
                  <span className="text-sm text-slate-400">{item.percent}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-r-full hover:brightness-110 transition-[filter]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 mb-12"
        >
          <h2 className="font-semibold mb-1">Risk Level Breakdown</h2>
          <p className="text-sm text-slate-500 mb-6">
            Where respondents landed after completing the checklist
          </p>

          <div className="flex w-full h-4 gap-0.5 mb-5 overflow-hidden rounded-full">
            {RISK_LEVEL_BREAKDOWN.map((item, i) => {
              const meta = LEVEL_META[item.level];
              const isFirst = i === 0;
              const isLast = i === RISK_LEVEL_BREAKDOWN.length - 1;
              return (
                <div
                  key={item.level}
                  title={`${item.level}: ${item.percent}%`}
                  style={{ width: `${item.percent}%` }}
                  className={`h-full ${meta.bar} ${isFirst ? "rounded-l-full" : ""} ${
                    isLast ? "rounded-r-full" : ""
                  }`}
                />
              );
            })}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {RISK_LEVEL_BREAKDOWN.map((item) => {
              const meta = LEVEL_META[item.level];
              const Icon = meta.icon;
              return (
                <div key={item.level} className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${meta.text}`} />
                  <span className="text-sm text-slate-300">{item.level}</span>
                  <span className="text-sm text-slate-500">{item.percent}%</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/checklist"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500 transition-colors"
          >
            See How You Compare
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
