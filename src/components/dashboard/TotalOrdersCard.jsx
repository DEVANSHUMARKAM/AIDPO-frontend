import React, { useEffect, useState } from "react";

export default function TotalOrdersCard() {
  // Final BMW demo value
  const targetValue = 128420;

  const [count, setCount] = useState(0);

  // Smooth number animation
  useEffect(() => {
    let start = 0;
    const duration = 900; // ms
    const step = Math.ceil(targetValue / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3
        style={{
          margin: 0,
          fontSize: "18px",
          color: "#4A4A4A",
          fontWeight: 500,
        }}
      >
        Total Orders
      </h3>

      <div
        style={{
          marginTop: "12px",
          fontSize: "36px",
          fontWeight: 700,
          color: "#0A0A0A",
          transition: "0.2s",
        }}
      >
        {count.toLocaleString()}
      </div>

      <div
        style={{
          marginTop: "8px",
          fontSize: "14px",
          fontWeight: 500,
          color: "#00C8B5",
        }}
      >
        ↑ 25% this year
      </div>
    </div>
  );
}
