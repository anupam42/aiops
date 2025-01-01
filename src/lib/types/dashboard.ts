export type Severity = 'high' | 'medium' | 'low';
export type ServiceStatus = 'healthy' | 'degraded' | 'down';

export interface Alert {
  id: number;
  severity: Severity;
  message: string;
  timestamp: string;
}

export interface Service {
  id: number;
  name: string;
  status: ServiceStatus;
}