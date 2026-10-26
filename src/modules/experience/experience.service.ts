import { Injectable } from '@nestjs/common';
import type { Experience } from '../../database/entities.js';
import { type EmploymentPeriod, toEmploymentPeriod } from './employment-period.js';
import { ExperienceRepository } from './experience.repository.js';

@Injectable()
export class ExperienceService {
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  findByProfileIds(profileIds: readonly string[]): Promise<Experience[]> {
    return this.experienceRepository.findByProfileIds(profileIds);
  }

  getPeriod({ startDate, endDate }: Experience): EmploymentPeriod {
    return toEmploymentPeriod(startDate, endDate);
  }
}
