import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import {
  interviewSubmissionSchema,
  isInterviewAdmin,
  roleSegmentLabel,
  toInterviewSubmissionData,
} from "@/lib/interviews";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = interviewSubmissionSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid submission. Check required fields, minimum lengths, and consent.",
        fields: parsed.error.issues.map((issue) => issue.path.join(".")).filter(Boolean),
      },
      { status: 400 },
    );
  }

  try {
    const submission = await prisma.interviewSubmission.create({
      data: toInterviewSubmissionData(parsed.data),
    });

    return NextResponse.json(
      {
        id: submission.id,
        createdAt: submission.createdAt.toISOString(),
        message: "Thank you. your responses were saved for RAVEN's research log.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("interview submission failed", error);
    return NextResponse.json({ error: "Unable to save submission" }, { status: 503 });
  }
}

export async function GET() {
  try {
    const user = await requireUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allowed = await isInterviewAdmin(user.id, user.email);
    if (!allowed) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const submissions = await prisma.interviewSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      count: submissions.length,
      submissions: submissions.map((submission) => ({
        id: submission.id,
        createdAt: submission.createdAt.toISOString(),
        roleSegment: submission.roleSegment,
        roleLabel: roleSegmentLabel(submission.roleSegment),
        organization: submission.organization,
        cohortSize: submission.cohortSize,
        experienceLevel: submission.experienceLevel,
        onboardingProcess: submission.onboardingProcess,
        painPoints: submission.painPoints,
        currentTools: submission.currentTools,
        progressSignals: submission.progressSignals,
        idealOutcome: submission.idealOutcome,
        pricingFeedback: submission.pricingFeedback,
        switchingCost: submission.switchingCost,
        productFeedback: submission.productFeedback,
        followUpOk: submission.followUpOk,
        introsOffered: submission.introsOffered,
        willingnessToPilot: submission.willingnessToPilot,
        notableQuote: submission.notableQuote,
        insight: submission.insight,
        contactName: submission.contactName,
        contactEmail: submission.contactEmail,
        consentGiven: submission.consentGiven,
      })),
    });
  } catch (error) {
    console.error("interview list failed", error);
    return NextResponse.json({ error: "Unable to load submissions" }, { status: 503 });
  }
}
