"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { QUESTIONS, calculateRisk } from "../lib/scoring";

export default function Checklist() {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < QUESTIONS.length) {
      setError(true);
      return;
    }
    setError(false);
    const result = calculateRisk(answers);
    sessionStorage.setItem("riskResult", JSON.stringify(result));
    router.push("/risk-score");
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Cyber Safety Checklist</h1>
        <p className="text-slate-400 mb-2">
          Answer these questions honestly to get your personal cyber risk score.
        </p>
        <p className="text-sm text-blue-400 mb-8">
          {answeredCount} of {QUESTIONS.length} answered
        </p>

        <div className="space-y-4">
          {QUESTIONS.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <p className="mb-3 font-medium">{q.text}</p>
              <div className="flex gap-3">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    onClick={() => handleAnswer(q.id, val)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                      answers[q.id] === val
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {val ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {error && (
          <p className="mt-6 text-red-400">Please answer all questions before submitting.</p>
        )}

        <button
          onClick={handleSubmit}
          className="mt-8 w-full rounded-full bg-blue-600 py-3 font-semibold hover:bg-blue-500 transition-colors"
        >
          Get My Risk Score
        </button>
      </div>
    </main>
  );
}