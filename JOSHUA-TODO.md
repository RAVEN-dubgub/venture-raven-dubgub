# Joshua TODO - Phase 2 Venture (human-only gates)

**Founder display name:** RAVEN (@raven-dubgub) only. No real name in repo or PR.  
**Deadline:** Wed Aug 19, 2026, 17:00 Eastern Time  
**Production:** https://venture-raven-dubgub.vercel.app

Everything below requires Joshua. Agents cannot fabricate users, interviews, or investor touches.

---

## Blocked pass gates

| Gate | Required | Current | Exact next action |
|------|----------|---------|-------------------|
| Qualified external users | ≥25 on venture metrics | Check `/api/metrics` | Share https://venture-raven-dubgub.vercel.app/app with external bootcamp contacts; each user must sign up, create a team, and start the demo lesson |
| Investor touchpoint | ≥1 verified in `INVESTOR_LOG.md` | 0 logged | Fill target list, send 5 emails (`docs/investor-email.md`), log first real call/email reply |
| Customer interviews | 5 external dated notes | 0 complete | Run calls using script in `docs/market-research.md`, fill all 5 slots |
| PR merge | Staff review | Open when ready | Merge cohort PR after gates met |

---

## Checklist (Joshua)

### Users (≥25 qualified)

1. Post signup link in cohort comms, LinkedIn, bootcamp Discords (external only, not cohort peers counting twice)
2. Confirm each user: signup → create team → demo lesson started
3. Before submission, capture metrics JSON from `GET /api/metrics` with `qualified_users` ≥25
4. Paste snapshot into cohort submission PR body

### Investor outreach (≥1 touch)

1. Open `INVESTOR_LOG.md`
2. Fill 20-row target list (angels, pre-seed, EdTech operators)
3. Personalize and send 5 emails from `docs/investor-email.md`
4. Log first qualified touch in touch log table (date, role, type, outcome)
5. Ask placement lead to verify before PR merge

### Customer interviews (5 external)

1. Open `docs/market-research.md`
2. Schedule 5 calls (bootcamp director, TA, DevRel, indie operator, academy lead)
3. Use interview script in that file
4. Fill dated notes within 48 hours per call
5. Do not use cohort peer interviews as external validation

### Pre-submit smoke (5 min)

1. `npm run test && npm run build && npm run lint` in venture repo
2. Production: `/`, `/app`, `/pitch`, `/plan`, `/api/metrics`
3. Confirm PDFs exist: `docs/pitch-deck.pdf`, `docs/one-pager.pdf`, `docs/business-plan.pdf`
4. Open or update cohort PR: `[P2-Venture] Submission - raven-dubgub`

---

## Already done (agent)

- [x] Production app deployed
- [x] Market research secondary analysis + interview template (`docs/market-research.md`)
- [x] Business plan + financial model (`docs/business-plan.md`, `docs/financial-model.md`, `.csv`)
- [x] PDF exports (`docs/pitch-deck.pdf`, `docs/one-pager.pdf`, `docs/business-plan.pdf`)
- [x] Investor log templates (`INVESTOR_LOG.md`)
- [x] Tests, build, lint passing
- [x] Submission PR body draft (`hult-cohort-program/submissions/raven-dubgub-p2-venture.md`)

---

## Links

| Item | URL / path |
|------|------------|
| Venture repo | https://github.com/RAVEN-dubgub/venture-raven-dubgub |
| Metrics | https://venture-raven-dubgub.vercel.app/api/metrics |
| App namespace | `venture-agent-git-lab-teams` |
| Cohort submission doc | `hult-cohort-program/submissions/raven-dubgub-p2-venture.md` |
| Reviewer smoke | `docs/REVIEWER.md` |
