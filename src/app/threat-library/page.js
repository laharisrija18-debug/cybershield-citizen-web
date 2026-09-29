"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Lock,
  Mail,
  Wifi,
  Database,
  FileWarning,
  RefreshCw,
  Briefcase,
  Heart,
  ChevronDown,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { THREATS } from "../lib/threats";

const ICONS = { Lock, Mail, Wifi, Database, FileWarning, RefreshCw, Briefcase, Heart };

const SEVERITY_STYLES = {
  High: "bg-red-950/60 text-red-300 border-red-800",
  Medium: "bg-amber-950/60 text-amber-300 border-amber-800",
};

export default function ThreatLibrary() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggle = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <main className="min-h-screen text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-4 flex justify-center">
            <BookOpen className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Threat Library</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Learn how to recognize the most common ways everyday people get scammed or hacked —
            and exactly what to do about each one.
          </p>
        </motion.div>

        <div className="space-y-4">
          {THREATS.map((threat, i) => {
            const Icon = ICONS[threat.icon];
            const isOpen = openCategory === threat.category;

            return (
              <motion.div
                key={threat.category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => toggle(threat.category)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="font-semibold">{threat.title}</h2>
                      <span
                        className={`shrink-0 rounded-full border px-3 py-0.5 text-xs font-semibold ${
                          SEVERITY_STYLES[threat.severity] ?? SEVERITY_STYLES.Medium
                        }`}
                      >
                        {threat.severity}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{threat.summary}</p>
                  </div>
                  <ChevronDown
                    className={`shrink-0 h-5 w-5 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 border-t border-slate-800">
                        <p className="text-sm text-slate-300 mt-4 mb-5 leading-relaxed">
                          {threat.whatItIs}
                        </p>

                        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                          Warning Signs
                        </h3>
                        <ul className="space-y-1.5 mb-5">
                          {threat.warningSigns.map((sign) => (
                            <li key={sign} className="flex gap-2 text-sm text-slate-300">
                              <span className="text-red-400 mt-0.5">•</span>
                              <span>{sign}</span>
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                          Protect Yourself
                        </h3>
                        <ul className="space-y-1.5 mb-5">
                          {threat.protectYourself.map((step) => (
                            <li key={step} className="flex gap-2 text-sm text-slate-300">
                              <span className="text-green-400 mt-0.5">•</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href={threat.resource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {threat.resourceLabel} <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/checklist"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500 transition-colors"
          >
            Check Your Own Risk
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
