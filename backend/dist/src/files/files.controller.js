var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Param, Post, Query, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'node:fs';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { FilesService } from './files.service.js';
let FilesController = class FilesController {
    filesService;
    constructor(filesService) {
        this.filesService = filesService;
    }
    upload(request, documentId, file, versionId) {
        return this.filesService.upload(documentId, file, request.user, versionId);
    }
    async download(request, fileId, response) {
        const { file, path } = await this.filesService.getForDownload(fileId, request.user);
        response.setHeader('Content-Type', file.mimeType);
        response.setHeader('Content-Disposition', `attachment; filename="${file.originalName.replace(/"/g, '')}"`);
        createReadStream(path).pipe(response);
    }
};
__decorate([
    Post('documents/:documentId'),
    UseInterceptors(FileInterceptor('file')),
    __param(0, Req()),
    __param(1, Param('documentId')),
    __param(2, UploadedFile()),
    __param(3, Query('versionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "upload", null);
__decorate([
    Get(':fileId/download'),
    __param(0, Req()),
    __param(1, Param('fileId')),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "download", null);
FilesController = __decorate([
    Controller('files'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [FilesService])
], FilesController);
export { FilesController };
//# sourceMappingURL=files.controller.js.map