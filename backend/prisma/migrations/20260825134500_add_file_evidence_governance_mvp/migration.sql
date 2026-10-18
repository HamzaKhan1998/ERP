DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'FileAssetUploadStatus') THEN
    CREATE TYPE "FileAssetUploadStatus" AS ENUM ('PENDING_SCAN', 'ACTIVE', 'QUARANTINED', 'REJECTED');
  END IF;
END $$;

ALTER TABLE "FileAsset"
  ADD COLUMN IF NOT EXISTS "sha256" TEXT,
  ADD COLUMN IF NOT EXISTS "uploadStatus" "FileAssetUploadStatus" NOT NULL DEFAULT 'PENDING_SCAN',
  ADD COLUMN IF NOT EXISTS "retentionClass" TEXT NOT NULL DEFAULT 'DEFAULT',
  ADD COLUMN IF NOT EXISTS "retentionUntil" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "legalHold" BOOLEAN NOT NULL DEFAULT false;

UPDATE "FileAsset"
SET "sha256" = "checksum"
WHERE "sha256" IS NULL;

ALTER TABLE "FileAsset"
  ALTER COLUMN "sha256" SET NOT NULL;

UPDATE "FileAsset"
SET "uploadStatus" = 'ACTIVE'
WHERE "uploadStatus" = 'PENDING_SCAN';

CREATE INDEX IF NOT EXISTS "FileAsset_tenantId_uploadStatus_createdAt_idx"
  ON "FileAsset"("tenantId", "uploadStatus", "createdAt");

CREATE INDEX IF NOT EXISTS "FileAsset_retentionUntil_idx"
  ON "FileAsset"("retentionUntil");
