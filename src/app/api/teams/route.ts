import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { recordProductEvent } from "@/lib/metrics-server";
import { prisma } from "@/lib/prisma";
import { slugifyTeamName } from "@/lib/venture";

const teamSchema = z.object({
  name: z.string().min(2).max(80),
});

export async function GET() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const teams = await prisma.teamWorkspace.findMany({
    where: { ownerId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ teams });
}

export async function POST(request: Request) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = teamSchema.parse(await request.json());
    const baseSlug = slugifyTeamName(body.name);
    let slug = baseSlug;
    let suffix = 1;

    while (await prisma.teamWorkspace.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    const team = await prisma.teamWorkspace.create({
      data: {
        name: body.name.trim(),
        slug,
        ownerId: user.id,
      },
    });

    await recordProductEvent(user.id, "TEAM_CREATED", {
      teamId: team.id,
      slug: team.slug,
    });

    return NextResponse.json({ team }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid team payload" }, { status: 400 });
    }
    console.error("team create failed", error);
    return NextResponse.json({ error: "Unable to create team" }, { status: 500 });
  }
}
