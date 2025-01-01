<script lang="ts">
  import type { TopologyNode } from '$lib/types/topology';
  
  export let node: TopologyNode;
  
  const getNodeIcon = (type: TopologyNode['type']) => {
    switch (type) {
      case 'service': return '⚙️';
      case 'database': return '💾';
      case 'cache': return '⚡';
      case 'loadbalancer': return '⚖️';
      case 'gateway': return '🌐';
      default: return '📦';
    }
  };
  
  const getStatusColor = (status: TopologyNode['status']) => {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'down': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
</script>

<div class="flex flex-col items-center">
  <div class="relative p-3 bg-white rounded-lg shadow-md border border-gray-200">
    <div class="text-2xl mb-1">{getNodeIcon(node.type)}</div>
    <div class="text-sm font-medium">{node.name}</div>
    <div class="absolute -top-1 -right-1">
      <div class={`w-3 h-3 rounded-full ${getStatusColor(node.status)}`}></div>
    </div>
  </div>
</div>