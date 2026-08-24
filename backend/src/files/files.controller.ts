import { Controller, Get, Param, Post, Query, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'node:fs';
import type { Response } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import { FilesService } from './files.service.js';

@Controller('files')
@UseGuards(JwtAuthGuard)
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('documents/:documentId')
  @UseInterceptors(FileInterceptor('file'))
  upload(
    @Req() request: AuthenticatedRequest,
    @Param('documentId') documentId: string,
    @UploadedFile() file: Express.Multer.File,
    @Query('versionId') versionId?: string,
  ) {
    return this.filesService.upload(documentId, file, request.user, versionId);
  }

  @Get(':fileId/download')
  async download(
    @Req() request: AuthenticatedRequest,
    @Param('fileId') fileId: string,
    @Res() response: Response,
  ) {
    const { file, path } = await this.filesService.getForDownload(fileId, request.user);
    response.setHeader('Content-Type', file.mimeType);
    response.setHeader('Content-Disposition', `attachment; filename="${file.originalName.replace(/"/g, '')}"`);
    createReadStream(path).pipe(response);
  }
}
