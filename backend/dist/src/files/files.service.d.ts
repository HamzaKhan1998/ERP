import type { FileAssetModel } from '../../generated/prisma/models.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';
export declare class FilesService {
    private readonly prisma;
    private readonly storageRoot;
    constructor(prisma: PrismaService);
    upload(documentId: string, file: Express.Multer.File, actor: AuthenticatedUser, versionId?: string): Promise<FileAssetModel>;
    uploadForRecord(qualityRecordId: string, file: Express.Multer.File, actor: AuthenticatedUser): Promise<FileAssetModel>;
    getForDownload(fileId: string, actor: AuthenticatedUser): Promise<{
        file: {
            id: string;
            createdAt: Date;
            tenantId: string;
            documentId: string | null;
            versionId: string | null;
            qualityRecordId: string | null;
            uploadedById: string;
            originalName: string;
            storageKey: string;
            mimeType: string;
            sizeBytes: number;
            checksum: string;
        };
        path: string;
    }>;
}
