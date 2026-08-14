/**
 * Promotion copy from docs/USER-PUSH.md (RAVEN only, no em dashes).
 * Reddit copy = safer r/codingbootcamp variant (learnprogramming removed Aug 2026).
 */
export const APP_URL = "https://venture-raven-dubgub.vercel.app/app";

export const PITCH_URL = "https://venture-raven-dubgub.vercel.app/pitch";

export const DISCORD_MESSAGE = `Hey, RAVEN here (@raven-dubgub).

**Agent Git Lab Teams** is a free team portal where bootcamp operators create a workspace and launch learners into guided Git/GitHub lessons.

I need **external operators** (not my cohort classmates) to run a 5-minute smoke test before Aug 19. Everything is self-serve:

**Try it:** ${APP_URL}

**Steps:**
1. Open the link above
2. Sign up with email and password
3. Create a team name
4. Click **Start demo lesson**

That is it. No DM needed. Reply in this thread if something breaks or you have feedback.

**Curious about the product?** Pitch deck: ${PITCH_URL}`;

export const REDDIT_TITLE =
  "Student project: team portal for bootcamp Git onboarding - would operators roast this?";

export const REDDIT_BODY = `I am a solo student builder (Hult developer cohort program). I kept seeing the same pain in bootcamp threads: instructors duct-tape Slack, spreadsheets, and LMS tabs just to get a cohort through first-week Git/GitHub.

So I built **Agent Git Lab Teams** - a small web app where an operator creates a workspace and drops learners into a guided Git lesson (Next.js, Prisma, Neon, Vercel). It is free, rough, and very much a learning project, not a sales pitch.

If you have ever run or TA'd a cohort, I would genuinely appreciate a **5-minute smoke test** and blunt feedback in **this thread** (please do not DM - I want public notes so others can chime in):

1. Sign up at ${APP_URL}
2. Create a team name
3. Click **Start demo lesson**

**Questions I am trying to answer:**
- Is the operator flow obvious on first visit?
- Would you trust this for a 20-50 seat pilot, or what would block you?
- What is the first thing you would delete?

Happy to answer anything about the stack or scope in the comments.`;
