export const SESSION_COOKIE = "agent_git_lab_teams_session";
export const QUALIFIED_EVENT_TYPES = [
  "TEAM_CREATED",
  "DEMO_LESSON_STARTED",
] as const;

export type QualifiedEventType = (typeof QUALIFIED_EVENT_TYPES)[number];

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function slugifyTeamName(name: string) {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

  return base.length > 0 ? base : "team";
}

export function isQualifiedEventType(value: string): value is QualifiedEventType {
  return (QUALIFIED_EVENT_TYPES as readonly string[]).includes(value);
}

export function countQualifiedUsers(
  rows: Array<{ userId: string; type: string }>,
) {
  const qualified = new Set<string>();

  for (const row of rows) {
    if (isQualifiedEventType(row.type)) {
      qualified.add(row.userId);
    }
  }

  return qualified.size;
}

export const LEARNING_APP_URL =
  process.env.NEXT_PUBLIC_LEARNING_APP_URL ?? "https://learning-raven-dubgub.vercel.app";

export const SITE_NAME = "Agent Git Lab Teams";

export const FOUNDER_DISPLAY_NAME = "@raven-dubgub";
