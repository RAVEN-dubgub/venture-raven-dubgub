import Link from "next/link";
import { LEARNING_APP_URL, SITE_NAME } from "@/lib/venture";

const links = [
  { href: "/app", label: "Product" },
  { href: "/plan", label: "Business plan" },
  { href: "/pitch", label: "Pitch deck" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight text-[var(--foreground)]">
          {SITE_NAME}
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={LEARNING_APP_URL}
            className="rounded-full bg-[var(--accent)] px-3 py-1 font-medium text-white transition hover:opacity-90"
            target="_blank"
            rel="noreferrer"
          >
            Learner app
          </a>
        </nav>
      </div>
    </header>
  );
}
