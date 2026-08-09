"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LEARNING_APP_URL, SITE_NAME } from "@/lib/venture";

const links = [
  { href: "/app", label: "Product" },
  { href: "/plan", label: "Business plan" },
  { href: "/pitch", label: "Pitch deck" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight text-[var(--foreground)]">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 transition ${
                  active
                    ? "bg-[var(--accent-soft)] font-medium text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={LEARNING_APP_URL}
            className="btn-primary ml-1 px-3 py-1.5 text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Learner app
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-[var(--border)] px-4 py-3 md:hidden">
          <ul className="space-y-1 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-[var(--muted)] hover:bg-[var(--accent-soft)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={LEARNING_APP_URL}
                className="block rounded-lg px-3 py-2 font-medium text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                Learner app
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
