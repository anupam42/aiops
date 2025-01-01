export interface K8sContainer {
  name: string;
  ready: boolean;
  restarts: number;
  state: 'running' | 'waiting' | 'terminated';
  image: string;
}

export interface K8sPod {
  name: string;
  status: 'Running' | 'Pending' | 'Failed' | 'Succeeded' | 'Unknown';
  containers: K8sContainer[];
  age: string;
  node: string;
}

export interface K8sDeployment {
  name: string;
  namespace: string;
  desired: number;
  current: number;
  ready: number;
  updated: number;
  available: number;
  age: string;
  conditions: {
    type: string;
    status: boolean;
    reason?: string;
    message?: string;
  }[];
}