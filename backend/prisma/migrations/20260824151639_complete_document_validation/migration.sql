-- AlterEnum
ALTER TYPE "DocumentVersionStatus" ADD VALUE 'APPROVED';

-- AlterTable
ALTER TABLE "DocumentVersion" ADD COLUMN     "reviewIntervalYears" INTEGER NOT NULL DEFAULT 3;
