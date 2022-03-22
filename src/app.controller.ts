import { Controller, Get, Logger } from '@nestjs/common';

@Controller('/')
export class AppController {
  logger: Logger;
  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  @Get()
  welcome(): { message: string } {
    this.logger.log('.welcome');
    return {
      message: 'Welcome to /recognition/identify',
    };
  }
}
