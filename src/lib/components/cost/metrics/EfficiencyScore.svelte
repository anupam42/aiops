<script lang="ts">
  export let score: number;
</script>

<div class="mb-4">
  <div class="flex items-center justify-between mb-2">
    <span>Efficiency Score</span>
    <span class="font-medium">{score}%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      class="h-2.5 rounded-full bg-green-500"
      style="width: {score}%"
    ></div>
  </div>
</div>