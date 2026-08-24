import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateMemberDto, MemberResponseDto, UpdateMemberDto } from '../dto/member.dto.js';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllMembers(tenantId: string): Promise<MemberResponseDto[]> {
    const members = await this.prisma.user.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'asc' },
    });
    return members.map((member) => this.toResponse(member));
  }

  async getMemberById(tenantId: string, memberId: string): Promise<MemberResponseDto | null> {
    const member = await this.prisma.user.findFirst({ where: { id: memberId, tenantId } });
    return member ? this.toResponse(member) : null;
  }

  async createMember(tenantId: string, dto: CreateMemberDto): Promise<MemberResponseDto> {
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

  async updateMember(tenantId: string, memberId: string, dto: UpdateMemberDto): Promise<MemberResponseDto | null> {
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

  async deleteMember(tenantId: string, memberId: string): Promise<boolean> {
    const existing = await this.prisma.user.findFirst({ where: { id: memberId, tenantId } });
    if (!existing) {
      return false;
    }

    await this.prisma.user.update({ where: { id: memberId }, data: { status: 'SUSPENDED' } });
    return true;
  }

  private toResponse(member: {
    id: string;
    email: string;
    name: string;
    systemRole: string;
    designation: string | null;
    status: string;
    createdAt: Date;
  }): MemberResponseDto {
    return {
      id: member.id,
      email: member.email,
      name: member.name,
      role: member.systemRole,
      designation: member.designation ?? 'Staff Member',
      status: member.status.toLowerCase() as 'active' | 'pending' | 'inactive',
      dateAdded: member.createdAt.toISOString().split('T')[0],
    };
  }

  private extractNameFromEmail(email: string): string {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
