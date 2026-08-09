import Link from "next/link";
import { FOUNDER_DISPLAY_NAME, FOUNDER_GITHUB, LEARNING_APP_URL, SITE_NAME } from "@/lib/venture";

const footerLinks = [
  { href: "/app", label: "Product" },
  { href: "/pitch", label: "Pitch deck" },
  { href: "/plan", label: "Business plan" },
  { href: "/privacy", label: "Privacy" },
  { href: "/api/metrics", label: "Metrics API" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-[var(--foreground)]">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              B2B team onboarding for bootcamps and cohort programs. Built by {FOUNDER_DISPLAY_NAME}{" "}
              for the Hult Cohort Developer Program, Summer 2026.
            </p>
          </div>
          <div>
            <p className="section-label">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={LEARNING_APP_URL}
                  className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learner app
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="section-label">Contact</p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              {FOUNDER_DISPLAY_NAME} · GitHub {FOUNDER_GITHUB}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Phase 2 Venture · Week 6 submission
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
          © 2026 {FOUNDER_DISPLAY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
