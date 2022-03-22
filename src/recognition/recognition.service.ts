import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { IConfiguration, IACR } from '../shared/interfaces';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const acrcloud = require('acrcloud');

@Injectable()
export class RecognitionService {
  private readonly acr: IACR;
  constructor(private readonly config: ConfigService<IConfiguration>) {
    this.acr = new acrcloud(config.get('acr'));
  }

  async recognize(file: Buffer) {
    return this.acr.identify(file);
  }
}
