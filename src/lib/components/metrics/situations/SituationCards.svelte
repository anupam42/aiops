<script lang="ts">
  import { situations } from '$lib/stores/situations';
  import SituationCard from './cards/SituationCard.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each $situations as situation (situation.id)}
    <SituationCard {situation} />
  {/each}
</div>