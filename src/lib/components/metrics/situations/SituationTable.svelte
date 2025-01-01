<script lang="ts">
  import { situations } from '$lib/stores/situations';
  import { getSeverityClass } from '$lib/utils/styles';
  import { formatDistanceToNow } from '$lib/utils/dateTime';
  import TableFilters from './table/TableFilters.svelte';
  import TablePagination from './table/TablePagination.svelte';
  import ExpandableRow from './table/ExpandableRow.svelte';
  import { createTableStore } from '$lib/stores/tableStore';
  import { onMount } from 'svelte';
  
  let tableStore = createTableStore([]);
  
  // Update table store when situations change
  $: {
    tableStore = createTableStore($situations);
  }
  
  $: filteredData = tableStore.getFilteredData();
  $: paginatedData = tableStore.getPaginatedData(filteredData);
  
  function toggleSort(column: string) {
    tableStore.toggleSort(column);
  }
</script>

<div class="space-y-4">
  <TableFilters {tableStore} />
  
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="w-8 px-4 py-3"></th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer" on:click={() => toggleSort('id')}>
            ID {#if $tableStore.sortColumn === 'id'}{$tableStore.sortDirection === 'asc' ? '↑' : '↓'}{/if}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer" on:click={() => toggleSort('severity')}>
            Severity {#if $tableStore.sortColumn === 'severity'}{$tableStore.sortDirection === 'asc' ? '↑' : '↓'}{/if}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer" on:click={() => toggleSort('title')}>
            Title {#if $tableStore.sortColumn === 'title'}{$tableStore.sortDirection === 'asc' ? '↑' : '↓'}{/if}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer" on:click={() => toggleSort('status')}>
            Status {#if $tableStore.sortColumn === 'status'}{$tableStore.sortDirection === 'asc' ? '↑' : '↓'}{/if}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer" on:click={() => toggleSort('timestamp')}>
            Time {#if $tableStore.sortColumn === 'timestamp'}{$tableStore.sortDirection === 'asc' ? '↑' : '↓'}{/if}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each paginatedData as situation (situation.id)}
          <ExpandableRow {situation} />
        {/each}
      </tbody>
    </table>
  </div>

  <TablePagination {tableStore} totalItems={filteredData.length} />
</div>