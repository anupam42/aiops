<script lang="ts">
  import { k8sStore } from '$lib/stores/kubernetes';
  
  function getStatusColor(current: number, desired: number): string {
    if (current === desired) return 'text-green-600';
    if (current > 0) return 'text-yellow-600';
    return 'text-red-600';
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Kubernetes Deployments</h2>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Namespace</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ready</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Up-to-date</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each $k8sStore.deployments as deployment}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {deployment.name}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {deployment.namespace}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
              <span class={getStatusColor(deployment.ready, deployment.desired)}>
                {deployment.ready}/{deployment.desired}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
              <span class={getStatusColor(deployment.updated, deployment.desired)}>
                {deployment.updated}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
              <span class={getStatusColor(deployment.available, deployment.desired)}>
                {deployment.available}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {deployment.age}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>