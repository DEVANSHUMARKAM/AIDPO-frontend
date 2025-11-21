// src/components/dashboard/SentimentGauge.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function SentimentGauge() {
  const score = 4.85;
  const maxScore = 5;
  const percentage = (score / maxScore) * 100;

  const data = {
    labels: [],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [
          percentage < 50
            ? "#FF6B6B" 
            : percentage < 75
            ? "#FFD93D"
            : "#00E676",
          "rgba(0,0,0,0.08)",
        ],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    rotation: -Math.PI / 2,
    circumference: Math.PI, // half circle
  };

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", height: "150px" }}>
        <Doughnut data={data} options={options} />
      </div>

      <h2 style={{ marginTop: "-10px", fontSize: "28px", fontWeight: "600" }}>
        {score.toFixed(2)}
      </h2>

      <p
        style={{
          color: percentage >= 75 ? "#00E676" : "#FFD93D",
          fontSize: "14px",
          marginTop: "-4px",
        }}
      >
        {percentage >= 75
          ? "Positive"
          : percentage >= 50
          ? "Neutral"
          : "Negative"}
      </p>
    </div>
  );
}
