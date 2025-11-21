// src/chartjs-setup.js

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  DoughnutController
} from "chart.js";

import {
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale
} from "chartjs-chart-geo";

// Register ALL chart elements only once
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  DoughnutController,

  // Geo charts
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale
);
