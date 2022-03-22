import { IConfiguration } from './interfaces';

export default () =>
  <IConfiguration>{
    acr: {
      host: process.env.ACR_HOST,
      access_key: process.env.ACR_ACCESS_KEY,
      access_secret: process.env.ACR_ACCESS_SECRET,
    },
  };
