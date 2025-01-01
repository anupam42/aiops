<script lang="ts">
  import { mockAlerts } from '$lib/data/mockData';
  import { getSeverityColor } from '$lib/utils/colors';
  import type { Alert } from '$lib/types/dashboard';

  let alerts: Alert[] = mockAlerts;
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Active Alerts</h2>
  <div class="space-y-4">
    {#each alerts as alert (alert.id)}
      <div class="border rounded-lg p-4">
        <div class="flex items-center justify-between">
          <span class={`px-2 py-1 rounded-full text-sm font-medium ${getSeverityColor(alert.severity)}`}>
            {alert.severity}
          </span>
          <span class="text-sm text-gray-500">
            {new Date(alert.timestamp).toLocaleString()}
          </span>
        </div>
        <p class="mt-2 text-gray-700">{alert.message}</p>
      </div>
    {/each}
  </div>
</div>