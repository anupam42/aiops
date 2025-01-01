<script lang="ts">
  import type { Integration } from '$lib/types/integrations';
  
  export let integration: Integration;
  
  function handleDragStart(e: DragEvent) {
    e.dataTransfer?.setData('text/plain', integration.id);
  }
</script>

<div
  class="p-3 bg-gray-50 rounded-lg cursor-move hover:bg-gray-100 transition-colors"
  draggable="true"
  on:dragstart={handleDragStart}
>
  <div class="flex items-center gap-3">
    <img 
      src={integration.icon} 
      alt={integration.name}
      class="w-6 h-6"
    />
    <span class="font-medium">{integration.name}</span>
  </div>
</div>