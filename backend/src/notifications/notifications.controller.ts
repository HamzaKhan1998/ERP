import { Controller, Get, Param, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import { NotificationsService } from './notifications.service.js';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  list(@Req() request: AuthenticatedRequest) {
    return this.notificationsService.listForUser(request.user);
  }

  @Patch(':id/read')
  markRead(@Req() request: AuthenticatedRequest, @Param('id') id: string) {
    return this.notificationsService.markRead(id, request.user);
  }
}
