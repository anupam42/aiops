import { writable } from 'svelte/store';
import type { K8sDeployment, K8sPod } from '$lib/types/kubernetes';

// Mock data for demonstration
const mockDeployments: K8sDeployment[] = [
  {
    name: 'frontend-app',
    namespace: 'production',
    desired: 3,
    current: 3,
    ready: 3,
    updated: 3,
    available: 3,
    age: '2d',
    conditions: [
      { type: 'Available', status: true },
      { type: 'Progressing', status: true }
    ]
  },
  {
    name: 'backend-api',
    namespace: 'production',
    desired: 5,
    current: 4,
    ready: 4,
    updated: 4,
    available: 4,
    age: '5d',
    conditions: [
      { type: 'Available', status: true },
      { type: 'Progressing', status: true }
    ]
  }
];

const mockPods: K8sPod[] = [
  {
    name: 'frontend-app-7d4f9c8b5-1',
    status: 'Running',
    containers: [
      {
        name: 'frontend',
        ready: true,
        restarts: 0,
        state: 'running',
        image: 'frontend:1.0.0'
      }
    ],
    age: '1d',
    node: 'node-1'
  },
  {
    name: 'backend-api-6b7d9f4c3-1',
    status: 'Running',
    containers: [
      {
        name: 'backend',
        ready: true,
        restarts: 2,
        state: 'running',
        image: 'backend:2.1.0'
      }
    ],
    age: '3d',
    node: 'node-2'
  }
];

function createK8sStore() {
  const { subscribe, update } = writable({
    deployments: mockDeployments,
    pods: mockPods
  });

  return {
    subscribe,
    updateDeployment: (name: string, deployment: Partial<K8sDeployment>) =>
      update(state => ({
        ...state,
        deployments: state.deployments.map(d =>
          d.name === name ? { ...d, ...deployment } : d
        )
      })),
    updatePod: (name: string, pod: Partial<K8sPod>) =>
      update(state => ({
        ...state,
        pods: state.pods.map(p =>
          p.name === name ? { ...p, ...pod } : p
        )
      }))
  };
}

export const k8sStore = createK8sStore();