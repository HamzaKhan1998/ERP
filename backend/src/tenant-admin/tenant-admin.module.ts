import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { MembersController } from './members/members.controller.js';
import { MembersService } from './members/members.service.js';

@Module({
  imports: [AuthModule],
  controllers: [MembersController],
  providers: [MembersService],
})
export class TenantAdminModule {}
