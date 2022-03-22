import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RecognitionModule } from './recognition/recognition.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    RecognitionModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
