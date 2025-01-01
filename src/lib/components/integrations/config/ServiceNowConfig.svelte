<script lang="ts">
  import CodeBlock from './CodeBlock.svelte';
  
  const configCode = `
// ServiceNow REST API Configuration
const config = {
  instance: 'your-instance.service-now.com',
  username: 'admin',
  password: 'your-password',
  oauth: {
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret'
  }
};
`.trim();

  const usageCode = `
// Example: Create an incident
const incident = await servicenow.createIncident({
  short_description: 'High CPU Usage Alert',
  description: 'CPU usage exceeded 90% threshold',
  urgency: '2',
  impact: '2'
});
`.trim();
</script>

<div class="space-y-6">
  <section>
    <h3 class="text-lg font-medium mb-3">Prerequisites</h3>
    <ul class="list-disc list-inside space-y-2 text-gray-600">
      <li>ServiceNow instance with admin access</li>
      <li>REST API access enabled</li>
      <li>OAuth client credentials</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-medium mb-3">Configuration Steps</h3>
    <ol class="list-decimal list-inside space-y-4 text-gray-600">
      <li>Log in to your ServiceNow instance as admin</li>
      <li>Navigate to System OAuth → Application Registry</li>
      <li>Create a new OAuth API endpoint for integration</li>
      <li>Copy the generated client ID and secret</li>
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