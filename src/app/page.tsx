import Link from "next/link";
import {
  COHORT_PRODUCTS,
  FOUNDER_DISPLAY_NAME,
  PRODUCTION_URL,
  SITE_NAME,
} from "@/lib/venture";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="card-elevated mb-10 bg-gradient-to-br from-white via-white to-[#eef1eb]">
        <p className="section-label">Phase 2 Venture · Hult Cohort · Summer 2026</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Team onboarding for bootcamps and cohort programs that need Git and GitHub fluency
          without rebuilding PM, comms, and learning tooling from scratch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/app" className="btn-primary">
            Open production app
          </Link>
          <Link href="/pitch" className="btn-secondary">
            View pitch deck
          </Link>
          <Link href="/plan" className="btn-secondary">
            Read business plan
          </Link>
        </div>
      </section>

      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        <article className="card text-center">
          <p className="stat-value">$49</p>
          <p className="stat-label">Starter tier per cohort (≤30 seats)</p>
        </article>
        <article className="card text-center">
          <p className="stat-value">Days</p>
          <p className="stat-label">Typical time to launch a learner path</p>
        </article>
        <article className="card text-center">
          <p className="stat-value">4</p>
          <p className="stat-label">Connected cohort products in production</p>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card">
          <p className="section-label">Problem</p>
          <h2 className="mt-2 text-lg font-semibold">Tooling sprawl slows cohorts</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Bootcamp operators stitch together Discord, Notion, and ad hoc Git workshops. Learners
            stall before their first meaningful pull request.
          </p>
        </article>
        <article className="card">
          <p className="section-label">Solution</p>
          <h2 className="mt-2 text-lg font-semibold">One portal, one launch link</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Operators create a workspace, share a learner launch link into Agent Git Lab, and track
            qualified actions from a single dashboard.
          </p>
        </article>
        <article className="card">
          <p className="section-label">Traction</p>
          <h2 className="mt-2 text-lg font-semibold">Built on a live cohort stack</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {FOUNDER_DISPLAY_NAME} shipped PM, comms, showcase, and the learning app in production.
            Venture metrics use a separate namespace from the learner app.
          </p>
        </article>
      </section>

      <section className="card mt-8">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="mt-4 space-y-4 text-sm text-[var(--muted)]">
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent)]">
              1
            </span>
            <span>
              <strong className="text-[var(--foreground)]">Sign up</strong> as a bootcamp operator
              on the production app.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent)]">
              2
            </span>
            <span>
              <strong className="text-[var(--foreground)]">Create a team workspace</strong> and share
              the Agent Git Lab launch link with learners.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent)]">
              3
            </span>
            <span>
              <strong className="text-[var(--foreground)]">Track qualified actions</strong> via the
              public metrics endpoint for cohort submission.
            </span>
          </li>
        </ol>
      </section>

      <section className="card mt-8">
        <h2 className="text-xl font-semibold">Connected products</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {COHORT_PRODUCTS.map((product) => (
            <li key={product.href}>
              <a
                className="text-[var(--accent)] underline decoration-[var(--border)] underline-offset-2 transition hover:decoration-[var(--accent)]"
                href={product.href}
                target="_blank"
                rel="noreferrer"
              >
                {product.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Production venture app:{" "}
          <a
            href={PRODUCTION_URL}
            className="text-[var(--accent)] underline decoration-[var(--border)] underline-offset-2"
          >
            {PRODUCTION_URL.replace("https://", "")}
          </a>
        </p>
      </section>
    </div>
  );
}
