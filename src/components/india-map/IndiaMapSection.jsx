// src/components/india-map/IndiaMapSection.jsx
import React from "react";
import indiaMap from "../../assets/IndiaMap.png"; // correct relative import
import SentimentGauge from "../dashboard/SentimentGauge"; // adjust paths if different
import ReviewsPreview from "../dashboard/ReviewsPreview";
import "./india-map.css";

export default function IndiaMapSection() {
  return (
    <section className="india-map-section">
      <div className="india-map-left glass-card">
        <h3 className="section-title">India BMW Buyers</h3>

        <div className="india-map-image-wrapper">
          {/* Use imported image reference */}
          <img src={indiaMap} alt="India Sales Map" className="india-map-image" />
        </div>
      </div>

      <aside className="india-map-right">
        <div className="glass-card small-card">
          <SentimentGauge score={4.85} />
        </div>

        <div className="glass-card small-card">
          <ReviewsPreview />
        </div>
      </aside>
    </section>
  );
}
