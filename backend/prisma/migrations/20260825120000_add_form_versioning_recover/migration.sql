-- Recoverable migration for richer form versioning.
-- This script is intentionally idempotent to tolerate partially applied attempts.

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'FormVersionStatus') THEN
    CREATE TYPE "FormVersionStatus" AS ENUM ('DRAFT', 'APPROVED', 'CURRENT', 'SUPERSEDED', 'RETIRED');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS "FormVersion" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "templateId" TEXT NOT NULL,
  "revisionNumber" INTEGER NOT NULL,
  "status" "FormVersionStatus" NOT NULL DEFAULT 'DRAFT',
  "effectiveDate" TIMESTAMP(3),
  "nextReviewDate" TIMESTAMP(3),
  "reviewIntervalYears" INTEGER NOT NULL DEFAULT 3,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'FormVersion_templateId_fkey') THEN
    ALTER TABLE "FormVersion"
      ADD CONSTRAINT "FormVersion_templateId_fkey"
      FOREIGN KEY ("templateId") REFERENCES "FormTemplate"("id") ON DELETE CASCADE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'FormVersion_templateId_revisionNumber_key') THEN
    ALTER TABLE "FormVersion"
      ADD CONSTRAINT "FormVersion_templateId_revisionNumber_key"
      UNIQUE ("templateId", "revisionNumber");
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS "FormVersion_templateId_status_idx"
  ON "FormVersion"("templateId", "status");

CREATE TABLE IF NOT EXISTS "FormVersionApproval" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "versionId" TEXT NOT NULL,
  "reviewedById" TEXT,
  "decision" TEXT,
  "comment" TEXT,
  "decidedAt" TIMESTAMP(3)
);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'FormVersionApproval_versionId_fkey') THEN
    ALTER TABLE "FormVersionApproval"
      ADD CONSTRAINT "FormVersionApproval_versionId_fkey"
      FOREIGN KEY ("versionId") REFERENCES "FormVersion"("id") ON DELETE CASCADE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'FormVersionApproval_reviewedById_fkey') THEN
    ALTER TABLE "FormVersionApproval"
      ADD CONSTRAINT "FormVersionApproval_reviewedById_fkey"
      FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'FormVersionApproval_versionId_key') THEN
    ALTER TABLE "FormVersionApproval"
      ADD CONSTRAINT "FormVersionApproval_versionId_key"
      UNIQUE ("versionId");
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS "FormVersionApproval_reviewedById_idx"
  ON "FormVersionApproval"("reviewedById");

INSERT INTO "FormVersion" ("id", "templateId", "revisionNumber", "status", "createdAt")
SELECT gen_random_uuid()::text, ft."id", 1, 'CURRENT', ft."createdAt"
FROM "FormTemplate" ft
WHERE NOT EXISTS (
  SELECT 1
  FROM "FormVersion" fv
  WHERE fv."templateId" = ft."id" AND fv."revisionNumber" = 1
);

ALTER TABLE "FormField" ADD COLUMN IF NOT EXISTS "versionId" TEXT;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'FormField' AND column_name = 'templateId'
  ) THEN
    UPDATE "FormField" f
    SET "versionId" = fv."id"
    FROM "FormVersion" fv
    WHERE f."versionId" IS NULL
      AND fv."templateId" = f."templateId"
      AND fv."revisionNumber" = 1;
  END IF;
END $$;

DO $$
DECLARE
  null_count integer;
BEGIN
  SELECT COUNT(*) INTO null_count FROM "FormField" WHERE "versionId" IS NULL;
  IF null_count > 0 THEN
    RAISE EXCEPTION 'Cannot enforce FormField.versionId NOT NULL, % rows are still NULL', null_count;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'FormField' AND column_name = 'versionId' AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE "FormField" ALTER COLUMN "versionId" SET NOT NULL;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'FormField_versionId_fkey') THEN
    ALTER TABLE "FormField"
      ADD CONSTRAINT "FormField_versionId_fkey"
      FOREIGN KEY ("versionId") REFERENCES "FormVersion"("id") ON DELETE CASCADE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'FormField_versionId_fieldKey_key') THEN
    ALTER TABLE "FormField"
      ADD CONSTRAINT "FormField_versionId_fieldKey_key"
      UNIQUE ("versionId", "fieldKey");
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS "FormField_versionId_sortOrder_idx"
  ON "FormField"("versionId", "sortOrder");

ALTER TABLE "FormField" DROP CONSTRAINT IF EXISTS "FormField_templateId_fkey";
ALTER TABLE "FormField" DROP CONSTRAINT IF EXISTS "FormField_templateId_fieldKey_key";
ALTER TABLE "FormField" DROP COLUMN IF EXISTS "templateId";

ALTER TABLE "QualityRecord" ADD COLUMN IF NOT EXISTS "formVersionId" TEXT;

UPDATE "QualityRecord" qr
SET "formVersionId" = fv."id"
FROM "FormVersion" fv
WHERE qr."formVersionId" IS NULL
  AND fv."templateId" = qr."templateId"
  AND fv."revisionNumber" = 1;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'QualityRecord_formVersionId_fkey') THEN
    ALTER TABLE "QualityRecord"
      ADD CONSTRAINT "QualityRecord_formVersionId_fkey"
      FOREIGN KEY ("formVersionId") REFERENCES "FormVersion"("id") ON DELETE SET NULL;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS "QualityRecord_formVersionId_createdAt_idx"
  ON "QualityRecord"("formVersionId", "createdAt");
