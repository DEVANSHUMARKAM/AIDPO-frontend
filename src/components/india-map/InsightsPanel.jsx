// src/components/india-map/InsightsPanel.jsx
import React from "react";
import SentimentGauge from "../dashboard/SentimentGauge";
import ReviewsPreview from "../dashboard/ReviewsPreview";

export default function InsightsPanel() {
  return (
    <aside className="insights-panel">
      <div className="glass-card">
        <SentimentGauge score={4.85} />
      </div>

      <div className="glass-card">
        <ReviewsPreview />
      </div>
    </aside>
  );
}
