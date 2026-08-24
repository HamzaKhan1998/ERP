import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateMemberDto, MemberResponseDto, UpdateMemberDto } from '../dto/member.dto.js';
export declare class MembersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllMembers(tenantId: string): Promise<MemberResponseDto[]>;
    getMemberById(tenantId: string, memberId: string): Promise<MemberResponseDto | null>;
    createMember(tenantId: string, dto: CreateMemberDto): Promise<MemberResponseDto>;
    updateMember(tenantId: string, memberId: string, dto: UpdateMemberDto): Promise<MemberResponseDto | null>;
    deleteMember(tenantId: string, memberId: string): Promise<boolean>;
    private toResponse;
    private extractNameFromEmail;
}
