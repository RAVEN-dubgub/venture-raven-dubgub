-- CreateTable
CREATE TABLE "InterviewSubmission" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roleSegment" TEXT NOT NULL,
    "organization" TEXT,
    "cohortSize" TEXT,
    "experienceLevel" TEXT,
    "onboardingProcess" TEXT NOT NULL,
    "painPoints" TEXT NOT NULL,
    "currentTools" TEXT NOT NULL,
    "progressSignals" TEXT NOT NULL,
    "idealOutcome" TEXT NOT NULL,
    "pricingFeedback" TEXT NOT NULL,
    "switchingCost" TEXT NOT NULL,
    "productFeedback" TEXT,
    "followUpOk" BOOLEAN NOT NULL DEFAULT false,
    "introsOffered" TEXT,
    "willingnessToPilot" TEXT NOT NULL,
    "notableQuote" TEXT,
    "insight" TEXT,
    "contactName" TEXT,
    "contactEmail" TEXT,
    "consentGiven" BOOLEAN NOT NULL,

    CONSTRAINT "InterviewSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "InterviewSubmission_createdAt_idx" ON "InterviewSubmission"("createdAt");

-- CreateIndex
CREATE INDEX "InterviewSubmission_roleSegment_idx" ON "InterviewSubmission"("roleSegment");
