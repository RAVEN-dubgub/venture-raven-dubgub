import { NextResponse } from "next/server";
import { getVentureMetricsSnapshot } from "@/lib/metrics-server";

export async function GET() {
  try {
    const metrics = await getVentureMetricsSnapshot();
    return NextResponse.json(metrics);
  } catch (error) {
    console.error("metrics snapshot failed", error);
    return NextResponse.json({ error: "Metrics unavailable" }, { status: 503 });
  }
}
