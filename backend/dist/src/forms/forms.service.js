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
import { FormFieldType } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
let FormsService = class FormsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listTemplates(actor) {
        return this.prisma.formTemplate.findMany({
            where: { tenantId: actor.tenantId ?? '' },
            include: { fields: { orderBy: { sortOrder: 'asc' } }, document: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getTemplate(templateId, actor) {
        const template = await this.prisma.formTemplate.findFirst({
            where: { id: templateId, tenantId: actor.tenantId ?? '' },
            include: { fields: { orderBy: { sortOrder: 'asc' } }, document: true },
        });
        if (!template)
            throw new NotFoundException('Form template not found');
        return template;
    }
    async createTemplate(dto, actor) {
        if (!actor.tenantId)
            throw new BadRequestException('A tenant user is required');
        if (!dto.fields?.length)
            throw new BadRequestException('At least one form field is required');
        if (dto.documentId) {
            const document = await this.prisma.document.findFirst({
                where: { id: dto.documentId, tenantId: actor.tenantId },
            });
            if (!document)
                throw new NotFoundException('Parent document not found in this tenant');
        }
        return this.prisma.formTemplate.create({
            data: {
                tenantId: actor.tenantId,
                title: dto.title,
                controlNumber: dto.controlNumber,
                description: dto.description,
                documentId: dto.documentId,
                fields: {
                    create: dto.fields.map((field, index) => ({
                        fieldKey: field.fieldKey,
                        label: field.label,
                        type: FormFieldType[field.type],
                        required: field.required ?? false,
                        optionsJson: field.options ?? undefined,
                        sortOrder: index,
                    })),
                },
            },
            include: { fields: { orderBy: { sortOrder: 'asc' } } },
        });
    }
    async createRecord(dto, actor) {
        if (!actor.tenantId)
            throw new BadRequestException('A tenant user is required');
        const template = await this.getTemplate(dto.templateId, actor);
        if (dto.documentId) {
            const document = await this.prisma.document.findFirst({ where: { id: dto.documentId, tenantId: actor.tenantId } });
            if (!document)
                throw new NotFoundException('Record document not found in this tenant');
        }
        if (dto.versionId) {
            const version = await this.prisma.documentVersion.findFirst({ where: { id: dto.versionId, document: { tenantId: actor.tenantId } } });
            if (!version || (dto.documentId && version.documentId !== dto.documentId))
                throw new NotFoundException('Record version is not valid for this tenant or document');
        }
        const missing = template.fields.filter((field) => field.required && (dto.values[field.fieldKey] === undefined || dto.values[field.fieldKey] === ''));
        if (missing.length)
            throw new BadRequestException(`Required fields missing: ${missing.map((field) => field.label).join(', ')}`);
        return this.prisma.qualityRecord.create({
            data: {
                tenantId: actor.tenantId,
                templateId: template.id,
                documentId: dto.documentId,
                versionId: dto.versionId,
                completedById: actor.sub,
                values: dto.values,
            },
            include: { template: true, completedBy: true },
        });
    }
    async listRecords(actor) {
        return this.prisma.qualityRecord.findMany({
            where: { tenantId: actor.tenantId ?? '' },
            include: { template: true, completedBy: true, document: true },
            orderBy: { createdAt: 'desc' },
        });
    }
};
FormsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FormsService);
export { FormsService };
//# sourceMappingURL=forms.service.js.map