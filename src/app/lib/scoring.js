export const QUESTIONS = [
  { id: 1, text: "Do you use the same password across multiple accounts?", category: "password_security", riskyAnswer: true },
  { id: 2, text: "Do you have multi-factor authentication (MFA) turned on for your important accounts?", category: "password_security", riskyAnswer: false },
  { id: 3, text: "Have you received suspicious texts or emails recently that you clicked on or responded to?", category: "phishing_smishing", riskyAnswer: true },
  { id: 4, text: "Do you use public Wi-Fi for online banking or shopping?", category: "unsafe_wifi", riskyAnswer: true },
  { id: 5, text: "Have you checked whether your email was exposed in a data breach?", category: "data_breach_awareness", riskyAnswer: false },
  { id: 6, text: "Do you know how to report identity theft if it happens to you?", category: "identity_theft_preparedness", riskyAnswer: false },
  { id: 7, text: "Do you regularly update your phone and laptop software?", category: "device_hygiene", riskyAnswer: false },
  { id: 8, text: "Have you ever responded to a job offer that asked for personal/banking info upfront?", category: "fake_job_scams", riskyAnswer: true },
  { id: 9, text: "Do you click links in text messages from unknown numbers?", category: "phishing_smishing", riskyAnswer: true },
  { id: 10, text: "Do you use a password manager?", category: "password_security", riskyAnswer: false },
  { id: 11, text: "Have you ever sent money to someone you only met online?", category: "romance_financial_scams", riskyAnswer: true },
  { id: 12, text: "Do you check the sender's actual email address before clicking links in emails?", category: "phishing_smishing", riskyAnswer: false },
];

export function calculateRisk(answers) {
  let riskyCount = 0;
  const triggeredCategories = new Set();

  for (const question of QUESTIONS) {
    const userAnswer = answers[question.id];
    if (userAnswer === question.riskyAnswer) {
      riskyCount++;
      triggeredCategories.add(question.category);
    }
  }

  let level;
  if (riskyCount <= 3) level = "Low Risk";
  else if (riskyCount <= 7) level = "Medium Risk";
  else level = "High Risk";

  return {
    score: riskyCount,
    level,
    totalQuestions: QUESTIONS.length,
    triggeredCategories: Array.from(triggeredCategories),
  };
} 