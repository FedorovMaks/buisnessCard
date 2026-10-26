import { Injectable } from '@nestjs/common';
import type { Skill } from '../../database/entities.js';
import { SkillRepository } from './skill.repository.js';

@Injectable()
export class SkillService {
  constructor(private readonly skillRepository: SkillRepository) {}

  findByProfileIds(profileIds: readonly string[]): Promise<Skill[]> {
    return this.skillRepository.findByProfileIds(profileIds);
  }
}
