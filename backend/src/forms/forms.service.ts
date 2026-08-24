import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { FormFieldType } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateFormTemplateDto, CreateQualityRecordDto } from './dto/forms.dto.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';

@Injectable()
export class FormsService {
  constructor(private readonly prisma: PrismaService) {}

  async listTemplates(actor: AuthenticatedUser) {
    return this.prisma.formTemplate.findMany({
      where: { tenantId: actor.tenantId ?? '' },
      include: { fields: { orderBy: { sortOrder: 'asc' } }, document: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getTemplate(templateId: string, actor: AuthenticatedUser) {
    const template = await this.prisma.formTemplate.findFirst({
      where: { id: templateId, tenantId: actor.tenantId ?? '' },
      include: { fields: { orderBy: { sortOrder: 'asc' } }, document: true },
    });
    if (!template) throw new NotFoundException('Form template not found');
    return template;
  }

  async createTemplate(dto: CreateFormTemplateDto, actor: AuthenticatedUser) {
    if (!actor.tenantId) throw new BadRequestException('A tenant user is required');
    if (!dto.fields?.length) throw new BadRequestException('At least one form field is required');
    if (dto.documentId) {
      const document = await this.prisma.document.findFirst({
        where: { id: dto.documentId, tenantId: actor.tenantId },
      });
      if (!document) throw new NotFoundException('Parent document not found in this tenant');
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

  async createRecord(dto: CreateQualityRecordDto, actor: AuthenticatedUser) {
    if (!actor.tenantId) throw new BadRequestException('A tenant user is required');
    const template = await this.getTemplate(dto.templateId, actor);
    if (dto.documentId) {
      const document = await this.prisma.document.findFirst({ where: { id: dto.documentId, tenantId: actor.tenantId } });
      if (!document) throw new NotFoundException('Record document not found in this tenant');
    }
    if (dto.versionId) {
      const version = await this.prisma.documentVersion.findFirst({ where: { id: dto.versionId, document: { tenantId: actor.tenantId } } });
      if (!version || (dto.documentId && version.documentId !== dto.documentId)) throw new NotFoundException('Record version is not valid for this tenant or document');
    }
    const missing = template.fields.filter((field) => field.required && (dto.values[field.fieldKey] === undefined || dto.values[field.fieldKey] === ''));
    if (missing.length) throw new BadRequestException(`Required fields missing: ${missing.map((field) => field.label).join(', ')}`);

    return this.prisma.qualityRecord.create({
      data: {
        tenantId: actor.tenantId,
        templateId: template.id,
        documentId: dto.documentId,
        versionId: dto.versionId,
        completedById: actor.sub,
        values: dto.values as Prisma.InputJsonObject,
      },
      include: { template: true, completedBy: true },
    });
  }

  async listRecords(actor: AuthenticatedUser) {
    return this.prisma.qualityRecord.findMany({
      where: { tenantId: actor.tenantId ?? '' },
      include: { template: true, completedBy: true, document: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
