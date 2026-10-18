import { Controller, Get, Param, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import { TrainingService } from './training.service.js';

@Controller('training')
@UseGuards(JwtAuthGuard)
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Get('tasks')
  list(@Req() request: AuthenticatedRequest) {
    return this.trainingService.listForUser(request.user);
  }

  @Patch('tasks/:id/complete')
  complete(@Req() request: AuthenticatedRequest, @Param('id') id: string) {
    return this.trainingService.complete(id, request.user);
  }
}
