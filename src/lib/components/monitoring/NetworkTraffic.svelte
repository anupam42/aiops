<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart } from 'svelte-chartjs';
  import '$lib/config/chartConfig';
  
  let trafficData = {
    labels: [],
    datasets: [
      {
        label: 'Inbound',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Outbound',
        data: [],
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      }
    ]
  };
  
  onMount(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      trafficData = {
        labels: [...trafficData.labels.slice(-19), now],
        datasets: trafficData.datasets.map(dataset => ({
          ...dataset,
          data: [...dataset.data.slice(-19), Math.random() * 100]
        }))
      };
    }, 2000);
    
    return () => clearInterval(interval);
  });
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Network Traffic</h2>
  <div class="h-64">
    <Chart
      type="line"
      data={trafficData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'MB/s'
            }
          }
        }
      }}
    />
  </div>
</div>