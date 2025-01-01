import { writable } from 'svelte/store';
import type { ChartData } from '$lib/types/chart';

// Generate initial data points
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

const createMetricsStore = () => {
  const { subscribe, set, update } = writable<ChartData>({
    labels,
    datasets: [{
      label: 'CPU Usage (%)',
      data,
      borderColor: 'rgb(75, 192, 192)',
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

export const systemMetrics = createMetricsStore();