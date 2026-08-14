export const SESSION_COOKIE = "agent_git_lab_teams_session";
export const QUALIFIED_EVENT_TYPES = [
  "TEAM_CREATED",
  "DEMO_LESSON_STARTED",
] as const;

/** Smoke / founder test teams — excluded from external qualified_users gate */
export const INTERNAL_TEAM_SLUGS = [
  "metrics-smoke-team",
  "test-boot",
] as const;

export type QualifiedEventType = (typeof QUALIFIED_EVENT_TYPES)[number];

export function isInternalTeamSlug(slug: string) {
  return (INTERNAL_TEAM_SLUGS as readonly string[]).includes(slug);
}

export function parseInternalEmailsFromEnv(value: string | undefined) {
  if (!value?.trim()) {
    return new Set<string>();
  }

  return new Set(
    value
      .split(",")
      .map((email) => normalizeEmail(email))
      .filter((email) => email.length > 0),
  );
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

/** Smoke / QA signups — excluded from external qualified_users gate (25) */
export function isInternalSignupEmail(email: string) {
  const normalized = normalizeEmail(email);
  const localPart = normalized.split("@")[0] ?? "";
  const domain = normalized.split("@")[1] ?? "";

  if (domain === "example.com") {
    return true;
  }

  if (
    localPart.startsWith("test+") ||
    localPart.startsWith("qa-bot+") ||
    localPart.includes("smoke")
  ) {
    return true;
  }

  return false;
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

export function collectQualifiedUserIds(
  rows: Array<{ userId: string; type: string }>,
) {
  const qualified = new Set<string>();

  for (const row of rows) {
    if (isQualifiedEventType(row.type)) {
      qualified.add(row.userId);
    }
  }

  return qualified;
}

export function countQualifiedUsers(
  rows: Array<{ userId: string; type: string }>,
) {
  return collectQualifiedUserIds(rows).size;
}

export function splitQualifiedUsers(
  qualifiedUserIds: Set<string>,
  internalUserIds: Set<string>,
) {
  let external = 0;
  let internal = 0;

  for (const userId of qualifiedUserIds) {
    if (internalUserIds.has(userId)) {
      internal += 1;
    } else {
      external += 1;
    }
  }

  return { external, internal };
}

export const PRODUCTION_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://venture-raven-dubgub.vercel.app";

export const LEARNING_APP_URL =
  process.env.NEXT_PUBLIC_LEARNING_APP_URL ?? "https://learning-raven-dubgub.vercel.app";

export const SITE_NAME = "Agent Git Lab Teams";

export const FOUNDER_DISPLAY_NAME = "RAVEN";
export const FOUNDER_GITHUB = "@raven-dubgub";

export const COHORT_PRODUCTS = [
  {
    label: "Agent Git Lab (learner app)",
    href: LEARNING_APP_URL,
  },
  {
    label: "Cohort PM",
    href: "https://pm-raven-dubgub.vercel.app",
  },
  {
    label: "Cohort comms",
    href: "https://comms-raven-dubgub.vercel.app",
  },
  {
    label: "Public showcase",
    href: "https://showcase-raven-dubgub.vercel.app",
  },
] as const;
