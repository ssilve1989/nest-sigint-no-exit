import { Logger } from '@nestjs/common';
import morgan from 'morgan';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');
  app.use(
    morgan(process.env.NODE_ENV === 'production' ? 'tiny' : 'dev', {
      stream: {
        write: (message: string) => logger.log(message),
      },
    }),
  );

  app.enableShutdownHooks();
  await app.listen(9201);
}
bootstrap();
