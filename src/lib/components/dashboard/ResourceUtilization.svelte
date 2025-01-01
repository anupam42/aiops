<script lang="ts">
  const resources = [
    { name: 'CPU Cores', used: 12, total: 16 },
    { name: 'Memory', used: 24, total: 32 },
    { name: 'Storage', used: 420, total: 500 },
    { name: 'Network', used: 8.5, total: 10 }
  ];

  function getPercentage(used: number, total: number): number {
    return (used / total) * 100;
  }

  function getProgressColor(percentage: number): string {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Resource Utilization</h2>
  <div class="space-y-4">
    {#each resources as resource}
      {@const percentage = getPercentage(resource.used, resource.total)}
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium">{resource.name}</span>
          <span class="text-sm text-gray-500">
            {resource.used} / {resource.total} 
            {resource.name === 'Storage' ? 'GB' : 
              resource.name === 'Network' ? 'Gbps' : 
              resource.name === 'Memory' ? 'GB' : ''}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            class={`h-2.5 rounded-full ${getProgressColor(percentage)}`}
            style={`width: ${percentage}%`}>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>