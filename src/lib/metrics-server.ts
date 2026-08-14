import { ProductEventType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  collectQualifiedUserIds,
  INTERNAL_TEAM_SLUGS,
  isInternalTeamSlug,
  parseInternalEmailsFromEnv,
  splitQualifiedUsers,
} from "@/lib/venture";

export async function recordProductEvent(
  userId: string,
  type: ProductEventType,
  metadata?: Record<string, string>,
) {
  return prisma.productEvent.create({
    data: {
      userId,
      type,
      metadata: metadata ? JSON.stringify(metadata) : null,
    },
  });
}

async function getInternalUserIds(
  eventRows: Array<{ userId: string; type: ProductEventType; metadata: string | null }>,
) {
  const internalUserIds = new Set<string>();
  const internalEmails = [...parseInternalEmailsFromEnv(process.env.METRICS_INTERNAL_EMAILS)];

  const [internalTeams, internalEmailUsers] = await Promise.all([
    prisma.teamWorkspace.findMany({
      where: { slug: { in: [...INTERNAL_TEAM_SLUGS] } },
      select: { ownerId: true },
    }),
    internalEmails.length > 0
      ? prisma.user.findMany({
          where: { email: { in: internalEmails } },
          select: { id: true },
        })
      : Promise.resolve([]),
  ]);

  for (const team of internalTeams) {
    internalUserIds.add(team.ownerId);
  }

  for (const user of internalEmailUsers) {
    internalUserIds.add(user.id);
  }

  for (const row of eventRows) {
    if (row.type !== "TEAM_CREATED" || !row.metadata) {
      continue;
    }

    try {
      const metadata = JSON.parse(row.metadata) as { slug?: string };
      if (metadata.slug && isInternalTeamSlug(metadata.slug)) {
        internalUserIds.add(row.userId);
      }
    } catch {
      // ignore malformed metadata
    }
  }

  return internalUserIds;
}

export async function getVentureMetricsSnapshot() {
  const [totalUsers, totalTeams, eventRows, recentTeams] = await Promise.all([
    prisma.user.count(),
    prisma.teamWorkspace.count(),
    prisma.productEvent.findMany({
      select: { userId: true, type: true, metadata: true },
    }),
    prisma.teamWorkspace.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        plan: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  const eventsByType: Record<string, number> = {};

  for (const row of eventRows) {
    eventsByType[row.type] = (eventsByType[row.type] ?? 0) + 1;
  }

  const qualifiedUserIds = collectQualifiedUserIds(eventRows);
  const internalUserIds = await getInternalUserIds(eventRows);
  const { external, internal } = splitQualifiedUsers(
    qualifiedUserIds,
    internalUserIds,
  );

  return {
    snapshot_at: new Date().toISOString(),
    app_namespace: "venture-agent-git-lab-teams",
    total_users: totalUsers,
    total_teams: totalTeams,
    unique_users: totalUsers,
    qualified_users: external,
    qualified_users_internal: internal,
    qualified_users_total: qualifiedUserIds.size,
    internal_team_slugs: [...INTERNAL_TEAM_SLUGS],
    events_by_type: eventsByType,
    recent_teams: recentTeams.map((team) => ({
      name: team.name,
      slug: team.slug,
      plan: team.plan,
      created_at: team.createdAt.toISOString(),
    })),
  };
}
