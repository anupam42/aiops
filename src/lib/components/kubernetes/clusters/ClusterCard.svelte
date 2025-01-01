<script lang="ts">
  import type { K8sDeployment } from '$lib/types/kubernetes';
  import DeploymentStatus from './DeploymentStatus.svelte';
  
  export let cluster: {
    id: string;
    name: string;
    deployments: K8sDeployment[];
  };
  
  $: totalPods = cluster.deployments.reduce((sum, dep) => sum + dep.desired, 0);
  $: readyPods = cluster.deployments.reduce((sum, dep) => sum + dep.ready, 0);
  $: healthPercentage = Math.round((readyPods / totalPods) * 100) || 0;
  
  function getHealthColor(percentage: number): string {
    if (percentage >= 90) return 'text-green-500';
    if (percentage >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }
</script>

<div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-medium">{cluster.name}</h3>
    <span class="text-2xl font-semibold {getHealthColor(healthPercentage)}">
      {healthPercentage}%
    </span>
  </div>
  
  <div class="space-y-3">
    {#each cluster.deployments as deployment}
      <DeploymentStatus {deployment} />
    {/each}
  </div>
  
  <div class="mt-4 pt-4 border-t border-gray-200">
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <span class="text-gray-500">Total Pods</span>
        <p class="font-medium">{totalPods}</p>
      </div>
      <div>
        <span class="text-gray-500">Ready Pods</span>
        <p class="font-medium">{readyPods}</p>
      </div>
    </div>
  </div>
</div>