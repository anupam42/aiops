<script lang="ts">
  import SystemHealth from '$lib/components/dashboard/SystemHealth.svelte';
  import MemoryUsage from '$lib/components/dashboard/MemoryUsage.svelte';
  import ServiceStatus from '$lib/components/dashboard/ServiceStatus.svelte';
  import ResourceUtilization from '$lib/components/dashboard/ResourceUtilization.svelte';
  import AlertsList from '$lib/components/dashboard/AlertsList.svelte';
  import ClusterOverview from '$lib/components/kubernetes/ClusterOverview.svelte';
  import TopologyView from '$lib/components/topology/TopologyView.svelte';
</script>

<svelte:head>
  <title>AIOps Dashboard</title>
  <meta name="description" content="AIOps monitoring dashboard" />
</svelte:head>

<div class="p-6 max-w-7xl mx-auto">
  <h1 class="text-3xl font-bold mb-8">Dashboard Overview</h1>
  
  <div class="grid grid-cols-1 gap-6">
    <!-- Main Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SystemHealth />
      <MemoryUsage />
    </div>
    
    <!-- Service & Resource Status -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ServiceStatus />
      <ResourceUtilization />
    </div>
    
    <!-- Kubernetes Overview -->
    <ClusterOverview />
    
    <!-- Service Topology -->
    <TopologyView />
    
    <!-- Alerts -->
    <AlertsList />
  </div>
</div>