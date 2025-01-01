<script lang="ts">
  import { onMount } from 'svelte';
  import { topology } from '$lib/stores/topology';
  import TopologyNode from './TopologyNode.svelte';

  let container: HTMLDivElement;
  let nodes: HTMLDivElement[] = [];
  
  const NODE_SPACING = 150;
  const LEVEL_HEIGHT = 120;
  
  onMount(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Position nodes in a hierarchical layout
    $topology.nodes.forEach((node, index) => {
      if (!nodes[index]) return;
      
      const level = getLevelForNode(node.type);
      const nodesInLevel = getNodesInLevel(node.type);
      const position = getPositionInLevel(node.type, node.id);
      
      const x = (width / (nodesInLevel + 1)) * (position + 1);
      const y = LEVEL_HEIGHT * level;
      
      nodes[index].style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  
  function getLevelForNode(type: string): number {
    switch (type) {
      case 'gateway': return 0;
      case 'service': return 1;
      case 'cache':
      case 'database': return 2;
      default: return 1;
    }
  }
  
  function getNodesInLevel(type: string): number {
    return $topology.nodes.filter(n => getLevelForNode(n.type) === getLevelForNode(type)).length;
  }
  
  function getPositionInLevel(type: string, id: string): number {
    const level = getLevelForNode(type);
    return $topology.nodes
      .filter(n => getLevelForNode(n.type) === level)
      .findIndex(n => n.id === id);
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-4">Service Topology</h2>
  <div 
    bind:this={container}
    class="relative h-[400px] border border-gray-200 rounded-lg bg-gray-50"
  >
    {#each $topology.nodes as node, i}
      <div 
        bind:this={nodes[i]} 
        class="absolute transition-transform duration-500 ease-in-out"
      >
        <TopologyNode {node} />
      </div>
    {/each}
    
    <svg class="absolute inset-0 w-full h-full pointer-events-none">
      {#each $topology.edges as edge}
        {@const sourceNode = nodes[$topology.nodes.findIndex(n => n.id === edge.source)]}
        {@const targetNode = nodes[$topology.nodes.findIndex(n => n.id === edge.target)]}
        {#if sourceNode && targetNode}
          <line
            x1={sourceNode.offsetLeft + sourceNode.offsetWidth / 2}
            y1={sourceNode.offsetTop + sourceNode.offsetHeight / 2}
            x2={targetNode.offsetLeft + targetNode.offsetWidth / 2}
            y2={targetNode.offsetTop + targetNode.offsetHeight / 2}
            class="stroke-current text-gray-300"
            stroke-width="2"
          />
        {/if}
      {/each}
    </svg>
  </div>
</div>