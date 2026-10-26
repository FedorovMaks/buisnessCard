import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Link', { description: 'Professional resource such as GitHub or LinkedIn' })
export class LinkModel {
  @Field(() => ID)
  id!: string;

  @Field()
  label!: string;

  @Field()
  url!: string;
}
