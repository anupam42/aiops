<script lang="ts">
  export let code: string;
  export let language: string;
  
  function copyToClipboard() {
    navigator.clipboard.writeText(code);
  }
</script>

<div class="relative">
  <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
    <code class="language-{language}">{code}</code>
  </pre>
  <button
    class="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded hover:bg-gray-700"
    on:click={copyToClipboard}
  >
    Copy
  </button>
</div>