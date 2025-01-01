<script lang="ts">
  import { Chart } from 'svelte-chartjs';
  
  export let data: {
    labels: string[];
    datasets: Array<{
      data: number[];
      backgroundColor: string[];
    }>;
  };
</script>

<div class="h-64">
  <Chart 
    type="doughnut" 
    {data} 
    options={{ 
      responsive: true, 
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }} 
  />
</div>