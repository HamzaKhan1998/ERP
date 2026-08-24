import type { AuthenticatedRequest } from '../../auth/guards/jwt-auth.guard.js';
import { MembersService } from './members.service.js';
import { CreateMemberDto, UpdateMemberDto, MemberResponseDto } from '../dto/member.dto.js';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    getAllMembers(request: AuthenticatedRequest): Promise<MemberResponseDto[]>;
    getMemberById(request: AuthenticatedRequest, memberId: string): Promise<MemberResponseDto>;
    createMember(request: AuthenticatedRequest, dto: CreateMemberDto): Promise<MemberResponseDto>;
    updateMember(request: AuthenticatedRequest, memberId: string, dto: UpdateMemberDto): Promise<MemberResponseDto>;
    deleteMember(request: AuthenticatedRequest, memberId: string): Promise<{
        success: boolean;
    }>;
}
