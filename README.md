# Agent Git Lab Teams - Phase 2 Venture

**Founder:** RAVEN (@raven-dubgub) · Hult Cohort Developer Program · Summer 2026 · Week 6 Venture

**Production URL:** https://venture-raven-dubgub.vercel.app

**App signup (try the demo):** https://venture-raven-dubgub.vercel.app/app

## Call for testers (external operators)

Bootcamp / academy operators: try a **5-minute smoke test** — https://venture-raven-dubgub.vercel.app/app (sign up → create team → **Start demo lesson**). Open an [issue](https://github.com/RAVEN-dubgub/venture-raven-dubgub/issues) with UX feedback. Built by RAVEN (@raven-dubgub). Cohort classmates: refer external operators instead of double-counting signups.

**Metrics endpoint:** https://venture-raven-dubgub.vercel.app/api/metrics

**App namespace:** `venture-agent-git-lab-teams`

**GitHub:** https://github.com/RAVEN-dubgub/venture-raven-dubgub

## Venture thesis

B2B team onboarding for bootcamps and cohort programs. Operators create a workspace, launch learners into [Agent Git Lab](https://learning-raven-dubgub.vercel.app), and track qualified product actions. Built on RAVEN's existing cohort stack (PM, comms, showcase, learning app).

## Submission checklist

Due **Wed Aug 19, 2026, 17:00 Eastern Time** (merged PR to hult-cohort-program).

| Artifact | Path | Status |
|----------|------|--------|
| Market research packet | `docs/market-research.md` | Secondary research done; **5 external interviews pending (founder)** |
| Business plan | `docs/business-plan.md` | Complete |
| Business plan PDF | `docs/business-plan.pdf` | Complete |
| Financial model | `docs/financial-model.md`, `docs/financial-model.csv` | Complete |
| Pitch deck PDF | `docs/pitch-deck.pdf` | Complete |
| One-pager PDF | `docs/one-pager.pdf` | Complete |
| Production app | https://venture-raven-dubgub.vercel.app | Live |
| Investor log | `INVESTOR_LOG.md` | Templates ready; **≥1 touch pending (founder)** |
| Metrics snapshot | `GET /api/metrics` | Live (`qualified_users`: promote external signups) |
| Cohort submission PR | `hult-cohort-program/submissions/raven-dubgub-p2-venture.md` | Draft ready |
| Human-only gates | `JOSHUA-TODO.md` | Documented |

### Pass gates

| Gate | Status |
|------|--------|
| ≥ **25 qualified external users** on venture metrics | **Blocked on founder** (0 at Aug 9 snapshot) |
| ≥ **1 qualified investor touchpoint** in `INVESTOR_LOG.md` | **Blocked on founder** |
| 5 external customer interviews | **Blocked on founder** (template in market research) |
| Complete doc set in repo + merged `[P2-Venture] Submission - raven-dubgub` PR | Docs done; PR open; merge needs staff + gates |

See **`JOSHUA-TODO.md`** for exact next actions on human-only items.

## Stack

Next.js 16 · TypeScript · Tailwind 4 · Prisma · Neon · JWT auth · Vercel

## Local development

```powershell
cd venture-raven-dubgub
copy .env.example .env
# fill DATABASE_URL + AUTH_SECRET
npm install
npx.cmd prisma migrate dev
npm run dev
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Production build (Prisma generate + Next.js) |
| `npm run test` | Automated tests (6 on critical helpers) |
| `npm run lint` | ESLint |
| `npm run export:pdfs` | Regenerate `docs/*.pdf` for submission |
| `npm run db:migrate` | Deploy Prisma migrations |

Deploy: [DEPLOY.md](./DEPLOY.md) · Reviewer smoke: [docs/REVIEWER.md](./docs/REVIEWER.md)

## Product routes

| Route | Purpose |
|-------|---------|
| `/` | Venture landing |
| `/app` | Production app (signup, team workspace, demo lesson) |
| `/plan` | Business plan viewer |
| `/pitch` | Pitch deck preview (10 slides) |
| `/privacy` | Privacy policy |
| `/api/metrics` | Date-stamped metrics for submission |
| `/api/health` | Health check |

## Connected repos

| Product | URL |
|---------|-----|
| Learning app | https://learning-raven-dubgub.vercel.app |
| PM platform | https://pm-raven-dubgub.vercel.app |
| Comms | https://comms-raven-dubgub.vercel.app |
| Showcase | https://showcase-raven-dubgub.vercel.app |

## Pre-submission verification

```powershell
npm run test
npm run build
npm run lint
npm run export:pdfs
```

Then smoke test production:

1. `/` landing loads with problem/solution/traction sections
2. `/app` signup, team creation, demo lesson
3. `/pitch` and `/plan` render venture materials
4. `/api/metrics` returns JSON with `snapshot_at` and `qualified_users`
5. Confirm PDFs in `docs/pitch-deck.pdf`, `docs/one-pager.pdf`, `docs/business-plan.pdf`
