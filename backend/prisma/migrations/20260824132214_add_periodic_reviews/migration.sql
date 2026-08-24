-- CreateEnum
CREATE TYPE "PeriodicReviewOutcome" AS ENUM ('REMAINS_VALID', 'REVISION_REQUIRED', 'RETIRED', 'RETURNED_FOR_CLARIFICATION');

-- CreateTable
CREATE TABLE "PeriodicReview" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "reviewedById" TEXT NOT NULL,
    "outcome" "PeriodicReviewOutcome" NOT NULL,
    "comments" TEXT,
    "referencesChecked" TEXT,
    "reviewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextReviewDate" TIMESTAMP(3),

    CONSTRAINT "PeriodicReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PeriodicReview_tenantId_reviewedAt_idx" ON "PeriodicReview"("tenantId", "reviewedAt");

-- CreateIndex
CREATE INDEX "PeriodicReview_versionId_reviewedAt_idx" ON "PeriodicReview"("versionId", "reviewedAt");

-- AddForeignKey
ALTER TABLE "PeriodicReview" ADD CONSTRAINT "PeriodicReview_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeriodicReview" ADD CONSTRAINT "PeriodicReview_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "DocumentVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeriodicReview" ADD CONSTRAINT "PeriodicReview_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
