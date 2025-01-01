export interface NodeMetrics {
  name: string;
  cpu: number;
  memory: number;
  disk: number;
  status: 'healthy' | 'warning' | 'critical';
}

export interface Alert {
  id: string;
  service: string;
  message: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  timestamp: string;
}