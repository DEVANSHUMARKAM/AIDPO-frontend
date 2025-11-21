import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function MonthlyRevenueChart() {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const revenueData = [
    4300, 4100, 4800, 4600, 4950, 5400,
    5800, 5700, 5200, 5500, 6000, 6500
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Revenue (₹ Cr)",
        data: revenueData,
        borderColor: "#00E5D4",        // teal line
        borderWidth: 2.5,
        pointBackgroundColor: "#00E5D4",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 7,
        pointRadius: 4,
        tension: 0.35,                 // smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#00E5D4",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#222", font: { size: 12 } },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.12)",
          drawBorder: false,
        },
        ticks: { color: "#444", font: { size: 12 } },
      },
    },
    animation: {
      duration: 1100,
      easing: "easeOutQuart",
    },
  };

  return <Line data={data} options={options} />;
}
