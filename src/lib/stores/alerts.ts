import { writable } from 'svelte/store';
import type { Alert } from '$lib/types/monitoring';

const initialAlerts: Alert[] = [
  {
    id: '1',
    service: 'API Gateway',
    message: 'High latency detected',
    severity: 'high',
    timestamp: new Date().toISOString()
  },
  {
    id: '2',
    service: 'Database',
    message: 'Connection pool near capacity',
    severity: 'medium',
    timestamp: new Date().toISOString()
  }
];

function createAlertStore() {
  const { subscribe, update } = writable<Alert[]>(initialAlerts);
  
  return {
    subscribe,
    addAlert: (alert: Alert) => update(alerts => [alert, ...alerts]),
    removeAlert: (id: string) => update(alerts => alerts.filter(a => a.id !== id))
  };
}

export const alerts = createAlertStore();