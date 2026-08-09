# Deploy — Venture app (Neon + Vercel)

## 1. Neon

Create project `venture-raven-dubgub`, copy pooled `DATABASE_URL`.

## 2. GitHub

```powershell
cd venture-raven-dubgub
git init
git add .
git commit -m "Week 6 venture scaffold — Agent Git Lab Teams"
gh repo create RAVEN-dubgub/venture-raven-dubgub --public --source=. --remote=origin --push
```

## 3. Vercel

```powershell
npx.cmd vercel link
npx.cmd vercel env add DATABASE_URL production
npx.cmd vercel env add AUTH_SECRET production
npx.cmd vercel env add NEXT_PUBLIC_SITE_URL production
npx.cmd vercel env add NEXT_PUBLIC_LEARNING_APP_URL production
npx.cmd vercel --prod
```

Build command (Vercel): `prisma generate && prisma migrate deploy && next build`

## 4. Smoke test

1. `GET /` → 200 landing page
2. `/app` → sign up → create team → qualified user count increments
3. `GET /api/metrics` → date-stamped snapshot JSON
4. `/plan` and `/pitch` render venture docs
5. `/privacy` → policy page

## 5. Submission PR

Open PR to `hult-cohort-program` with title `[P2-Venture] Submission — raven-dubgub` including:

- Production URL
- Deck path (`docs/pitch-deck.pdf` once exported)
- Business plan path (`docs/business-plan.md`)
- Metrics snapshot from `/api/metrics`
- Investor touch log (redact PII)

Deadline: **Wed Aug 19, 2026, 17:00 Eastern Time** (merged PR).
