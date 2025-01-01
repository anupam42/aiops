<script lang="ts">
  import { k8sStore } from '$lib/stores/kubernetes';
  import ClusterCard from './clusters/ClusterCard.svelte';
  
  $: clusters = [
    { id: 'prod', name: 'Production', deployments: $k8sStore.deployments },
    { id: 'staging', name: 'Staging', deployments: $k8sStore.deployments },
    { id: 'dev', name: 'Development', deployments: $k8sStore.deployments }
  ];
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-6">Cluster Overview</h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {#each clusters as cluster}
      <ClusterCard {cluster} />
    {/each}
  </div>
</div>