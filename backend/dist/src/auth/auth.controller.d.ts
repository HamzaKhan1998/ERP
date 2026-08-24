import { AuthService } from './auth.service.js';
import { PlatformLoginDto, TenantLoginDto } from './dto/login.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
}
