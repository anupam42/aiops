<script lang="ts">
  import { metricAlerts } from '$lib/stores/metricAlerts';
  import { getSeverityClass } from '$lib/utils/styles';
  import { formatDistanceToNow } from '$lib/utils/dateTime';
</script>

<div class="bg-white rounded-lg shadow overflow-hidden">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Threshold</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each $metricAlerts as alert}
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.id}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">{alert.metric}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm">{alert.value.toFixed(2)}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm">{alert.threshold.toFixed(2)}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class={`px-2 py-1 rounded-full text-xs ${getSeverityClass(alert.severity)}`}>
              {alert.severity}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm">{alert.status}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {formatDistanceToNow(new Date(alert.timestamp))}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>