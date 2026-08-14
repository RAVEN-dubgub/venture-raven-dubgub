# User promotion copy — Agent Git Lab Teams

**Founder:** RAVEN (@raven-dubgub) only. Post externally (not cohort peers counting twice).

**Signup URL:** https://venture-raven-dubgub.vercel.app/app

**Qualified action:** Sign up → create a team → start the demo lesson.

**Pass gate:** ≥25 `qualified_users` on `GET /api/metrics` before Wed Aug 19, 2026 17:00 ET.

---

## LinkedIn (copy-paste)

Building in public: I shipped **Agent Git Lab Teams**, a team portal for bootcamp operators who need Git/GitHub onboarding without rebuilding PM, comms, and learning tooling from scratch.

If you run a cohort, bootcamp, or internal academy (20–200 seats), I would love feedback on a 5-minute pilot:

https://venture-raven-dubgub.vercel.app/app

Steps: sign up → create a workspace → start the demo lesson.

Built solo as part of the Hult Cohort Developer Program. Learner app: https://learning-raven-dubgub.vercel.app

#buildinpublic #edtech #devtools #bootcamp

---

## Discord (bootcamp / dev communities)

Hey, RAVEN here (@raven-dubgub).

**Agent Git Lab Teams** is a free team portal where bootcamp operators create a workspace and launch learners into guided Git/GitHub lessons.

I need **external operators** (not my cohort classmates) to run a 5-minute smoke test before Aug 19. Everything is self-serve:

**Try it:** https://venture-raven-dubgub.vercel.app/app

**Steps:**
1. Open the link above
2. Sign up with email and password
3. Create a team name
4. Click **Start demo lesson**

That is it. No DM needed. Reply in this thread if something breaks or you have feedback.

**Curious about the product?** Pitch deck: https://venture-raven-dubgub.vercel.app/pitch

---

## Reddit (safer variants — do not use removed learnprogramming copy)

**Removed Aug 14, 2026:** r/learnprogramming AutoModerator removed our first post. See `docs/REDDIT-POST-REMOVED.md`. **Do not repost there** without reading rules and mod approval.

**Discord is still the best channel** for the original operator smoke-test copy (above). Reddit = different tone, one link, public replies only.

**Rules for all Reddit posts:** one subreddit at a time · one link (app only) · reply in thread · no DM · no cohort/deadline language · engage in comments.

Setup: `docs/REDDIT-SETUP.md` · Automate: `npm run post:reddit` (defaults to r/codingbootcamp)

---

### Primary — r/codingbootcamp

**Title:** Student project: team portal for bootcamp Git onboarding — would operators roast this?

**Body:**

I am a solo student builder (Hult developer cohort program). I kept seeing the same pain in bootcamp threads: instructors duct-tape Slack, spreadsheets, and LMS tabs just to get a cohort through first-week Git/GitHub.

So I built **Agent Git Lab Teams** — a small web app where an operator creates a workspace and drops learners into a guided Git lesson (Next.js, Prisma, Neon, Vercel). It is free, rough, and very much a learning project, not a sales pitch.

If you have ever run or TA'd a cohort, I would genuinely appreciate a **5-minute smoke test** and blunt feedback in **this thread** (please do not DM — I want public notes so others can chime in):

1. Sign up at https://venture-raven-dubgub.vercel.app/app  
2. Create a team name  
3. Click **Start demo lesson**

**Questions I am trying to answer:**
- Is the operator flow obvious on first visit?
- Would you trust this for a 20–50 seat pilot, or what would block you?
- What is the first thing you would delete?

Happy to answer anything about the stack or scope in the comments.

---

### Backup — r/SideProject

**Title:** Built a bootcamp operator portal for Git onboarding (solo student project) — roast my UX

**Body:**

**Problem:** Bootcamp operators often rebuild the same Git onboarding workflow every cohort (workspace setup, lesson links, comms). I wanted a thin team layer on top of a learner app I already shipped for class.

**What I built:** Agent Git Lab Teams — operator signs up, creates a workspace, launches learners into a demo Git/GitHub lesson. Stack: Next.js 16, TypeScript, Tailwind, Prisma, Neon Postgres, JWT cookies, deployed on Vercel.

**Where I am stuck:** I am not sure the first-run operator flow is obvious enough for a non-technical program manager.

Live app (free, no paywall): https://venture-raven-dubgub.vercel.app/app

**Feedback I would love in the comments (public replies only):**
1. First 60 seconds — confused or clear?
2. Missing tab or screen you would expect?
3. Anything that feels too "student demo" to trust?

I will reply to every comment. Not trying to sell anything — just learning whether this solves a real operator headache.

---

### Optional — r/webdev (architecture feedback, not operator recruitment)

**Title:** Next.js + Prisma team portal for bootcamp onboarding — auth/workspace pattern feedback?

**Body:**

Solo student project: a multi-tenant-ish team portal (operators + learners) on Next.js App Router, Prisma, Neon, JWT httpOnly cookies.

I am trying to keep the operator surface minimal: signup → create workspace → launch demo lesson in a separate learner app. Would love feedback from anyone who has shipped similar B2B-lite onboarding:

- Does splitting operator app vs learner app make sense at this scale?
- JWT session + workspace membership — anything you would harden on day one?

Demo (rough UI): https://venture-raven-dubgub.vercel.app/app

Please reply in thread — happy to share schema or route structure in comments if useful.

---

### Do not post (archived — removed from r/learnprogramming)

The block below triggered AutoModerator. Kept for reference only.

<details>
<summary>Removed copy (do not use)</summary>

**Title:** Built a free team portal for bootcamp Git onboarding - looking for operator feedback

**Body:** (included "external operators", "not my cohort classmates", two URLs, pitch deck link — see git history or `docs/REDDIT-POST-REMOVED.md`)

</details>

---

## Short DM (Twitter/X, Slack, email)

Hi — RAVEN here. I built a team portal for bootcamp Git onboarding and need external operators to try a 5-min pilot before Aug 19: https://venture-raven-dubgub.vercel.app/app (signup → create team → demo lesson). No pitch deck, just feedback if you have 5 minutes.

---

## Metrics check (after posting)

```bash
curl -s https://venture-raven-dubgub.vercel.app/api/metrics
```

Target: `"qualified_users": 25` or higher before submission snapshot.

---

## Do not

- Ask cohort peers to sign up twice to inflate metrics
- Fabricate users or automate signups
- Share private investor contact info in public posts
