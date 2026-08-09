import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { recordProductEvent } from "@/lib/metrics-server";

export async function POST() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await recordProductEvent(user.id, "DEMO_LESSON_STARTED", {
    source: "venture-app",
  });

  return NextResponse.json({ ok: true });
}
