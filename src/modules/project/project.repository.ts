import { Injectable } from '@nestjs/common';
import type { Project, ProjectTechnology, Skill } from '../../database/entities.js';
import { PrismaService } from '../../database/prisma.service.js';

export type ProjectTechnologyWithSkill = ProjectTechnology & { skill: Skill };

@Injectable()
export class ProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByProfileIds(profileIds: readonly string[]): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { sortOrder: 'asc' },
    });
  }

  findTechnologiesByProjectIds(
    projectIds: readonly string[],
  ): Promise<ProjectTechnologyWithSkill[]> {
    return this.prisma.projectTechnology.findMany({
      where: { projectId: { in: [...projectIds] } },
      include: { skill: true },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
