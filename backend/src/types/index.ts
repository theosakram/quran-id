export interface QuranApiConfig {
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  baseUrl: string;
}

export interface FullConfig {
  port: number | string;
  nodeEnv: string;
  quran: QuranApiConfig;
}
