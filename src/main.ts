import { Logger } from '@nestjs/common';
import morgan from 'morgan';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

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
