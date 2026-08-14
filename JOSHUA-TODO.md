# Joshua TODO - Phase 2 Venture (human-only gates)

**Founder display name:** RAVEN (@raven-dubgub) only. No real name in repo or PR.  
**Deadline:** Wed Aug 19, 2026, 17:00 Eastern Time  
**Sunday checkpoint:** ≥5 qualified external users by Aug 16 (interviews day)  
**Production:** https://venture-raven-dubgub.vercel.app  
**Day-by-day plan:** `WEEK-PLAN.md`

Everything below requires Joshua. Agents cannot fabricate users, interviews, or investor touches.

---

## TODAY (Aug 14) — skip Reddit until karma

**Reddit is blocked** for u/Emergency_Home_5022 (site-wide spam filter). Do **not** repost to r/SideProject, r/codingbootcamp, or anywhere else today. Karma recovery: `docs/REDDIT-TROUBLESHOOTING.md`. **All copy without Reddit:** `docs/USER-PUSH-NO-REDDIT.md`.

### Top 3 actions (next 30–60 min)

1. **Discord** — Paste post from `docs/USER-PUSH-NO-REDDIT.md` §1 (or `npm run post:discord`) in every bootcamp/dev server you are in.
2. **LinkedIn personal post** — Paste §2 from `docs/USER-PUSH-NO-REDDIT.md` (#buildinpublic, link to `/app`).
3. **5 LinkedIn DMs** — Send operator messages §6 to bootcamp PMs/TAs (external, not cohort peers).

**Then:** Check metrics once tonight — `curl -s https://venture-raven-dubgub.vercel.app/api/metrics`

---

## Blocked pass gates

| Gate | Required | Current (Aug 14) | Exact next action |
|------|----------|------------------|-------------------|
| Qualified external users | ≥25 on venture metrics | **0** | Post from `docs/USER-PUSH-NO-REDDIT.md` (no Reddit); each user: signup → team → demo lesson |
| Investor touchpoint | ≥1 verified in `INVESTOR_LOG.md` | **0** | Send 5 emails from `docs/investor-emails/`; log first real reply |
| Customer interviews | 5 external dated notes | **0** | Run calls with `docs/INTERVIEW-SCRIPT.md`; fill slots in `docs/market-research.md` |
| Vercel team Git authorize | Joshua OAuth click | **Pending** | Authorize Vercel for cohort program repo (see PR #283 comment) |
| PR merge | Staff review | Open | Merge cohort PR after gates met |

---

## Checklist (Joshua)

### Users (≥25 qualified) — NO REDDIT THIS WEEK

1. Copy-paste from **`docs/USER-PUSH-NO-REDDIT.md`** (Discord, LinkedIn, HN, Indie Hackers, Dev.to, Slack, DMs). Reddit only when karma recovers.
2. Share https://venture-raven-dubgub.vercel.app/app with external bootcamp contacts (not cohort classmates)
3. Confirm each user: signup → create team → demo lesson started
4. Before submission, capture metrics JSON from `GET /api/metrics` with `qualified_users` ≥25
5. Paste snapshot into cohort submission PR #290 body

### Investor outreach (≥1 touch)

1. Open `INVESTOR_LOG.md` (20 firms pre-filled; add partner names)
2. Personalize and send 5 emails from `docs/investor-emails/` (one per variant)
3. Log first qualified touch in touch log table (date, role, type, outcome)
4. Ask placement lead to verify before PR merge

### Customer interviews (5 external)

1. Open `docs/INTERVIEW-SCRIPT.md`
2. Schedule 5 calls (bootcamp director, TA, DevRel, indie operator, academy lead)
3. Fill dated notes in `docs/market-research.md` within 48 hours per call
4. Do not use cohort peer interviews as external validation

### Vercel authorize (learning PR #283)

1. Open PR #283 checks on GitHub
2. Click **Authorize Vercel** when prompted (Joshua only; agent cannot)
3. Confirm preview deploy succeeds after authorize

### Pre-submit smoke (5 min)

1. `npm run test && npm run build && npm run lint` in venture repo
2. Production: `/`, `/app`, `/pitch`, `/plan`, `/api/metrics`
3. Confirm PDFs exist: `docs/pitch-deck.pdf`, `docs/one-pager.pdf`, `docs/business-plan.pdf`
4. Update PR #290 body with final metrics snapshot

---

## Already done (agent — Aug 13–14, 2026)

- [x] Production app deployed
- [x] Market research secondary analysis + interview script (`docs/INTERVIEW-SCRIPT.md`, `docs/market-research.md`)
- [x] Business plan + financial model
- [x] PDF exports regenerated
- [x] Investor log: 20 firm names + 5 email variants (`docs/investor-emails/`)
- [x] User promotion copy (`docs/USER-PUSH.md`)
- [x] **No-Reddit push playbook** (`docs/USER-PUSH-NO-REDDIT.md`) — Aug 14
- [x] Tests, build, lint passing (venture + learning)
- [x] Learning ESLint 8 errors fixed
- [x] Submission PR body draft updated (`hult-cohort-program/submissions/raven-dubgub-p2-venture.md`)
- [x] WEEK-PLAN.md day-by-day Aug 14–19
- [x] PR #290 and #283 status comments posted

---

## Links

| Item | URL / path |
|------|------------|
| Venture repo | https://github.com/RAVEN-dubgub/venture-raven-dubgub |
| Metrics | https://venture-raven-dubgub.vercel.app/api/metrics |
| App signup | https://venture-raven-dubgub.vercel.app/app |
| User posts (no Reddit) | `docs/USER-PUSH-NO-REDDIT.md` |
| User posts (all channels) | `docs/USER-PUSH.md` |
| App namespace | `venture-agent-git-lab-teams` |
| Cohort PR #290 | https://github.com/rogerSuperBuilderAlpha/hult-cohort-program/pull/290 |
| Learning PR #283 | https://github.com/rogerSuperBuilderAlpha/hult-cohort-program/pull/283 |
| Reviewer smoke | `docs/REVIEWER.md` |
