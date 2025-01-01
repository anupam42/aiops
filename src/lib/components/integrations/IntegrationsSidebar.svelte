<script lang="ts">
  import { availableIntegrations } from '$lib/stores/integrations';
  import IntegrationItem from './IntegrationItem.svelte';
</script>

<div class="w-64 bg-white rounded-lg shadow-lg p-4">
  <h2 class="text-lg font-semibold mb-4">Available Tools</h2>
  
  <div class="space-y-2">
    {#each $availableIntegrations as integration (integration.id)}
      <IntegrationItem {integration} />
    {/each}
  </div>
</div>