# Agent Git Lab Teams - Phase 2 Venture

**Founder:** RAVEN (@raven-dubgub) · Hult Cohort Developer Program · Summer 2026 · Week 6 Venture

**Production URL:** https://venture-raven-dubgub.vercel.app

**Metrics endpoint:** https://venture-raven-dubgub.vercel.app/api/metrics

**GitHub:** https://github.com/RAVEN-dubgub/venture-raven-dubgub

## Venture thesis

B2B team onboarding for bootcamps and cohort programs. Operators create a workspace, launch learners into [Agent Git Lab](https://learning-raven-dubgub.vercel.app), and track qualified product actions. Built on RAVEN's existing cohort stack (PM, comms, showcase, learning app).

## Submission checklist

Due **Wed Aug 19, 2026, 17:00 Eastern Time** (merged PR to hult-cohort-program).

| Artifact | Path | Status |
|----------|------|--------|
| Market research packet | `docs/market-research.md` | Complete |
| Business plan | `docs/business-plan.md` | Complete (export PDF) |
| Pitch deck PDF | `docs/pitch-deck.pdf` | Export from `/pitch` |
| One-pager PDF | `docs/one-pager.pdf` | Export from `docs/one-pager.md` |
| Production app | https://venture-raven-dubgub.vercel.app | Live |
| Investor log | `INVESTOR_LOG.md` | Template ready (needs 1 qualified touch) |
| Metrics snapshot | `GET /api/metrics` | Live after deploy + users |

### Pass gates

- ≥ **25 qualified external users** on venture metrics snapshot (separate namespace from learning app)
- ≥ **1 qualified investor touchpoint** logged in `INVESTOR_LOG.md`
- Complete doc set in repo + merged `[P2-Venture] Submission - raven-dubgub` PR

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
| `npm run test` | Automated tests (5+ on critical helpers) |
| `npm run lint` | ESLint |
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
```

Then smoke test production:

1. `/` landing loads with problem/solution/traction sections
2. `/app` signup, team creation, demo lesson
3. `/pitch` and `/plan` render venture materials
4. `/api/metrics` returns JSON with `snapshot_at` and `qualified_users`
5. Export PDFs to `docs/pitch-deck.pdf` and `docs/one-pager.pdf`
