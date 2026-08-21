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
import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus, } from '@nestjs/common';
import { MembersService } from './members.service.js';
import { CreateMemberDto, UpdateMemberDto } from '../dto/member.dto.js';
let MembersController = class MembersController {
    membersService;
    constructor(membersService) {
        this.membersService = membersService;
    }
    async getAllMembers() {
        const tenantId = 'default-tenant';
        return this.membersService.getAllMembers(tenantId);
    }
    async getMemberById(memberId) {
        const tenantId = 'default-tenant';
        const member = await this.membersService.getMemberById(tenantId, memberId);
        if (!member) {
            throw new HttpException('Member not found', HttpStatus.NOT_FOUND);
        }
        return member;
    }
    async createMember(dto) {
        const tenantId = 'default-tenant';
        if (!dto.email || !dto.role || !dto.designation) {
            throw new HttpException('Email, role, and designation are required', HttpStatus.BAD_REQUEST);
        }
        return this.membersService.createMember(tenantId, dto);
    }
    async updateMember(memberId, dto) {
        const tenantId = 'default-tenant';
        const updated = await this.membersService.updateMember(tenantId, memberId, dto);
        if (!updated) {
            throw new HttpException('Member not found', HttpStatus.NOT_FOUND);
        }
        return updated;
    }
    async deleteMember(memberId) {
        const tenantId = 'default-tenant';
        const success = await this.membersService.deleteMember(tenantId, memberId);
        if (!success) {
            throw new HttpException('Member not found', HttpStatus.NOT_FOUND);
        }
        return { success: true };
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getAllMembers", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getMemberById", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateMemberDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "createMember", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateMemberDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateMember", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "deleteMember", null);
MembersController = __decorate([
    Controller('tenant-admin/members'),
    __metadata("design:paramtypes", [MembersService])
], MembersController);
export { MembersController };
//# sourceMappingURL=members.controller.js.map