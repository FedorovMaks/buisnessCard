import { Injectable } from '@nestjs/common';
import type DataLoader from 'dataloader';
import type { Experience, Link, Project, Skill } from '../../database/entities.js';
import { ExperienceService } from '../../modules/experience/experience.service.js';
import { ProfileService } from '../../modules/profile/profile.service.js';
import { ProjectService } from '../../modules/project/project.service.js';
import { SkillService } from '../../modules/skill/skill.service.js';
import { createGroupedLoader } from './create-grouped-loader.js';

export interface Loaders {
  linksByProfileId: DataLoader<string, Link[]>;
  skillsByProfileId: DataLoader<string, Skill[]>;
  experiencesByProfileId: DataLoader<string, Experience[]>;
  projectsByProfileId: DataLoader<string, Project[]>;
  technologiesByProjectId: DataLoader<string, Skill[]>;
}

@Injectable()
export class LoadersFactory {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillService: SkillService,
    private readonly experienceService: ExperienceService,
    private readonly projectService: ProjectService,
  ) {}

  create(): Loaders {
    return {
      linksByProfileId: createGroupedLoader(
        (ids) => this.profileService.findLinksByProfileIds(ids),
        (link) => [link.profileId, link],
      ),
      skillsByProfileId: createGroupedLoader(
        (ids) => this.skillService.findByProfileIds(ids),
        (skill) => [skill.profileId, skill],
      ),
      experiencesByProfileId: createGroupedLoader(
        (ids) => this.experienceService.findByProfileIds(ids),
        (experience) => [experience.profileId, experience],
      ),
      projectsByProfileId: createGroupedLoader(
        (ids) => this.projectService.findByProfileIds(ids),
        (project) => [project.profileId, project],
      ),
      technologiesByProjectId: createGroupedLoader(
        (ids) => this.projectService.findTechnologiesByProjectIds(ids),
        (technology) => [technology.projectId, technology.skill],
      ),
    };
  }
}
