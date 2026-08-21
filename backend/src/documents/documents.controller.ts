import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProcedureDto, DocumentDecisionDto } from './dto/document.dto.js';
import { DocumentsService } from './documents.service.js';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('procedures')
  createProcedure(@Body() dto: CreateProcedureDto) {
    return this.documentsService.createProcedure(dto);
  }

  @Get('approvals')
  getApprovalQueue(@Query('approverEmail') approverEmail: string) {
    return this.documentsService.getApprovalQueue(approverEmail);
  }

  @Get(':id')
  getDocument(@Param('id') documentId: string) {
    return this.documentsService.getDocument(documentId);
  }

  @Post(':id/submit')
  submitForReview(@Param('id') documentId: string) {
    return this.documentsService.submitForReview(documentId);
  }

  @Post('versions/:versionId/decision')
  recordDecision(
    @Param('versionId') versionId: string,
    @Body() dto: DocumentDecisionDto,
  ) {
    return this.documentsService.recordDecision(versionId, dto);
  }
}
