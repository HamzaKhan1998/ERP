import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AuthenticatedRequest } from './jwt-auth.guard.js';

@Injectable()
export class TenantAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user;

    if (!user || user.scope !== 'TENANT_USER' || !user.isTenantAdmin || !user.tenantId) {
      throw new ForbiddenException('Tenant Admin access required');
    }

    return true;
  }
}
