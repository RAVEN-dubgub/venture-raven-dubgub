"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Submission = {
  id: string;
  createdAt: string;
  roleLabel: string;
  organization: string | null;
  cohortSize: string | null;
  willingnessToPilot: string;
  contactName: string | null;
  contactEmail: string | null;
  onboardingProcess: string;
  painPoints: string;
  currentTools: string;
  progressSignals: string;
  idealOutcome: string;
  pricingFeedback: string;
  switchingCost: string;
  productFeedback: string | null;
  followUpOk: boolean;
  introsOffered: string | null;
  notableQuote: string | null;
  insight: string | null;
};

type LoadState = "loading" | "unauthorized" | "forbidden" | "ready" | "error";

export default function InterviewAdminPage() {
  const [state, setState] = useState<LoadState>("loading");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadSubmissions() {
      try {
        const response = await fetch("/api/interviews");
        if (cancelled) return;

        if (response.status === 401) {
          setState("unauthorized");
          return;
        }

        if (response.status === 403) {
          setState("forbidden");
          return;
        }

        if (!response.ok) {
          setState("error");
          return;
        }

        const data = await response.json();
        setSubmissions(data.submissions ?? []);
        setState("ready");
      } catch {
        if (!cancelled) {
          setState("error");
        }
      }
    }

    void loadSubmissions();

    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "loading") {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-[var(--muted)]">
        Loading submissions…
      </div>
    );
  }

  if (state === "unauthorized") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="card">
          <p className="section-label">Founder only</p>
          <h1 className="mt-2 text-2xl font-bold">Interview submissions</h1>
          <p className="mt-3 text-[var(--muted)]">
            Log in with your operator account to review external interview responses.
          </p>
          <Link href="/app" className="btn-primary mt-6 inline-flex">
            Log in at /app
          </Link>
        </section>
      </div>
    );
  }

  if (state === "forbidden") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="card">
          <p className="section-label">Founder only</p>
          <h1 className="mt-2 text-2xl font-bold">Access restricted</h1>
          <p className="mt-3 text-[var(--muted)]">
            This page is limited to internal founder accounts (`User.isInternal` or
            `METRICS_INTERNAL_EMAILS`). Set your account in Neon per `docs/METRICS-INTERNAL.md`.
          </p>
          <Link href="/interviews" className="btn-secondary mt-6 inline-flex">
            Back to public form
          </Link>
        </section>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="card">
          <h1 className="text-2xl font-bold">Unable to load submissions</h1>
          <p className="mt-3 text-[var(--muted)]">
            Check database connectivity and run `npm run db:migrate` if the table is missing.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-label">Founder · customer interviews</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Submission log</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {submissions.length} response{submissions.length === 1 ? "" : "s"} · JSON at{" "}
            <code className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5">/api/interviews</code>
          </p>
        </div>
        <Link href="/interviews" className="btn-secondary text-sm">
          Public form
        </Link>
      </div>

      {submissions.length === 0 ? (
        <section className="card mt-8">
          <p className="text-[var(--muted)]">
            No submissions yet. Share{" "}
            <Link href="/interviews" className="text-[var(--accent)] underline underline-offset-2">
              /interviews
            </Link>{" "}
            with external operators after calls. Joshua validates each entry before counting toward
            the Phase 2 gate.
          </p>
        </section>
      ) : (
        <ul className="mt-8 space-y-4">
          {submissions.map((submission) => {
            const expanded = expandedId === submission.id;
            const date = new Date(submission.createdAt).toLocaleString();

            return (
              <li key={submission.id} className="card">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{submission.roleLabel}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {date}
                      {submission.organization ? ` · ${submission.organization}` : ""}
                      {submission.cohortSize ? ` · ${submission.cohortSize}` : ""}
                    </p>
                    <p className="mt-2 text-sm">
                      Pilot:{" "}
                      <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 font-medium">
                        {submission.willingnessToPilot}
                      </span>
                      {submission.followUpOk ? " · Follow-up OK" : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-secondary px-3 py-1.5 text-sm"
                    onClick={() => setExpandedId(expanded ? null : submission.id)}
                  >
                    {expanded ? "Hide" : "View details"}
                  </button>
                </div>

                {expanded ? (
                  <div className="mt-4 space-y-3 border-t border-[var(--border)] pt-4 text-sm">
                    {submission.contactName || submission.contactEmail ? (
                      <p>
                        <strong>Contact:</strong>{" "}
                        {[submission.contactName, submission.contactEmail]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    ) : (
                      <p className="text-[var(--muted)]">Anonymous submission</p>
                    )}
                    <Field label="Onboarding" value={submission.onboardingProcess} />
                    <Field label="Pain points" value={submission.painPoints} />
                    <Field label="Tools" value={submission.currentTools} />
                    <Field label="Progress signals" value={submission.progressSignals} />
                    <Field label="Ideal outcome" value={submission.idealOutcome} />
                    <Field label="Pricing" value={submission.pricingFeedback} />
                    <Field label="Switching" value={submission.switchingCost} />
                    {submission.productFeedback ? (
                      <Field label="Product feedback" value={submission.productFeedback} />
                    ) : null}
                    {submission.notableQuote ? (
                      <Field label="Quote" value={submission.notableQuote} />
                    ) : null}
                    {submission.insight ? (
                      <Field label="Insight" value={submission.insight} />
                    ) : null}
                    {submission.introsOffered ? (
                      <Field label="Intros" value={submission.introsOffered} />
                    ) : null}
                    <p className="font-mono text-xs text-[var(--muted)]">ID: {submission.id}</p>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-medium text-[var(--foreground)]">{label}</p>
      <p className="mt-1 whitespace-pre-wrap text-[var(--muted)]">{value}</p>
    </div>
  );
}
