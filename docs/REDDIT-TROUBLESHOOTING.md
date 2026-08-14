# Reddit troubleshooting — posts that "don't stay"

**Account:** u/Emergency_Home_5022 (display: RAVEN)  
**Product:** Agent Git Lab Teams  
**App URL:** https://venture-raven-dubgub.vercel.app/app  
**Last updated:** Aug 14, 2026

Use this doc when a post **looks submitted** but **vanishes from the subreddit feed**, or when AutoModerator / spam filters remove it instantly.

Related: `docs/REDDIT-POST-REMOVED.md` (r/learnprogramming incident), `docs/USER-PUSH.md` (copy-paste posts), `docs/REDDIT-SETUP.md` (automation).

---

## Why posts disappear (four layers)

| Layer | What you see | Who removed it | Typical trigger for RAVEN account |
|-------|----------------|----------------|-----------------------------------|
| **Site-wide spam filter** | Post on your profile logged in; **gone in incognito** / not in `/new` | Reddit (`removed_by_category: reddit`) | New account + URL in post + promo-shaped title |
| **AutoModerator** | Instant removal; sometimes a bot comment with reason | Subreddit AutoMod (`automod_filtered` / `automod_removed`) | Karma/age gate, banned words, link from low-karma account |
| **Crowd Control** | Silent — post may look fine to you but invisible to others | Subreddit setting (often "higher than default") | Not subscribed, zero comment karma **in that sub**, low Contributor Quality Score |
| **Human mod** | "[removed by moderators]" or modmail | Moderator (`moderator`) | Wrong thread type, megathread-only promo, repeated same project, rule break |
| **Wrong post type** | Submit succeeds but filtered faster | Any of above | **Link post** instead of **Text post**; multiple URLs; pitch deck in body |

**Key insight:** Reddit often **still shows the post to you** after removal. Always verify with a **logged-out / incognito** window on `reddit.com/r/SideProject/new` (or append `.json` to the post URL while logged out and check `removed_by_category`).

---

## Account requirements — u/Emergency_Home_5022

Exact thresholds are **not published** per sub. Observed / reported gates (Aug 2026):

| Subreddit | Approx. gate | Notes for this account |
|-----------|--------------|------------------------|
| **r/SideProject** | ~10–50 karma; some report ~50 before standalone posts stick | Self-promo allowed if product is live and you engage. Mods check **10% rule** (most activity should not be promo). Brand-new + link = filtered often. |
| **r/codingbootcamp** | **High** reputation filter + Crowd Control; mods **rarely override** accounts **< 3 months** with little sub history | Primary target in docs, but **worst choice for a cold account today**. Comment in sub first; wait for age + karma. |
| **r/learnprogramming** | Strict AutoMod | **Do not repost** — see `REDDIT-POST-REMOVED.md`. |

**Before any standalone promo post:**

1. Check karma: profile → karma breakdown (post vs comment).
2. Prefer **comment karma** from genuine replies in large subs (r/AskReddit, hobby subs) or **r/SideProject** threads on other people's projects.
3. Subscribe to the target sub; leave 2–3 **non-promo** comments there before posting.
4. If `removed_by_category` is **`reddit`** (site filter): **stop posting links**; comment-only for several days.

---

## Step-by-step — post that is more likely to stay

### 1. Choose post shape

| Do | Don't |
|----|-------|
| **Text post** (Reddit "Post" → Text) | Link post |
| **Zero URLs in title** | URL in title |
| **Zero or one URL in body** | App + pitch deck + learner app (three links) |
| Put link in **first comment** if body keeps getting filtered | Lead with "try my product" / "sign up" |
| Reply in thread for 1–2 hours | "DM me" |
| One subreddit per day | Cross-post same copy |

### 2. Diagnose after submit (60 seconds)

1. Open `https://www.reddit.com/r/SideProject/new/` in **incognito** — is your post there?
2. If not: open your post URL in incognito → add `.json` → search for `removed_by_category`.
3. Check for an **AutoModerator comment** on the post (only visible if not fully filtered).
4. **Do not** delete and repost the same text immediately (spam signal).

### 3. If filtered — escalation order

1. **Megathread comment** (r/SideProject) — see below. Lowest friction for new accounts.
2. **Text post, no URL in body** — link only in first comment.
3. **Modmail** — one short polite message; ask if standalone posts need minimum karma or megathread only.
4. **Build karma 3–7 days** — then retry standalone post.
5. **Discord / LinkedIn** — no karma gate; see `USER-PUSH.md`.

---

## r/SideProject — megathread vs standalone

The sub feed often shows a pinned/highlight thread like **"Share your Not-AI projects"** (wording may vary). That is intentional: the mod team routes many **show-and-tell** posts into **one thread** to reduce feed spam.

| Situation | Action |
|-----------|--------|
| Pinned megathread visible on sub home | **Comment there first** with project summary + questions. Add live URL in the same comment or a reply (one link). |
| No megathread / rules say standalone OK | Use **Text post** + minimal copy from `USER-PUSH.md` → Low karma section. |
| Standalone post filtered twice | Stop standalone attempts for 1–2 weeks; megathread + comments only. |

**r/SideProject rules pattern (observed):**

- Working demo required (you have this).
- "Just an idea" posts removed.
- Same project reposted in a short window → removed.
- Engage every comment on your thread.
- AI-wrapper-only projects discouraged — lead with **Git/bootcamp operator UX**, not "AI team portal."

---

## r/codingbootcamp — if SideProject fails

Better **audience fit**, worse **account gate** for u/Emergency_Home_5022:

- Reputation filter set **above default**; Crowd Control **above default**.
- Mods: new accounts **< 3 months** with little Reddit activity should **not expect** manual approval.
- Rules: on-topic bootcamp content only; disclose affiliation; no affiliate/referral tone; authentic explanation of value.

**Strategy:** Spend 1–2 weeks commenting in r/codingbootcamp threads (bootcamp choice, outcomes, instructor pain — no links). Then post **one** text thread with student-project framing and **one** app link. Require **flair** if the submit form asks — pick "Discussion" or closest match after reading sidebar.

Until then, prefer **Discord** (see `USER-PUSH.md`) for operator smoke tests.

---

## Safer minimal copy — low karma accounts

Use these instead of the full `USER-PUSH.md` Reddit blocks when filters keep catching you.

### A. Megathread comment (r/SideProject — preferred RIGHT NOW)

```
Solo student project: thin team portal for bootcamp Git onboarding.

Problem I kept seeing: operators rebuild the same first-week Git/GitHub workflow every cohort (workspace, lesson links, hand-holding).

Built: operator signs up → creates workspace → launches learners into a demo Git lesson. Next.js, Prisma, Neon, Vercel. Free, rough UI.

Stuck on: whether the first-run flow is obvious to a non-technical program manager.

Live demo: https://venture-raven-dubgub.vercel.app/app

Would love roast-level feedback:
1) First 60 seconds — confused or clear?
2) Missing screen you'd expect?
3) What would make this feel too "student demo" to trust?

I'll reply to every comment.
```

### B. Standalone text post — NO URL in body (link in first comment)

**Title:** `Bootcamp Git onboarding portal (solo student build) — does this flow make sense?`

**Body:**

```
I'm a solo student builder working on operator tooling for bootcamp cohorts.

Problem: a lot of programs duct-tape Slack, spreadsheets, and LMS tabs for first-week Git/GitHub onboarding.

What I built: a small web app where an operator creates a workspace and launches learners into a guided demo lesson. Stack is Next.js, Prisma, Neon, JWT cookies, Vercel.

Where I'm stuck: I'm not sure the first visit is obvious enough for a non-technical program manager.

I'd love blunt UX feedback in the comments:
1. First 60 seconds — confused or clear?
2. Missing tab or screen you'd expect?
3. Anything that feels too "student demo" to trust?

I'll post the live demo link in my first comment so this stays readable as a discussion post.
```

**First comment (immediately after submit):**

```
Live demo (free, no paywall): https://venture-raven-dubgub.vercel.app/app

Steps if you try it: sign up → create team → Start demo lesson. Happy to answer stack questions here.
```

### C. r/codingbootcamp — only after warm-up (text, one link)

**Title:** `Student project: bootcamp operator portal for Git onboarding — feedback from people who've TA'd?`

**Body:** Use the primary block in `USER-PUSH.md` but **remove** "Hult developer cohort program" if it triggers academic filters; replace with "solo student builder." **One link only.** No pitch deck. No deadline. No "external operators."

---

## What NOT to do (learned from r/learnprogramming)

- Two URLs in one post (app + pitch deck).
- "External operators" / "not my cohort classmates" / Aug 19 deadline.
- Reposting removed copy to another sub the same hour.
- Deleting filtered post and submitting identical text again same day.
- Automation (`npm run post:reddit`) on a cold account without checking visibility first.

---

## Quick reference — removal diagnosis

```
Can YOU see the post logged in?  → Yes
Can INCOGNITO see it in /new?    → No  = FILTERED (spam / automod / crowd control)
Can INCOGNITO open post URL?     → No  = removed or hard filtered
removed_by_category = reddit     = STOP link posts; comment-only for days
removed_by_category = automod_*  = Read bot comment; fix karma/format; modmail if unclear
Pinned megathread on sub home     = Comment there, don't fight standalone yet
```

---

## After a post sticks

- Stay in thread 1–2 hours; reply to every comment.
- Pitch deck **only if asked** in replies.
- Metrics: `curl -s https://venture-raven-dubgub.vercel.app/api/metrics`
- Do not ask cohort peers to sign up twice.
