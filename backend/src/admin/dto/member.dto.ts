export class CreateMemberDto {
  email: string;
  role: string;
  department?: string;
}

export class UpdateMemberDto {
  role?: string;
  department?: string;
}

export class MemberResponseDto {
  id: string;
  email: string;
  name: string;
  role: string;
  status: 'active' | 'pending' | 'inactive';
  dateAdded: string;
  department?: string;
}
