<script lang="ts">
  import CodeBlock from './CodeBlock.svelte';
  
  const configCode = `
// Datadog API Configuration
const config = {
  apiKey: 'your-api-key',
  appKey: 'your-application-key',
  site: 'datadoghq.com'
};
`.trim();

  const usageCode = `
// Example: Submit metrics
await datadog.submitMetrics({
  series: [{
    metric: 'system.cpu.usage',
    points: [[Date.now(), 85.5]],
    tags: ['env:production', 'service:api']
  }]
});
`.trim();
</script>

<div class="space-y-6">
  <section>
    <h3 class="text-lg font-medium mb-3">Prerequisites</h3>
    <ul class="list-disc list-inside space-y-2 text-gray-600">
      <li>Datadog account</li>
      <li>Admin access to create API keys</li>
      <li>Datadog agent installed on your servers</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-medium mb-3">Configuration Steps</h3>
    <ol class="list-decimal list-inside space-y-4 text-gray-600">
      <li>Log in to Datadog</li>
      <li>Navigate to Organization Settings → API Keys</li>
      <li>Create a new API key and Application key</li>
      <li>Copy both keys</li>
      <li>Configure the integration using the code below:</li>
    </ol>
    <div class="mt-4">
      <CodeBlock code={configCode} language="javascript" />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-medium mb-3">Usage Example</h3>
    <CodeBlock code={usageCode} language="javascript" />
  </section>
</div>