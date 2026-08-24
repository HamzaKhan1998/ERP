import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is required to seed the database');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  const password = process.env.SEED_PASSWORD || 'ChangeMe123!';
  const passwordHash = await bcrypt.hash(password, 12);

  const tenant = await prisma.tenant.upsert({
    where: { slug: 'acme-manufacturing' },
    update: { status: 'ACTIVE' },
    create: {
      name: 'Acme Manufacturing',
      slug: 'acme-manufacturing',
      subdomain: 'acme',
      status: 'ACTIVE',
    },
  });

  await prisma.user.upsert({
    where: { email: 'hamzakhannaghar1998@gmail.com' },
    update: { passwordHash, status: 'ACTIVE', isPlatformAdmin: true },
    create: {
      email: 'hamzakhannaghar1998@gmail.com',
      name: 'Hamza Khan',
      passwordHash,
      status: 'ACTIVE',
      isPlatformAdmin: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'tenant.admin@acme.com' },
    update: { tenantId: tenant.id, passwordHash, status: 'ACTIVE', isTenantAdmin: true },
    create: {
      email: 'tenant.admin@acme.com',
      name: 'Acme Tenant Admin',
      designation: 'Departmental Head',
      passwordHash,
      status: 'ACTIVE',
      isTenantAdmin: true,
      tenantId: tenant.id,
    },
  });

  await prisma.user.upsert({
    where: { email: 'ceo@acme.com' },
    update: { tenantId: tenant.id, passwordHash, status: 'ACTIVE' },
    create: {
      email: 'ceo@acme.com',
      name: 'Acme Managing Director',
      designation: 'CEO / Managing Director',
      passwordHash,
      status: 'ACTIVE',
      tenantId: tenant.id,
    },
  });

  await prisma.user.upsert({
    where: { email: 'management.rep@acme.com' },
    update: { tenantId: tenant.id, passwordHash, status: 'ACTIVE', designation: 'Management Representative' },
    create: {
      email: 'management.rep@acme.com',
      name: 'Acme Management Representative',
      designation: 'Management Representative',
      passwordHash,
      status: 'ACTIVE',
      tenantId: tenant.id,
    },
  });

  console.log('Seeded local authentication accounts.');
  console.log(`Development password: ${password}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
