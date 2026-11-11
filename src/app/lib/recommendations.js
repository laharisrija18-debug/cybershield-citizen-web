export const RECOMMENDATIONS = {
  password_security: {
    label: "Password Security",
    severity: "High",
    whyItMatters: "Reused or weak passwords are the #1 cause of account takeover.",
    action: "Use a password manager and enable multi-factor authentication (MFA) on all important accounts.",
    resource: "https://haveibeenpwned.com",
  },
  phishing_smishing: {
    label: "Phishing & Smishing",
    severity: "High",
    whyItMatters: "Phishing is the most common way attackers gain initial access to accounts.",
    action: "Never click links from unknown senders. Verify the sender's actual email address or phone number first.",
    resource: "https://www.cisa.gov/phishing",
  },
  unsafe_wifi: {
    label: "Unsafe Public Wi-Fi",
    severity: "Medium",
    whyItMatters: "Public Wi-Fi can expose your banking and shopping sessions to interception.",
    action: "Use a VPN or your phone's mobile hotspot for anything sensitive instead of public Wi-Fi.",
    resource: "https://www.cisa.gov",
  },
  data_breach_awareness: {
    label: "Data Breach Awareness",
    severity: "Medium",
    whyItMatters: "Old breached passwords are frequently reused by attackers in credential-stuffing attacks.",
    action: "Check your email regularly for breach exposure and rotate any exposed passwords immediately.",
    resource: "https://haveibeenpwned.com",
  },
  identity_theft_preparedness: {
    label: "Identity Theft Preparedness",
    severity: "Medium",
    whyItMatters: "Knowing how to respond quickly limits the financial damage of identity theft.",
    action: "Learn how to freeze your credit and report identity theft immediately if it happens.",
    resource: "https://www.identitytheft.gov",
  },
  device_hygiene: {
    label: "Device Hygiene",
    severity: "Medium",
    whyItMatters: "Unpatched software is one of the most common ways attackers exploit devices.",
    action: "Turn on automatic updates for your phone and laptop.",
    resource: "https://www.cisa.gov",
  },
  fake_job_scams: {
    label: "Fake Job Scams",
    severity: "High",
    whyItMatters: "Fake job scams are a fast-growing vector for financial and identity fraud.",
    action: "Never share banking or Social Security info before a formal, verified hiring process.",
    resource: "https://consumer.ftc.gov",
  },
  romance_financial_scams: {
    label: "Romance & Financial Scams",
    severity: "High",
    whyItMatters: "Romance and financial scams cause some of the highest dollar losses of any scam category.",
    action: "Never send money to someone you have not met in person, no matter how long you've talked.",
    resource: "https://consumer.ftc.gov",
  },
};

export function getRecommendations(triggeredCategories) {
  if (!Array.isArray(triggeredCategories)) return [];
  return [...new Set(triggeredCategories)]
    // Object.hasOwn so values like "__proto__" or "toString" can't match inherited keys
    .filter((cat) => typeof cat === "string" && Object.hasOwn(RECOMMENDATIONS, cat))
    .map((cat) => ({ category: cat, ...RECOMMENDATIONS[cat] }));
}