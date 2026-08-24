import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import { CreateFormTemplateDto, CreateQualityRecordDto } from './dto/forms.dto.js';
import { FormsService } from './forms.service.js';
export declare class FormsController {
    private readonly formsService;
    constructor(formsService: FormsService);
    listTemplates(request: AuthenticatedRequest): Promise<({
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
        } | null;
        fields: {
            id: string;
            type: import("../../generated/prisma/enums.js").FormFieldType;
            templateId: string;
            fieldKey: string;
            label: string;
            required: boolean;
            optionsJson: import("@prisma/client/runtime/client").JsonValue | null;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        documentId: string | null;
        description: string | null;
    })[]>;
    getTemplate(request: AuthenticatedRequest, templateId: string): Promise<{
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
        } | null;
        fields: {
            id: string;
            type: import("../../generated/prisma/enums.js").FormFieldType;
            templateId: string;
            fieldKey: string;
            label: string;
            required: boolean;
            optionsJson: import("@prisma/client/runtime/client").JsonValue | null;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        documentId: string | null;
        description: string | null;
    }>;
    createTemplate(request: AuthenticatedRequest, dto: CreateFormTemplateDto): Promise<{
        fields: {
            id: string;
            type: import("../../generated/prisma/enums.js").FormFieldType;
            templateId: string;
            fieldKey: string;
            label: string;
            required: boolean;
            optionsJson: import("@prisma/client/runtime/client").JsonValue | null;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        documentId: string | null;
        description: string | null;
    }>;
    listRecords(request: AuthenticatedRequest): Promise<({
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
        } | null;
        template: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            documentId: string | null;
            description: string | null;
        };
        completedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        };
    } & {
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        documentId: string | null;
        versionId: string | null;
        templateId: string;
        completedById: string;
        values: import("@prisma/client/runtime/client").JsonValue;
    })[]>;
    createRecord(request: AuthenticatedRequest, dto: CreateQualityRecordDto): Promise<{
        template: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            documentId: string | null;
            description: string | null;
        };
        completedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        };
    } & {
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        documentId: string | null;
        versionId: string | null;
        templateId: string;
        completedById: string;
        values: import("@prisma/client/runtime/client").JsonValue;
    }>;
}
