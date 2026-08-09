import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Git Lab Teams | Venture",
  description:
    "B2B venture package for bootcamp operators: team onboarding, Git/GitHub learning paths, and cohort-ready metrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] px-4 py-6 text-center text-sm text-[var(--muted)]">
          Joshua Scotland (@raven-dubgub) · Hult Cohort Phase 2 Venture · Summer 2026
        </footer>
      </body>
    </html>
  );
}
