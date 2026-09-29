export const THREATS = [
  {
    category: "password_security",
    title: "Weak & Reused Passwords",
    icon: "Lock",
    severity: "High",
    summary:
      "Using the same password everywhere means one breach can unlock every account you own.",
    whatItIs:
      "When a password you reuse leaks in a breach on one site, attackers run that same email/password pair against banks, email providers, and social media in bulk — a technique called credential stuffing. It works because so many people reuse passwords, and it doesn't require guessing anything.",
    warningSigns: [
      "You use the same password (or a close variation) on more than one account",
      "You've never used a password manager to generate or store passwords",
      "Your passwords are based on personal info like birthdays, pet names, or simple patterns",
      "You can't remember the last time you changed your email password",
    ],
    protectYourself: [
      "Use a password manager to generate and store a unique password for every account",
      "Turn on multi-factor authentication (MFA) everywhere it's offered, especially email and banking",
      "Never reuse your email password anywhere else — it's the key to resetting everything else",
      "Check haveibeenpwned.com periodically to see if your accounts appear in known breaches",
    ],
    resource: "https://haveibeenpwned.com",
    resourceLabel: "Check if your accounts have been breached",
  },
  {
    category: "phishing_smishing",
    title: "Phishing & Smishing",
    icon: "Mail",
    severity: "High",
    summary:
      "Fake emails and texts designed to trick you into handing over credentials or clicking malicious links.",
    whatItIs:
      "Phishing (email) and smishing (SMS) messages impersonate people or organizations you trust — your bank, a delivery service, even your boss — to create urgency and get you to click a link, open an attachment, or reply with sensitive information. Modern phishing kits can copy a real login page almost pixel-for-pixel.",
    warningSigns: [
      "Urgent or threatening language (\"your account will be suspended\")",
      "A sender address or phone number that looks almost right but isn't",
      "Links that don't match the company's real domain when you hover over them",
      "Requests to verify your password, SSN, or payment info by email or text",
    ],
    protectYourself: [
      "Never click a link in an unexpected message — go to the company's site directly instead",
      "Verify the sender's actual email address, not just the display name",
      "Call the organization using a number from their official website, not one in the message",
      "Report suspicious texts by forwarding them to 7726 (SPAM) and emails to your provider",
    ],
    resource: "https://www.cisa.gov/phishing",
    resourceLabel: "CISA's guide to recognizing phishing",
  },
  {
    category: "unsafe_wifi",
    title: "Unsafe Public Wi-Fi",
    icon: "Wifi",
    severity: "Medium",
    summary:
      "Open networks at cafes, airports, and hotels can let attackers on the same network see your traffic.",
    whatItIs:
      "Public Wi-Fi networks are often unencrypted or shared with strangers, which makes it possible for someone else on the same network to intercept unprotected traffic or set up a fake \"lookalike\" hotspot with a name like the real one to capture your logins directly.",
    warningSigns: [
      "You've logged into your bank or entered a credit card on a coffee shop or airport network",
      "You connect automatically to any open network your device finds",
      "You don't know whether the network you're on is the venue's real Wi-Fi or a fake one",
      "You've never used a VPN on public networks",
    ],
    protectYourself: [
      "Avoid banking, shopping, or entering passwords on public Wi-Fi entirely",
      "Use your phone's mobile hotspot instead when you need to do anything sensitive",
      "If you must use public Wi-Fi, connect through a reputable VPN",
      "Turn off auto-connect to open networks in your device settings",
    ],
    resource: "https://www.cisa.gov",
    resourceLabel: "CISA cybersecurity resources",
  },
  {
    category: "data_breach_awareness",
    title: "Data Breaches",
    icon: "Database",
    severity: "Medium",
    summary:
      "Companies you trust with your data get hacked constantly — the question is whether you know when it happens to you.",
    whatItIs:
      "Large-scale breaches expose emails, passwords, and sometimes financial or identity data from companies you've done business with. That data often ends up for sale or free on criminal forums, where it's used for credential stuffing, targeted phishing, and identity theft — sometimes years after the original breach.",
    warningSigns: [
      "You've never checked whether your email appears in a known data breach",
      "You've received account alerts or password reset emails you didn't request",
      "You're still using a password from more than a couple of years ago on an active account",
      "You don't get notified when a company you use has a breach",
    ],
    protectYourself: [
      "Check haveibeenpwned.com for your email addresses periodically",
      "Set up breach alerts so you're notified automatically going forward",
      "Rotate any password tied to a breached account immediately, including anywhere else it was reused",
      "Freeze your credit if a breach involved your SSN or financial information",
    ],
    resource: "https://haveibeenpwned.com",
    resourceLabel: "Check your email against known breaches",
  },
  {
    category: "identity_theft_preparedness",
    title: "Identity Theft",
    icon: "FileWarning",
    severity: "Medium",
    summary:
      "Knowing the first three things to do can be the difference between a minor headache and years of financial cleanup.",
    whatItIs:
      "Identity theft happens when someone uses your personal information — SSN, date of birth, or financial details — to open accounts, file taxes, or make purchases in your name. Victims often don't find out until they're denied credit, contacted by a debt collector, or rejected for a tax refund because one was already filed.",
    warningSigns: [
      "You don't know how to freeze your credit or place a fraud alert",
      "You've never checked your credit report for accounts you don't recognize",
      "You wouldn't know who to contact first if your identity were stolen",
      "You've received bills, collection notices, or tax documents for accounts you didn't open",
    ],
    protectYourself: [
      "Know the process in advance: freeze credit with all three bureaus, file a report at IdentityTheft.gov, and notify your bank",
      "Check your free credit report at annualcreditreport.com regularly",
      "Set up account alerts for new credit inquiries",
      "Keep a written record of who you contacted and when if it ever happens",
    ],
    resource: "https://www.identitytheft.gov",
    resourceLabel: "Official identity theft recovery steps",
  },
  {
    category: "device_hygiene",
    title: "Outdated Software & Device Hygiene",
    icon: "RefreshCw",
    severity: "Medium",
    summary:
      "Most successful device attacks exploit a vulnerability that was already patched months earlier.",
    whatItIs:
      "Software updates frequently include security patches for vulnerabilities that are publicly known and actively exploited. Delaying updates on your phone, laptop, router, or apps leaves those doors open longer than necessary, and automated scanning tools make it easy for attackers to find unpatched devices.",
    warningSigns: [
      "You regularly dismiss or postpone update notifications",
      "Automatic updates are turned off on your phone or laptop",
      "You're not sure when your router's firmware was last updated",
      "You're still running an operating system version that's no longer supported",
    ],
    protectYourself: [
      "Turn on automatic updates for your phone, laptop, and browser",
      "Restart your devices periodically so pending updates actually install",
      "Update your home router's firmware and change its default admin password",
      "Uninstall apps you no longer use — unused apps are still a security surface",
    ],
    resource: "https://www.cisa.gov",
    resourceLabel: "CISA device security guidance",
  },
  {
    category: "fake_job_scams",
    title: "Fake Job Scams",
    icon: "Briefcase",
    severity: "High",
    summary:
      "Scammers post fake remote job listings to harvest personal information or trick victims into fraud.",
    whatItIs:
      "Fake job scams range from \"employers\" asking for your SSN and bank info before any formal hiring process, to schemes that pay you with a fraudulent check and ask you to wire back the \"overpayment\" — leaving you liable when the check bounces. Remote and work-from-home postings are frequent targets because they skip in-person verification.",
    warningSigns: [
      "You're offered a job with little or no interview process",
      "You're asked for your SSN, bank account, or a copy of your ID before signing anything formal",
      "You're asked to buy equipment upfront and get reimbursed later",
      "You receive a check for more than expected and are asked to send back the difference",
    ],
    protectYourself: [
      "Never share banking or SSN details before a verified, formal hiring process",
      "Research the company independently — look for a real website, real employees on LinkedIn, and reviews",
      "Be suspicious of any job that pays you before you've done any work",
      "Report suspected job scams to the FTC at reportfraud.ftc.gov",
    ],
    resource: "https://consumer.ftc.gov",
    resourceLabel: "FTC guide to job scams",
  },
  {
    category: "romance_financial_scams",
    title: "Romance & Financial Scams",
    icon: "Heart",
    severity: "High",
    summary:
      "Scammers build long-term trust online, sometimes over months, before asking for money.",
    whatItIs:
      "Romance scams typically start on dating apps or social media, with the scammer investing weeks or months building an emotional connection before inventing a crisis — a medical emergency, a stuck shipment, a travel mishap — that only money can solve. Because trust has already been built, victims often send money repeatedly before realizing what's happening.",
    warningSigns: [
      "You've never met the person in real life despite an intense online relationship",
      "They avoid video calls or always have an excuse not to meet",
      "They ask for money, gift cards, or cryptocurrency for an emergency",
      "Their story has inconsistencies or their profile photos appear elsewhere online",
    ],
    protectYourself: [
      "Never send money, gift cards, or crypto to someone you haven't met in person",
      "Do a reverse image search on profile photos",
      "Talk to a friend or family member before sending money to an online-only relationship",
      "Report romance scams to the FTC and the platform where you met",
    ],
    resource: "https://consumer.ftc.gov",
    resourceLabel: "FTC guide to romance scams",
  },
];
