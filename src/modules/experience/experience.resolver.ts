import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import type { Experience } from '../../database/entities.js';
import type { EmploymentPeriod } from './employment-period.js';
import { ExperienceService } from './experience.service.js';
import { EmploymentPeriodModel } from './models/employment-period.model.js';
import { ExperienceModel } from './models/experience.model.js';

@Resolver(() => ExperienceModel)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @ResolveField(() => EmploymentPeriodModel)
  period(@Parent() experience: Experience): EmploymentPeriod {
    return this.experienceService.getPeriod(experience);
  }
}
