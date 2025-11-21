import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function SentimentGauge() {
  // Demo sentiment score (0–5 scale)
  const score = 4.85;
  const maxScore = 5;

  const percentage = (score / maxScore) * 100;

  const data = {
    labels: [],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [
          // Gradient: red → yellow → green (approximation)
          percentage < 50
            ? "#FF6B6B" // red-ish
            : percentage < 75
            ? "#FFD93D" // yellow-ish
            : "#00E676", // green
          "rgba(0,0,0,0.08)", // background remainder
        ],
        borderWidth: 0,
        cutout: "75%", // makes gauge shape
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
    rotation: -90 * (Math.PI / 180), // start at the top
    circumference: 180 * (Math.PI / 180), // half circle gauge
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
