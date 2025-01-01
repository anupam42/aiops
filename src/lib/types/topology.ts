export type NodeType = 'service' | 'database' | 'cache' | 'loadbalancer' | 'gateway';

export interface TopologyNode {
  id: string;
  type: NodeType;
  name: string;
  status: 'healthy' | 'degraded' | 'down';
  metrics?: {
    cpu?: number;
    memory?: number;
    latency?: number;
  };
}

export interface TopologyEdge {
  source: string;
  target: string;
  latency?: number;
  status: 'healthy' | 'degraded' | 'down';
}