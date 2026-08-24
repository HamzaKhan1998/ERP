import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
export interface AuthenticatedUser {
    sub: string;
    email: string;
    tenantId: string | null;
    scope: 'TENANT_USER' | 'PLATFORM_ADMIN';
    isTenantAdmin: boolean;
    isPlatformAdmin: boolean;
}
export type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
};
export declare class JwtAuthGuard implements CanActivate {
    private readonly jwt;
    constructor(jwt: JwtService);
    canActivate(context: ExecutionContext): boolean;
}
