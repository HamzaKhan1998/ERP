import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import { CreateFormTemplateDto, CreateQualityRecordDto } from './dto/forms.dto.js';
import { FormsService } from './forms.service.js';

@Controller('forms')
@UseGuards(JwtAuthGuard)
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get('templates')
  listTemplates(@Req() request: AuthenticatedRequest) {
    return this.formsService.listTemplates(request.user);
  }

  @Get('templates/:id')
  getTemplate(@Req() request: AuthenticatedRequest, @Param('id') templateId: string) {
    return this.formsService.getTemplate(templateId, request.user);
  }

  @Post('templates')
  createTemplate(@Req() request: AuthenticatedRequest, @Body() dto: CreateFormTemplateDto) {
    return this.formsService.createTemplate(dto, request.user);
  }

  @Get('records')
  listRecords(@Req() request: AuthenticatedRequest) {
    return this.formsService.listRecords(request.user);
  }

  @Post('records')
  createRecord(@Req() request: AuthenticatedRequest, @Body() dto: CreateQualityRecordDto) {
    return this.formsService.createRecord(dto, request.user);
  }
}
