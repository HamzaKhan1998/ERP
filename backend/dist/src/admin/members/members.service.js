var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
const mockMembers = new Map([
    [
        '1',
        {
            id: '1',
            email: 'admin@company.com',
            name: 'John Doe',
            role: 'Tenant Admin',
            status: 'active',
            dateAdded: '2026-01-15',
        },
    ],
    [
        '2',
        {
            id: '2',
            email: 'owner@company.com',
            name: 'Jane Smith',
            role: 'Document Owner',
            status: 'active',
            dateAdded: '2026-02-01',
        },
    ],
    [
        '3',
        {
            id: '3',
            email: 'reviewer@company.com',
            name: 'Bob Johnson',
            role: 'Reviewer',
            status: 'active',
            dateAdded: '2026-03-10',
        },
    ],
    [
        '4',
        {
            id: '4',
            email: 'approver@company.com',
            name: 'Alice Brown',
            role: 'Approver',
            status: 'pending',
            dateAdded: '2026-08-20',
        },
    ],
]);
let nextId = 5;
let MembersService = class MembersService {
    async getAllMembers(tenantId) {
        return Array.from(mockMembers.values());
    }
    async getMemberById(tenantId, memberId) {
        const member = mockMembers.get(memberId);
        return member || null;
    }
    async createMember(tenantId, dto) {
        const id = String(nextId++);
        const newMember = {
            id,
            email: dto.email,
            name: this.extractNameFromEmail(dto.email),
            role: dto.role,
            status: 'pending',
            dateAdded: new Date().toISOString().split('T')[0],
            department: dto.department,
        };
        mockMembers.set(id, newMember);
        console.log(`Invitation sent to ${dto.email}`);
        return newMember;
    }
    async updateMember(tenantId, memberId, dto) {
        const member = mockMembers.get(memberId);
        if (!member) {
            return null;
        }
        const updated = {
            ...member,
            ...dto,
        };
        mockMembers.set(memberId, updated);
        return updated;
    }
    async deleteMember(tenantId, memberId) {
        const existed = mockMembers.has(memberId);
        mockMembers.delete(memberId);
        return existed;
    }
    extractNameFromEmail(email) {
        const name = email.split('@')[0];
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
};
MembersService = __decorate([
    Injectable()
], MembersService);
export { MembersService };
//# sourceMappingURL=members.service.js.map