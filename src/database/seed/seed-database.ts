import type { PrismaClient } from '../../generated/prisma/client.js';
import { profileSeedSchema, type ProfileSeedInput } from './profile-seed.schema.js';

export async function seedDatabase(prisma: PrismaClient, input: ProfileSeedInput): Promise<void> {
  const { links, skills, experience, projects, ...profile } = profileSeedSchema.parse(input);

  await prisma.$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext('digital-card:seed'))`;
    await tx.profile.deleteMany();

    const { id: profileId } = await tx.profile.create({
      data: {
        ...profile,
        links: { create: links.map((link, sortOrder) => ({ ...link, sortOrder })) },
        skills: { create: skills.map((skill, sortOrder) => ({ ...skill, sortOrder })) },
        experiences: { create: experience },
      },
      select: { id: true },
    });

    for (const [sortOrder, { technologies, ...project }] of projects.entries()) {
      await tx.project.create({
        data: {
          ...project,
          sortOrder,
          profile: { connect: { id: profileId } },
          technologies: {
            create: technologies.map((name, index) => ({
              sortOrder: index,
              skill: { connect: { profileId_name: { profileId, name } } },
            })),
          },
        },
      });
    }
  });
}
