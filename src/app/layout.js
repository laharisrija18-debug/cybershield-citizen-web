import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CyberBackground from "./components/CyberBackground";
import SiteHeader from "./components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | CyberShield Citizen",
    default: "CyberShield Citizen — Free Cyber Safety Tool",
  },
  description: "A free cyber safety tool for everyday Americans — check your personal cyber risk and get clear, practical steps to stay safe online.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* pb-20 keeps page-end content clear of the fixed background switcher */}
      <body className="min-h-full flex flex-col bg-slate-950 pb-20">
        <CyberBackground />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
