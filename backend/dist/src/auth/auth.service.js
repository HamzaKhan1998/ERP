var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async loginTenant(dto) {
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
    async loginPlatform(dto) {
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
    issueToken(user, scope) {
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
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map