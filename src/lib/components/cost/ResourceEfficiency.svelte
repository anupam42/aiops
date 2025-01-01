<script lang="ts">
  import { costMetrics } from '$lib/stores/costMetrics';
  import EfficiencyScore from './metrics/EfficiencyScore.svelte';
  import RecommendationList from './metrics/RecommendationList.svelte';
  
  $: efficiencyScore = $costMetrics.efficiencyScore;
  $: recommendations = $costMetrics.recommendations;
</script>

<div class="bg-gray-50 p-4 rounded-lg">
  <h3 class="text-lg font-medium mb-4">Resource Efficiency</h3>
  <EfficiencyScore score={efficiencyScore} />
  <RecommendationList {recommendations} />
</div>