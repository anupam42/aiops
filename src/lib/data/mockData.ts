import type { Alert, Service } from '$lib/types/dashboard';

export const mockAlerts: Alert[] = [
  {
    id: 1,
    severity: 'high',
    message: 'High CPU usage detected',
    timestamp: new Date().toISOString()
  },
  {
    id: 2,
    severity: 'medium',
    message: 'Memory usage above 80%',
    timestamp: new Date().toISOString()
  }
];

export const mockServices: Service[] = [
  { id: 1, name: 'API Gateway', status: 'healthy' },
  { id: 2, name: 'Database', status: 'healthy' },
  { id: 3, name: 'Cache', status: 'degraded' },
  { id: 4, name: 'Authentication', status: 'healthy' }
];