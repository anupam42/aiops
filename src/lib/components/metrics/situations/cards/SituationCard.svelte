<script lang="ts">
  import type { Situation } from '$lib/types/metrics';
  import { getSeverityClass } from '$lib/utils/styles';
  import { formatDistanceToNow } from '$lib/utils/dateTime';

  export let situation: Situation;
</script>

<div class="bg-white p-4 rounded-lg shadow border border-gray-200">
  <div class="flex justify-between items-start mb-3">
    <span class={`px-2 py-1 rounded-full text-sm ${getSeverityClass(situation.severity)}`}>
      {situation.severity}
    </span>
    <span class="text-sm text-gray-500">
      {formatDistanceToNow(new Date(situation.timestamp))}
    </span>
  </div>
  
  <h3 class="font-medium mb-2">{situation.title}</h3>
  <p class="text-sm text-gray-600 mb-3">{situation.description}</p>
  
  <div class="flex justify-between text-sm">
    <span class="text-gray-500">Status: <span class="font-medium">{situation.status}</span></span>
    <span class="text-gray-500">ID: {situation.id}</span>
  </div>
</div>