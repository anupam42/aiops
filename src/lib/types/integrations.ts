export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  connected: boolean;
  type: 'monitoring' | 'logging' | 'alerting' | 'ticketing';
  configuration?: {
    apiKey?: string;
    url?: string;
    [key: string]: any;
  };
}