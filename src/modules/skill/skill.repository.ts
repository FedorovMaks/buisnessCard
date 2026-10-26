import { Injectable } from '@nestjs/common';
import type { Skill } from '../../database/entities.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class SkillRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByProfileIds(profileIds: readonly string[]): Promise<Skill[]> {
    return this.prisma.skill.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
