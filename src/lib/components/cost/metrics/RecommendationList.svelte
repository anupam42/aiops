<script lang="ts">
  export let recommendations: string[];
</script>

<div>
  <h4 class="font-medium mb-2">Optimization Recommendations</h4>
  <ul class="space-y-2">
    {#each recommendations as rec}
      <li class="flex items-start gap-2">
        <span class="text-yellow-500">⚠️</span>
        <span class="text-sm">{rec}</span>
      </li>
    {/each}
  </ul>
</div>