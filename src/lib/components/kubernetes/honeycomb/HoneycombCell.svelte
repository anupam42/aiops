<script lang="ts">
  export let name: string;
  export let status: 'healthy' | 'warning' | 'critical';
  export let metrics: {
    pods: string;
    cpu: string;
    memory: string;
  };

  function getStatusColor(status: string): string {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }
</script>

<div class="honeycomb-cell">
  <div class="honeycomb-content {getStatusColor(status)}">
    <div class="p-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-medium text-white truncate">{name}</h4>
        <span class="w-2 h-2 rounded-full bg-white"></span>
      </div>
      
      <div class="space-y-2 text-white/90 text-sm">
        <div class="flex justify-between">
          <span>Pods:</span>
          <span>{metrics.pods}</span>
        </div>
        <div class="flex justify-between">
          <span>CPU:</span>
          <span>{metrics.cpu}</span>
        </div>
        <div class="flex justify-between">
          <span>Memory:</span>
          <span>{metrics.memory}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .honeycomb-cell {
    width: 200px;
    margin: 0 1rem;
  }

  .honeycomb-content {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transition: transform 0.2s;
  }

  .honeycomb-content:hover {
    transform: scale(1.05);
  }

  @media (min-width: 640px) {
    .honeycomb-cell:nth-child(2n) {
      transform: translateY(50%);
    }
  }
</style>