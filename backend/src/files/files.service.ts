import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { FileAssetModel } from '../../generated/prisma/models.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';

const allowedMimeTypes = new Set(['application/pdf', 'image/jpeg', 'image/png']);
const maxFileSize = 10 * 1024 * 1024;

@Injectable()
export class FilesService {
  private readonly storageRoot = join(process.cwd(), 'storage', 'uploads');

  constructor(private readonly prisma: PrismaService) {}

  async upload(
    documentId: string,
    file: Express.Multer.File,
    actor: AuthenticatedUser,
    versionId?: string,
  ): Promise<FileAssetModel> {
    if (!file) throw new BadRequestException('A PDF or image file is required');
    if (!allowedMimeTypes.has(file.mimetype)) throw new BadRequestException('Only PDF, JPEG, and PNG files are supported');
    if (file.size > maxFileSize) throw new BadRequestException('Files must be 10 MB or smaller');

    const document = await this.prisma.document.findUnique({ where: { id: documentId } });
    if (!document) throw new NotFoundException('Document not found');
    if (actor.scope !== 'PLATFORM_ADMIN' && document.tenantId !== actor.tenantId) throw new NotFoundException('Document not found');

    if (versionId) {
      const version = await this.prisma.documentVersion.findFirst({ where: { id: versionId, documentId } });
      if (!version) throw new NotFoundException('Document version not found');
    }

    const extension = file.originalname.split('.').pop()?.toLowerCase() || 'bin';
    const storageKey = `${document.tenantId}/${documentId}/${randomUUID()}.${extension}`;
    const destination = join(this.storageRoot, storageKey);
    await mkdir(join(this.storageRoot, document.tenantId, documentId), { recursive: true });
    await writeFile(destination, file.buffer);

    return this.prisma.fileAsset.create({
      data: {
        tenantId: document.tenantId,
        documentId,
        versionId,
        uploadedById: actor.sub,
        originalName: file.originalname,
        storageKey,
        mimeType: file.mimetype,
        sizeBytes: file.size,
        checksum: createHash('sha256').update(file.buffer).digest('hex'),
      },
    });
  }

  async getForDownload(fileId: string, actor: AuthenticatedUser) {
    const file = await this.prisma.fileAsset.findUnique({ where: { id: fileId } });
    if (!file) throw new NotFoundException('File not found');
    if (actor.scope !== 'PLATFORM_ADMIN' && file.tenantId !== actor.tenantId) throw new NotFoundException('File not found');
    return { file, path: join(this.storageRoot, file.storageKey) };
  }
}
