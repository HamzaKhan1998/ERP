export class CreateMemberDto {
  email: string;
  role: string;
  designation: string;
  department?: string;
}

export class UpdateMemberDto {
  role?: string;
  designation?: string;
  department?: string;
}

export class MemberResponseDto {
  id: string;
  email: string;
  name: string;
  role: string;
  designation: string;
  status: 'active' | 'pending' | 'inactive';
  dateAdded: string;
  department?: string;
}
