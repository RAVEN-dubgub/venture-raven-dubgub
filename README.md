# Agent Git Lab Teams — Phase 2 Venture

**Joshua Scotland (@raven-dubgub)** · Hult Cohort Developer Program · Summer 2026 · Week 6 Venture

Production URL: **https://venture-raven-dubgub.vercel.app** (set after deploy)

## Venture thesis

B2B team onboarding for bootcamps and cohort programs. Operators create a workspace, launch learners into [Agent Git Lab](https://learning-raven-dubgub.vercel.app), and track qualified product actions. Built on Joshua's existing cohort stack (PM, comms, showcase, learning app).

## Submission checklist

Due **Wed Aug 19, 2026, 17:00 Eastern Time** (merged PR to hult-cohort-program).

| Artifact | Path | Status |
|----------|------|--------|
| Market research packet | `docs/market-research.md` | Draft (expand interviews) |
| Business plan | `docs/business-plan.md` | Draft (export PDF) |
| Pitch deck PDF | `docs/pitch-deck.pdf` | Export from `/pitch` |
| One-pager PDF | `docs/one-pager.pdf` | Export from `docs/one-pager.md` |
| Production app | Deploy URL above | Scaffold ready |
| Investor log | `INVESTOR_LOG.md` | Empty (needs 1 qualified touch) |
| Metrics snapshot | `GET /api/metrics` | After deploy + users |

### Pass gates

- ≥ **25 qualified external users** on venture metrics snapshot (separate namespace from learning app)
- ≥ **1 qualified investor touchpoint** logged in `INVESTOR_LOG.md`
- Complete doc set in repo + merged `[P2-Venture] Submission — raven-dubgub` PR

## Stack

Next.js 16 · TypeScript · Tailwind 4 · Prisma · Neon · JWT auth · Vercel

## Local

```powershell
cd venture-raven-dubgub
copy .env.example .env
# fill DATABASE_URL + AUTH_SECRET
npm install
npx.cmd prisma migrate dev
npm run dev
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run test` (5+ automated tests on critical helpers)
- `npm run db:migrate`

Deploy: [DEPLOY.md](./DEPLOY.md) · Reviewer smoke: [docs/REVIEWER.md](./docs/REVIEWER.md)

## Product routes

| Route | Purpose |
|-------|---------|
| `/` | Venture landing |
| `/app` | Production app (signup, team workspace, demo lesson) |
| `/plan` | Business plan viewer |
| `/pitch` | Pitch deck preview |
| `/privacy` | Privacy policy |
| `/api/metrics` | Date-stamped metrics for submission |

## Related repos

| Repo | URL |
|------|-----|
| Learning app | https://learning-raven-dubgub.vercel.app |
| PM platform | https://pm-raven-dubgub.vercel.app |
| Comms | https://comms-raven-dubgub.vercel.app |
| Showcase | https://showcase-raven-dubgub.vercel.app |
