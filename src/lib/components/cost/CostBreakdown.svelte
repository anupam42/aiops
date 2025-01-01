<script lang="ts">
  import { costMetrics } from '$lib/stores/costMetrics';
  import CostChart from './charts/CostChart.svelte';
  
  export let period: string;
  
  $: data = {
    labels: ['Compute', 'Storage', 'Network', 'Other'],
    datasets: [{
      data: $costMetrics.breakdown,
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ]
    }]
  };
</script>

<div class="bg-gray-50 p-4 rounded-lg">
  <h3 class="text-lg font-medium mb-4">Cost Breakdown</h3>
  <CostChart {data} />
</div>