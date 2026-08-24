import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import {
  CreateChangeRequestDto,
  CreateProcedureDto,
  DocumentDecisionDto,
  IncorporateChangeRequestDto,
  PeriodicReviewDto,
  ReviewChangeRequestDto,
} from './dto/document.dto.js';
import { DocumentsService } from './documents.service.js';

@Controller('documents')
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('procedures')
  createProcedure(@Req() request: AuthenticatedRequest, @Body() dto: CreateProcedureDto) {
    return this.documentsService.createProcedure(dto, request.user);
  }

  @Post('change-requests')
  createChangeRequest(@Req() request: AuthenticatedRequest, @Body() dto: CreateChangeRequestDto) {
    return this.documentsService.createChangeRequest(dto, request.user);
  }

  @Get('change-requests')
  listChangeRequests(@Req() request: AuthenticatedRequest) {
    return this.documentsService.listChangeRequests(request.user);
  }

  @Get('change-requests/:id')
  getChangeRequest(@Req() request: AuthenticatedRequest, @Param('id') changeRequestId: string) {
    return this.documentsService.getChangeRequest(changeRequestId, request.user);
  }

  @Post('change-requests/:id/review')
  reviewChangeRequest(
    @Req() request: AuthenticatedRequest,
    @Param('id') changeRequestId: string,
    @Body() dto: ReviewChangeRequestDto,
  ) {
    return this.documentsService.reviewChangeRequest(changeRequestId, dto, request.user);
  }

  @Post('change-requests/:id/incorporate')
  incorporateChangeRequest(
    @Req() request: AuthenticatedRequest,
    @Param('id') changeRequestId: string,
    @Body() dto: IncorporateChangeRequestDto,
  ) {
    return this.documentsService.incorporateChangeRequest(changeRequestId, dto, request.user);
  }

  @Get('approvals')
  getApprovalQueue(@Req() request: AuthenticatedRequest) {
    return this.documentsService.getApprovalQueue(request.user);
  }

  @Get('periodic-reviews/due')
  listDueReviews(@Req() request: AuthenticatedRequest) {
    return this.documentsService.listDueReviews(request.user);
  }

  @Post('periodic-reviews')
  recordPeriodicReview(@Req() request: AuthenticatedRequest, @Body() dto: PeriodicReviewDto) {
    return this.documentsService.recordPeriodicReview(dto, request.user);
  }

  @Get(':id')
  getDocument(@Req() request: AuthenticatedRequest, @Param('id') documentId: string) {
    return this.documentsService.getDocument(documentId, request.user);
  }

  @Post(':id/submit')
  submitForReview(@Req() request: AuthenticatedRequest, @Param('id') documentId: string) {
    return this.documentsService.submitForReview(documentId, request.user);
  }

  @Post('versions/:versionId/decision')
  recordDecision(
    @Req() request: AuthenticatedRequest,
    @Param('versionId') versionId: string,
    @Body() dto: DocumentDecisionDto,
  ) {
    return this.documentsService.recordDecision(versionId, dto, request.user);
  }

  @Post('versions/:versionId/publish')
  publishVersion(
    @Req() request: AuthenticatedRequest,
    @Param('versionId') versionId: string,
  ) {
    return this.documentsService.publishVersion(versionId, request.user);
  }
}
