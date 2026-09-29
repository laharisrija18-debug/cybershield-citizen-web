"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MailWarning,
  UserX,
  FileWarning,
  SendHorizontal,
  SmartphoneNfc,
  Database,
  ChevronDown,
  ExternalLink,
  LifeBuoy,
  AlertTriangle,
} from "lucide-react";
import { INCIDENTS } from "../lib/incidents";

const ICONS = { MailWarning, UserX, FileWarning, SendHorizontal, SmartphoneNfc, Database };

export default function IncidentGuides() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-4 flex justify-center">
            <LifeBuoy className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Incident Guides</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Think something already happened? Pick what's going on below for clear, step-by-step
            instructions on what to do right now.
          </p>
        </motion.div>

        <div className="space-y-4">
          {INCIDENTS.map((incident, i) => {
            const Icon = ICONS[incident.icon];
            const isOpen = openId === incident.id;

            return (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => toggle(incident.id)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold">{incident.title}</h2>
                    <p className="text-sm text-slate-400 mt-1">{incident.summary}</p>
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
                        <div className="mt-4 mb-5 flex items-start gap-2 rounded-xl border border-amber-800 bg-amber-950/40 p-3">
                          <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                          <p className="text-sm text-amber-300 font-medium">
                            {incident.urgency}
                          </p>
                        </div>

                        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                          Do This Right Now
                        </h3>
                        <ol className="space-y-3 mb-6">
                          {incident.immediateSteps.map((step, idx) => (
                            <li key={step} className="flex gap-3 text-sm text-slate-200">
                              <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>

                        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                          Follow-Up Steps
                        </h3>
                        <ul className="space-y-1.5 mb-5">
                          {incident.followUpSteps.map((step) => (
                            <li key={step} className="flex gap-2 text-sm text-slate-300">
                              <span className="text-slate-500 mt-0.5">•</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href={incident.resource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {incident.resourceLabel} <ExternalLink className="h-3.5 w-3.5" />
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
            href="/threat-library"
            className="inline-block rounded-full border border-slate-700 px-8 py-3 font-semibold hover:border-blue-600 transition-colors"
          >
            Learn to Prevent These
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
