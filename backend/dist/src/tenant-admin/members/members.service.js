var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
let MembersService = class MembersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllMembers(tenantId) {
        const members = await this.prisma.user.findMany({
            where: { tenantId },
            orderBy: { createdAt: 'asc' },
        });
        return members.map((member) => this.toResponse(member));
    }
    async getMemberById(tenantId, memberId) {
        const member = await this.prisma.user.findFirst({ where: { id: memberId, tenantId } });
        return member ? this.toResponse(member) : null;
    }
    async createMember(tenantId, dto) {
        const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (existing) {
            throw new ConflictException('A user with this email already exists');
        }
        const member = await this.prisma.user.create({
            data: {
                tenantId,
                email: dto.email,
                name: this.extractNameFromEmail(dto.email),
                designation: dto.designation,
                systemRole: dto.role,
                status: 'INVITED',
            },
        });
        return this.toResponse(member);
    }
    async updateMember(tenantId, memberId, dto) {
        const existing = await this.prisma.user.findFirst({ where: { id: memberId, tenantId } });
        if (!existing) {
            return null;
        }
        const member = await this.prisma.user.update({
            where: { id: memberId },
            data: {
                ...(dto.role ? { systemRole: dto.role } : {}),
                ...(dto.designation ? { designation: dto.designation } : {}),
            },
        });
        return this.toResponse(member);
    }
    async deleteMember(tenantId, memberId) {
        const existing = await this.prisma.user.findFirst({ where: { id: memberId, tenantId } });
        if (!existing) {
            return false;
        }
        await this.prisma.user.update({ where: { id: memberId }, data: { status: 'SUSPENDED' } });
        return true;
    }
    toResponse(member) {
        return {
            id: member.id,
            email: member.email,
            name: member.name,
            role: member.systemRole,
            designation: member.designation ?? 'Staff Member',
            status: member.status.toLowerCase(),
            dateAdded: member.createdAt.toISOString().split('T')[0],
        };
    }
    extractNameFromEmail(email) {
        const name = email.split('@')[0];
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
};
MembersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], MembersService);
export { MembersService };
//# sourceMappingURL=members.service.js.map