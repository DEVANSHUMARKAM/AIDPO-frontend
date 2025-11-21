// src/components/dashboard/TopCountries.jsx
import React from "react";

export default function TopCountries({ data = [] }) {
  // sort descending
  const sorted = [...data].sort((a, b) => b.value - a.value);
  const max = sorted[0] ? sorted[0].value : 1;

  return (
    <div>
      <h4 style={{ margin: 0, color: "#333", fontWeight: 600 }}>Top Countries</h4>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }}>
        {sorted.map((c) => (
          <div key={c.iso} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ minWidth: 28, textAlign: "left" }}>
              <strong style={{ fontSize: 14 }}>{c.name}</strong>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 8, background: "rgba(0,0,0,0.06)", borderRadius: 6 }}>
                <div
                  style={{
                    width: `${Math.round((c.value / max) * 100)}%`,
                    height: 8,
                    borderRadius: 6,
                    background: "linear-gradient(90deg, rgba(0,229,212,1), rgba(0,200,200,0.8))"
                  }}
                />
              </div>
            </div>
            <div style={{ width: 70, textAlign: "right", color: "#444", fontWeight: 600 }}>
              {c.value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
