<script lang="ts">
  import type { MetricAlert } from '$lib/types/metrics';
  import { getSeverityClass } from '$lib/utils/styles';
  import { formatDistanceToNow } from '$lib/utils/dateTime';

  export let alert: MetricAlert;

  $: thresholdPercentage = (alert.value / alert.threshold) * 100;
</script>

<div class="bg-white p-4 rounded-lg shadow border border-gray-200">
  <div class="flex justify-between items-start mb-3">
    <span class={`px-2 py-1 rounded-full text-sm ${getSeverityClass(alert.severity)}`}>
      {alert.severity}
    </span>
    <span class="text-sm text-gray-500">
      {formatDistanceToNow(new Date(alert.timestamp))}
    </span>
  </div>
  
  <h3 class="font-medium mb-2">{alert.metric}</h3>
  
  <div class="mb-3">
    <div class="flex justify-between text-sm mb-1">
      <span>Current Value</span>
      <span>{alert.value.toFixed(2)}</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div
        class="h-2 rounded-full bg-blue-500"
        style="width: {Math.min(thresholdPercentage, 100)}%"
      ></div>
    </div>
    <div class="flex justify-between text-sm mt-1">
      <span>Threshold</span>
      <span>{alert.threshold.toFixed(2)}</span>
    </div>
  </div>
  
  <div class="flex justify-between text-sm">
    <span class="text-gray-500">Status: <span class="font-medium">{alert.status}</span></span>
    <span class="text-gray-500">ID: {alert.id}</span>
  </div>
</div>