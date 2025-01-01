<script lang="ts">
  import AlertCards from './AlertCards.svelte';
  import AlertTable from './AlertTable.svelte';
  import { writable } from 'svelte/store';

  const viewMode = writable<'cards' | 'table'>('cards');
</script>

<section class="space-y-4">
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-semibold">Metric Alerts</h2>
    <div class="flex gap-2">
      <button
        class="px-3 py-1 rounded-md {$viewMode === 'cards' ? 'bg-blue-600 text-white' : 'bg-gray-100'}"
        on:click={() => viewMode.set('cards')}
      >
        Cards
      </button>
      <button
        class="px-3 py-1 rounded-md {$viewMode === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-100'}"
        on:click={() => viewMode.set('table')}
      >
        Table
      </button>
    </div>
  </div>

  {#if $viewMode === 'cards'}
    <AlertCards />
  {:else}
    <AlertTable />
  {/if}
</section>