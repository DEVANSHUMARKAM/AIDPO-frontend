import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MonthlySalesChart() {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const salesData = [
    8200, 7600, 9100, 8700, 9400, 10200,
    11300, 10800, 9800, 10600, 11800, 13200
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Sales",
        data: salesData,
        backgroundColor: "#00E5D4",      // teal bars
        borderRadius: 0,                // minimal sharp bars
        borderWidth: 0,
        hoverBackgroundColor: "#00F7E4", // brighter teal on hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // we don't show legend for clean look
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
      duration: 900,
      easing: "easeOutQuart",
    },
  };

  return <Bar data={data} options={options} />;
}
