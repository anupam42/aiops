<script lang="ts">
  import type { Integration } from '$lib/types/integrations';
  import IntegrationCard from './IntegrationCard.svelte';
  
  export let integrations: Integration[];
  
  let dropTarget: string | null = null;
  
  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const gridCell = target.closest('.grid-cell');
    if (gridCell) {
      dropTarget = gridCell.id;
    }
  }
  
  function handleDrop(e: DragEvent) {
    e.preventDefault();
    const integrationId = e.dataTransfer?.getData('text/plain');
    if (integrationId && dropTarget) {
      // Handle integration placement logic
      console.log(`Dropped ${integrationId} into ${dropTarget}`);
    }
    dropTarget = null;
  }
</script>

<div 
  class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  on:dragover={handleDragOver}
  on:drop={handleDrop}
>
  {#each integrations as integration (integration.id)}
    <div class="grid-cell" id={`cell-${integration.id}`}>
      <IntegrationCard {integration} />
    </div>
  {/each}
</div>