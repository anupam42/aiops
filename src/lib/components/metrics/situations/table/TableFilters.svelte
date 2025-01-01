<script lang="ts">
  import type { TableStore } from '$lib/stores/tableStore';
  
  export let tableStore: TableStore;
  
  const dateRanges = [
    { label: 'Today', value: 'today' },
    { label: '3 Days', value: '3days' },
    { label: '5 Days', value: '5days' },
    { label: '10 Days', value: '10days' },
    { label: 'Custom', value: 'custom' }
  ];
  
  let showCustomDates = false;
  let customStartDate = '';
  let customEndDate = '';
  
  function handleDateRangeChange(range: string) {
    showCustomDates = range === 'custom';
    if (!showCustomDates) {
      tableStore.setDateRange(range);
    }
  }
  
  function applyCustomDates() {
    if (customStartDate && customEndDate) {
      tableStore.setCustomDateRange(new Date(customStartDate), new Date(customEndDate));
    }
  }
</script>

<div class="flex flex-col sm:flex-row gap-4">
  <div class="flex-1">
    <input
      type="text"
      placeholder="Search situations..."
      class="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      on:input={(e) => tableStore.setSearchQuery(e.currentTarget.value)}
    />
  </div>
  
  <div class="flex gap-2">
    <select
      class="px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      on:change={(e) => tableStore.setStatusFilter(e.currentTarget.value)}
    >
      <option value="all">All Status</option>
      <option value="active">Active</option>
      <option value="investigating">Investigating</option>
      <option value="resolved">Resolved</option>
    </select>
    
    <select
      class="px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      on:change={(e) => handleDateRangeChange(e.currentTarget.value)}
    >
      {#each dateRanges as range}
        <option value={range.value}>{range.label}</option>
      {/each}
    </select>
  </div>
</div>

{#if showCustomDates}
  <div class="flex gap-4 mt-4">
    <input
      type="date"
      bind:value={customStartDate}
      class="px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    />
    <input
      type="date"
      bind:value={customEndDate}
      class="px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    />
    <button
      class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      on:click={applyCustomDates}
    >
      Apply
    </button>
  </div>
{/if}