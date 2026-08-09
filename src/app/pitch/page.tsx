const slides = [
  {
    title: "Agent Git Lab Teams",
    body: "Team onboarding for bootcamps that need Git/GitHub fluency without rebuilding PM, comms, and learning tooling.",
  },
  {
    title: "Problem",
    body: "Operators juggle Discord, Notion, and one-off Git workshops. Learners stall before their first meaningful PR.",
  },
  {
    title: "Solution",
    body: "A team portal plus Agent Git Lab learner paths. Operators create a workspace, share a launch link, and track qualified actions.",
  },
  {
    title: "Market",
    body: "Bootcamps, university cohort programs, and internal academies training agent-first developers.",
  },
  {
    title: "Traction",
    body: "Built on @raven-dubgub's Hult cohort stack: PM, comms, showcase, and learning app already in production.",
  },
  {
    title: "Business model",
    body: "Starter $49/mo per cohort (≤30 seats) · Pro $149/mo (≤120 seats, analytics export, priority support).",
  },
  {
    title: "Go-to-market",
    body: "Founder-led outreach to bootcamp directors, demo days, and GitHub Education partners.",
  },
  {
    title: "Team",
    body: "@raven-dubgub - full-stack builder, cohort PM/comms/showcase/learning apps shipped solo with agent workflows.",
  },
  {
    title: "Ask",
    body: "Pilot 3 bootcamp operators in Q4 2026. Seeking angel intros and $250k pre-seed to hire first customer success lead.",
  },
];

export default function PitchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Pitch deck</h1>
          <p className="mt-2 text-[var(--muted)]">
            Web preview for reviewers. Export PDF to docs/pitch-deck.pdf before submission.
          </p>
        </div>
        <p className="text-sm text-[var(--muted)]">10 slides · one-pager: docs/one-pager.md</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {slides.map((slide, index) => (
          <article key={slide.title} className="card min-h-48">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--sage)]">
              Slide {index + 1}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{slide.title}</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{slide.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
