import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Profile')
export class ProfileModel {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ description: 'Professional title, e.g. "Senior Backend Engineer"' })
  headline!: string;

  @Field()
  description!: string;

  @Field(() => String, { nullable: true })
  location!: string | null;
}
