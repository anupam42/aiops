import { writable } from 'svelte/store';

interface CostMetrics {
  breakdown: number[];
  efficiencyScore: number;
  recommendations: string[];
}

const initialState: CostMetrics = {
  breakdown: [45, 30, 15, 10],
  efficiencyScore: 75,
  recommendations: [
    'Right-size underutilized instances',
    'Use spot instances for batch jobs',
    'Clean up unused storage volumes'
  ]
};

function createCostStore() {
  const { subscribe, update } = writable<CostMetrics>(initialState);

  return {
    subscribe,
    updateBreakdown: (breakdown: number[]) => 
      update(state => ({ ...state, breakdown })),
    updateEfficiencyScore: (score: number) =>
      update(state => ({ ...state, efficiencyScore: score })),
    addRecommendation: (recommendation: string) =>
      update(state => ({
        ...state,
        recommendations: [...state.recommendations, recommendation]
      }))
  };
}

export const costMetrics = createCostStore();