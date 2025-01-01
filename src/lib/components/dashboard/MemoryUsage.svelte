<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart } from 'svelte-chartjs';
  import '$lib/config/chartConfig';
  import { memoryMetrics } from '$lib/stores/memoryMetrics';

  onMount(() => {
    const interval = setInterval(() => {
      memoryMetrics.addMetric(Math.random() * 32); // Simulate memory usage up to 32GB
    }, 2000);

    return () => clearInterval(interval);
  });
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Memory Usage</h2>
  <div class="h-64">
    <Chart 
      type="line" 
      data={$memoryMetrics} 
      options={{ 
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 32,
            title: {
              display: true,
              text: 'Memory Usage (GB)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Time'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }} 
    />
  </div>
</div>