<script lang="ts">
  import CodeBlock from './CodeBlock.svelte';
  
  const configCode = `
// Grafana API Configuration
const config = {
  url: 'http://your-grafana-instance:3000',
  apiKey: 'your-api-key',
  orgId: 1
};
`.trim();

  const usageCode = `
// Example: Create a dashboard
const dashboard = await grafana.createDashboard({
  title: 'AIOps Overview',
  tags: ['aiops', 'monitoring'],
  panels: [
    {
      title: 'CPU Usage',
      type: 'graph',
      datasource: 'Prometheus'
    }
  ]
});
`.trim();
</script>

<div class="space-y-6">
  <section>
    <h3 class="text-lg font-medium mb-3">Prerequisites</h3>
    <ul class="list-disc list-inside space-y-2 text-gray-600">
      <li>Running Grafana instance</li>
      <li>Admin privileges</li>
      <li>API key with admin permissions</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-medium mb-3">Configuration Steps</h3>
    <ol class="list-decimal list-inside space-y-4 text-gray-600">
      <li>Log in to Grafana as admin</li>
      <li>Go to Configuration → API Keys</li>
      <li>Create a new API key with Admin role</li>
      <li>Copy the generated API key</li>
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