export declare class CreateMemberDto {
    email: string;
    role: string;
    designation: string;
    department?: string;
}
export declare class UpdateMemberDto {
    role?: string;
    designation?: string;
    department?: string;
}
export declare class MemberResponseDto {
    id: string;
    email: string;
    name: string;
    role: string;
    designation: string;
    status: 'active' | 'pending' | 'inactive';
    dateAdded: string;
    department?: string;
}
