import { Injectable } from '@nestjs/common';
import type { Project } from '../../database/entities.js';
import { ProjectRepository, type ProjectTechnologyWithSkill } from './project.repository.js';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  findByProfileIds(profileIds: readonly string[]): Promise<Project[]> {
    return this.projectRepository.findByProfileIds(profileIds);
  }

  findTechnologiesByProjectIds(
    projectIds: readonly string[],
  ): Promise<ProjectTechnologyWithSkill[]> {
    return this.projectRepository.findTechnologiesByProjectIds(projectIds);
  }
}
