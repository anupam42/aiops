<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart } from 'svelte-chartjs';
  import { costMetrics } from '$lib/stores/costMetrics';
  import CostBreakdown from './CostBreakdown.svelte';
  import ResourceEfficiency from './ResourceEfficiency.svelte';

  let selectedPeriod = '7d';
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-semibold">Cost Analysis</h2>
    <select 
      bind:value={selectedPeriod}
      class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="24h">Last 24 Hours</option>
      <option value="7d">Last 7 Days</option>
      <option value="30d">Last 30 Days</option>
    </select>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <CostBreakdown period={selectedPeriod} />
    <ResourceEfficiency />
  </div>
</div>