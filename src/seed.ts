import { Logger } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { parseEnv } from './config/env.js';
import { profileData } from './database/seed/data/profile.data.js';
import { seedDatabase } from './database/seed/seed-database.js';
import { PrismaClient } from './generated/prisma/client.js';

const logger = new Logger('Seed');
const { DATABASE_URL } = parseEnv(process.env);
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: DATABASE_URL }) });

try {
  await seedDatabase(prisma, profileData);
  logger.log('Database has been seeded');
} finally {
  await prisma.$disconnect();
}
