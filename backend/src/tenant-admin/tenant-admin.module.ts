import { Module } from '@nestjs/common';
import { MembersController } from './members/members.controller.js';
import { MembersService } from './members/members.service.js';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
})
export class TenantAdminModule {}
