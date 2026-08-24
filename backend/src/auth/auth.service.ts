import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { PlatformLoginDto, TenantLoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async loginTenant(dto: TenantLoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: dto.email,
        tenant: { subdomain: dto.subdomain },
      },
      include: { tenant: true },
    });

    if (!user || !user.passwordHash || user.status !== 'ACTIVE' || !user.tenant) {
      throw new UnauthorizedException('Invalid tenant credentials');
    }

    const validPassword = await bcrypt.compare(dto.password, user.passwordHash);
    if (!validPassword) {
      throw new UnauthorizedException('Invalid tenant credentials');
    }

    return this.issueToken(user, 'TENANT_USER');
  }

  async loginPlatform(dto: PlatformLoginDto) {
    const user = await this.prisma.user.findFirst({
      where: { email: dto.email, isPlatformAdmin: true },
    });

    if (!user || !user.passwordHash || user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Invalid platform credentials');
    }

    const validPassword = await bcrypt.compare(dto.password, user.passwordHash);
    if (!validPassword) {
      throw new UnauthorizedException('Invalid platform credentials');
    }

    return this.issueToken(user, 'PLATFORM_ADMIN');
  }

  private issueToken(user: {
    id: string;
    email: string;
    tenantId: string | null;
    isTenantAdmin?: boolean;
    isPlatformAdmin?: boolean;
  }, scope: string) {
    const payload = {
      sub: user.id,
      email: user.email,
      tenantId: user.tenantId,
      scope,
      isTenantAdmin: user.isTenantAdmin ?? false,
      isPlatformAdmin: user.isPlatformAdmin ?? false,
    };

    return {
      accessToken: this.jwt.sign(payload),
      user: payload,
    };
  }
}
