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
import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CreateFormTemplateDto, CreateQualityRecordDto } from './dto/forms.dto.js';
import { FormsService } from './forms.service.js';
let FormsController = class FormsController {
    formsService;
    constructor(formsService) {
        this.formsService = formsService;
    }
    listTemplates(request) {
        return this.formsService.listTemplates(request.user);
    }
    getTemplate(request, templateId) {
        return this.formsService.getTemplate(templateId, request.user);
    }
    createTemplate(request, dto) {
        return this.formsService.createTemplate(dto, request.user);
    }
    listRecords(request) {
        return this.formsService.listRecords(request.user);
    }
    createRecord(request, dto) {
        return this.formsService.createRecord(dto, request.user);
    }
};
__decorate([
    Get('templates'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "listTemplates", null);
__decorate([
    Get('templates/:id'),
    __param(0, Req()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "getTemplate", null);
__decorate([
    Post('templates'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateFormTemplateDto]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "createTemplate", null);
__decorate([
    Get('records'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "listRecords", null);
__decorate([
    Post('records'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateQualityRecordDto]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "createRecord", null);
FormsController = __decorate([
    Controller('forms'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [FormsService])
], FormsController);
export { FormsController };
//# sourceMappingURL=forms.controller.js.map