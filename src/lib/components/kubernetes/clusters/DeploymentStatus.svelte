<script lang="ts">
  import type { K8sDeployment } from '$lib/types/kubernetes';
  
  export let deployment: K8sDeployment;
  
  $: readyPercentage = Math.round((deployment.ready / deployment.desired) * 100);
  
  function getStatusColor(ready: number, desired: number): string {
    const ratio = ready / desired;
    if (ratio === 1) return 'bg-green-500';
    if (ratio >= 0.7) return 'bg-yellow-500';
    return 'bg-red-500';
  }
</script>

<div class="flex items-center space-x-3">
  <div class="flex-1 min-w-0">
    <div class="flex justify-between mb-1">
      <span class="text-sm font-medium truncate">{deployment.name}</span>
      <span class="text-sm text-gray-500">{deployment.ready}/{deployment.desired}</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-1.5">
      <div
        class="h-1.5 rounded-full {getStatusColor(deployment.ready, deployment.desired)}"
        style="width: {readyPercentage}%"
      ></div>
    </div>
  </div>
</div>