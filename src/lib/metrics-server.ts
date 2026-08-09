import { ProductEventType } from "@prisma/client";
import { prisma } from "@/lib/prisma";

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

export async function getVentureMetricsSnapshot() {
  const [totalUsers, totalTeams, eventRows, recentTeams] = await Promise.all([
    prisma.user.count(),
    prisma.teamWorkspace.count(),
    prisma.productEvent.findMany({
      select: { userId: true, type: true },
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

  const qualifiedUserIds = new Set<string>();
  const eventsByType: Record<string, number> = {};

  for (const row of eventRows) {
    eventsByType[row.type] = (eventsByType[row.type] ?? 0) + 1;
    if (row.type === "TEAM_CREATED" || row.type === "DEMO_LESSON_STARTED") {
      qualifiedUserIds.add(row.userId);
    }
  }

  return {
    snapshot_at: new Date().toISOString(),
    app_namespace: "venture-agent-git-lab-teams",
    total_users: totalUsers,
    total_teams: totalTeams,
    unique_users: totalUsers,
    qualified_users: qualifiedUserIds.size,
    events_by_type: eventsByType,
    recent_teams: recentTeams.map((team) => ({
      name: team.name,
      slug: team.slug,
      plan: team.plan,
      created_at: team.createdAt.toISOString(),
    })),
  };
}
