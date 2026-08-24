import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { FormsController } from './forms.controller.js';
import { FormsService } from './forms.service.js';

@Module({
  imports: [AuthModule],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
