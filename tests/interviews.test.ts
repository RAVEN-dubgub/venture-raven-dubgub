import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  interviewSubmissionSchema,
  roleSegmentLabel,
  toInterviewSubmissionData,
} from "../src/lib/interviews";

const validPayload = {
  roleSegment: "bootcamp_director",
  organization: "Example Academy",
  cohortSize: "30 seats",
  experienceLevel: "3 years",
  onboardingProcess: "We run a week-one Git workshop and Discord office hours.",
  painPoints: "Learners struggle with branching and resolving merge conflicts.",
  currentTools: "Discord, Notion, GitHub Classroom",
  progressSignals: "First PR merged and quiz completion in week two.",
  idealOutcome: "A single portal with launch links and basic progress signals.",
  pricingFeedback: "$49/month feels fair for a pilot if setup is under a day.",
  switchingCost: "Would switch if onboarding time dropped below one week.",
  productFeedback: "",
  followUpOk: true,
  introsOffered: "",
  willingnessToPilot: "MAYBE",
  notableQuote: "",
  insight: "",
  contactName: "",
  contactEmail: "",
  consentGiven: true as const,
};

describe("interviewSubmissionSchema", () => {
  it("accepts a complete external submission", () => {
    const parsed = interviewSubmissionSchema.parse(validPayload);
    assert.equal(parsed.roleSegment, "bootcamp_director");
    assert.equal(parsed.consentGiven, true);
  });

  it("rejects submissions without consent", () => {
    assert.throws(() =>
      interviewSubmissionSchema.parse({
        ...validPayload,
        consentGiven: false,
      }),
    );
  });
});

describe("toInterviewSubmissionData", () => {
  it("maps optional empty strings to null", () => {
    const data = toInterviewSubmissionData(interviewSubmissionSchema.parse(validPayload));
    assert.equal(data.organization, "Example Academy");
    assert.equal(data.productFeedback, null);
    assert.equal(data.contactEmail, null);
  });
});

describe("roleSegmentLabel", () => {
  it("returns a human label for known segments", () => {
    assert.match(roleSegmentLabel("devrel"), /DevRel/);
  });
});
