export interface LineChartDataPoint {
  x: string | number;
  y: number;
}

export interface LineChartData {
  id: string;
  data: LineChartDataPoint[];
}

export interface LineChartProps {
  data: LineChartData[];
  yMax?: number;
  yTickValues?: number[];
  yUnit?: string;
  color?: string;
}
