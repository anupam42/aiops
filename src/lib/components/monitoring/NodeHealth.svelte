<script lang="ts">
  import { onMount } from 'svelte';
  import type { NodeMetrics } from '$lib/types/monitoring';
  
  let nodes: NodeMetrics[] = [
    { name: 'node-1', cpu: 45, memory: 60, disk: 55, status: 'healthy' },
    { name: 'node-2', cpu: 75, memory: 80, disk: 70, status: 'warning' },
    { name: 'node-3', cpu: 30, memory: 45, disk: 40, status: 'healthy' }
  ];
  
  function getStatusColor(status: string): string {
    return status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500';
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Node Health</h2>
  <div class="space-y-4">
    {#each nodes as node}
      <div class="border rounded-lg p-4">
        <div class="flex justify-between items-center mb-3">
          <span class="font-medium">{node.name}</span>
          <span class={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(node.status)}`}>
            {node.status}
          </span>
        </div>
        <div class="space-y-2">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>CPU</span>
              <span>{node.cpu}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: {node.cpu}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Memory</span>
              <span>{node.memory}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-purple-500 h-2 rounded-full" style="width: {node.memory}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Disk</span>
              <span>{node.disk}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-green-500 h-2 rounded-full" style="width: {node.disk}%"></div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>