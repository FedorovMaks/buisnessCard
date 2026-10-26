import { Injectable } from '@nestjs/common';
import type { Experience } from '../../database/entities.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class ExperienceRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByProfileIds(profileIds: readonly string[]): Promise<Experience[]> {
    return this.prisma.experience.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { startDate: 'desc' },
    });
  }
}
