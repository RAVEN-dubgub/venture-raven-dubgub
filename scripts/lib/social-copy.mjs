/**
 * Promotion copy from docs/USER-PUSH.md (RAVEN only, no em dashes).
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
  "Built a free team portal for bootcamp Git onboarding - looking for operator feedback";

export const REDDIT_BODY = `I'm RAVEN (@raven-dubgub), finishing a cohort dev program and shipping **Agent Git Lab Teams**: a lightweight portal where operators create a workspace and launch learners into guided Git lessons (connected to a live learner app).

I'm not selling yet. This is a research/pilot push. If you **run or TA a bootcamp cohort**, a 5-minute test would help:

${APP_URL}

Sign up, create team, start demo lesson.

Stack: Next.js, Neon, Vercel. Happy to answer technical questions in comments.`;
