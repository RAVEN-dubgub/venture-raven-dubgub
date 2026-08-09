import { FOUNDER_DISPLAY_NAME, FOUNDER_GITHUB } from "@/lib/venture";

const slides = [
  {
    title: "Agent Git Lab Teams",
    body: "Team onboarding for bootcamps that need Git and GitHub fluency without rebuilding PM, comms, and learning tooling from scratch.",
    tag: "Vision",
  },
  {
    title: "Problem",
    body: "Operators juggle Discord, Notion, and one-off Git workshops. Learners lose the first two weeks to tooling setup and stall before their first meaningful pull request.",
    tag: "Market pain",
  },
  {
    title: "Solution",
    body: "A team portal plus Agent Git Lab learner paths. Operators create a workspace, share a launch link, and track qualified learner actions from one place.",
    tag: "Product",
  },
  {
    title: "Product demo",
    body: "Sign up, create a cohort workspace, and launch learners into guided Git lessons. Qualified actions (team created, demo lesson started) feed a public metrics snapshot for operators and investors.",
    tag: "How it works",
  },
  {
    title: "Market",
    body: "Coding bootcamps, university cohort programs, and internal academies training agent-first developers. SAM ~$780M in North America and Europe cohort-based programs.",
    tag: "Opportunity",
  },
  {
    title: "Competition",
    body: "GitHub Education bundles, Codecademy for Teams, and custom LMS stacks. Our wedge: cohort-native workflows, agent-assisted lesson paths, and a production stack already live.",
    tag: "Positioning",
  },
  {
    title: "Business model",
    body: "Starter $49/month per cohort (≤30 seats). Pro $149/month (≤120 seats, analytics export, priority support). Annual prepay: two months free.",
    tag: "Revenue",
  },
  {
    title: "Traction",
    body: `${FOUNDER_DISPLAY_NAME} shipped the Hult cohort stack in production: PM, comms, showcase, and the Agent Git Lab learner app. Venture metrics run in a separate namespace.`,
    tag: "Proof",
  },
  {
    title: "Go-to-market",
    body: "Founder-led outreach to bootcamp directors, demo days, and GitHub Education partners. Target: three pilot operators in Q4 2026.",
    tag: "GTM",
  },
  {
    title: "Team and ask",
    body: `${FOUNDER_DISPLAY_NAME} (${FOUNDER_GITHUB}): full-stack builder, cohort PM/comms/showcase/learning apps shipped solo with agent workflows. Seeking angel intros and $250k pre-seed to hire the first customer success lead.`,
    tag: "Ask",
  },
];

export default function PitchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <p className="section-label">Seed deck preview</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Pitch deck</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Ten slides covering problem, product, market, model, traction, and ask. Export to PDF as
          docs/pitch-deck.pdf for submission.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {slides.map((slide, index) => (
          <article key={slide.title} className="card flex min-h-52 flex-col">
            <div className="flex items-center justify-between gap-2">
              <p className="section-label">{slide.tag}</p>
              <p className="text-xs font-medium text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")} / {slides.length}
              </p>
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">{slide.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{slide.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
