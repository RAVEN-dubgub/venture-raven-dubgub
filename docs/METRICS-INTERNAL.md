# Metrics: internal vs external qualified users

The venture submission gate counts **`qualified_users`** only — external signups who completed a qualified action (`TEAM_CREATED` or `DEMO_LESSON_STARTED`). Smoke tests and founder QA accounts must not inflate that number.

## API fields

| Field | Meaning |
|-------|---------|
| `qualified_users` | External qualified users — **this is the 25 gate** |
| `qualified_users_internal` | Internal / smoke qualified users |
| `qualified_users_total` | All qualified users (external + internal) |

## How users become internal

1. **`User.isInternal = true`** in Neon (preferred, persisted)
2. **Signup auto-mark** — email matches:
   - local part starts with `test+`
   - local part contains `smoke`
   - domain is `@example.com`
3. **Fallback (pre-migration / belt-and-suspenders)** — owner of team slugs `metrics-smoke-team`, `test-boot`, or `METRICS_INTERNAL_EMAILS` env list

## Deploy: run migration on Neon

After merging, apply the schema change on production:

```bash
cd venture-raven-dubgub
npx prisma migrate deploy
```

Or in Vercel, ensure the build/deploy step runs `prisma migrate deploy` (or run manually against `DATABASE_URL`).

Migration: `prisma/migrations/0002_add_user_is_internal/migration.sql`

```sql
ALTER TABLE "User" ADD COLUMN "isInternal" BOOLEAN NOT NULL DEFAULT false;
```

Regenerate client locally after pull:

```bash
npx prisma generate
```

## Mark existing smoke users internal (Neon SQL)

Run in Neon SQL Editor (or `psql` with production `DATABASE_URL`).

### 1. Preview who will be marked

```sql
SELECT u.id, u.email, u."isInternal", t.slug
FROM "User" u
LEFT JOIN "TeamWorkspace" t ON t."ownerId" = u.id
WHERE u."isInternal" = false
  AND (
    u.email LIKE 'test+%'
    OR u.email LIKE '%smoke%'
    OR u.email LIKE '%@example.com'
    OR t.slug IN ('metrics-smoke-team', 'test-boot')
  )
ORDER BY u.email;
```

### 2. Mark smoke team owners + test emails

```sql
UPDATE "User" u
SET "isInternal" = true
WHERE u."isInternal" = false
  AND (
    u.email LIKE 'test+%'
    OR u.email LIKE '%smoke%'
    OR u.email LIKE '%@example.com'
    OR u.id IN (
      SELECT "ownerId"
      FROM "TeamWorkspace"
      WHERE slug IN ('metrics-smoke-team', 'test-boot')
    )
  );
```

### 3. Verify metrics split (optional)

```sql
SELECT
  COUNT(*) FILTER (WHERE u."isInternal" = true) AS internal_users,
  COUNT(*) FILTER (WHERE u."isInternal" = false) AS external_users
FROM "User" u;
```

## Expected snapshot after deploy + SQL

For current smoke data (3 qualified internal testers, 0 real external users):

```json
{
  "qualified_users": 0,
  "qualified_users_internal": 3,
  "qualified_users_total": 3
}
```

`qualified_users` stays at **0** until real external users sign up and complete a qualified action. Target for submission: **`qualified_users` ≥ 25**.

## Optional env override

Comma-separated emails always treated as internal (even before DB flag):

```
METRICS_INTERNAL_EMAILS=founder@example.com,qa@yourdomain.com
```
