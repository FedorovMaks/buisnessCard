import { Module } from '@nestjs/common';
import { ExperienceModule } from '../../modules/experience/experience.module.js';
import { ProfileModule } from '../../modules/profile/profile.module.js';
import { ProjectModule } from '../../modules/project/project.module.js';
import { SkillModule } from '../../modules/skill/skill.module.js';
import { LoadersFactory } from './loaders.factory.js';

@Module({
  imports: [ProfileModule, SkillModule, ExperienceModule, ProjectModule],
  providers: [LoadersFactory],
  exports: [LoadersFactory],
})
export class LoadersModule {}
