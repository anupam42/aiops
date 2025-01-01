<script lang="ts">
  import type { TableStore } from '$lib/stores/tableStore';
  
  export let tableStore: TableStore;
  export let totalItems: number;
  
  $: totalPages = Math.ceil(totalItems / $tableStore.pageSize);
  $: currentPage = $tableStore.currentPage;
  
  const pageSizeOptions = [10, 25, 50, 100];
</script>

<div class="flex justify-between items-center">
  <div class="flex items-center gap-2">
    <span class="text-sm text-gray-700">Rows per page:</span>
    <select
      class="px-2 py-1 rounded border border-gray-300"
      on:change={(e) => tableStore.setPageSize(parseInt(e.currentTarget.value))}
    >
      {#each pageSizeOptions as size}
        <option value={size} selected={size === $tableStore.pageSize}>{size}</option>
      {/each}
    </select>
  </div>
  
  <div class="flex items-center gap-2">
    <span class="text-sm text-gray-700">
      {($tableStore.currentPage - 1) * $tableStore.pageSize + 1} - 
      {Math.min($tableStore.currentPage * $tableStore.pageSize, totalItems)} of {totalItems}
    </span>
    
    <div class="flex gap-1">
      <button
        class="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === 1}
        on:click={() => tableStore.setPage(currentPage - 1)}
      >
        ←
      </button>
      <button
        class="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === totalPages}
        on:click={() => tableStore.setPage(currentPage + 1)}
      >
        →
      </button>
    </div>
  </div>
</div>