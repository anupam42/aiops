import { writable } from 'svelte/store';
import type { Integration } from '$lib/types/integrations';

const initialIntegrations: Integration[] = [
  {
    id: 'servicenow',
    name: 'ServiceNow',
    description: 'ITSM and ticketing integration',
    icon: '/icons/servicenow.svg',
    connected: false,
    type: 'ticketing'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    description: 'Metrics visualization and dashboards',
    icon: '/icons/grafana.svg',
    connected: false,
    type: 'monitoring'
  },
  {
    id: 'datadog',
    name: 'Datadog',
    description: 'Infrastructure and application monitoring',
    icon: '/icons/datadog.svg',
    connected: false,
    type: 'monitoring'
  }
];

function createIntegrationsStore() {
  const { subscribe, update } = writable<Integration[]>(initialIntegrations);
  
  return {
    subscribe,
    addIntegration: (integration: Integration) =>
      update(integrations => [...integrations, integration]),
    removeIntegration: (id: string) =>
      update(integrations => integrations.filter(i => i.id !== id)),
    updateIntegration: (id: string, changes: Partial<Integration>) =>
      update(integrations =>
        integrations.map(i =>
          i.id === id ? { ...i, ...changes } : i
        )
      )
  };
}

export const integrations = createIntegrationsStore();
export const availableIntegrations = writable(initialIntegrations);