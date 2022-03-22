import {
  Controller,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RecognitionService } from './recognition.service';
import { join } from 'path';
import * as fs from 'fs';

@Controller('/recognition')
export class RecognitionController {
  logger: Logger;
  constructor(private readonly service: RecognitionService) {
    this.logger = new Logger(this.constructor.name);
  }

  @Post('/identify')
  @UseInterceptors(FileInterceptor('file'))
  async identify(@UploadedFile() file: Express.Multer.File) {
    this.logger.log('.identify');
    const split = file.originalname.split('.');
    this.logger.debug('.identify split', split);
    const path = join(
      __dirname,
      '..',
      `tmp/${Date.now()}.${split[split.length - 1]}`,
    );
    fs.writeFileSync(path, file.buffer);
    this.logger.debug('.identify written to file');
    const f = fs.readFileSync(path);

    const response = await this.service.recognize(f);
    this.logger.debug('.identify response to acr', response);
    fs.unlinkSync(path);
    this.logger.debug('.identify unlined file', response);
    return response;
  }
}
