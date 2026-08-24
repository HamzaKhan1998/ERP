var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PrismaService } from '../prisma/prisma.service.js';
const allowedMimeTypes = new Set(['application/pdf', 'image/jpeg', 'image/png']);
const maxFileSize = 10 * 1024 * 1024;
let FilesService = class FilesService {
    prisma;
    storageRoot = join(process.cwd(), 'storage', 'uploads');
    constructor(prisma) {
        this.prisma = prisma;
    }
    async upload(documentId, file, actor, versionId) {
        if (!file)
            throw new BadRequestException('A PDF or image file is required');
        if (!allowedMimeTypes.has(file.mimetype))
            throw new BadRequestException('Only PDF, JPEG, and PNG files are supported');
        if (file.size > maxFileSize)
            throw new BadRequestException('Files must be 10 MB or smaller');
        const document = await this.prisma.document.findUnique({ where: { id: documentId } });
        if (!document)
            throw new NotFoundException('Document not found');
        if (actor.scope !== 'PLATFORM_ADMIN' && document.tenantId !== actor.tenantId)
            throw new NotFoundException('Document not found');
        if (versionId) {
            const version = await this.prisma.documentVersion.findFirst({ where: { id: versionId, documentId } });
            if (!version)
                throw new NotFoundException('Document version not found');
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
    async getForDownload(fileId, actor) {
        const file = await this.prisma.fileAsset.findUnique({ where: { id: fileId } });
        if (!file)
            throw new NotFoundException('File not found');
        if (actor.scope !== 'PLATFORM_ADMIN' && file.tenantId !== actor.tenantId)
            throw new NotFoundException('File not found');
        return { file, path: join(this.storageRoot, file.storageKey) };
    }
};
FilesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FilesService);
export { FilesService };
//# sourceMappingURL=files.service.js.map