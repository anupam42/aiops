<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart } from 'svelte-chartjs';
  import '$lib/config/chartConfig';
  import { systemMetrics } from '$lib/stores/systemMetrics';

  onMount(() => {
    const interval = setInterval(() => {
      systemMetrics.addMetric(Math.random() * 100);
    }, 2000);

    return () => clearInterval(interval);
  });
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">System Health</h2>
  <div class="h-64">
    <Chart 
      type="line" 
      data={$systemMetrics} 
      options={{ 
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'CPU Usage (%)'
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