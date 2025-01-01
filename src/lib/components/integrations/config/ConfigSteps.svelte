<script lang="ts">
  import type { Integration } from '$lib/types/integrations';
  import ServiceNowConfig from './ServiceNowConfig.svelte';
  import GrafanaConfig from './GrafanaConfig.svelte';
  import DatadogConfig from './DatadogConfig.svelte';
  
  export let integration: Integration;
  
  const configComponents = {
    servicenow: ServiceNowConfig,
    grafana: GrafanaConfig,
    datadog: DatadogConfig
  };
</script>

{#if integration.id in configComponents}
  <svelte:component this={configComponents[integration.id]} />
{:else}
  <p class="text-gray-600">Configuration not available for this integration.</p>
{/if}