<script lang="ts">
  import { alerts } from '$lib/stores/alerts';
  import AlertCard from './alerts/AlertCard.svelte';
  
  $: sortedAlerts = [...$alerts].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Alert History</h2>
  
  <div class="space-y-4 max-h-[32rem] overflow-y-auto pr-2 custom-scrollbar">
    {#each sortedAlerts as alert (alert.id)}
      <AlertCard {alert} />
    {:else}
      <div class="text-center py-8 text-gray-500">
        No alerts found
      </div>
    {/each}
  </div>
</div>

<style>
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #CBD5E1 #F1F5F9;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #F1F5F9;
    border-radius: 3px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #CBD5E1;
    border-radius: 3px;
  }
</style>