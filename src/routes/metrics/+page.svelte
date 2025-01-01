<script lang="ts">
  import SituationsOverview from '$lib/components/metrics/situations/SituationsOverview.svelte';
  import AlertsOverview from '$lib/components/metrics/alerts/AlertsOverview.svelte';
</script>

<svelte:head>
  <title>Metrics - AIOps Dashboard</title>
</svelte:head>

<div class="p-6 max-w-7xl mx-auto">
  <h1 class="text-3xl font-bold mb-8">Metrics Overview</h1>
  
  <div class="space-y-8">
    <SituationsOverview />
    <AlertsOverview />
  </div>
</div>