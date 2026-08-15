# Tonight outreach pack: copy, paste, send

**Date:** Aug 14, 2026  
**Founder:** RAVEN (@raven-dubgub)  
**App:** https://venture-raven-dubgub.vercel.app/app  
**Deck:** https://venture-raven-dubgub.vercel.app/pitch  

**How to use:** Work top to bottom. Every block is ready to paste. Your only clicks: LinkedIn search → DM → Send, and Gmail → paste → Send.

Reach Capital email (#1) is already sent; skip it.

---

## Part 1: LinkedIn DMs (5 messages)

For each: open LinkedIn → paste the **Search query** → pick one person → Connect if needed → paste **Message** → Send → check the box.

---

### DM 1: Cold operator

**Search query:** `bootcamp director` OR `program manager coding bootcamp`

**Filters:** People · 2nd connections · United States (optional)

**Message (paste as-is, replace `[Name]` and `[COMPANY]`):**

```
Hi [Name], RAVEN here, student builder working on Git onboarding tooling for bootcamp operators. Would you try a 5-min smoke test? https://venture-raven-dubgub.vercel.app/app (signup → create team → demo lesson). Blunt UX feedback welcome, no pitch.
```

- [ ] Sent: Name: _______________ · Company: _______________

---

### DM 2: TA / instructor angle

**Search query:** `teaching assistant coding bootcamp` OR `instructor bootcamp`

**Filters:** People · 2nd connections

**Message (paste as-is, replace `[Name]` and `[COMPANY]`):**

```
Hi [Name], saw you TA at [COMPANY]. I built a free operator portal for first-week Git/GitHub cohort setup. 5-min test: https://venture-raven-dubgub.vercel.app/app, signup, create team, start demo lesson. Would love one thing you'd change for your cohort.
```

- [ ] Sent: Name: _______________ · Company: _______________

---

### DM 3: DevRel / academy lead

**Search query:** `head of education bootcamp` OR `developer education program manager` OR `internal academy lead`

**Filters:** People · 2nd connections

**Message (paste as-is, replace `[Name]`):**

```
Hi [Name], RAVEN (@raven-dubgub). Building a thin team portal for cohort Git onboarding (Next.js + learner app). If you run internal academies: 5-min pilot at https://venture-raven-dubgub.vercel.app/app, curious if the operator flow is obvious on first visit.
```

- [ ] Sent: Name: _______________ · Company: _______________

---

### DM 4: Second-degree warm intro

**Search query:** `bootcamp program manager` OR `cohort lead education`

**Filters:** People · 2nd connections · **Connections of** (pick a mutual you share)

**Message (paste as-is, replace `[Name]` and `[MUTUAL]`):**

```
Hi [Name], we share a connection with [MUTUAL]. I shipped a bootcamp operator portal for Git onboarding and need external operator eyes (not classmates). https://venture-raven-dubgub.vercel.app/app, 5 min: signup → team → demo lesson. Open to a quick call if something breaks?
```

- [ ] Sent: Name: _______________ · Mutual: _______________

---

### DM 5: Follow-up bump (only if someone from DM 1-4 didn't reply after 48h)

**Search query:** (same person you messaged before, open existing conversation)

**Message (paste as-is, replace `[Name]`):**

```
Hi [Name], quick bump on the Git onboarding portal I mentioned. Self-serve 5-min test: https://venture-raven-dubgub.vercel.app/app (signup → create team → demo lesson). No worries if timing is bad, one line of feedback helps a lot.
```

- [ ] Sent: Name: _______________

---

## Part 2: GSV Ventures email (#2)

**Step 1:** Open https://gsv.com/team → pick a partner focused on workforce learning / skills platforms → copy their email from the team page.

**Step 2:** Open Gmail → New message → paste below (replace `[Partner name]` with their first name).

**To:** _(paste partner email from gsv.com/team, do not guess)_

**Subject:**

```
Bootcamp Git onboarding portal - pilot feedback?
```

**Body:**

```
Hi [Partner name],

I am RAVEN (@raven-dubgub), building Agent Git Lab Teams for cohort-based programs training agent-first developers.

Market pain: operators spend weeks on tooling setup before learners ship a meaningful PR. Our wedge is a production stack already live from my cohort work, with a separate venture metrics namespace for operator analytics.

Pricing model: $49/mo Starter (up to 30 seats), $149/mo Pro (up to 120 seats).

App: https://venture-raven-dubgub.vercel.app/app
Pitch: https://venture-raven-dubgub.vercel.app/pitch

Would love 15 minutes to compare notes on bootcamp operator GTM. GSV's workforce learning thesis seems like a strong fit.

Best,
RAVEN
@raven-dubgub
```

- [ ] Sent: Partner: _______________ · Date: _______________

**After you click Send:** reply in Cursor chat with **`sent gsv`** so the agent can update `INVESTOR_LOG.md`.

---

## Part 3: Interview invites

Use **A** when someone tries the app or replies "done" on LinkedIn. Use **B** to proactively book interview #1 (bootcamp director segment).

No Cal.com needed; they reply with a time; you send a Zoom/Meet link.

---

### A: After someone completes the smoke test

**Channel:** LinkedIn DM reply or email reply

**Message:**

```
Thanks for trying it. that helps a lot.

I'm doing 15-min research calls with bootcamp/cohort operators (not a sales pitch). Would any of these work for you?

• Mon Aug 18: 10:00-11:30 AM ET
• Tue Aug 19: 2:00-4:00 PM ET
• Wed Aug 20: 9:00-11:00 AM ET

Reply with a time that works (or suggest another) and I'll send a video link. If none fit, one line of written feedback still counts.
```

- [ ] Sent to: _______________

---

### B: Book interview #1 (bootcamp director)

**Target:** Bootcamp director / program lead / head of education (from DM replies, LinkedIn post comments, or a warm contact).

**Message:**

```
Hi [Name], RAVEN here. I'm running 15-min research interviews with bootcamp directors about first-week Git/GitHub onboarding (research only, not a pitch).

If you've run or overseen a cohort, I'd value your perspective. Happy to walk through https://venture-raven-dubgub.vercel.app/app live on the call if useful.

Would any of these work?

• Mon Aug 18: 10:00-11:30 AM ET
• Tue Aug 19: 2:00-4:00 PM ET
• Wed Aug 20: 9:00-11:00 AM ET

Reply with a time (or suggest another) and I'll send a video link. Thanks either way.
```

- [ ] Sent to: _______________ · Interview #1 scheduled: _______________

**On the call:** use `docs/INTERVIEW-SCRIPT.md`. Log notes in `docs/market-research.md` within 48 hours.

---

## Part 4: Tracking checklist

**Metrics baseline tonight:** 3 qualified users (signup → create team → start demo lesson).

Check metrics anytime:

```bash
curl -s https://venture-raven-dubgub.vercel.app/api/metrics
```

| Task | Done? | Date |
|------|-------|------|
| Reach Capital email (#1) | ✅ | Aug 14 |
| LinkedIn DM 1 (cold operator) | [ ] | |
| LinkedIn DM 2 (TA / instructor) | [ ] | |
| LinkedIn DM 3 (DevRel / academy) | [ ] | |
| LinkedIn DM 4 (2nd-degree warm) | [ ] | |
| GSV Ventures email (#2) | [ ] | |
| Interview invite sent (A or B) | [ ] | |
| Metrics check (note qualified_users count) | [ ] | |

**Targets:** ≥5 qualified users by Sun Aug 16 · ≥25 by Wed Aug 19, 17:00 ET

---

## Quick reference

| Resource | Path |
|----------|------|
| Full investor email list | `docs/investor-emails/READY-TO-SEND.md` |
| Investor log | `INVESTOR_LOG.md` |
| Interview script | `docs/INTERVIEW-SCRIPT.md` |
| User push (other channels) | `docs/USER-PUSH-NO-REDDIT.md` |
