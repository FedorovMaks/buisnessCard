import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Skill')
export class SkillModel {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => String, {
    nullable: true,
    description: 'Grouping such as "Languages" or "Databases"',
  })
  category!: string | null;
}
