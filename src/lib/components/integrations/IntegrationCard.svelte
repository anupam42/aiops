<script lang="ts">
  import type { Integration } from '$lib/types/integrations';
  import ConfigurationModal from './config/ConfigurationModal.svelte';
  
  export let integration: Integration;
  
  let showConfig = false;
  
  function toggleConfig() {
    showConfig = !showConfig;
  }
</script>

<div class="bg-white p-4 rounded-lg shadow-lg">
  <div class="flex items-center gap-3 mb-3">
    <img 
      src={integration.icon} 
      alt={integration.name}
      class="w-8 h-8"
    />
    <h3 class="text-lg font-medium">{integration.name}</h3>
  </div>
  
  <p class="text-gray-600 mb-4">{integration.description}</p>
  
  <div class="flex justify-between items-center gap-4">
    <span class={`px-2 py-1 rounded-full text-sm ${integration.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
      {integration.connected ? 'Connected' : 'Not Connected'}
    </span>
    <button 
      class="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
      on:click={toggleConfig}
    >
      Configure
    </button>
  </div>
</div>

{#if showConfig}
  <ConfigurationModal 
    {integration} 
    onClose={() => showConfig = false} 
  />
{/if}