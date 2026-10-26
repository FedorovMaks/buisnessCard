import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { parseEnv } from './config/env.js';
import { DatabaseModule } from './database/database.module.js';
import { AppGraphQLModule } from './graphql/graphql.module.js';
import { ExperienceModule } from './modules/experience/experience.module.js';
import { ProfileModule } from './modules/profile/profile.module.js';
import { ProjectModule } from './modules/project/project.module.js';
import { SkillModule } from './modules/skill/skill.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true, validate: parseEnv }),
    DatabaseModule,
    AppGraphQLModule,
    ProfileModule,
    SkillModule,
    ExperienceModule,
    ProjectModule,
  ],
})
export class AppModule {}
