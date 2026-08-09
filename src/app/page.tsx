import Link from "next/link";
import { LEARNING_APP_URL, SITE_NAME } from "@/lib/venture";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <section className="card mb-8 bg-gradient-to-br from-white to-[#eef1eb]">
        <p className="text-sm font-medium uppercase tracking-wide text-[var(--sage)]">
          Phase 2 Venture · Week 6
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Team onboarding for bootcamps and cohort programs that need Git and GitHub skills
          without rebuilding PM, comms, and learning tooling from scratch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/app"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-medium text-white transition hover:opacity-90"
          >
            Open production app
          </Link>
          <Link
            href="/pitch"
            className="rounded-full border border-[var(--border)] bg-white px-5 py-2.5 font-medium transition hover:bg-[var(--accent-soft)]"
          >
            View pitch deck
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card">
          <h2 className="text-lg font-semibold">Problem</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Bootcamp operators stitch together Discord, Notion, and ad hoc Git tutorials. Learners
            stall before their first meaningful PR.
          </p>
        </article>
        <article className="card">
          <h2 className="text-lg font-semibold">Solution</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            A team portal plus the Agent Git Lab learner app. Operators create a workspace, share a
            launch link, and track qualified learner actions.
          </p>
        </article>
        <article className="card">
          <h2 className="text-lg font-semibold">Traction path</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Built on @raven-dubgub&apos;s cohort stack (PM, comms, showcase, learning app). Venture metrics
            use a separate namespace from the learning app.
          </p>
        </article>
      </section>

      <section className="card mt-8">
        <h2 className="text-xl font-semibold">Connected products</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          <li>
            Learner experience:{" "}
            <a className="text-[var(--accent)] underline" href={LEARNING_APP_URL}>
              Agent Git Lab
            </a>
          </li>
          <li>Cohort PM: pm-raven-dubgub.vercel.app</li>
          <li>Cohort comms: comms-raven-dubgub.vercel.app</li>
          <li>Public showcase: showcase-raven-dubgub.vercel.app</li>
        </ul>
      </section>
    </div>
  );
}
