// src/components/dashboard/GlobalMapSection.jsx
import React from "react";
import MapChart from "./MapChart";
import TopCountries from "./TopCountries";
import SentimentGauge from "./SentimentGauge";
import ReviewsPreview from "./ReviewsPreview";
import "./dashboard.css";

export default function GlobalMapSection() {
  // demo dataset (buyers by country)
  const countryData = [
    { iso: "USA", name: "United States", value: 12000 },
    { iso: "DEU", name: "Germany", value: 9500 },
    { iso: "GBR", name: "United Kingdom", value: 7200 },
    { iso: "CAN", name: "Canada", value: 6100 },
    { iso: "IND", name: "India", value: 5800 },
    { iso: "AUS", name: "Australia", value: 4300 },
    { iso: "FRA", name: "France", value: 3900 },
    { iso: "JPN", name: "Japan", value: 3500 }
  ];

  return (
    <section className="global-map-section">
      <div className="map-left glass-card">
        <h3 className="section-title">Global BMW Buyers</h3>
        <div className="map-wrapper">
          <MapChart data={countryData} />
        </div>
      </div>

      <aside className="map-right">
        <div className="glass-card small-card">
          <TopCountries data={countryData} />
        </div>

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
