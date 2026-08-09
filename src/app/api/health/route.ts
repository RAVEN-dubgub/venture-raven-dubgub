import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "venture-raven-dubgub",
    timestamp: new Date().toISOString(),
  });
}
