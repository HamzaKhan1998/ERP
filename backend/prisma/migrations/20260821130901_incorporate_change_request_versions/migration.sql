-- CreateEnum
CREATE TYPE "DocumentVersionStatus" AS ENUM ('CURRENT', 'DRAFT', 'SUPERSEDED');

-- AlterTable
ALTER TABLE "ChangeRequest" ADD COLUMN     "incorporatedVersionId" TEXT;

-- AlterTable
ALTER TABLE "DocumentVersion" ADD COLUMN     "status" "DocumentVersionStatus" NOT NULL DEFAULT 'CURRENT';

-- AddForeignKey
ALTER TABLE "ChangeRequest" ADD CONSTRAINT "ChangeRequest_incorporatedVersionId_fkey" FOREIGN KEY ("incorporatedVersionId") REFERENCES "DocumentVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
