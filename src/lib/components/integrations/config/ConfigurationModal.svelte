<script lang="ts">
  import type { Integration } from '$lib/types/integrations';
  import { fade } from 'svelte/transition';
  import ConfigSteps from './ConfigSteps.svelte';
  
  export let integration: Integration;
  export let onClose: () => void;
</script>

<div 
  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  transition:fade
  on:click={onClose}
>
  <div 
    class="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto"
    on:click|stopPropagation
  >
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center gap-3">
        <img src={integration.icon} alt={integration.name} class="w-8 h-8" />
        <h2 class="text-2xl font-semibold">{integration.name} Configuration</h2>
      </div>
      <button 
        class="text-gray-500 hover:text-gray-700"
        on:click={onClose}
      >
        ✕
      </button>
    </div>
    
    <ConfigSteps {integration} />
  </div>
</div>