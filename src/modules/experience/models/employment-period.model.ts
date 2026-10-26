import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DateScalar } from '../../../graphql/scalars/date.scalar.js';

@ObjectType('EmploymentPeriod')
export class EmploymentPeriodModel {
  @Field(() => DateScalar)
  startDate!: Date;

  @Field(() => DateScalar, { nullable: true, description: 'Empty while the position is current' })
  endDate!: Date | null;

  @Field()
  isCurrent!: boolean;

  @Field(() => Int, { description: 'Inclusive number of calendar months' })
  durationInMonths!: number;
}
