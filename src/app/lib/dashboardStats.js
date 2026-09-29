// Illustrative sample data for the Community Dashboard.
// Replace with real aggregated, anonymized results once checklist
// submissions are wired up to a backend/database.

export const SUMMARY_STATS = {
  checklistsCompleted: "12,480",
  averageScore: "5.4",
  totalQuestions: 12,
  mostCommonGap: "Password Security",
};

export const CATEGORY_TRENDS = [
  { category: "password_security", label: "Password Security", percent: 61 },
  { category: "phishing_smishing", label: "Phishing & Smishing", percent: 54 },
  { category: "device_hygiene", label: "Device Hygiene", percent: 47 },
  { category: "data_breach_awareness", label: "Data Breach Awareness", percent: 43 },
  { category: "unsafe_wifi", label: "Unsafe Public Wi-Fi", percent: 38 },
  { category: "identity_theft_preparedness", label: "Identity Theft Prep", percent: 35 },
  { category: "fake_job_scams", label: "Fake Job Scams", percent: 19 },
  { category: "romance_financial_scams", label: "Romance & Financial Scams", percent: 12 },
];

export const RISK_LEVEL_BREAKDOWN = [
  { level: "Low Risk", percent: 34 },
  { level: "Medium Risk", percent: 47 },
  { level: "High Risk", percent: 19 },
];
