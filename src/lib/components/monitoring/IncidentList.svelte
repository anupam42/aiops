<script lang="ts">
  import { incidents } from '$lib/stores/incidents';
  import { formatDistanceToNow } from '$lib/utils/dateTime';
  import IncidentCard from './IncidentCard.svelte';
  
  $: sortedIncidents = [...$incidents].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Active Incidents</h2>
  <div class="space-y-4 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar relative">
    {#each sortedIncidents as incident}
      <IncidentCard {incident} />
    {/each}
    {#if sortedIncidents.length > 1}
      <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    {/if}
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