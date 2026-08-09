# Reviewer guide - Agent Git Lab Teams

**Production:** https://venture-raven-dubgub.vercel.app  
**Metrics:** https://venture-raven-dubgub.vercel.app/api/metrics  
**Time budget:** ~5 minutes

## Demo access

Open registration on `/app`. Create any operator account (email + password, min 8 chars).

## 5-minute smoke checklist

1. **Landing** `/` → hero, stats, problem/solution cards, connected products.
2. **Sign up** `/app` → create account → confirm session persists on refresh.
3. **Create team** → submit bootcamp name → team appears with slug and learner link.
4. **Demo lesson** → click button → opens Agent Git Lab in new tab; metrics event recorded.
5. **Docs** `/plan` and `/pitch` render venture materials.
6. **Metrics** `GET /api/metrics` → JSON with `snapshot_at`, `qualified_users`.
7. **Privacy** `/privacy` → policy page loads.

## What to expect

| Area | Notes |
|------|-------|
| Auth | JWT httpOnly cookie |
| Metrics | Separate venture namespace from learning app |
| PDFs | Export `docs/pitch-deck.pdf` and `docs/one-pager.pdf` before final submission |
| Not included | Billing, SSO, Ludwitt registration (optional env) |

## Local run (optional)

```bash
npm install
cp .env.example .env
npx prisma migrate deploy
npm run dev
```

See [README.md](../README.md) and [DEPLOY.md](../DEPLOY.md).
