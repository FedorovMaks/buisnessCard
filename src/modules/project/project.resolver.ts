import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import type { Project, Skill } from '../../database/entities.js';
import { RequestLoaders } from '../../graphql/graphql-context.js';
import type { Loaders } from '../../graphql/loaders/loaders.factory.js';
import { SkillModel } from '../skill/models/skill.model.js';
import { ProjectModel } from './models/project.model.js';

@Resolver(() => ProjectModel)
export class ProjectResolver {
  @ResolveField(() => [SkillModel], { description: 'Skills applied in the project' })
  technologies(@Parent() project: Project, @RequestLoaders() loaders: Loaders): Promise<Skill[]> {
    return loaders.technologiesByProjectId.load(project.id);
  }
}
