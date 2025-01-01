import { writable } from 'svelte/store';
import type { Situation } from '$lib/types/metrics';

const initialSituations: Situation[] = [
  {
    id: 'SIT-001',
    title: 'High CPU Usage in Production',
    description: 'Multiple instances showing sustained high CPU utilization',
    severity: 'critical',
    status: 'active',
    timestamp: new Date().toISOString()
  },
  {
    id: 'SIT-002',
    title: 'Database Connection Spikes',
    description: 'Unusual pattern in database connection requests',
    severity: 'warning',
    status: 'investigating',
    timestamp: new Date(Date.now() - 3600000).toISOString()
  }
];

function createSituationStore() {
  const { subscribe, update } = writable<Situation[]>(initialSituations);
  
  return {
    subscribe,
    addSituation: (situation: Situation) => update(situations => [situation, ...situations]),
    updateStatus: (id: string, status: string) => 
      update(situations => 
        situations.map(s => s.id === id ? { ...s, status } : s)
      )
  };
}

export const situations = createSituationStore();