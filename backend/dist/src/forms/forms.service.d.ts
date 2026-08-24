import { FormFieldType } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateFormTemplateDto, CreateQualityRecordDto } from './dto/forms.dto.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';
export declare class FormsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listTemplates(actor: AuthenticatedUser): Promise<({
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
            type: FormFieldType;
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
    getTemplate(templateId: string, actor: AuthenticatedUser): Promise<{
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
            type: FormFieldType;
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
    createTemplate(dto: CreateFormTemplateDto, actor: AuthenticatedUser): Promise<{
        fields: {
            id: string;
            type: FormFieldType;
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
    createRecord(dto: CreateQualityRecordDto, actor: AuthenticatedUser): Promise<{
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
    listRecords(actor: AuthenticatedUser): Promise<({
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
}
