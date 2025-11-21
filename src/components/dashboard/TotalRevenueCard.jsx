import React, { useEffect, useState } from "react";

export default function TotalRevenueCard() {
  // Final BMW demo revenue value (₹66.8 Billion)
  const targetValue = 66816000000; 

  const [revenue, setRevenue] = useState(0);

  // Smooth animated counter
  useEffect(() => {
    let start = 0;
    const duration = 1100; // ms
    const step = Math.ceil(targetValue / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(interval);
      }
      setRevenue(start);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Format large number as ₹66.8B
  function formatRevenue(num) {
    if (num >= 1_000_000_000) {
      return "₹" + (num / 1_000_000_000).toFixed(1) + "B";
    }
    if (num >= 1_000_000) {
      return "₹" + (num / 1_000_000).toFixed(1) + "M";
    }
    return "₹" + num.toLocaleString();
  }

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
        Total Revenue
      </h3>

      <div
        style={{
          marginTop: "12px",
          fontSize: "32px",
          fontWeight: 700,
          color: "#0A0A0A",
          transition: "0.2s",
        }}
      >
        {formatRevenue(revenue)}
      </div>

      <div
        style={{
          marginTop: "8px",
          fontSize: "14px",
          fontWeight: 500,
          color: "#00C8B5",
        }}
      >
        ↑ 32% this year
      </div>
    </div>
  );
}
