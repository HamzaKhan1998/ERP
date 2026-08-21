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
import { Body, Controller, Get, Param, Post, Query, } from '@nestjs/common';
import { CreateProcedureDto, DocumentDecisionDto } from './dto/document.dto.js';
import { DocumentsService } from './documents.service.js';
let DocumentsController = class DocumentsController {
    documentsService;
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    createProcedure(dto) {
        return this.documentsService.createProcedure(dto);
    }
    getApprovalQueue(approverEmail) {
        return this.documentsService.getApprovalQueue(approverEmail);
    }
    getDocument(documentId) {
        return this.documentsService.getDocument(documentId);
    }
    submitForReview(documentId) {
        return this.documentsService.submitForReview(documentId);
    }
    recordDecision(versionId, dto) {
        return this.documentsService.recordDecision(versionId, dto);
    }
};
__decorate([
    Post('procedures'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProcedureDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "createProcedure", null);
__decorate([
    Get('approvals'),
    __param(0, Query('approverEmail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getApprovalQueue", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getDocument", null);
__decorate([
    Post(':id/submit'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "submitForReview", null);
__decorate([
    Post('versions/:versionId/decision'),
    __param(0, Param('versionId')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, DocumentDecisionDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "recordDecision", null);
DocumentsController = __decorate([
    Controller('documents'),
    __metadata("design:paramtypes", [DocumentsService])
], DocumentsController);
export { DocumentsController };
//# sourceMappingURL=documents.controller.js.map