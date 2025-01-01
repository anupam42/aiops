<script lang="ts">
  import type { Incident } from '$lib/types/monitoring';
  import { getSeverityClass } from '$lib/utils/styles';
  import { formatDistanceToNow } from '$lib/utils/dateTime';

  export let incident: Incident;
</script>

<div class="border rounded-lg p-4">
  <div class="flex items-center justify-between mb-2">
    <span class={`px-2 py-1 rounded-full text-sm font-medium ${getSeverityClass(incident.severity)}`}>
      {incident.severity}
    </span>
    <span class="text-sm text-gray-500">
      {formatDistanceToNow(new Date(incident.timestamp))}
    </span>
  </div>
  <h3 class="font-medium mb-2">{incident.title}</h3>
  <div class="flex flex-wrap gap-2 mb-2">
    {#each incident.affectedServices as service}
      <span class="bg-gray-100 px-2 py-1 rounded text-sm">{service}</span>
    {/each}
  </div>
  {#if incident.autoRemediation}
    <div class="mt-2 text-sm">
      <span class="font-medium">Auto-remediation:</span>
      <span class={incident.autoRemediation.status === 'completed' ? 'text-green-600' : 
                  incident.autoRemediation.status === 'failed' ? 'text-red-600' : 
                  'text-yellow-600'}>
        {incident.autoRemediation.status}
      </span>
    </div>
  {/if}
</div>