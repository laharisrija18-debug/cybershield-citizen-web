export const INCIDENTS = [
  {
    id: "phished",
    title: "I clicked a link and entered my password on a fake site",
    icon: "MailWarning",
    urgency: "Act within minutes",
    summary:
      "Speed matters here — attackers often try to use stolen credentials within minutes of a successful phish.",
    immediateSteps: [
      "Change the password for that account immediately, from a device you trust — not the one you think may be compromised",
      "If you reused that password anywhere else, change it there too, starting with email and banking",
      "Turn on multi-factor authentication (MFA) on the account if it isn't already on",
      "Check the account's recent activity/login history for anything you don't recognize",
    ],
    followUpSteps: [
      "Report the phishing message to your email provider and, for texts, forward it to 7726 (SPAM)",
      "Watch your accounts and credit for a few weeks for anything unusual",
      "If financial info was entered, call your bank's fraud line directly using the number on your card",
      "Set up a password manager so future passwords are unique per site",
    ],
    resource: "https://www.identitytheft.gov",
    resourceLabel: "IdentityTheft.gov recovery steps",
  },
  {
    id: "hacked-account",
    title: "I'm locked out of an account or it's posting things I didn't post",
    icon: "UserX",
    urgency: "Act within the hour",
    summary:
      "The longer an attacker holds an account, the more damage they can do — including locking you out permanently.",
    immediateSteps: [
      "Try the platform's official account recovery flow right away, before the attacker changes recovery info",
      "Check if the attacker changed your recovery email or phone number — if so, use the platform's \"someone else has access\" recovery path",
      "Alert close contacts not to click links or send money based on messages from that account",
      "Once back in, revoke all active sessions/logged-in devices and change the password",
    ],
    followUpSteps: [
      "Turn on MFA immediately after regaining access",
      "Review connected third-party apps and remove anything you don't recognize",
      "Check whether the same password was used elsewhere and rotate it there too",
      "Report the incident to the platform through their official abuse/hacked-account form",
    ],
    resource: "https://www.cisa.gov",
    resourceLabel: "CISA account recovery guidance",
  },
  {
    id: "identity-theft",
    title: "I think my identity was stolen",
    icon: "FileWarning",
    urgency: "Act within 24 hours",
    summary:
      "Accounts opened in your name, surprise tax filings, or unfamiliar debt collectors are all signs to act on now.",
    immediateSteps: [
      "Place a free fraud alert or credit freeze with all three credit bureaus (Equifax, Experian, TransUnion)",
      "File a report at IdentityTheft.gov — it generates a personal recovery plan and an official FTC affidavit",
      "Contact any company where a fraudulent account was opened and ask them to close it and remove it from your credit report",
      "If a police report helps your case, file one with your local police using your FTC affidavit",
    ],
    followUpSteps: [
      "Pull your free credit reports at annualcreditreport.com and check line by line",
      "Keep a dated log of every call and letter — you may need it for disputes",
      "Set up ongoing credit monitoring or alerts",
      "If your SSN was involved, consider a long-term credit freeze rather than a temporary alert",
    ],
    resource: "https://www.identitytheft.gov",
    resourceLabel: "Start your recovery plan",
  },
  {
    id: "sent-money",
    title: "I sent money to a scammer",
    icon: "SendHorizontal",
    urgency: "Act within minutes to hours",
    summary:
      "Recovery odds drop fast — the payment method you used determines what's actually possible.",
    immediateSteps: [
      "Bank transfer or wire: call your bank's fraud department immediately and ask about a recall or reversal",
      "Credit/debit card: dispute the charge with your card issuer as fraud",
      "Gift cards: contact the retailer's fraud department with the card number and PIN right away",
      "Cryptocurrency: transactions are typically irreversible, but still report it — it helps investigations even if funds aren't recovered",
    ],
    followUpSteps: [
      "Report the scam to the FTC at reportfraud.ftc.gov and, if online, to the platform where contact was made",
      "File a report with the FBI's IC3 (ic3.gov) for internet-related fraud",
      "Cut off all further contact with the scammer — continued contact is often used to extract more money",
      "Talk to someone you trust; romance and investment scams especially rely on isolation to continue",
    ],
    resource: "https://consumer.ftc.gov",
    resourceLabel: "Report the scam to the FTC",
  },
  {
    id: "lost-device",
    title: "My phone or laptop was lost or stolen",
    icon: "SmartphoneNfc",
    urgency: "Act within minutes",
    summary:
      "Most modern devices let you lock or wipe them remotely — but only if you act before the battery dies or it's reset.",
    immediateSteps: [
      "Use Find My iPhone / Find My Device (Android) / Find My Mac to locate, lock, or remotely wipe the device",
      "Change the passwords for accounts that were logged in on the device, starting with email",
      "Log the device out of accounts remotely wherever the platform allows it (most email and social apps support this)",
      "If it contained payment cards or a digital wallet, contact your bank to freeze or reissue them",
    ],
    followUpSteps: [
      "File a police report, especially if required for insurance or carrier replacement",
      "Notify your mobile carrier to suspend service on the SIM",
      "Check whether the device had saved passwords in a browser and rotate anything sensitive",
      "Set up a passcode, biometric lock, and remote-wipe capability on your next device from day one",
    ],
    resource: "https://www.cisa.gov",
    resourceLabel: "CISA lost device guidance",
  },
  {
    id: "data-breach",
    title: "A company I use had a data breach",
    icon: "Database",
    urgency: "Act within days",
    summary:
      "Not as urgent as an active attack, but ignoring it is how old breaches turn into new fraud months later.",
    immediateSteps: [
      "Read the breach notice carefully — it usually says exactly what data was exposed",
      "Change the password for that account, and anywhere else you reused it",
      "If financial or SSN data was exposed, consider a credit freeze",
      "Turn on MFA for the affected account if you haven't already",
    ],
    followUpSteps: [
      "Check haveibeenpwned.com to confirm your email's exposure history",
      "Watch statements and credit reports over the following months, not just the next few days",
      "Be extra alert for phishing that references the breach specifically — scammers use real breaches as bait",
      "Sign up for breach monitoring so you find out sooner next time",
    ],
    resource: "https://haveibeenpwned.com",
    resourceLabel: "Check your breach exposure",
  },
];
