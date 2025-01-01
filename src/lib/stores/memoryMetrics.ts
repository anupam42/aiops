import { writable } from 'svelte/store';
import type { ChartData } from '$lib/types/chart';

const generateInitialData = () => {
  const now = new Date();
  const labels = Array.from({ length: 10 }, (_, i) => {
    const d = new Date(now.getTime() - (9 - i) * 2000);
    return d.toLocaleTimeString();
  });
  
  const data = Array.from({ length: 10 }, () => Math.random() * 100);
  
  return { labels, data };
};

const { labels, data } = generateInitialData();

const createMemoryStore = () => {
  const { subscribe, update } = writable<ChartData>({
    labels,
    datasets: [{
      label: 'Memory Usage (GB)',
      data,
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1,
      fill: false,
      borderWidth: 2,
      pointRadius: 3
    }]
  });

  return {
    subscribe,
    addMetric: (value: number) => update(data => {
      const now = new Date();
      return {
        labels: [...data.labels.slice(1), now.toLocaleTimeString()],
        datasets: [{
          ...data.datasets[0],
          data: [...data.datasets[0].data.slice(1), value]
        }]
      };
    })
  };
};

export const memoryMetrics = createMemoryStore();