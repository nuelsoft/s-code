export interface IACRConfiguration {
  host: string;
  access_key: string;
  access_secret;
}
export interface IConfiguration {
  acr: IACRConfiguration;
}

export interface IACR {
  identify: (file: Buffer) => Promise<{ [key: string]: any }>;
}
