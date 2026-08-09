# Agent workflow — Agent Git Lab Teams (Venture)

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Database:** PostgreSQL via Prisma (Neon)
- **Auth:** Email/password with JWT httpOnly cookies
- **Deploy:** Vercel

## Role map

| Task type | Agent | Tool |
|-----------|-------|------|
| Market research synthesis | Research | Cursor Agent |
| Product + docs | Development | Cursor Agent |
| Deploy / investor outreach | QA + Human | Vercel + email |

## Conventions

- Branch: `participants/summer26/phase-2-venture/RAVEN-dubgub`
- PR title (program): `[P2-Venture] Submission — raven-dubgub`
- Run `npm run test` and `npm run build` before claiming done

## This project

Venture extends Joshua's Agent Git Lab learning app into a B2B team portal. Venture metrics use namespace `venture-agent-git-lab-teams` (distinct from learning app Ludwitt registration).

Human steps: Neon DB, Vercel env vars, PDF exports, investor outreach, external user promotion.
