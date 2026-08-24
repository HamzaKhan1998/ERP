-- AlterTable
ALTER TABLE "FileAsset" ADD COLUMN     "qualityRecordId" TEXT;

-- CreateIndex
CREATE INDEX "FileAsset_qualityRecordId_idx" ON "FileAsset"("qualityRecordId");

-- AddForeignKey
ALTER TABLE "FileAsset" ADD CONSTRAINT "FileAsset_qualityRecordId_fkey" FOREIGN KEY ("qualityRecordId") REFERENCES "QualityRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;
