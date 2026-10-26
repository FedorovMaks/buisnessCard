import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import type { Experience, Link, Profile, Project, Skill } from '../../database/entities.js';
import { RequestLoaders } from '../../graphql/graphql-context.js';
import type { Loaders } from '../../graphql/loaders/loaders.factory.js';
import { ExperienceModel } from '../experience/models/experience.model.js';
import { ProjectModel } from '../project/models/project.model.js';
import { SkillModel } from '../skill/models/skill.model.js';
import { LinkModel } from './models/link.model.js';
import { ProfileModel } from './models/profile.model.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel, { name: 'profile' })
  getProfile(): Promise<Profile> {
    return this.profileService.getOwnerProfile();
  }

  @ResolveField(() => [LinkModel])
  links(@Parent() profile: Profile, @RequestLoaders() loaders: Loaders): Promise<Link[]> {
    return loaders.linksByProfileId.load(profile.id);
  }

  @ResolveField(() => [SkillModel])
  skills(@Parent() profile: Profile, @RequestLoaders() loaders: Loaders): Promise<Skill[]> {
    return loaders.skillsByProfileId.load(profile.id);
  }

  @ResolveField(() => [ExperienceModel])
  experience(
    @Parent() profile: Profile,
    @RequestLoaders() loaders: Loaders,
  ): Promise<Experience[]> {
    return loaders.experiencesByProfileId.load(profile.id);
  }

  @ResolveField(() => [ProjectModel])
  projects(@Parent() profile: Profile, @RequestLoaders() loaders: Loaders): Promise<Project[]> {
    return loaders.projectsByProfileId.load(profile.id);
  }
}
