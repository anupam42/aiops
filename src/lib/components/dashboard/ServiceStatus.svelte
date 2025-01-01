<script lang="ts">
  import { mockServices } from '$lib/data/mockData';
  import { getStatusColor } from '$lib/utils/colors';
  import type { Service } from '$lib/types/dashboard';

  let services: Service[] = mockServices;
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Service Status</h2>
  <div class="space-y-4">
    {#each services as service (service.id)}
      <div class="flex items-center justify-between border-b pb-2">
        <span class="font-medium">{service.name}</span>
        <div class="flex items-center">
          <span class={`w-3 h-3 rounded-full ${getStatusColor(service.status)} mr-2`}></span>
          <span class="text-sm capitalize">{service.status}</span>
        </div>
      </div>
    {/each}
  </div>
</div>