import { NextResponse } from "next/server";
import { z } from "zod";
import {
  attachSessionCookie,
  createSessionToken,
  hashPassword,
  verifyPassword,
} from "@/lib/auth";
import { recordProductEvent } from "@/lib/metrics-server";
import { prisma } from "@/lib/prisma";
import { isInternalSignupEmail, normalizeEmail } from "@/lib/venture";

const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(80),
  password: z.string().min(8).max(128),
});

export async function POST(request: Request) {
  try {
    const body = signupSchema.parse(await request.json());
    const email = normalizeEmail(body.email);

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name: body.name.trim(),
        passwordHash: await hashPassword(body.password),
        isInternal: isInternalSignupEmail(email),
      },
      select: { id: true, email: true, name: true },
    });

    await recordProductEvent(user.id, "SIGNUP");

    const token = await createSessionToken(user);
    const response = NextResponse.json({ user });
    return attachSessionCookie(response, token);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid signup payload" }, { status: 400 });
    }
    console.error("signup failed", error);
    return NextResponse.json({ error: "Unable to create account" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = z
      .object({
        email: z.string().email(),
        password: z.string().min(8).max(128),
      })
      .parse(await request.json());

    const user = await prisma.user.findUnique({
      where: { email: normalizeEmail(body.email) },
    });

    if (!user || !(await verifyPassword(body.password, user.passwordHash))) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const sessionUser = { id: user.id, email: user.email, name: user.name };
    const token = await createSessionToken(sessionUser);
    const response = NextResponse.json({ user: sessionUser });
    return attachSessionCookie(response, token);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid login payload" }, { status: 400 });
    }
    console.error("login failed", error);
    return NextResponse.json({ error: "Unable to log in" }, { status: 500 });
  }
}
