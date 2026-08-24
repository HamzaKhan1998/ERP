import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { PlatformLoginDto, TenantLoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('tenant/login')
  loginTenant(@Body() dto: TenantLoginDto) {
    return this.authService.loginTenant(dto);
  }

  @Post('platform/login')
  loginPlatform(@Body() dto: PlatformLoginDto) {
    return this.authService.loginPlatform(dto);
  }
}
