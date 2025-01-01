import { writable } from 'svelte/store';
import type { MetricAlert } from '$lib/types/metrics';

const initialAlerts: MetricAlert[] = [
  {
    id: 'ALT-001',
    metric: 'CPU Usage',
    value: 92.5,
    threshold: 80,
    severity: 'critical',
    status: 'active',
    timestamp: new Date().toISOString()
  },
  {
    id: 'ALT-002',
    metric: 'Memory Usage',
    value: 85.3,
    threshold: 90,
    severity: 'warning',
    status: 'acknowledged',
    timestamp: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: 'ALT-003',
    metric: 'Disk I/O',
    value: 750,
    threshold: 1000,
    severity: 'info',
    status: 'active',
    timestamp: new Date(Date.now() - 3600000).toISOString()
  }
];

function createMetricAlertStore() {
  const { subscribe, update } = writable<MetricAlert[]>(initialAlerts);
  
  return {
    subscribe,
    addAlert: (alert: MetricAlert) => update(alerts => [alert, ...alerts]),
    updateStatus: (id: string, status: MetricAlert['status']) => 
      update(alerts => 
        alerts.map(a => a.id === id ? { ...a, status } : a)
      ),
    updateValue: (id: string, value: number) =>
      update(alerts =>
        alerts.map(a => a.id === id ? { ...a, value } : a)
      )
  };
}

export const metricAlerts = createMetricAlertStore();