<script lang="ts">
  import IntegrationGrid from '$lib/components/integrations/IntegrationGrid.svelte';
  import IntegrationsSidebar from '$lib/components/integrations/IntegrationsSidebar.svelte';
  import { integrations } from '$lib/stores/integrations';
</script>

<svelte:head>
  <title>Integrations - AIOps Dashboard</title>
</svelte:head>

<div class="p-6 max-w-7xl mx-auto">
  <h1 class="text-3xl font-bold mb-8">Integrations</h1>
  
  <div class="flex gap-6">
    <IntegrationsSidebar />
    <IntegrationGrid integrations={$integrations} />
  </div>
</div>