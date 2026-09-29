"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ClipboardList, BookOpen, LifeBuoy, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 flex justify-center">
            <ShieldCheck className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight">CyberShield Citizen</h1>
          <p className="mt-4 text-xl text-slate-300">
            A Free Cyber Safety Tool for Everyday Americans
          </p>
          <p className="mt-6 text-slate-400">
            Understand your personal cyber risk and get clear, practical steps to stay safe online —
            no technical background required.
          </p>
          <Link
            href="/checklist"
            className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500 transition-colors"
          >
            Take the Checklist
          </Link>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: ClipboardList, title: "Take the Checklist", desc: "Answer a short cyber safety checklist to see your personal risk score.", href: "/checklist" },
          { icon: BookOpen, title: "Explore the Threat Library", desc: "Learn how to recognize phishing, scams, identity theft, and more.", href: "/threat-library" },
          { icon: LifeBuoy, title: "Incident Guides", desc: "Think you've already been hacked or scammed? Get step-by-step help.", href: "/incident-guides" },
          { icon: BarChart3, title: "Community Dashboard", desc: "See anonymous trends in the most common cyber risks people face.", href: "/dashboard" },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <Link
              href={card.href}
              className="block h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-600 transition-colors"
            >
              <card.icon className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm">{card.desc}</p>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}