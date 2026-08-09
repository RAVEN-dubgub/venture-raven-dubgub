# Financial model: Agent Git Lab Teams

Three-year projections for the venture submission. Assumptions are labeled. See also `docs/financial-model.csv` for spreadsheet import.

## Key assumptions

| Assumption | Value | Notes |
|------------|-------|-------|
| Starter price | $49/mo per cohort | Up to 30 seats |
| Pro price | $149/mo per cohort | Up to 120 seats |
| Starter / Pro mix (Y1) | 80% / 20% | Shifts toward Pro in Y2-Y3 |
| Monthly churn | 4% (Y1), 3% (Y2), 2.5% (Y3) | Founder-led retention focus |
| CAC (founder-led) | $120 per paying cohort | Email + demo day outreach |
| Gross margin | 82% | Hosting, support, payment fees |
| Annual prepay discount | 2 months free | ~17% discount on annual |

## Revenue summary

| Year | Paying cohorts (avg active) | New cohorts added | ARR (Dec) | YoY growth |
|------|------------------------------:|------------------:|----------:|-----------:|
| 2026 (Y1) | 12 | 24 | $42,000 | n/a |
| 2027 (Y2) | 45 | 66 | $165,000 | 293% |
| 2028 (Y3) | 110 | 125 | $410,000 | 148% |

Blended monthly revenue per cohort: ~$68 Y1, ~$78 Y2, ~$85 Y3 (mix shift to Pro).

## Year 1 monthly detail (2026)

| Month | New cohorts | Churned | Active end | MRR |
|-------|------------:|--------:|-----------:|----:|
| Jul | 0 | 0 | 0 | $0 |
| Aug | 2 | 0 | 2 | $136 |
| Sep | 3 | 0 | 5 | $340 |
| Oct | 4 | 0 | 9 | $612 |
| Nov | 5 | 0 | 14 | $952 |
| Dec | 6 | 1 | 19 | $1,292 |
| Jan 2027 | 4 | 1 | 22 | $1,496 |

Y1 exit run-rate: ~$18k ARR from 19 active cohorts before full-year cohort adds in Y2.

## Cost structure (Year 1)

| Category | Annual | Notes |
|----------|-------:|-------|
| Hosting (Vercel, Neon) | $2,400 | Scales with usage |
| Support tools | $600 | Email, status page |
| Payment fees (~3%) | $1,260 | On collected revenue |
| Founder salary | $0 | Bootstrapped through Y1 |
| **Total opex** | **$4,260** | Excludes founder time |

Gross profit Y1: ~$34,440 at $42k ARR and 82% margin.

## Unit economics

| Metric | Starter | Pro |
|--------|--------:|----:|
| Monthly price | $49 | $149 |
| Gross margin | 82% | 82% |
| LTV (12 mo, labeled) | $980 | $1,790 |
| CAC (founder-led) | $120 | $120 |
| LTV:CAC | 8.2x | 14.9x |
| Payback | ~3 mo | ~1 mo |

## Hiring plan

| Trigger | Role | Cost |
|---------|------|------|
| 10 paying cohorts | Part-time customer success | $3k/mo contract |
| $150k ARR | Full-time CS lead | $85k base + equity |
| $300k ARR | Second engineer | $120k base + equity |

Pre-seed ask ($250k) funds 18 months runway with first CS hire at month 6.

## Sensitivity (Year 3 ARR)

| Scenario | Paying cohorts | ARR |
|----------|---------------:|----:|
| Downside (-30% cohorts) | 154 new / 77 active | $287k |
| Base | 220 new / 110 active | $410k |
| Upside (+25% cohorts) | 275 new / 138 active | $513k |

## References

- Pricing and GTM: `docs/business-plan.md`
- Market sizing: `docs/market-research.md`
- One-pager ask: `docs/one-pager.md`
