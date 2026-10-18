import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { FileAssetModel } from '../../generated/prisma/models.js';
import { FileAssetUploadStatus } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';
import { AuditLogService } from '../audit-log/audit-log.service.js';

const allowedMimeTypes = new Set(['application/pdf', 'image/jpeg', 'image/png']);
const blockedFileExtensions = new Set(['.exe', '.bat', '.cmd', '.com', '.dll', '.js', '.vbs', '.msi', '.ps1', '.scr']);
const maxFileSizeByMimeType: Record<string, number> = {
  'application/pdf': 10 * 1024 * 1024,
  'image/jpeg': 10 * 1024 * 1024,
  'image/png': 10 * 1024 * 1024,
};

function normalizeFilename(name: string) {
  return name.replace(/[\\/\r\n\t]+/g, '_').trim() || 'upload';
}

function hasBlockedExtension(name: string) {
  const dot = name.lastIndexOf('.');
  if (dot < 0) return false;
  const extension = name.slice(dot).toLowerCase();
  return blockedFileExtensions.has(extension);
}

function hasValidSignature(file: Express.Multer.File) {
  if (file.mimetype === 'application/pdf') return file.buffer.subarray(0, 5).toString() === '%PDF-';
  if (file.mimetype === 'image/jpeg') return file.buffer[0] === 0xff && file.buffer[1] === 0xd8 && file.buffer[2] === 0xff;
  if (file.mimetype === 'image/png') return file.buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  return false;
}

function extensionForMimeType(mimeType: string) {
  return mimeType === 'application/pdf' ? 'pdf' : mimeType === 'image/png' ? 'png' : 'jpg';
}

@Injectable()
export class FilesService {
  private readonly storageRoot = join(process.cwd(), 'storage', 'uploads');

  constructor(
    private readonly prisma: PrismaService,
    private readonly auditLog: AuditLogService,
  ) {}

  private validateIncomingFile(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('A PDF or image file is required');
    if (!allowedMimeTypes.has(file.mimetype)) throw new BadRequestException('Only PDF, JPEG, and PNG files are supported');
    const maxSize = maxFileSizeByMimeType[file.mimetype] ?? 0;
    if (maxSize <= 0) throw new BadRequestException('Unsupported file type');
    if (file.size > maxSize) throw new BadRequestException('Files must be 10 MB or smaller');
    if (hasBlockedExtension(file.originalname)) throw new BadRequestException('Unsafe file extension is not allowed');
    if (!hasValidSignature(file)) throw new BadRequestException('File content does not match its declared type');
  }

  async upload(
    documentId: string,
    file: Express.Multer.File,
    actor: AuthenticatedUser,
    versionId?: string,
  ): Promise<FileAssetModel> {
    this.validateIncomingFile(file);

    const document = await this.prisma.document.findUnique({ where: { id: documentId } });
    if (!document) throw new NotFoundException('Document not found');
    if (actor.scope !== 'PLATFORM_ADMIN' && document.tenantId !== actor.tenantId) throw new NotFoundException('Document not found');

    if (versionId) {
      const version = await this.prisma.documentVersion.findFirst({ where: { id: versionId, documentId } });
      if (!version) throw new NotFoundException('Document version not found');
    }

    const normalizedName = normalizeFilename(file.originalname);
    const extension = extensionForMimeType(file.mimetype);
    const storageKey = `${document.tenantId}/${documentId}/${randomUUID()}.${extension}`;
    const destination = join(this.storageRoot, storageKey);
    await mkdir(join(this.storageRoot, document.tenantId, documentId), { recursive: true });
    await writeFile(destination, file.buffer);

    const sha256 = createHash('sha256').update(file.buffer).digest('hex');

    const created = await this.prisma.fileAsset.create({
      data: {
        tenantId: document.tenantId,
        documentId,
        versionId,
        uploadedById: actor.sub,
        originalName: normalizedName,
        storageKey,
        mimeType: file.mimetype,
        sizeBytes: file.size,
        checksum: sha256,
        sha256,
        uploadStatus: FileAssetUploadStatus.ACTIVE,
        retentionClass: 'DOCUMENT_ATTACHMENT',
      },
    });

    await this.auditLog.record({
      actor,
      action: 'EVIDENCE_UPLOADED',
      entityType: 'FileAsset',
      entityId: created.id,
      details: {
        documentId,
        versionId,
        uploadStatus: created.uploadStatus,
        mimeType: created.mimeType,
        sizeBytes: created.sizeBytes,
      },
    });

    await this.auditLog.record({
      actor,
      action: 'EVIDENCE_SCAN_PASSED',
      entityType: 'FileAsset',
      entityId: created.id,
      details: {
        mode: 'signature_and_mime_validation',
      },
    });

    return created;
  }

  async uploadForRecord(
    qualityRecordId: string,
    file: Express.Multer.File,
    actor: AuthenticatedUser,
  ): Promise<FileAssetModel> {
    this.validateIncomingFile(file);

    const record = await this.prisma.qualityRecord.findFirst({
      where: { id: qualityRecordId, tenantId: actor.tenantId ?? '' },
    });
    if (!record) throw new NotFoundException('Quality record not found');

    const normalizedName = normalizeFilename(file.originalname);
    const extension = extensionForMimeType(file.mimetype);
    const storageKey = `${record.tenantId}/records/${qualityRecordId}/${randomUUID()}.${extension}`;
    const destination = join(this.storageRoot, storageKey);
    await mkdir(join(this.storageRoot, record.tenantId, 'records', qualityRecordId), { recursive: true });
    await writeFile(destination, file.buffer);

    const sha256 = createHash('sha256').update(file.buffer).digest('hex');

    const created = await this.prisma.fileAsset.create({
      data: {
        tenantId: record.tenantId,
        qualityRecordId,
        documentId: record.documentId ?? undefined,
        versionId: record.versionId ?? undefined,
        uploadedById: actor.sub,
        originalName: normalizedName,
        storageKey,
        mimeType: file.mimetype,
        sizeBytes: file.size,
        checksum: sha256,
        sha256,
        uploadStatus: FileAssetUploadStatus.ACTIVE,
        retentionClass: 'QUALITY_RECORD_ATTACHMENT',
      },
    });

    await this.auditLog.record({
      actor,
      action: 'EVIDENCE_UPLOADED',
      entityType: 'FileAsset',
      entityId: created.id,
      details: {
        qualityRecordId,
        documentId: record.documentId,
        versionId: record.versionId,
        uploadStatus: created.uploadStatus,
        mimeType: created.mimeType,
        sizeBytes: created.sizeBytes,
      },
    });

    await this.auditLog.record({
      actor,
      action: 'EVIDENCE_SCAN_PASSED',
      entityType: 'FileAsset',
      entityId: created.id,
      details: {
        mode: 'signature_and_mime_validation',
      },
    });

    return created;
  }

  async getForDownload(fileId: string, actor: AuthenticatedUser) {
    const file = await this.prisma.fileAsset.findUnique({ where: { id: fileId } });
    if (!file) throw new NotFoundException('File not found');
    if (actor.scope !== 'PLATFORM_ADMIN' && file.tenantId !== actor.tenantId) throw new NotFoundException('File not found');
    if (file.uploadStatus !== FileAssetUploadStatus.ACTIVE) throw new BadRequestException('File is not available for download');

    await this.auditLog.record({
      actor,
      action: 'EVIDENCE_DOWNLOADED',
      entityType: 'FileAsset',
      entityId: file.id,
      details: {
        mimeType: file.mimeType,
        sizeBytes: file.sizeBytes,
        retentionClass: file.retentionClass,
      },
    });

    return { file, path: join(this.storageRoot, file.storageKey) };
  }
}
