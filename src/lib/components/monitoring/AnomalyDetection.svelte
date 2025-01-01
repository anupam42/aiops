<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart } from 'svelte-chartjs';
  import { incidents } from '$lib/stores/incidents';
  import type { Incident } from '$lib/types/monitoring';
  import '$lib/config/chartConfig';

  let anomalyData = {
    labels: [],
    datasets: [{
      label: 'Response Time (ms)',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      fill: true
    }]
  };

  function detectAnomaly(value: number, threshold: number): boolean {
    return value > threshold;
  }

  onMount(() => {
    const interval = setInterval(() => {
      const value = Math.random() * 1000;
      const isAnomaly = detectAnomaly(value, 800);
      
      if (isAnomaly) {
        const incident: Incident = {
          id: crypto.randomUUID(),
          title: 'High Response Time Detected',
          severity: 'high',
          status: 'open',
          timestamp: new Date().toISOString(),
          affectedServices: ['API Gateway'],
          autoRemediation: {
            action: 'Scale up API instances',
            status: 'in_progress'
          }
        };
        incidents.addIncident(incident);
      }

      anomalyData = {
        ...anomalyData,
        labels: [...anomalyData.labels.slice(-19), new Date().toLocaleTimeString()],
        datasets: [{
          ...anomalyData.datasets[0],
          data: [...anomalyData.datasets[0].data.slice(-19), value]
        }]
      };
    }, 2000);

    return () => clearInterval(interval);
  });
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Anomaly Detection</h2>
  <div class="h-64">
    <Chart
      type="line"
      data={anomalyData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 0 },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Response Time (ms)'
            }
          }
        }
      }}
    />
  </div>
</div>