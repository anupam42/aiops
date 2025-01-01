<script lang="ts">
  export let searchQuery: string;
  export let selectedSeverity: string;
</script>

<div class="flex flex-col sm:flex-row gap-2">
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Search alerts..."
    class="flex-1 min-w-[200px] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  />
  <select
    bind:value={selectedSeverity}
    class="w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  >
    <option value="all">All Severities</option>
    <option value="critical">Critical</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
</div>