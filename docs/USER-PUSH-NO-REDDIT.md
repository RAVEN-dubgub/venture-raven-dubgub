# User push: NO REDDIT (Aug 14-19, 2026)

**Founder:** RAVEN (@raven-dubgub) only. No real name in public posts.

**Why this doc:** u/Emergency_Home_5022 is caught by Reddit's site-wide spam filter. Do **not** waste time on Reddit until the account has comment karma and sub history (see `docs/REDDIT-TROUBLESHOOTING.md`). Use the channels below instead.

**Signup URL:** https://venture-raven-dubgub.vercel.app/app

**Qualified user (counts toward ≥25 gate):** Sign up → create a team → click **Start demo lesson**. Verify with:

```bash
curl -s https://venture-raven-dubgub.vercel.app/api/metrics
```

**Do not:** Ask cohort classmates to sign up (counts twice / invalid). Do not automate signups.

**Sunday Aug 16 checkpoint:** Aim for ≥5 qualified external users before interview day. Full gate: ≥25 by Wed Aug 19, 17:00 ET.

---

## Priority order (solo founder, low effort)

| Rank | Channel | Effort | Likely qualified? | Do when |
|------|---------|--------|-------------------|---------|
| 1 | **Discord** | 5 min | High (operator communities) | **Today, first** |
| 2 | **Direct LinkedIn DMs** (5 operators) | 30 min | Highest (1:1 intent) | **Today** |
| 3 | **LinkedIn personal post** | 10 min | Medium-high | Today |
| 4 | **Hult / cohort Slack** (#general or #help, not peer-only) | 5 min | Medium (avoid classmates) | Today if allowed |
| 5 | **GitHub README** call-for-testers | 2 min | Low-medium (dev curiosity) | Today |
| 6 | **Indie Hackers** "Share what you're working on" | 15 min | Medium | Fri Aug 15 |
| 7 | **Hacker News Show HN** | 20 min | Mixed (lots of traffic, few operators) | Fri-Sat if time |
| 8 | **Dev.to** technical post | 45 min | Low-medium | Sat buffer |
| 9 | **X / Twitter thread** | 15 min | Low | Optional |

Reddit copy stays in `docs/USER-PUSH.md` for when karma recovers, **not for this week.**

---

## 1. Discord (fastest: already working)

**Where:** Bootcamp / dev server you are already in (not cohort-only).

**Automate (optional):** `npm run post:discord` from repo root: see `docs/SOCIAL-AUTOMATION.md`.

**Title:** N/A (channel post)

**Body (paste as-is):**

```
Hey, RAVEN here (@raven-dubgub).

**Agent Git Lab Teams** is a free team portal where bootcamp operators create a workspace and launch learners into guided Git/GitHub lessons.

I need **external operators** (not my cohort classmates) to run a 5-minute smoke test. Everything is self-serve:

**Try it:** https://venture-raven-dubgub.vercel.app/app

**Steps:**
1. Open the link above
2. Sign up with email and password
3. Create a team name
4. Click **Start demo lesson**

That is it. No DM needed. Reply in this thread if something breaks or you have feedback.

**Curious about the product?** Pitch deck: https://venture-raven-dubgub.vercel.app/pitch
```

**Qualified funnel:** Operator signs up → creates team → starts demo lesson. One reply in thread = potential interview lead.

**Note:** Best channel for same-day smoke tests. Pin or bump once per server max.

---

## 2. LinkedIn personal post (RAVEN / student builder: no real name)

**Profile:** Post from the account you use for #buildinpublic. Display name can be "RAVEN" or handle; bio can say "student builder · Hult Cohort Developer Program."

**Title:** N/A (LinkedIn post)

**Body:**

```
Building in public: I shipped Agent Git Lab Teams, a team portal for bootcamp operators who need Git/GitHub onboarding without rebuilding PM, comms, and learning tooling from scratch.

If you run a cohort, bootcamp, or internal academy (20-200 seats), I would love feedback on a 5-minute pilot:

https://venture-raven-dubgub.vercel.app/app

Steps: sign up → create a workspace → start the demo lesson.

Built solo as part of the Hult Cohort Developer Program. Learner app: https://learning-raven-dubgub.vercel.app

#buildinpublic #edtech #devtools #bootcamp
```

**Qualified funnel:** PMs and bootcamp leads who complete all three steps. Comment "done" and ask what confused them = interview candidate.

**Note:** Post in the morning US time. Reply to every comment within 2 hours.

---

## 3. Hacker News: Show HN

**When:** Tue-Thu 9-11am ET works best. One submission only.

**Title:** Show HN: Agent Git Lab Teams - bootcamp operator portal for Git onboarding

**Body:**

```
Hi HN, RAVEN here, solo student builder.

Problem: bootcamp operators often duct-tape Slack, spreadsheets, and LMS tabs for first-week Git/GitHub onboarding. They rebuild the same workflow every cohort.

What I built: a thin team portal where an operator signs up, creates a workspace, and launches learners into a guided demo Git lesson. Stack: Next.js 16, TypeScript, Prisma, Neon Postgres, JWT cookies, Vercel.

Try it (free, no paywall): https://venture-raven-dubgub.vercel.app/app
Steps: sign up → create team → Start demo lesson.

I am looking for blunt UX feedback from anyone who has run or TA'd a cohort:
1. First 60 seconds: confused or clear?
2. Missing screen you would expect?
3. What would block you from a 20-seat pilot?

Happy to discuss architecture in comments. Not selling anything; learning whether this solves a real operator headache.

Repo: https://github.com/RAVEN-dubgub/venture-raven-dubgub
```

**Qualified funnel:** Low conversion rate but high-quality comments. Anyone who says they tried it and mentions a specific friction point = follow up for customer interview.

**Note:** HN moderators remove overt "please sign up for my class project" framing. Keep tone technical and feedback-seeking.

---

## 4. Indie Hackers: Share what you're working on

**Where:** https://www.indiehackers.com/post/new → "Share what you're working on" (or equivalent feed post).

**Title:** Bootcamp Git onboarding portal, looking for operator smoke tests

**Body:**

```
Hey IH, RAVEN (@raven-dubgub), solo student builder in the Hult Cohort Developer Program.

I shipped Agent Git Lab Teams: a B2B-lite portal where bootcamp operators create a workspace and launch learners into guided Git/GitHub lessons. It sits on top of a learner app I already run in production for my cohort stack.

Live app: https://venture-raven-dubgub.vercel.app/app
Try: sign up → create team → Start demo lesson (5 min).

Stack: Next.js, Prisma, Neon, Vercel. Pricing sketched at $49/mo Starter but everything is free right now; I need operator feedback, not revenue yet.

Questions I am trying to answer:
- Is the first-run flow obvious for a non-technical program manager?
- Would you trust this for a 20-50 seat pilot?
- What is the first thing you would delete?

Would love roast-level feedback from anyone running cohorts, internal academies, or DevRel onboarding programs.
```

**Qualified funnel:** Indie Hackers skews founders, not all bootcamp operators: still worth one post. DM respondents who mention running a cohort.

---

## 5. Dev.to: technical angle

**Tags:** `#nextjs` `#webdev` `#opensource` `#education`

**Title:** Building a multi-tenant bootcamp portal on Next.js 16 + Prisma + Neon

**Body:**

```
## Context

I am RAVEN (@raven-dubgub), building Agent Git Lab Teams as a Phase 2 venture project: a team layer on top of an existing learner app for Git/GitHub onboarding in bootcamp cohorts.

## Problem

Operators rebuild the same first-week Git workflow every cohort, workspace setup, lesson links, comms. I wanted a minimal operator surface without rebuilding an LMS.

## Architecture

- **Operator app** (this repo): Next.js 16 App Router, JWT httpOnly cookies, Prisma, Neon Postgres
- **Learner app** (separate deploy): guided lessons, launch via token
- **Qualified action:** signup → create workspace → start demo lesson (tracked in `/api/metrics`)

Flow:
1. Operator signs up at `/app`
2. Creates a team (workspace)
3. Clicks **Start demo lesson** → learner app opens with context

## What I would love feedback on

If you have shipped B2B-lite onboarding or edtech portals:

- Does splitting operator vs learner apps make sense at this scale?
- JWT session + workspace membership: what would you harden on day one?

**Live demo (rough UI):** https://venture-raven-dubgub.vercel.app/app

Please try: sign up → create team → demo lesson, then leave a comment with what broke or confused you.

Repo: https://github.com/RAVEN-dubgub/venture-raven-dubgub
```

**Qualified funnel:** Developers trying the demo count if they complete all three steps. Fewer bootcamp operators than Discord/LinkedIn, good for architecture comments and GitHub stars.

---

## 6. Direct outreach: 5 bootcamp operator LinkedIn messages

**How:** Search LinkedIn for "bootcamp director", "program manager coding bootcamp", "head of education" + filter 2nd connections. Personalize `[COMPANY]` and `[THEIR ROLE]`. Keep under 300 characters for mobile.

**Message 1: cold operator:**

```
Hi [Name], RAVEN here, student builder working on Git onboarding tooling for bootcamp operators. Would you try a 5-min smoke test? https://venture-raven-dubgub.vercel.app/app (signup → create team → demo lesson). Blunt UX feedback welcome, no pitch.
```

**Message 2: TA / instructor angle:**

```
Hi [Name], saw you TA at [COMPANY]. I built a free operator portal for first-week Git/GitHub cohort setup. 5-min test: https://venture-raven-dubgub.vercel.app/app, signup, create team, start demo lesson. Would love one thing you'd change for your cohort.
```

**Message 3: DevRel / academy lead:**

```
Hi [Name], RAVEN (@raven-dubgub). Building a thin team portal for cohort Git onboarding (Next.js + learner app). If you run internal academies: 5-min pilot at https://venture-raven-dubgub.vercel.app/app, curious if the operator flow is obvious on first visit.
```

**Message 4: second-degree warm intro:**

```
Hi [Name], we share a connection with [MUTUAL]. I shipped a bootcamp operator portal for Git onboarding and need external operator eyes (not classmates). https://venture-raven-dubgub.vercel.app/app, 5 min: signup → team → demo lesson. Open to a quick call if something breaks?
```

**Message 5: follow-up (send 48h after no reply):**

```
Hi [Name], quick bump on the Git onboarding portal I mentioned. Self-serve 5-min test: https://venture-raven-dubgub.vercel.app/app (signup → create team → demo lesson). No worries if timing is bad, one line of feedback helps a lot.
```

**Qualified funnel:** Highest intent channel. Ask them to reply "done" when finished. Offer 15-min interview slot (`docs/INTERVIEW-SCRIPT.md`).

**Note:** Do not mention Hult deadline, cohort grades, or "need 25 users", sounds like homework, not product research.

---

## 7. Hult / cohort Slack

**Where:** Program Slack (if you have `#general`, `#showcase`, `#help`, or `#venture`, **not** a DM blast to classmates).

**Rules:** Cohort peers who sign up may **not** count as external qualified users. Post for **referrals outward** ("know a bootcamp operator?") not peer signups.

**Title:** N/A (Slack message)

**Body:**

```
RAVEN here, for my Phase 2 venture I built Agent Git Lab Teams (operator portal for bootcamp Git onboarding).

I need **external** operators (not our cohort) to try a 5-min smoke test before next week:

https://venture-raven-dubgub.vercel.app/app
→ sign up → create team → Start demo lesson

If you know a bootcamp PM, TA, or DevRel lead **outside** this program, would you forward this link? Public feedback in replies appreciated.

Deck if curious: https://venture-raven-dubgub.vercel.app/pitch
```

**Qualified funnel:** Only **external** referrals count. If a classmate tries it, use for UX notes only; do not count toward metrics gate.

**Note:** Check program rules before posting; some cohort Slacks restrict promotion.

---

## 8. GitHub README: call for testers

Add this block near the top of `README.md` (after Production URL):

```markdown
## Call for testers (external operators)

Bootcamp / academy operators: try a **5-minute smoke test**, https://venture-raven-dubgub.vercel.app/app (sign up → create team → **Start demo lesson**). Open an issue with UX feedback or email via GitHub profile. Built by RAVEN (@raven-dubgub); not for cohort peer double-counting.
```

**Qualified funnel:** Low volume but persistent, anyone landing from repo search. Issues with "tried the demo" = interview lead.

---

## 9. X / Twitter: thread stub (optional)

**Tweet 1:**

```
Building in public: shipped a bootcamp operator portal for Git/GitHub onboarding (solo student project).

Problem: operators rebuild the same first-week Git workflow every cohort.

Try it (5 min): https://venture-raven-dubgub.vercel.app/app
signup → create team → demo lesson

Thread on what I learned 🧵
```

**Tweet 2:**

```
Stack: Next.js 16, Prisma, Neon, JWT cookies, Vercel.

Split operator app vs learner app so PMs get a thin workspace layer without a full LMS rebuild.

Repo: https://github.com/RAVEN-dubgub/venture-raven-dubgub
```

**Tweet 3:**

```
Looking for blunt feedback from anyone who has run or TA'd a cohort:

1. First 60 sec, confused or clear?
2. Missing screen?
3. Trust blocker for a 20-seat pilot?

Reply or quote-tweet, I will answer everything.
```

**Qualified funnel:** Low unless you already have edtech/dev followers. Best as cross-post after LinkedIn/Discord.

---

## After every push: metrics check

```bash
curl -s https://venture-raven-dubgub.vercel.app/api/metrics
```

Log `"qualified_users"` daily in PR #290 draft or a personal note. Target: **≥5 by Sun Aug 16**, **≥25 by Wed Aug 19**.

---

## Related docs

| Doc | Purpose |
|-----|---------|
| `docs/USER-PUSH.md` | Full copy including Reddit (use when karma recovers) |
| `docs/SOCIAL-AUTOMATION.md` | Discord webhook + `npm run post:discord` |
| `docs/REDDIT-TROUBLESHOOTING.md` | Why posts vanish; karma recovery |
| `docs/INTERVIEW-SCRIPT.md` | Convert testers into customer interviews |
| `JOSHUA-TODO.md` | Human-only gates checklist |
