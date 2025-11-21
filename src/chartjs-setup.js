import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  DoughnutController,
} from "chart.js";

import {
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale      // <-- REQUIRED
} from "chartjs-chart-geo";

// Register all chart elements used
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  DoughnutController,

  // Choropleth map support
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale        // <-- THIS WAS MISSING
);
