<script lang="ts">
  import type { Situation } from '$lib/types/metrics';
  import { getSeverityClass } from '$lib/utils/styles';
  import { formatDistanceToNow } from '$lib/utils/dateTime';
  
  export let situation: Situation;
  
  let expanded = false;
  
  function toggleExpand() {
    expanded = !expanded;
  }
</script>

<tr class="hover:bg-gray-50">
  <td class="px-4 py-4">
    <button
      class="text-gray-500 hover:text-gray-700"
      on:click={toggleExpand}
    >
      {expanded ? '▼' : '▶'}
    </button>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{situation.id}</td>
  <td class="px-6 py-4 whitespace-nowrap">
    <span class={`px-2 py-1 rounded-full text-xs ${getSeverityClass(situation.severity)}`}>
      {situation.severity}
    </span>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">{situation.title}</td>
  <td class="px-6 py-4 whitespace-nowrap text-sm">{situation.status}</td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    {formatDistanceToNow(new Date(situation.timestamp))}
  </td>
</tr>

{#if expanded}
  <tr class="bg-gray-50">
    <td colspan="6" class="px-6 py-4">
      <div class="text-sm text-gray-700">
        <h4 class="font-medium mb-2">Details</h4>
        <p class="mb-4">{situation.description}</p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <span class="font-medium">Created:</span>
            <span class="ml-2">{new Date(situation.timestamp).toLocaleString()}</span>
          </div>
          <div>
            <span class="font-medium">Last Updated:</span>
            <span class="ml-2">{new Date(situation.timestamp).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </td>
  </tr>
{/if}