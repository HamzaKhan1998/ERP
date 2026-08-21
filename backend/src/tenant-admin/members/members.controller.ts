import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MembersService } from './members.service.js';
import { CreateMemberDto, UpdateMemberDto, MemberResponseDto } from '../dto/member.dto.js';

@Controller('tenant-admin/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  /**
  * GET /tenant-admin/members
   * Fetch all members for the current tenant
   */
  @Get()
  async getAllMembers(): Promise<MemberResponseDto[]> {
    // TODO: Extract tenantId from JWT token or request context
    const tenantId = 'default-tenant';
    return this.membersService.getAllMembers(tenantId);
  }

  /**
  * GET /tenant-admin/members/:id
   * Fetch a single member by ID
   */
  @Get(':id')
  async getMemberById(@Param('id') memberId: string): Promise<MemberResponseDto> {
    // TODO: Extract tenantId from JWT token or request context
    const tenantId = 'default-tenant';

    const member = await this.membersService.getMemberById(tenantId, memberId);

    if (!member) {
      throw new HttpException('Member not found', HttpStatus.NOT_FOUND);
    }

    return member;
  }

  /**
  * POST /tenant-admin/members
   * Add a new member to the tenant
   */
  @Post()
  async createMember(@Body() dto: CreateMemberDto): Promise<MemberResponseDto> {
    // TODO: Extract tenantId from JWT token or request context
    const tenantId = 'default-tenant';

    if (!dto.email || !dto.role || !dto.designation) {
      throw new HttpException(
        'Email, role, and designation are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.membersService.createMember(tenantId, dto);
  }

  /**
  * PUT /tenant-admin/members/:id
   * Update a member's role or department
   */
  @Put(':id')
  async updateMember(
    @Param('id') memberId: string,
    @Body() dto: UpdateMemberDto,
  ): Promise<MemberResponseDto> {
    // TODO: Extract tenantId from JWT token or request context
    const tenantId = 'default-tenant';

    const updated = await this.membersService.updateMember(
      tenantId,
      memberId,
      dto,
    );

    if (!updated) {
      throw new HttpException('Member not found', HttpStatus.NOT_FOUND);
    }

    return updated;
  }

  /**
  * DELETE /tenant-admin/members/:id
   * Remove a member from the tenant
   */
  @Delete(':id')
  async deleteMember(@Param('id') memberId: string): Promise<{ success: boolean }> {
    // TODO: Extract tenantId from JWT token or request context
    const tenantId = 'default-tenant';

    const success = await this.membersService.deleteMember(tenantId, memberId);

    if (!success) {
      throw new HttpException('Member not found', HttpStatus.NOT_FOUND);
    }

    return { success: true };
  }
}
