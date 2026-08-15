import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { normalizeEmail, parseInternalEmailsFromEnv } from "@/lib/venture";

export const ROLE_SEGMENTS = [
  { value: "bootcamp_director", label: "Bootcamp director / program lead" },
  { value: "university_ta", label: "University lab / TA lead" },
  { value: "devrel", label: "DevRel / tools startup" },
  { value: "indie_operator", label: "Indie program operator" },
  { value: "academy_lead", label: "Internal academy / L&D lead" },
  { value: "other", label: "Other operator role" },
] as const;

export const PILOT_WILLINGNESS = ["YES", "NO", "MAYBE"] as const;

export const interviewSubmissionSchema = z.object({
  roleSegment: z.enum([
    "bootcamp_director",
    "university_ta",
    "devrel",
    "indie_operator",
    "academy_lead",
    "other",
  ]),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  cohortSize: z.string().trim().max(80).optional().or(z.literal("")),
  experienceLevel: z.string().trim().max(120).optional().or(z.literal("")),
  onboardingProcess: z.string().trim().min(10).max(4000),
  painPoints: z.string().trim().min(10).max(4000),
  currentTools: z.string().trim().min(3).max(2000),
  progressSignals: z.string().trim().min(10).max(4000),
  idealOutcome: z.string().trim().min(10).max(4000),
  pricingFeedback: z.string().trim().min(3).max(2000),
  switchingCost: z.string().trim().min(3).max(2000),
  productFeedback: z.string().trim().max(4000).optional().or(z.literal("")),
  followUpOk: z.boolean(),
  introsOffered: z.string().trim().max(2000).optional().or(z.literal("")),
  willingnessToPilot: z.enum(PILOT_WILLINGNESS),
  notableQuote: z.string().trim().max(2000).optional().or(z.literal("")),
  insight: z.string().trim().max(2000).optional().or(z.literal("")),
  contactName: z.string().trim().max(80).optional().or(z.literal("")),
  contactEmail: z
    .string()
    .trim()
    .email()
    .max(254)
    .optional()
    .or(z.literal("")),
  consentGiven: z.literal(true),
});

export type InterviewSubmissionInput = z.infer<typeof interviewSubmissionSchema>;

function emptyToNull(value: string | undefined) {
  if (!value?.trim()) {
    return null;
  }
  return value.trim();
}

export function toInterviewSubmissionData(input: InterviewSubmissionInput) {
  return {
    roleSegment: input.roleSegment,
    organization: emptyToNull(input.organization),
    cohortSize: emptyToNull(input.cohortSize),
    experienceLevel: emptyToNull(input.experienceLevel),
    onboardingProcess: input.onboardingProcess.trim(),
    painPoints: input.painPoints.trim(),
    currentTools: input.currentTools.trim(),
    progressSignals: input.progressSignals.trim(),
    idealOutcome: input.idealOutcome.trim(),
    pricingFeedback: input.pricingFeedback.trim(),
    switchingCost: input.switchingCost.trim(),
    productFeedback: emptyToNull(input.productFeedback),
    followUpOk: input.followUpOk,
    introsOffered: emptyToNull(input.introsOffered),
    willingnessToPilot: input.willingnessToPilot,
    notableQuote: emptyToNull(input.notableQuote),
    insight: emptyToNull(input.insight),
    contactName: emptyToNull(input.contactName),
    contactEmail: emptyToNull(input.contactEmail),
    consentGiven: true,
  };
}

export async function isInterviewAdmin(userId: string, email: string) {
  const internalEmails = parseInternalEmailsFromEnv(process.env.METRICS_INTERNAL_EMAILS);
  const normalizedEmail = normalizeEmail(email);

  if (internalEmails.has(normalizedEmail)) {
    return true;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { isInternal: true },
  });

  return user?.isInternal === true;
}

export function roleSegmentLabel(value: string) {
  return ROLE_SEGMENTS.find((segment) => segment.value === value)?.label ?? value;
}
