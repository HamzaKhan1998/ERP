import { MembersService } from './members.service.js';
import { CreateMemberDto, UpdateMemberDto, MemberResponseDto } from '../dto/member.dto.js';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    getAllMembers(): Promise<MemberResponseDto[]>;
    getMemberById(memberId: string): Promise<MemberResponseDto>;
    createMember(dto: CreateMemberDto): Promise<MemberResponseDto>;
    updateMember(memberId: string, dto: UpdateMemberDto): Promise<MemberResponseDto>;
    deleteMember(memberId: string): Promise<{
        success: boolean;
    }>;
}
