import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { PlatformLoginDto, TenantLoginDto } from './dto/login.dto.js';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    loginTenant(dto: TenantLoginDto): Promise<{
        accessToken: string;
        user: {
            sub: string;
            email: string;
            tenantId: string | null;
            scope: string;
            isTenantAdmin: boolean;
            isPlatformAdmin: boolean;
        };
    }>;
    loginPlatform(dto: PlatformLoginDto): Promise<{
        accessToken: string;
        user: {
            sub: string;
            email: string;
            tenantId: string | null;
            scope: string;
            isTenantAdmin: boolean;
            isPlatformAdmin: boolean;
        };
    }>;
    private issueToken;
}
