<script lang="ts">
  import { k8sStore } from '$lib/stores/kubernetes';
  import { onMount } from 'svelte';
  
  let selectedPod = '';
  let logs: string[] = [];
  
  $: pods = $k8sStore.pods;
  
  onMount(() => {
    // Simulate log streaming
    const interval = setInterval(() => {
      if (selectedPod) {
        logs = [...logs, `[${new Date().toISOString()}] Sample log entry for ${selectedPod}`].slice(-50);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  });
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-semibold">Pod Logs</h2>
    <select 
      bind:value={selectedPod}
      class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="">Select Pod</option>
      {#each pods as pod}
        <option value={pod.name}>{pod.name}</option>
      {/each}
    </select>
  </div>
  
  <div class="bg-gray-900 text-gray-100 p-4 rounded-lg h-64 overflow-y-auto font-mono text-sm">
    {#each logs as log}
      <div class="whitespace-pre-wrap">{log}</div>
    {/each}
    {#if !selectedPod}
      <div class="text-gray-500">Select a pod to view logs</div>
    {/if}
  </div>
</div>