import type { Response } from 'express';
import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import { FilesService } from './files.service.js';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    upload(request: AuthenticatedRequest, documentId: string, file: Express.Multer.File, versionId?: string): Promise<{
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
    }>;
    uploadForRecord(request: AuthenticatedRequest, recordId: string, file: Express.Multer.File): Promise<{
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
    }>;
    download(request: AuthenticatedRequest, fileId: string, response: Response): Promise<void>;
}
