import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import configuration from './shared/configuration';
import dotenv from 'dotenv';
dotenv.config();

const port: number = process.env.PORT
  ? Number.parseInt(process.env.PORT, 10)
  : 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    // logger: ,
    // process.env.NODE_ENV === 'development'
    //   ? ['log', 'debug', 'error', 'verbose', 'warn']
    //   : ['log', 'debug', 'error'],
  });

  await app.listen(port);
  app.enableShutdownHooks();
  Logger.log(`🚀 application now running at ${port}`, 'main.ts');
}

Logger.log('⛓ configuration', configuration(), 'main.ts');
bootstrap().then(() => Logger.log('🛠 bootstrapped application', 'main.ts'));
