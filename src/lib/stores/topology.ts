import { writable } from 'svelte/store';
import type { TopologyNode, TopologyEdge } from '$lib/types/topology';

const initialNodes: TopologyNode[] = [
  {
    id: 'gateway',
    type: 'gateway',
    name: 'API Gateway',
    status: 'healthy',
    metrics: { cpu: 45, memory: 60 }
  },
  {
    id: 'auth',
    type: 'service',
    name: 'Auth Service',
    status: 'healthy',
    metrics: { cpu: 30, memory: 40 }
  },
  {
    id: 'users',
    type: 'service',
    name: 'User Service',
    status: 'healthy',
    metrics: { cpu: 25, memory: 35 }
  },
  {
    id: 'cache',
    type: 'cache',
    name: 'Redis Cache',
    status: 'healthy',
    metrics: { memory: 55 }
  },
  {
    id: 'db',
    type: 'database',
    name: 'Main Database',
    status: 'healthy',
    metrics: { cpu: 50, memory: 70 }
  }
];

const initialEdges: TopologyEdge[] = [
  { source: 'gateway', target: 'auth', status: 'healthy', latency: 45 },
  { source: 'gateway', target: 'users', status: 'healthy', latency: 38 },
  { source: 'auth', target: 'cache', status: 'healthy', latency: 12 },
  { source: 'users', target: 'db', status: 'healthy', latency: 65 },
  { source: 'auth', target: 'db', status: 'healthy', latency: 58 }
];

function createTopologyStore() {
  const { subscribe, update } = writable({
    nodes: initialNodes,
    edges: initialEdges
  });

  return {
    subscribe,
    updateNodeStatus: (id: string, status: TopologyNode['status']) =>
      update(state => ({
        ...state,
        nodes: state.nodes.map(node =>
          node.id === id ? { ...node, status } : node
        )
      })),
    updateEdgeStatus: (source: string, target: string, status: TopologyEdge['status']) =>
      update(state => ({
        ...state,
        edges: state.edges.map(edge =>
          edge.source === source && edge.target === target
            ? { ...edge, status }
            : edge
        )
      }))
  };
}

export const topology = createTopologyStore();