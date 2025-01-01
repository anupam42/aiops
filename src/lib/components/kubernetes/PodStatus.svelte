<script lang="ts">
  import { k8sStore } from '$lib/stores/kubernetes';
  
  function getStatusBadgeClass(status: string): string {
    const classes = {
      Running: 'bg-green-100 text-green-800',
      Pending: 'bg-yellow-100 text-yellow-800',
      Failed: 'bg-red-100 text-red-800',
      Succeeded: 'bg-blue-100 text-blue-800',
      Unknown: 'bg-gray-100 text-gray-800'
    };
    return classes[status] || classes.Unknown;
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Pod Status</h2>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Restarts</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Node</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each $k8sStore.pods as pod}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {pod.name}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(pod.status)}`}>
                {pod.status}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {pod.containers.reduce((sum, container) => sum + container.restarts, 0)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {pod.age}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {pod.node}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>