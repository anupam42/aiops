<script lang="ts">
  import { metricAlerts } from '$lib/stores/metricAlerts';
  import AlertCard from './cards/AlertCard.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each $metricAlerts as alert (alert.id)}
    <AlertCard {alert} />
  {/each}
</div>