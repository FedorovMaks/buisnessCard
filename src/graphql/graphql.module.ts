import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import type { Env } from '../config/env.js';
import { formatError } from './format-error.js';
import type { GraphQLContext } from './graphql-context.js';
import { LoadersFactory } from './loaders/loaders.factory.js';
import { LoadersModule } from './loaders/loaders.module.js';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [LoadersModule],
      inject: [ConfigService, LoadersFactory],
      useFactory: (config: ConfigService<Env, true>, loaders: LoadersFactory) => ({
        autoSchemaFile:
          config.get('NODE_ENV', { infer: true }) === 'production' ? true : 'schema.gql',
        sortSchema: true,
        playground: false,
        introspection: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
        formatError,
        context: (): GraphQLContext => ({ loaders: loaders.create() }),
      }),
    }),
  ],
})
export class AppGraphQLModule {}
