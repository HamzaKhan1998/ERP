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
import { Body, Controller, Get, Param, Post, Req, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CreateChangeRequestDto, CreateProcedureDto, DocumentDecisionDto, IncorporateChangeRequestDto, PeriodicReviewDto, ReviewChangeRequestDto, } from './dto/document.dto.js';
import { DocumentsService } from './documents.service.js';
let DocumentsController = class DocumentsController {
    documentsService;
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    createProcedure(request, dto) {
        return this.documentsService.createProcedure(dto, request.user);
    }
    createChangeRequest(request, dto) {
        return this.documentsService.createChangeRequest(dto, request.user);
    }
    listChangeRequests(request) {
        return this.documentsService.listChangeRequests(request.user);
    }
    getChangeRequest(request, changeRequestId) {
        return this.documentsService.getChangeRequest(changeRequestId, request.user);
    }
    reviewChangeRequest(request, changeRequestId, dto) {
        return this.documentsService.reviewChangeRequest(changeRequestId, dto, request.user);
    }
    incorporateChangeRequest(request, changeRequestId, dto) {
        return this.documentsService.incorporateChangeRequest(changeRequestId, dto, request.user);
    }
    getApprovalQueue(request) {
        return this.documentsService.getApprovalQueue(request.user);
    }
    listDueReviews(request) {
        return this.documentsService.listDueReviews(request.user);
    }
    recordPeriodicReview(request, dto) {
        return this.documentsService.recordPeriodicReview(dto, request.user);
    }
    getDocument(request, documentId) {
        return this.documentsService.getDocument(documentId, request.user);
    }
    submitForReview(request, documentId) {
        return this.documentsService.submitForReview(documentId, request.user);
    }
    recordDecision(request, versionId, dto) {
        return this.documentsService.recordDecision(versionId, dto, request.user);
    }
    publishVersion(request, versionId) {
        return this.documentsService.publishVersion(versionId, request.user);
    }
};
__decorate([
    Post('procedures'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateProcedureDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "createProcedure", null);
__decorate([
    Post('change-requests'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateChangeRequestDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "createChangeRequest", null);
__decorate([
    Get('change-requests'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "listChangeRequests", null);
__decorate([
    Get('change-requests/:id'),
    __param(0, Req()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getChangeRequest", null);
__decorate([
    Post('change-requests/:id/review'),
    __param(0, Req()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReviewChangeRequestDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "reviewChangeRequest", null);
__decorate([
    Post('change-requests/:id/incorporate'),
    __param(0, Req()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, IncorporateChangeRequestDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "incorporateChangeRequest", null);
__decorate([
    Get('approvals'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getApprovalQueue", null);
__decorate([
    Get('periodic-reviews/due'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "listDueReviews", null);
__decorate([
    Post('periodic-reviews'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, PeriodicReviewDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "recordPeriodicReview", null);
__decorate([
    Get(':id'),
    __param(0, Req()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getDocument", null);
__decorate([
    Post(':id/submit'),
    __param(0, Req()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "submitForReview", null);
__decorate([
    Post('versions/:versionId/decision'),
    __param(0, Req()),
    __param(1, Param('versionId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, DocumentDecisionDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "recordDecision", null);
__decorate([
    Post('versions/:versionId/publish'),
    __param(0, Req()),
    __param(1, Param('versionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "publishVersion", null);
DocumentsController = __decorate([
    Controller('documents'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [DocumentsService])
], DocumentsController);
export { DocumentsController };
//# sourceMappingURL=documents.controller.js.map