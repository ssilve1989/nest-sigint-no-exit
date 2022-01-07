import { Module, OnApplicationShutdown } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
})
export class AppModule implements OnApplicationShutdown {
  onApplicationShutdown() {
    console.log('>>>> shutting down');
  }
}
