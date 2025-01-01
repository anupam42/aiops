export interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  tension: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}