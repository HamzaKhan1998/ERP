import { CreateMemberDto, UpdateMemberDto, MemberResponseDto } from '../dto/member.dto.js';
export declare class MembersService {
    getAllMembers(tenantId: string): Promise<MemberResponseDto[]>;
    getMemberById(tenantId: string, memberId: string): Promise<MemberResponseDto | null>;
    createMember(tenantId: string, dto: CreateMemberDto): Promise<MemberResponseDto>;
    updateMember(tenantId: string, memberId: string, dto: UpdateMemberDto): Promise<MemberResponseDto | null>;
    deleteMember(tenantId: string, memberId: string): Promise<boolean>;
    private extractNameFromEmail;
}
