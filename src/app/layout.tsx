import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRODUCTION_URL, SITE_NAME } from "@/lib/venture";
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
  title: {
    default: `${SITE_NAME} | B2B Cohort Onboarding`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Team onboarding for bootcamp operators: launch Git and GitHub learning paths, track qualified learner actions, and connect to Agent Git Lab.",
  metadataBase: new URL(PRODUCTION_URL),
  openGraph: {
    title: SITE_NAME,
    description:
      "B2B team portal for bootcamps and cohort programs. Workspace setup, learner launch links, and venture metrics.",
    url: PRODUCTION_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
