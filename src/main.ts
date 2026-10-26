import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import type { Env } from './config/env.js';

const app = await NestFactory.create(AppModule);
app.enableShutdownHooks();

const port = app.get(ConfigService<Env, true>).get('PORT', { infer: true });
await app.listen(port, '0.0.0.0');

Logger.log(`Apollo Sandbox is available at ${await app.getUrl()}/graphql`, 'Bootstrap');
