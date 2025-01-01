<script lang="ts">
  import type { Alert } from '$lib/types/monitoring';
  import { formatDistanceToNow } from '$lib/utils/dateTime';
  import { getSeverityClass } from '$lib/utils/styles';

  export let alert: Alert;
</script>

<div class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
  <div class="flex justify-between items-start gap-4">
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 mb-1">
        <span class={`px-2 py-0.5 text-xs rounded-full ${getSeverityClass(alert.severity)}`}>
          {alert.severity}
        </span>
        <span class="font-medium truncate">{alert.service}</span>
      </div>
      <p class="text-gray-600 break-words">{alert.message}</p>
    </div>
    <span class="text-sm text-gray-500 whitespace-nowrap">
      {formatDistanceToNow(new Date(alert.timestamp))}
    </span>
  </div>
</div>