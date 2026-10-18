export class CreateTenantDto {
  name: string;
  slug: string;
  subdomain: string;
}

export class UpdateTenantDto {
  name?: string;
  slug?: string;
  subdomain?: string;
}

export class AssignTenantAdminDto {
  email: string;
  name?: string;
}

export class UpdateTenantStatusDto {
  status: 'ONBOARDING' | 'ACTIVE' | 'SUSPENDED';
}
