# Investor email send checklist

Use this before and after each outreach email. **Joshua sends from his own Gmail.** The agent cannot send mail or log fake touchpoints.

---

## Before you send (per email)

- [ ] Open `docs/investor-emails/READY-TO-SEND.md` and pick the target firm block
- [ ] Go to the firm **Contact** URL and pick a relevant partner (workforce/EdTech or DevTools)
- [ ] Replace `[Partner name TBD]` with the partner's first name (or use "team" for info@ inboxes)
- [ ] Confirm the **To** address on the firm website (do not use guessed personal emails)
- [ ] Skim the pitch page once: https://venture-raven-dubgub.vercel.app/pitch
- [ ] Confirm production app loads: https://venture-raven-dubgub.vercel.app/app

---

## Send from Gmail

1. Open Gmail (Joshua's account)
2. Click **Compose**
3. **To:** verified partner email or info@ only if listed in READY-TO-SEND
4. **Subject:** copy from READY-TO-SEND block
5. **Body:** copy plain-text body from READY-TO-SEND block
6. Optional: BCC yourself for a record
7. Read once for typos and correct partner name
8. Click **Send** (human step only)

### mailto shortcut (Reach Capital only)

READY-TO-SEND includes a verified mailto link for `info@reachcapital.com`. Click it to pre-fill subject and body, then review and Send in Gmail.

---

## After you send (log it)

Update `INVESTOR_LOG.md`:

1. **Target list table:** set **Status** to `Email sent` (only after you actually sent)
2. **Target list table:** fill **Name** with partner first name + last initial (e.g. `J. Herrera`)
3. **Outreach tracker:** increment **Emails sent** for the current week row
4. **Touch log:** add a row when you get a reply or book a call:

```
| YYYY-MM-DD | First L. | Partner, Firm | email | Brief outcome | Pending |
```

### Status values (do not skip steps)

| Status | When to use |
|--------|-------------|
| Draft ready | Email written in READY-TO-SEND; not sent yet |
| Email sent | You clicked Send in Gmail |
| Replied | Investor responded (any tone) |
| Call scheduled | Meeting on calendar |
| Passed | Declined or not a fit |
| Interested | Explicit interest in pilot or deck follow-up |

**Do not** set `Email sent`, `Replied`, or `Call scheduled` until the event actually happened.

---

## Week 5/6 goals

| Goal | Target |
|------|--------|
| Drafts ready | 20 (done in READY-TO-SEND.md) |
| Emails sent | 5+ before submission gate |
| Qualified touchpoint | 1+ reply or call logged and verified |

Suggested pace: **3-5 emails per day**, EdTech firms first (Reach, GSV, Precursor), then DevTools (Heavybit, Unusual).

---

## Copy-paste logging template

After sending email #N to [Firm]:

```
INVESTOR_LOG.md target row #N:
- Name: [Partner first + last initial]
- Email sent?: Y (date: YYYY-MM-DD)
- Status: Email sent
```

When they reply:

```
Touch log new row:
| YYYY-MM-DD | [Name] | [Role], [Firm] | email | [1-line outcome] | Pending |
```

---

## Files reference

| File | Purpose |
|------|---------|
| `docs/investor-emails/READY-TO-SEND.md` | 20 copy-paste emails |
| `docs/investor-email.md` | Base template |
| `docs/investor-emails/01-05-*.md` | Variant templates by thesis |
| `INVESTOR_LOG.md` | Tracker + touch log |
| `docs/pitch-deck.pdf` | Attach if they ask |

---

## Submission gate reminder

Phase 2 venture pass gate requires **≥1 qualified investor touchpoint** verified by the placement lead. Sending alone is not enough; you need a real reply or call logged in the touch log.
