"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { PILOT_WILLINGNESS, ROLE_SEGMENTS } from "@/lib/interviews";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function InterviewsPage() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      roleSegment: String(form.get("roleSegment") ?? ""),
      organization: String(form.get("organization") ?? ""),
      cohortSize: String(form.get("cohortSize") ?? ""),
      experienceLevel: String(form.get("experienceLevel") ?? ""),
      onboardingProcess: String(form.get("onboardingProcess") ?? ""),
      painPoints: String(form.get("painPoints") ?? ""),
      currentTools: String(form.get("currentTools") ?? ""),
      progressSignals: String(form.get("progressSignals") ?? ""),
      idealOutcome: String(form.get("idealOutcome") ?? ""),
      pricingFeedback: String(form.get("pricingFeedback") ?? ""),
      switchingCost: String(form.get("switchingCost") ?? ""),
      productFeedback: String(form.get("productFeedback") ?? ""),
      followUpOk: form.get("followUpOk") === "on",
      introsOffered: String(form.get("introsOffered") ?? ""),
      willingnessToPilot: String(form.get("willingnessToPilot") ?? ""),
      notableQuote: String(form.get("notableQuote") ?? ""),
      insight: String(form.get("insight") ?? ""),
      contactName: String(form.get("contactName") ?? ""),
      contactEmail: String(form.get("contactEmail") ?? ""),
      consentGiven: form.get("consentGiven") === "on",
    };

    let response: Response;
    try {
      response = await fetch("/api/interviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      setState("error");
      setErrorMessage("Network error. Check your connection and try again.");
      return;
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      setState("error");
      setErrorMessage(error.error ?? "Unable to submit responses.");
      return;
    }

    const data = await response.json();
    setSubmissionId(data.id ?? null);
    setState("success");
    event.currentTarget.reset();
  }

  if (state === "success") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="card-elevated">
          <p className="section-label">Customer research</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Thank you</h1>
          <p className="mt-4 text-[var(--muted)]">
            Your interview-style responses were saved. RAVEN will review them for Phase 2 market
            validation. This is research only, not a sales signup.
          </p>
          {submissionId ? (
            <p className="mt-3 font-mono text-sm text-[var(--muted)]">Reference: {submissionId}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/app" className="btn-primary">
              View Agent Git Lab Teams
            </Link>
            <button type="button" className="btn-secondary" onClick={() => setState("idle")}>
              Submit another response
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="section-label">Customer research · Phase 2 venture</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Interview feedback form</h1>
      <p className="mt-3 text-[var(--muted)]">
        Share how you onboard learners to Git and GitHub today. RAVEN (@raven-dubgub) uses these
        responses for Agent Git Lab Teams research, not a sales call. Fields mirror{" "}
        <code className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5 text-sm">
          docs/INTERVIEW-SCRIPT.md
        </code>
        .
      </p>

      {state === "error" && errorMessage ? (
        <p
          className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-3 text-sm"
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <section className="card space-y-4">
          <h2 className="text-lg font-semibold">About you</h2>

          <div>
            <label htmlFor="roleSegment" className="mb-1 block text-sm font-medium">
              Role / segment *
            </label>
            <select id="roleSegment" name="roleSegment" required className="input-field">
              <option value="">Select your role</option>
              {ROLE_SEGMENTS.map((segment) => (
                <option key={segment.value} value={segment.value}>
                  {segment.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="organization" className="mb-1 block text-sm font-medium">
                Organization (optional)
              </label>
              <input
                id="organization"
                name="organization"
                placeholder="Bootcamp or program name"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="cohortSize" className="mb-1 block text-sm font-medium">
                Cohort size (optional)
              </label>
              <input
                id="cohortSize"
                name="cohortSize"
                placeholder="e.g. 20-50 seats"
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label htmlFor="experienceLevel" className="mb-1 block text-sm font-medium">
              Experience level (optional)
            </label>
            <input
              id="experienceLevel"
              name="experienceLevel"
              placeholder="Years running cohorts, team size, etc."
              className="input-field"
            />
          </div>
        </section>

        <section className="card space-y-4">
          <h2 className="text-lg font-semibold">Discovery</h2>

          <div>
            <label htmlFor="onboardingProcess" className="mb-1 block text-sm font-medium">
              How do you onboard learners to Git/GitHub today? *
            </label>
            <textarea
              id="onboardingProcess"
              name="onboardingProcess"
              required
              rows={4}
              className="input-field min-h-[6rem] resize-y"
              placeholder="Walk through week one of your last cohort."
            />
          </div>

          <div>
            <label htmlFor="painPoints" className="mb-1 block text-sm font-medium">
              Where do learners get stuck in the first two weeks? *
            </label>
            <textarea
              id="painPoints"
              name="painPoints"
              required
              rows={4}
              className="input-field min-h-[6rem] resize-y"
            />
          </div>

          <div>
            <label htmlFor="currentTools" className="mb-1 block text-sm font-medium">
              Current tool stack *
            </label>
            <textarea
              id="currentTools"
              name="currentTools"
              required
              rows={3}
              className="input-field min-h-[5rem] resize-y"
              placeholder="Discord, Notion, LMS, GitHub Classroom, custom stack…"
            />
          </div>

          <div>
            <label htmlFor="progressSignals" className="mb-1 block text-sm font-medium">
              How do you know learners are actually progressing? *
            </label>
            <textarea
              id="progressSignals"
              name="progressSignals"
              required
              rows={3}
              className="input-field min-h-[5rem] resize-y"
            />
          </div>

          <div>
            <label htmlFor="idealOutcome" className="mb-1 block text-sm font-medium">
              What would &quot;good enough&quot; look like for a lightweight team portal? *
            </label>
            <textarea
              id="idealOutcome"
              name="idealOutcome"
              required
              rows={3}
              className="input-field min-h-[5rem] resize-y"
            />
          </div>
        </section>

        <section className="card space-y-4">
          <h2 className="text-lg font-semibold">Pricing & switching</h2>

          <div>
            <label htmlFor="pricingFeedback" className="mb-1 block text-sm font-medium">
              Would $49/month per cohort (≤30 seats) feel reasonable for a pilot? *
            </label>
            <textarea
              id="pricingFeedback"
              name="pricingFeedback"
              required
              rows={3}
              className="input-field min-h-[5rem] resize-y"
            />
          </div>

          <div>
            <label htmlFor="switchingCost" className="mb-1 block text-sm font-medium">
              What would make you switch from your current stack? *
            </label>
            <textarea
              id="switchingCost"
              name="switchingCost"
              required
              rows={3}
              className="input-field min-h-[5rem] resize-y"
              placeholder="Who signs off: you, director, finance?"
            />
          </div>
        </section>

        <section className="card space-y-4">
          <h2 className="text-lg font-semibold">Product feedback & close</h2>

          <div>
            <label htmlFor="productFeedback" className="mb-1 block text-sm font-medium">
              Feedback on Agent Git Lab Teams (optional)
            </label>
            <textarea
              id="productFeedback"
              name="productFeedback"
              rows={3}
              className="input-field min-h-[5rem] resize-y"
              placeholder="If you tried the app at /app, what stood out?"
            />
          </div>

          <div>
            <label htmlFor="willingnessToPilot" className="mb-1 block text-sm font-medium">
              Willingness to pilot *
            </label>
            <select
              id="willingnessToPilot"
              name="willingnessToPilot"
              required
              className="input-field"
            >
              <option value="">Select one</option>
              {PILOT_WILLINGNESS.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="introsOffered" className="mb-1 block text-sm font-medium">
              Intros to other operators (optional)
            </label>
            <textarea
              id="introsOffered"
              name="introsOffered"
              rows={2}
              className="input-field min-h-[4rem] resize-y"
              placeholder="Names or segments, no PII required."
            />
          </div>

          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              name="followUpOk"
              className="mt-1 h-4 w-4 rounded border-[var(--border)]"
            />
            <span>Yes, RAVEN may follow up with a pilot link when ready.</span>
          </label>

          <div>
            <label htmlFor="notableQuote" className="mb-1 block text-sm font-medium">
              Notable quote (optional)
            </label>
            <textarea
              id="notableQuote"
              name="notableQuote"
              rows={2}
              className="input-field min-h-[4rem] resize-y"
              placeholder="One sentence that captures your situation."
            />
          </div>

          <div>
            <label htmlFor="insight" className="mb-1 block text-sm font-medium">
              Insight for the founder (optional)
            </label>
            <textarea
              id="insight"
              name="insight"
              rows={2}
              className="input-field min-h-[4rem] resize-y"
              placeholder="What surprised you about your current process?"
            />
          </div>
        </section>

        <section className="card space-y-4">
          <h2 className="text-lg font-semibold">Contact (optional)</h2>
          <p className="text-sm text-[var(--muted)]">
            Leave blank for anonymous research. If provided, only RAVEN uses it for follow-up.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contactName" className="mb-1 block text-sm font-medium">
                First name
              </label>
              <input id="contactName" name="contactName" className="input-field" />
            </div>
            <div>
              <label htmlFor="contactEmail" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input id="contactEmail" name="contactEmail" type="email" className="input-field" />
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              name="consentGiven"
              required
              className="mt-1 h-4 w-4 rounded border-[var(--border)]"
            />
            <span>
              I consent to RAVEN storing these responses for market research and Phase 2 validation.
              *
            </span>
          </label>
        </section>

        <button type="submit" className="btn-primary" disabled={state === "submitting"}>
          {state === "submitting" ? "Submitting…" : "Submit interview responses"}
        </button>
      </form>
    </div>
  );
}
