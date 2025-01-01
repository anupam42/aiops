export interface Situation {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
  status: 'active' | 'investigating' | 'resolved';
  timestamp: string;
}

export interface MetricAlert {
  id: string;
  metric: string;
  value: number;
  threshold: number;
  severity: 'critical' | 'warning' | 'info';
  timestamp: string;
  status: 'active' | 'acknowledged' | 'resolved';
}