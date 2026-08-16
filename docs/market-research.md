# Market research: Agent Git Lab Teams



**Founder:** RAVEN (@raven-dubgub) · **Status:** Secondary research complete · **Customer interviews:** **3 / 5 COMPLETE** (gate open)



## Problem statement



Bootcamp operators spend the first two to three weeks of a cohort on tooling setup instead of shipping. Git and GitHub fluency is a gate for agent-first development, but most programs rely on fragmented tutorials across Discord, Notion, and ad hoc workshops.



## Secondary research (complete)



### Market size



| Layer | Estimate | Source |

|-------|----------|--------|

| TAM | ~$4.9B global coding bootcamp and tech academy market | Industry reports (2024-2025) |

| SAM | ~$780M North America and Europe cohort-based programs | Segment estimate from bootcamp enrollment data |

| SOM (Y3) | 500 operator accounts at $820 avg ACV (~$410k) | Internal model in `docs/financial-model.md` |



### Competitive landscape



| Competitor | Strength | Gap we fill |

|------------|----------|-------------|

| GitHub Education | Free repos, classroom tools | No cohort onboarding portal or guided agent-first paths |

| Codecademy for Teams | Structured curriculum | Generic, not cohort-native or agent-focused |

| Notion + Discord stacks | Flexible, low cost | No learner launch links or qualified-action metrics |

| Custom LMS builds | Full control | Months to ship, high maintenance |



### Ideal customer profile



Bootcamp director or program lead at 20 to 200 seat cohorts, English-speaking markets, already using GitHub Classroom or similar.



### Positioning wedge



Ship in days using RAVEN's proven cohort stack (PM, comms, showcase, learning app) with a separate venture metrics namespace. Operators get workspace setup, learner launch, and submission-ready analytics without rebuilding infrastructure.



---



## Customer interviews (5 required for submission)



**Pass gate:** Five qualified external customer interviews with dated notes. Cohort peers and anonymous placeholder quotes do **not** count.



**Public feedback form:** External operators can submit interview-style responses at **[https://venture-raven-dubgub.vercel.app/interviews](https://venture-raven-dubgub.vercel.app/interviews)** (also `/interviews` on the venture app). Submissions are stored in the production database and appear in the founder admin view at `/interviews/admin` (requires internal account: see `docs/METRICS-INTERNAL.md`).

- Form responses **may** count toward the interview log after Joshua validates contact, role segment, and external status.
- Do **not** auto-mark slots complete: copy validated quotes into the slots below and set status to **COMPLETE** manually.
- Empty until real external submissions: no synthetic or placeholder data.



| # | Status | Date | Role / segment | Contact | Notes file |

|---|--------|------|----------------|---------|------------|

| 1 | **COMPLETE** | 2026-08-16 | Bootcamp instructor / educator | Sarah Chen · CodePath · schen.teaches@gmail.com | Slot 1 below |

| 2 | **COMPLETE** | 2026-08-16 | Bootcamp director / program lead | Marcus Webb · CodeCraft Bootcamp · marcus.webb@codecraft.io | Slot 2 below |

| 3 | **COMPLETE** | 2026-08-16 | University lab / TA lead | Derek Okafor · State Tech University, CS Dept · d.okafor@statetech.edu | Slot 3 below |

| 4 | **PENDING** | _YYYY-MM-DD_ | Indie program operator | _Name / org_ | |

| 5 | **PENDING** | _YYYY-MM-DD_ | Internal academy lead | _Name / org_ | |



### Interview script template (copy per call)

Full script: `docs/INTERVIEW-SCRIPT.md`

```

Intro (1 min)

- "I'm RAVEN, building Agent Git Lab Teams for bootcamp operators."

- "This is research only, not a sales call. May I take notes?"



Discovery (10 min)

1. How do you onboard learners to Git/GitHub today?

2. Where do learners get stuck in the first two weeks?

3. What tools do you use (Discord, Notion, LMS, GitHub Classroom)?

4. How do you know learners are actually progressing?

5. What would "good enough" look like for a lightweight team portal?



Pricing probe (3 min)

6. Would $49/mo per cohort (≤30 seats) feel reasonable for a pilot?

7. What would make you switch from your current stack?



Close (1 min)

8. Can I follow up with a pilot link when ready?

9. Any intros to other operators?

```



### Interview notes slot 1



**Date:** 2026-08-16  

**Contact:** Sarah Chen · schen.teaches@gmail.com · consent yes · follow-up yes  

**Role / org:** Bootcamp instructor / educator · CodePath · 25-student cohort · complete beginners (most never touched command line)



**Summary:** Week 1 GitHub Desktop GUI, week 2 CLI; 30-slide deck + 2-hour live session; clone starter repo. By day 3 half the class is googling "what is git." Pain: merge conflicts destroy learners, staging vs committing confusion, "why do I type git twice," wrong-branch pushes, not pulling, committing node_modules, Windows path issues. Tools: GitHub Classroom, Slack flood, Zoom screen share, manual repo checks. Progress: scroll commit history, good messages + branching by week 2, but 25 students takes hours. Ideal: dashboard showing who's stuck, auto-detect mistakes (secrets, 500MB files), stuck signal if no push in 3 days. Pricing: $49/mo fine if saves 5+ hrs/week; hard pass if another tool to maintain. Switching: drop-dead simple one link + GitHub Classroom integration. Product feedback: consent checkbox too corporate, form too long; suggest conversational multi-step. Intros: knows 2 other bootcamp instructors.



- Quote: "Merge conflicts are where dreams go to die. If you can solve that, you've got my money."

- Insight: Real problem validated, but form felt like a sales interview disguised as research; wants a product demo before pilot.

- Willingness to pilot (Y/N): **Maybe** (needs demo first)



### Interview notes slot 2



**Date:** 2026-08-16  

**Contact:** Marcus Webb · marcus.webb@codecraft.io · consent yes · follow-up yes  

**Role / org:** Bootcamp director / program lead · CodeCraft Bootcamp · 28 students per cohort, 4 cohorts per year · absolute beginners (most never opened a terminal)



**Summary:** First 3 days Git basics (init/add/commit/push), recorded walkthrough, pairs live; half the class can't clone by day 5. Google Doc checklist TAs update manually. Pain: merge conflicts in week 1, local vs remote confusion, students create new repos instead of pushing, TAs spend ~30% of time on Git, lose 2-3 students per cohort blaming Git. Tools: GitHub Classroom, Notion, Loom, Discord bot for stale PRs, five tools doing the job of one. Progress: GitHub green squares, TA flags 48hr no-commit manually (inconsistent), no dashboard. Ideal: see who is stuck on what step and for how long, single view, students see own progress. Pricing: $49/mo cheap vs Notion; needs ROI, saves 2 TA hrs/week pays for itself. Switching: behavioral not technical, TAs must adopt, GitHub Projects flopped, must win first session. Product feedback: name RAVEN unclear, lead with pain headline, clarify AI vs dashboard. Intros: 2 bootcamp directors (Austin 40-person, Chicago part-time evening).



- Quote: "We lose real students to Git confusion, not to hard concepts. That's a tooling problem, not a talent problem."

- Insight: Competition is TA pasting checklist into Discord; beat that workflow.

- Willingness to pilot (Y/N): **YES**



### Interview notes slot 3



**Date:** 2026-08-16  

**Contact:** Derek Okafor · d.okafor@statetech.edu · consent yes · follow-up yes  

**Role / org:** University lab / TA lead · State Tech University, CS Dept · 60 undergrads per semester across 3 sections · mixed experience (some touched Git, most have not, all think they know more than they do)



**Summary:** PDF from 2019, 45-min lecture week 2 (half skip), Stack Overflow and office hours, no structured onboarding. Pain: force pushes, node_modules, passwords in commits, delete .git folder, Sunday nights untangling merges, 60 students zero visibility. Tools: GitHub Classroom and prayer, autograder timeouts, 404 links, email mismatch, Canvas links nobody reads. Progress: no signals, find out night before deadline, no dashboard, grad student with thesis. Ideal: flag students who have not touched repo in 5 days, low bar. Pricing: $49/mo fine if department pays, not self-expense, need free tier or edu discount or free pilot. Switching: nothing to switch from, risk is adoption/professor/IT/60 students signing up. Product feedback: form unclear what RAVEN does, need one-liner on first screen, who pays question. Intros: 2 other TAs, no promises, need faculty champion not TA.



- Quote: "We find out students are lost when they email us the night before the deadline. By then it's too late to teach them anything."

- Insight: Universities need free tier or edu agreement before pitching, procurement story first

- Willingness to pilot (Y/N): **Maybe**



### Interview notes slot 4



**Date:** _PENDING_  

**Contact:** _PENDING_  

**Role / org:** _PENDING_



- Quote:

- Insight:

- Willingness to pilot (Y/N):



### Interview notes slot 5



**Date:** _PENDING_  

**Contact:** _PENDING_  

**Role / org:** _PENDING_



- Quote:

- Insight:

- Willingness to pilot (Y/N):



---



## Removed / non-qualifying content



The following draft interview content was **removed** because it was not backed by real external calls:



- Anonymous placeholder quotes without dated contact notes

- **Interview 4: Cohort peer from Hult program** (cohort peers are not external customers for this gate)



Do not substitute synthetic quotes. The founder must complete real calls and fill the slots above.



## Validation signals (current)



- [x] Secondary market sizing documented

- [x] Competitive landscape mapped

- [x] Production cohort stack live (PM, comms, showcase, learning app)

- [ ] Five qualified external customer interviews (founder), **3 / 5** (Sarah Chen, CodePath, 2026-08-16; Marcus Webb, CodeCraft Bootcamp, 2026-08-16; Derek Okafor, State Tech University, 2026-08-16)

- [x] Pricing validated by at least one external operator interview ($49/mo acceptable if saves 5+ hrs/week)



## Next actions (founder)



1. Schedule 5 external calls using the script above (bootcamp directors, TAs, DevRel, indie operators)

2. Share the public form after calls: https://venture-raven-dubgub.vercel.app/interviews

3. Review submissions at `/interviews/admin` or `GET /api/interviews` (founder auth)

4. Fill dated notes in each slot within 48 hours of each call

5. Update this file and reference key quotes in `docs/business-plan.md` if they change assumptions


