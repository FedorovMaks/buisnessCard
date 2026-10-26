import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { Loaders } from './loaders/loaders.factory.js';

export interface GraphQLContext {
  loaders: Loaders;
}

export const RequestLoaders = createParamDecorator(
  (_data: unknown, context: ExecutionContext): Loaders =>
    GqlExecutionContext.create(context).getContext<GraphQLContext>().loaders,
);
