import { writable } from 'svelte/store';
import type { Incident } from '$lib/types/monitoring';

function createIncidentStore() {
  const { subscribe, update } = writable<Incident[]>([]);

  return {
    subscribe,
    addIncident: (incident: Incident) => update(incidents => [...incidents, incident]),
    updateStatus: (id: string, status: Incident['status']) => 
      update(incidents => 
        incidents.map(inc => 
          inc.id === id ? { ...inc, status } : inc
        )
      ),
    updateRemediation: (id: string, remediationStatus: Incident['autoRemediation']['status']) =>
      update(incidents =>
        incidents.map(inc =>
          inc.id === id && inc.autoRemediation
            ? { ...inc, autoRemediation: { ...inc.autoRemediation, status: remediationStatus } }
            : inc
        )
      )
  };
}

export const incidents = createIncidentStore();