import { Injectable } from '@nestjs/common';
import { CreateMemberDto, UpdateMemberDto, MemberResponseDto } from '../dto/member.dto.js';

// Mock data - will be replaced with Prisma queries
const mockMembers: Map<string, MemberResponseDto> = new Map([
  [
    '1',
    {
      id: '1',
      email: 'admin@company.com',
      name: 'John Doe',
      role: 'Tenant Admin',
      designation: 'Departmental Head',
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
      designation: 'Departmental Head',
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
      designation: 'General Manager',
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
      designation: 'CEO / Managing Director',
      status: 'pending',
      dateAdded: '2026-08-20',
    },
  ],
]);

let nextId = 5;

@Injectable()
export class MembersService {
  /**
   * Fetch all members for a tenant
   */
  async getAllMembers(tenantId: string): Promise<MemberResponseDto[]> {
    // TODO: Filter by tenantId when Prisma schema is ready
    // const members = await prisma.member.findMany({
    //   where: { tenantId },
    //   select: { id, email, name, role, status, dateAdded, department },
    // });
    return Array.from(mockMembers.values());
  }

  /**
   * Fetch a single member by ID
   */
  async getMemberById(
    tenantId: string,
    memberId: string,
  ): Promise<MemberResponseDto | null> {
    // TODO: Add tenantId check when Prisma is ready
    const member = mockMembers.get(memberId);
    return member || null;
  }

  /**
   * Add a new member to the tenant
   */
  async createMember(
    tenantId: string,
    dto: CreateMemberDto,
  ): Promise<MemberResponseDto> {
    const id = String(nextId++);

    // TODO: Replace with actual user creation in Prisma
    // const newMember = await prisma.member.create({
    //   data: {
    //     tenantId,
    //     email: dto.email,
    //     name: extractNameFromEmail(dto.email),
    //     role: dto.role,
    //     department: dto.department,
    //     status: 'pending',
    //     dateAdded: new Date().toISOString(),
    //   },
    // });

    const newMember: MemberResponseDto = {
      id,
      email: dto.email,
      name: this.extractNameFromEmail(dto.email),
      role: dto.role,
      designation: dto.designation,
      status: 'pending',
      dateAdded: new Date().toISOString().split('T')[0],
      department: dto.department,
    };

    mockMembers.set(id, newMember);

    // TODO: Send invitation email to the user
    console.log(`Invitation sent to ${dto.email}`);

    return newMember;
  }

  /**
   * Update a member's role or department
   */
  async updateMember(
    tenantId: string,
    memberId: string,
    dto: UpdateMemberDto,
  ): Promise<MemberResponseDto | null> {
    const member = mockMembers.get(memberId);
    if (!member) {
      return null;
    }

    // TODO: Replace with Prisma update
    // const updated = await prisma.member.update({
    //   where: { id: memberId, tenantId },
    //   data: dto,
    // });

    const updated: MemberResponseDto = {
      ...member,
      ...dto,
    };

    mockMembers.set(memberId, updated);
    return updated;
  }

  /**
   * Remove a member from the tenant
   */
  async deleteMember(tenantId: string, memberId: string): Promise<boolean> {
    // TODO: Add soft delete or hard delete logic with Prisma
    // await prisma.member.delete({
    //   where: { id: memberId, tenantId },
    // });

    const existed = mockMembers.has(memberId);
    mockMembers.delete(memberId);
    return existed;
  }

  /**
   * Helper: Extract name from email
   */
  private extractNameFromEmail(email: string): string {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
